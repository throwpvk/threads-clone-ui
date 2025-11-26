import PropTypes from "prop-types";
import { Clock } from "lucide-react";
import XIcon from "@/components/icons/XIcon";

function pad(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

function getWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // ISO week date weeks start on Monday
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}

function formatTime(date) {
  // 12-hour format like 4:00 PM
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours}:${pad(minutes)} ${ampm}`;
}

function tzString(date) {
  const offsetMin = -date.getTimezoneOffset(); // minutes ahead of UTC
  const sign = offsetMin >= 0 ? "+" : "-";
  const abs = Math.abs(offsetMin);
  const hours = Math.floor(abs / 60);
  const minutes = abs % 60;
  return `GMT${sign}${hours}${minutes ? `:${pad(minutes)}` : ""}`;
}

export const CreateThreadSchedule = ({ dateTime, onClose, onClick }) => {
  const date = dateTime ? new Date(dateTime) : new Date();
  const today = new Date();

  const sameDay =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const isTomorrow =
    date.getFullYear() === tomorrow.getFullYear() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getDate() === tomorrow.getDate();

  const sameWeek =
    getWeekNumber(date) === getWeekNumber(today) &&
    date.getFullYear() === today.getFullYear();

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let content = "";
  const timeStr = formatTime(date);
  const tz = tzString(date);

  if (sameDay) {
    content = `Posting today at ${timeStr} ${tz}`;
  } else if (isTomorrow) {
    content = `Posting tomorrow at ${timeStr} ${tz}`;
  } else if (sameWeek) {
    const weekday = weekdays[date.getDay()];
    content = `Posting ${weekday} at ${timeStr} ${tz}`;
  } else {
    const wk = weekdaysShort[date.getDay()];
    const mon = monthsShort[date.getMonth()];
    const day = date.getDate();
    content = `Posting on ${wk}, ${mon} ${day} at ${timeStr} ${tz}`;
  }

  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick(date);
    } else {
      // default logging
      console.log("CreateThreadSchedule clicked:", date.toString());
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  return (
    <div
      className="bg-muted rounded-xl mt-2 mx-6 pl-3 pr-2 py-2.5 flex items-center justify-between gap-3 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        <div className="text-muted-foreground">
          <Clock className="w-4 h-4" />
        </div>
        <div className="text-sm text-muted-foreground">{content}</div>
      </div>

      <button
        type="button"
        onClick={handleClose}
        className="p-1 rounded-full text-muted-foreground hover:bg-transparent cursor-pointer"
        aria-label="Close schedule"
      >
        <XIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

CreateThreadSchedule.propTypes = {
  dateTime: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};
