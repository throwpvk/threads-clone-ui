// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  DEFAULT_MOTION_CONFIG,
  MOTION_DIRECTIONS,
} from "@/constants/motionConfig";

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
