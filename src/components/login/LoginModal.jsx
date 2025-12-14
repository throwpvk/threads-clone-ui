import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import {
  DEFAULT_MOTION_CONFIG,
  MOTION_DIRECTIONS,
} from "@/constants/motionConfig";
import LoginCard from "./LoginCard";
import { useScrollLock } from "@/hooks/useScrollLock";

export default function LoginModal({ isOpen, onClose, username = "pvkhai" }) {
  useScrollLock(isOpen);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose?.();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={handleOverlayClick}
    >
      <MotionWrapper
        motionKey="login-modal"
        direction={MOTION_DIRECTIONS.SCALE_UP}
        duration={DEFAULT_MOTION_CONFIG.duration}
        ease={DEFAULT_MOTION_CONFIG.ease}
        mode="wait"
        initial={true}
        onClick={handleContentClick}
      >
        <div className="w-[480px] max-w-[90vw]">
          <LoginCard username={username} onClose={onClose} />
        </div>
      </MotionWrapper>
    </div>,
    document.body
  );
}

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  username: PropTypes.string,
};
