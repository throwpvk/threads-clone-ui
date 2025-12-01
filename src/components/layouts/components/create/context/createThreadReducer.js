export const ACTIONS = {
  SET_VIEW: "SET_VIEW",
  SET_THREADS: "SET_THREADS",
  ADD_THREAD: "ADD_THREAD",
  REMOVE_THREAD: "REMOVE_THREAD",
  UPDATE_THREAD_CONTENT: "UPDATE_THREAD_CONTENT",
  TOGGLE_THREAD_AI_LABEL: "TOGGLE_THREAD_AI_LABEL",
  SET_ACTIVE_THREAD: "SET_ACTIVE_THREAD",
  SET_SCHEDULE_MENU: "SET_SCHEDULE_MENU",
  SET_SCHEDULE_DATA: "SET_SCHEDULE_DATA",
  SET_CANCEL_DIALOG: "SET_CANCEL_DIALOG",
  SET_SAVING_DRAFT: "SET_SAVING_DRAFT",
  SET_DRAFTS_LIST: "SET_DRAFTS_LIST",
  SET_EDITING_DRAFT: "SET_EDITING_DRAFT",
  RESET_FORM: "RESET_FORM",
  LOAD_DRAFT: "LOAD_DRAFT",
};

export const initialState = {
  currentView: "create",
  threads: [{ id: 0, isAIInfo: false, content: "" }],
  activeThreadId: 0,
  nextThreadId: 1,
  showScheduleMenu: false,
  scheduleData: null,
  showCancelDialog: false,
  savingDraft: false,
  draftsList: [],
  editingDraftId: null,
};

export function createThreadReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_VIEW:
      return { ...state, currentView: action.payload };

    case ACTIONS.SET_THREADS:
      return { ...state, threads: action.payload };

    case ACTIONS.ADD_THREAD: {
      const newThread = {
        id: state.nextThreadId,
        isAIInfo: false,
        content: "",
      };
      return {
        ...state,
        threads: [...state.threads, newThread],
        activeThreadId: newThread.id,
        nextThreadId: state.nextThreadId + 1,
      };
    }

    case ACTIONS.REMOVE_THREAD: {
      const threadId = action.payload;
      if (state.threads.length <= 1) return state;

      const newThreads = state.threads.filter((t) => t.id !== threadId);
      const newActiveId =
        threadId === state.activeThreadId
          ? newThreads[0].id
          : state.activeThreadId;

      return {
        ...state,
        threads: newThreads,
        activeThreadId: newActiveId,
      };
    }

    case ACTIONS.UPDATE_THREAD_CONTENT: {
      const { threadId, content } = action.payload;
      return {
        ...state,
        threads: state.threads.map((t) =>
          t.id === threadId ? { ...t, content } : t
        ),
      };
    }

    case ACTIONS.TOGGLE_THREAD_AI_LABEL: {
      const threadId = action.payload;
      return {
        ...state,
        threads: state.threads.map((t) =>
          t.id === threadId ? { ...t, isAIInfo: !t.isAIInfo } : t
        ),
      };
    }

    case ACTIONS.SET_ACTIVE_THREAD:
      return { ...state, activeThreadId: action.payload };

    case ACTIONS.SET_SCHEDULE_MENU:
      return { ...state, showScheduleMenu: action.payload };

    case ACTIONS.SET_SCHEDULE_DATA:
      return { ...state, scheduleData: action.payload };

    case ACTIONS.SET_CANCEL_DIALOG:
      return { ...state, showCancelDialog: action.payload };

    case ACTIONS.SET_SAVING_DRAFT:
      return { ...state, savingDraft: action.payload };

    case ACTIONS.SET_DRAFTS_LIST:
      return { ...state, draftsList: action.payload };

    case ACTIONS.SET_EDITING_DRAFT:
      return { ...state, editingDraftId: action.payload };

    case ACTIONS.RESET_FORM:
      return {
        ...state,
        threads: [{ id: 0, isAIInfo: false, content: "" }],
        activeThreadId: 0,
        nextThreadId: 1,
        scheduleData: null,
        editingDraftId: null,
      };

    case ACTIONS.LOAD_DRAFT: {
      const draft = action.payload;
      const threads = draft.threads || [
        { id: 0, isAIInfo: false, content: "" },
      ];
      const maxId = Math.max(...threads.map((t) => t.id), 0);

      return {
        ...state,
        threads: threads,
        activeThreadId: threads[0]?.id || 0,
        nextThreadId: maxId + 1,
        scheduleData: draft.scheduleData || null,
        editingDraftId: draft.id || null,
        currentView: "create",
      };
    }

    default:
      return state;
  }
}
