import PropTypes from "prop-types";
import { useReducer, useCallback, useMemo } from "react";
import { CreateThreadContext } from "./context";
import {
  createThreadReducer,
  initialState,
  ACTIONS,
} from "./createThreadReducer";
import {
  useDraftSync,
  saveDraftsToStorage,
  sortDrafts,
} from "../hooks/useDraftSync";
import { useScrollLock } from "../hooks/useScrollLock";
import { useEscapeKey } from "../hooks/useEscapeKey";

export const CreateThreadProvider = ({
  children,
  isModal,
  isMobile,
  onClose,
}) => {
  const [state, dispatch] = useReducer(createThreadReducer, initialState);

  const setDraftsList = useCallback((drafts) => {
    dispatch({ type: ACTIONS.SET_DRAFTS_LIST, payload: drafts });
  }, []);

  useDraftSync(setDraftsList);
  useScrollLock(isModal || isMobile);

  const handleAttemptClose = useCallback(() => {
    const first = state.threads?.[0];
    const firstEmpty = !first?.content || first.content.trim().length === 0;

    if (firstEmpty) {
      dispatch({ type: ACTIONS.RESET_FORM });
      onClose();
    } else {
      dispatch({ type: ACTIONS.SET_CANCEL_DIALOG, payload: true });
    }
  }, [state.threads, onClose]);

  useEscapeKey(state.currentView === "create", handleAttemptClose);

  const actions = useMemo(
    () => ({
      setView: (view) => dispatch({ type: ACTIONS.SET_VIEW, payload: view }),

      addThread: () => dispatch({ type: ACTIONS.ADD_THREAD }),

      removeThread: (threadId) =>
        dispatch({ type: ACTIONS.REMOVE_THREAD, payload: threadId }),

      updateThreadContent: (threadId, content) =>
        dispatch({
          type: ACTIONS.UPDATE_THREAD_CONTENT,
          payload: { threadId, content },
        }),

      toggleAILabel: (threadId) =>
        dispatch({ type: ACTIONS.TOGGLE_THREAD_AI_LABEL, payload: threadId }),

      setActiveThread: (threadId) =>
        dispatch({ type: ACTIONS.SET_ACTIVE_THREAD, payload: threadId }),

      setScheduleMenu: (show) =>
        dispatch({ type: ACTIONS.SET_SCHEDULE_MENU, payload: show }),

      setScheduleData: (data) =>
        dispatch({ type: ACTIONS.SET_SCHEDULE_DATA, payload: data }),

      setCancelDialog: (show) =>
        dispatch({ type: ACTIONS.SET_CANCEL_DIALOG, payload: show }),

      setSavingDraft: (saving) =>
        dispatch({ type: ACTIONS.SET_SAVING_DRAFT, payload: saving }),

      resetForm: () => dispatch({ type: ACTIONS.RESET_FORM }),

      loadDraft: (draft) =>
        dispatch({ type: ACTIONS.LOAD_DRAFT, payload: draft }),

      handleClose: () => {
        dispatch({ type: ACTIONS.RESET_FORM });
        onClose();
      },

      attemptClose: handleAttemptClose,

      handleScheduleDone: ({ date, time }) => {
        const [hours, minutes] = time.split(":").slice(0, 2).map(Number);
        const scheduledDateTime = new Date(date);
        scheduledDateTime.setHours(hours, minutes, 0, 0);

        dispatch({
          type: ACTIONS.SET_SCHEDULE_DATA,
          payload: {
            dateTime: scheduledDateTime.toISOString(),
            date,
            time,
          },
        });
        dispatch({ type: ACTIONS.SET_SCHEDULE_MENU, payload: false });
      },

      handleScheduleClose: () => {
        dispatch({ type: ACTIONS.SET_SCHEDULE_MENU, payload: false });
      },

      handleRemoveSchedule: () => {
        dispatch({ type: ACTIONS.SET_SCHEDULE_DATA, payload: null });
      },

      handleClickSchedule: () => {
        dispatch({ type: ACTIONS.SET_SCHEDULE_MENU, payload: true });
      },

      handleDraftClick: () => {
        const first = state.threads?.[0];
        const firstEmpty = !first?.content || first.content.trim().length === 0;

        if (firstEmpty) {
          dispatch({ type: ACTIONS.SET_VIEW, payload: "draft" });
        } else {
          dispatch({ type: ACTIONS.SET_CANCEL_DIALOG, payload: true });
        }
      },

      handleBackFromDraft: () => {
        dispatch({ type: ACTIONS.SET_VIEW, payload: "create" });
      },

      handleSelectDraft: (draft) => {
        dispatch({ type: ACTIONS.LOAD_DRAFT, payload: draft });
      },

      handleDeleteDraft: (draftId) => {
        const next = state.draftsList.filter((d) => d.id !== draftId);
        dispatch({ type: ACTIONS.SET_DRAFTS_LIST, payload: next });
        saveDraftsToStorage(next);

        if (state.editingDraftId === draftId) {
          dispatch({ type: ACTIONS.RESET_FORM });
        }
      },

      handleConfirmDiscard: () => {
        dispatch({ type: ACTIONS.SET_CANCEL_DIALOG, payload: false });
        dispatch({ type: ACTIONS.SET_EDITING_DRAFT, payload: null });
        dispatch({ type: ACTIONS.RESET_FORM });
        onClose();
      },

      handleConfirmSave: async () => {
        dispatch({ type: ACTIONS.SET_SAVING_DRAFT, payload: true });

        try {
          const first = state.threads?.[0] || { content: "" };

          if (state.editingDraftId) {
            const nextUnsorted = state.draftsList.map((d) =>
              d.id === state.editingDraftId
                ? {
                    ...d,
                    content: first.content || "",
                    scheduleData: state.scheduleData || null,
                    savedAt: new Date().toISOString(),
                  }
                : d
            );
            const next = sortDrafts(nextUnsorted);
            dispatch({ type: ACTIONS.SET_DRAFTS_LIST, payload: next });
            saveDraftsToStorage(next);
          } else {
            const newDraft = {
              id: Date.now(),
              content: first.content || "",
              scheduleData: state.scheduleData || null,
              savedAt: new Date().toISOString(),
            };
            const next = sortDrafts([newDraft, ...state.draftsList]);
            dispatch({ type: ACTIONS.SET_DRAFTS_LIST, payload: next });
            saveDraftsToStorage(next);
          }
        } catch (err) {
          console.warn(err);
        }

        dispatch({ type: ACTIONS.SET_SAVING_DRAFT, payload: false });
        dispatch({ type: ACTIONS.SET_CANCEL_DIALOG, payload: false });
        dispatch({ type: ACTIONS.SET_EDITING_DRAFT, payload: null });
        dispatch({ type: ACTIONS.RESET_FORM });
        onClose();
      },

      handleConfirmCancel: () => {
        dispatch({ type: ACTIONS.SET_CANCEL_DIALOG, payload: false });
      },
    }),
    [
      state.threads,
      state.draftsList,
      state.scheduleData,
      state.editingDraftId,
      onClose,
      handleAttemptClose,
    ]
  );

  const value = useMemo(
    () => ({
      state,
      actions,
      isModal,
      isMobile,
    }),
    [state, actions, isModal, isMobile]
  );

  return (
    <CreateThreadContext.Provider value={value}>
      {children}
    </CreateThreadContext.Provider>
  );
};

CreateThreadProvider.propTypes = {
  children: PropTypes.node.isRequired,
  isModal: PropTypes.bool,
  isMobile: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
