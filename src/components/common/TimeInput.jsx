import { useState } from "react";

const MAX_HOUR = 23;
const MAX_MINUTE = 59;
const DIGIT_REGEX = /\D/g;
const DEFAULT_TIME = "12:00";

const TimeInput = ({ value = DEFAULT_TIME, onChange, className = "" }) => {
  const [hours, minutes] = value.split(":");
  const [hour, setHour] = useState(hours || "12");
  const [minute, setMinute] = useState(minutes || "00");

  const updateTime = (newHour, newMinute) => {
    onChange?.(`${newHour.padStart(2, "0")}:${newMinute.padStart(2, "0")}`);
  };

  const processTimeInput = (inputValue, maxValue) => {
    const digits = inputValue.replace(DIGIT_REGEX, "");

    if (!digits) return "";

    // Keep only last 2 digits (shift-left behavior)
    let sanitized = digits.length > 2 ? digits.slice(-2) : digits;

    // If exceeds max, keep only last digit
    if (parseInt(sanitized, 10) > maxValue) {
      sanitized = sanitized.slice(-1);
    }

    return sanitized;
  };

  const handleHourChange = (e) => {
    const processed = processTimeInput(e.target.value, MAX_HOUR);
    setHour(processed);
    updateTime(processed, minute);
  };

  const handleMinuteChange = (e) => {
    const processed = processTimeInput(e.target.value, MAX_MINUTE);
    setMinute(processed);
    updateTime(hour, processed);
  };

  const handleHourBlur = () => {
    if (!hour || hour === "0") {
      setHour("00");
      updateTime("00", minute);
    }
  };

  const handleMinuteBlur = () => {
    if (!minute || minute === "0") {
      setMinute("00");
      updateTime(hour, "00");
    }
  };

  return (
    <div className={`flex items-center justify-end gap-0 ${className}`}>
      <input
        type="text"
        value={hour}
        onChange={handleHourChange}
        onBlur={handleHourBlur}
        placeholder="00"
        className="w-10 text-center text-base font-medium bg-transparent border-0 outline-none selection:bg-gray-500 selection:text-white"
      />
      <span className="text-lg font-semibold translate-y-[-0.1em]">:</span>
      <input
        type="text"
        value={minute}
        onChange={handleMinuteChange}
        onBlur={handleMinuteBlur}
        placeholder="00"
        className="w-10 text-center text-base font-medium bg-transparent border-0 outline-none selection:bg-gray-500 selection:text-white"
      />
    </div>
  );
};

export default TimeInput;
