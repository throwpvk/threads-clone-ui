import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import {
  DEFAULT_MOTION_CONFIG,
  MOTION_DIRECTIONS,
} from "@/constants/motionConfig";
import { ClockIcon } from "lucide-react";
import TimeInput from "@/components/common/TimeInput";

export const ScheduleMenu = ({
  onDone,
  onClose,
  initialDate,
  initialTime = new Date().toTimeString().slice(0, 5),
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());
  const [time, setTime] = useState(initialTime);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleDone = () => {
    onDone?.({
      date: selectedDate,
      time: `${time}:00`,
    });
  };

  const isTimeInvalid = () => {
    const now = new Date();
    const isToday = selectedDate.toDateString() === now.toDateString();

    if (!isToday || !time) return false;

    const [selectedHour, selectedMinute] = time.split(":").map(Number);
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    return (
      selectedHour < currentHour ||
      (selectedHour === currentHour && selectedMinute < currentMinute)
    );
  };

  return (
    <MotionWrapper
      motionKey="schedule-menu"
      direction={MOTION_DIRECTIONS.RIGHT_TO_LEFT}
      duration={DEFAULT_MOTION_CONFIG.duration}
      ease={DEFAULT_MOTION_CONFIG.ease}
      mode="wait"
      initial={true}
    >
      <Card
        ref={menuRef}
        className="drop-shadow-sm border-border bg-card flex flex-col p-3 rounded-2xl"
      >
        <div className="flex items-center justify-center p-0">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md bg-card p-0"
            disabled={(date) =>
              date < new Date(new Date().setHours(0, 0, 0, 0))
            }
          />
        </div>

        <Separator className="my-2" />

        <div className="flex justify-center items-center gap-4 p-0">
          <div
            className={`flex-3 flex items-center justify-between gap-2 px-3 py-2 border rounded-xl bg-background h-9 ${
              isTimeInvalid() ? "border-red-500" : "border-border"
            }`}
          >
            <ClockIcon
              className={`w-5 h-5 shrink-0 ${
                isTimeInvalid() ? "text-red-500" : "text-muted-foreground"
              }`}
            />
            <TimeInput value={time} onChange={setTime} />
          </div>
          <div className="flex-2 flex items-center justify-end">
            <Button
              onClick={handleDone}
              className="bg-foreground text-background hover:bg-foreground/90 rounded-xl font-semibold"
            >
              Done
            </Button>
          </div>
        </div>
      </Card>
    </MotionWrapper>
  );
};

ScheduleMenu.propTypes = {
  onDone: PropTypes.func,
  onClose: PropTypes.func,
  initialDate: PropTypes.instanceOf(Date),
  initialTime: PropTypes.string,
};
