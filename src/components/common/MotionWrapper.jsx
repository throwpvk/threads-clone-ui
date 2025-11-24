// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  DEFAULT_MOTION_CONFIG,
  MOTION_DIRECTIONS,
} from "@/constants/motionConfig";

/**
 * MotionWrapper Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.motionKey - Unique key cho AnimatePresence (trigger re-render)
 * @param {Object} props.direction - Motion direction từ MOTION_DIRECTIONS hoặc custom variants
 * @param {number} props.duration - Animation duration (default: 0.15s)
 * @param {string|Array} props.ease - Easing function (default: "easeInOut")
 * @param {string} props.mode - AnimatePresence mode: "wait" | "sync" | "popLayout" (default: "wait")
 * @param {boolean} props.initial - Enable initial animation (default: false)
 * @param {Object} props.style - Additional inline styles cho content
 * @param {string} props.className - CSS classes cho content
 * @param {Object} props.wrapperAnimate - Motion animate props cho wrapper (e.g., {width: 300})
 * @param {Object} props.wrapperTransition - Transition config cho wrapper animation
 * @param {Object} props.wrapperStyle - Inline styles cho wrapper
 * @param {string} props.wrapperClassName - CSS classes cho wrapper
 *
 * @example
 * // Basic usage
 * <MotionWrapper motionKey={activeTab} direction={MOTION_DIRECTIONS.FADE}>
 *   <TabContent />
 * </MotionWrapper>
 *
 * @example
 * // Menu navigation với wrapper animation
 * <MotionWrapper
 *   motionKey={currentMenu}
 *   direction={isForward ? MOTION_PRESETS.MENU_FORWARD : MOTION_PRESETS.MENU_BACKWARD}
 *   duration={0.2}
 *   wrapperAnimate={{ width: currentMenu === "appearance" ? 314 : 240 }}
 *   wrapperTransition={{ duration: 0.1, ease: "easeInOut" }}
 * >
 *   <MenuItems />
 * </MotionWrapper>
 */
export const MotionWrapper = ({
  children,
  motionKey,
  direction = MOTION_DIRECTIONS.FADE,
  duration = DEFAULT_MOTION_CONFIG.duration,
  ease = DEFAULT_MOTION_CONFIG.ease,
  mode = "wait",
  initial = false,
  style,
  className,
  wrapperAnimate,
  wrapperTransition,
  wrapperStyle,
  wrapperClassName,
  ...props
}) => {
  const content = (
    <AnimatePresence mode={mode} initial={initial}>
      <motion.div
        key={motionKey}
        variants={direction}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration,
          ease,
        }}
        style={style}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );

  // Nếu có wrapper animation, bọc thêm một layer motion.div
  if (wrapperAnimate) {
    return (
      <motion.div
        animate={wrapperAnimate}
        transition={wrapperTransition}
        style={wrapperStyle}
        className={wrapperClassName}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};
