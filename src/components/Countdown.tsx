"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: string): TimeLeft | null {
  const difference = +new Date(target) - +new Date();
  if (difference <= 0) return null;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted || !timeLeft) {
    return (
      <div className="text-sm text-white/50">
        Event starts 14 January 2027
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-6">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center rounded-lg border border-white/10 bg-white/5 px-3 py-3 sm:px-5 sm:py-4 min-w-[70px]"
        >
          <span className="text-2xl font-bold tabular-nums text-white sm:text-3xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-xs uppercase tracking-wider text-white/50">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
