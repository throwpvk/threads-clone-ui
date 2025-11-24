export const MOTION_DIRECTIONS = {
  // Horizontal movements
  LEFT_TO_RIGHT: {
    initial: { opacity: 0, x: -40, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 40, y: 0 },
  },
  RIGHT_TO_LEFT: {
    initial: { opacity: 0, x: 40, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -40, y: 0 },
  },

  // Vertical movements
  TOP_TO_BOTTOM: {
    initial: { opacity: 0, x: 0, y: -40 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 40 },
  },
  BOTTOM_TO_TOP: {
    initial: { opacity: 0, x: 0, y: 40 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -40 },
  },

  // Diagonal movements (corner to corner)
  TOP_LEFT_TO_BOTTOM_RIGHT: {
    initial: { opacity: 0, x: -40, y: -40 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 40, y: 40 },
  },
  BOTTOM_RIGHT_TO_TOP_LEFT: {
    initial: { opacity: 0, x: 40, y: 40 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -40, y: -40 },
  },
  TOP_RIGHT_TO_BOTTOM_LEFT: {
    initial: { opacity: 0, x: 40, y: -40 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -40, y: 40 },
  },
  BOTTOM_LEFT_TO_TOP_RIGHT: {
    initial: { opacity: 0, x: -40, y: 40 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 40, y: -40 },
  },

  // Fade only (no movement)
  FADE: {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  },

  // No animation
  NONE: {
    initial: { opacity: 1, x: 0, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: 0, y: 0 },
  },
};

export const DEFAULT_MOTION_CONFIG = {
  duration: 0.15,
  ease: "easeInOut",
};

export const MOTION_PRESETS = {
  MENU_FORWARD: MOTION_DIRECTIONS.BOTTOM_LEFT_TO_TOP_RIGHT,
  MENU_BACKWARD: MOTION_DIRECTIONS.TOP_RIGHT_TO_BOTTOM_LEFT,
  MODAL: MOTION_DIRECTIONS.FADE,
  SLIDE_IN_RIGHT: MOTION_DIRECTIONS.RIGHT_TO_LEFT,
  SLIDE_IN_LEFT: MOTION_DIRECTIONS.LEFT_TO_RIGHT,
};
