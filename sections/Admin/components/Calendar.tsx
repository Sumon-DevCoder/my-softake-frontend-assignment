"use client";

import { useState } from "react";

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  ); // Current month
  const [selectedDate, setSelectedDate] = useState(today.getDate()); // Today's date

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getPreviousMonthDays = (date: Date) => {
    const firstDay = getFirstDayOfMonth(date);
    const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
    const daysInPrevMonth = prevMonth.getDate();
    const days: number[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(daysInPrevMonth - i);
    }
    return days;
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const prevMonthDays = getPreviousMonthDays(currentDate);

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + (direction === "next" ? 1 : -1),
      1
    );
    setCurrentDate(newDate);

    // If navigating to current month, select today's date, otherwise select first day
    const isCurrentMonth =
      newDate.getMonth() === today.getMonth() &&
      newDate.getFullYear() === today.getFullYear();
    setSelectedDate(isCurrentMonth ? today.getDate() : 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigateMonth("prev")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.262481"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.55597 1.44801L2.79823 5.88467L7.23489 10.6424L5.78689 11.9927L-6.01857e-05 5.78695L6.20568 3.03326e-07L7.55597 1.44801Z"
                fill="#8C96AB"
              />
            </svg>
          </button>
          <button
            onClick={() => navigateMonth("next")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.251404"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.000182521 1.44801L4.75792 5.88467L0.321258 10.6424L1.76926 11.9927L7.55621 5.78695L1.35047 3.03326e-07L0.000182521 1.44801Z"
                fill="#8C96AB"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-2 mb-3">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="text-center text-xs sm:text-sm font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Previous month days */}
        {prevMonthDays.map((day) => (
          <div
            key={`prev-${day}`}
            className="aspect-square flex items-center justify-center text-xs sm:text-sm text-gray-300"
          >
            {day}
          </div>
        ))}
        {/* Current month days */}
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDate(day)}
            className={`aspect-square flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors ${
              selectedDate === day
                ? "bg-blue-300 text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
