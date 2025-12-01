import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import {
  DEFAULT_MOTION_CONFIG,
  MOTION_DIRECTIONS,
} from "@/constants/motionConfig";
import clsx from "clsx";

// Reusable modal dialog wrapper (portal)
export const ConfirmDialog = ({
  open = false,
  onClose = () => {},
  title = "",
  children = null,
  footer = null,
  width = "w-[420px]",
  ariaLabel = "Dialog",
}) => {
  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80"
      role="presentation"
      onClick={onClose}
      aria-hidden={!open}
    >
      <MotionWrapper
        motionKey="confirm-dialog"
        direction={MOTION_DIRECTIONS.SCALE_UP}
        duration={DEFAULT_MOTION_CONFIG.duration}
        ease={DEFAULT_MOTION_CONFIG.ease}
        mode="wait"
        initial={true}
        onClick={(e) => e.stopPropagation()}
      >
        <Card
          className={clsx(
            "drop-shadow-sm border-border bg-card p-0 rounded-2xl",
            width
          )}
          role="dialog"
          aria-label={ariaLabel}
        >
          {title && (
            <CardHeader className="border-b border-0 px-0! py-5! flex items-center justify-center">
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
            </CardHeader>
          )}

          <CardContent className="p-0">{children}</CardContent>

          {footer && (
            <CardFooter className="border-t border-border p-4">
              {footer}
            </CardFooter>
          )}
        </Card>
      </MotionWrapper>
    </div>,
    document.body
  );
};

ConfirmDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  footer: PropTypes.node,
  width: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default ConfirmDialog;
