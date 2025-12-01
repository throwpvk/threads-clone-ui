import { useEffect } from "react";

const DRAFT_KEY = "threads_create_draft_v1";

const sortDrafts = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr.slice().sort((a, b) => {
    const ta = a?.savedAt ? Date.parse(a.savedAt) : 0;
    const tb = b?.savedAt ? Date.parse(b.savedAt) : 0;
    return tb - ta;
  });
};

export const loadDraftsFromStorage = () => {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) return parsed;

    if (parsed?.threads) {
      const first = parsed.threads[0] || { content: "" };
      return [
        {
          id: Date.now(),
          content: first.content || "",
          scheduleData: parsed.scheduleData || null,
          savedAt: parsed.savedAt || new Date().toISOString(),
        },
      ];
    }
    return [];
  } catch (e) {
    console.warn("Failed to load draft from storage", e);
    return [];
  }
};

export const saveDraftsToStorage = (drafts) => {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(drafts));
    window.dispatchEvent(
      new CustomEvent("threads:drafts:updated", { detail: drafts })
    );
  } catch (e) {
    console.warn("Failed to save drafts to storage", e);
  }
};

export const useDraftSync = (setDraftsList) => {
  useEffect(() => {
    const drafts = loadDraftsFromStorage();
    if (drafts.length > 0) {
      setTimeout(() => setDraftsList(sortDrafts(drafts)), 0);
    }
  }, [setDraftsList]);

  useEffect(() => {
    const onDraftsUpdated = (e) => {
      try {
        const payload = e?.detail || null;
        const next = payload
          ? sortDrafts(payload)
          : sortDrafts(loadDraftsFromStorage());
        setDraftsList(next);
      } catch {
        setDraftsList(sortDrafts(loadDraftsFromStorage()));
      }
    };

    const onStorage = (e) => {
      if (e?.key === DRAFT_KEY) {
        setDraftsList(sortDrafts(loadDraftsFromStorage()));
      }
    };

    window.addEventListener("threads:drafts:updated", onDraftsUpdated);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("threads:drafts:updated", onDraftsUpdated);
      window.removeEventListener("storage", onStorage);
    };
  }, [setDraftsList]);
};

export { sortDrafts };
