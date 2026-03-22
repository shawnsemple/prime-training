"use client";

import Link from "next/link";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getTodayInfo() {
  const todayIndex = new Date().getDay();
  const todayName = dayNames[todayIndex];

  if (todayName === "Saturday") {
    return {
      todayName,
      planSummary: "Compete and recover.",
      throwingText: "Open full throwing week",
      movementText: "Open full movement week",
      liftText: "Optional recovery",
    };
  }

  if (todayName === "Sunday") {
    return {
      todayName,
      planSummary: "Recovery day. Full off unless you need Saturday recovery work.",
      throwingText: "Open full throwing week",
      movementText: "Open full movement week",
      liftText: "Off day",
    };
  }

  return {
    todayName,
    planSummary: `Your ${todayName} training is ready below.`,
    throwingText: "Open Monday–Saturday throwing days",
    movementText: "Open Monday–Saturday movement days",
    liftText: "Open weekly lifting program",
  };
}

export default function Home() {
  const { todayName, planSummary, throwingText, movementText, liftText } =
    getTodayInfo();

  return (
    <main className="min-h-screen bg-white text-black px-4 py-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <h1
            className="flex-1 min-w-0 text-[30px] font-extrabold tracking-[0.12em] text-blue-900 leading-none"
            style={{
              WebkitTextStroke: "0.5px #dc2626",
            }}
          >
            PRIME TRAINING
          </h1>

          <Link href="/login">
            <button className="shrink-0 border-2 border-blue-900 text-blue-900 px-3 py-2 rounded-xl hover:bg-blue-900 hover:text-white transition shadow text-sm">
              Login
            </button>
          </Link>
        </div>

        {/* Day */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-blue-900">
            {todayName.toUpperCase()}
          </h2>
          <p className="text-gray-600 mt-1">{planSummary}</p>
        </div>

        {/* Movement */}
        <Link href="/movement">
          <button className="w-full bg-blue-100 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-blue-900 shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">
              Today’s Movement / Band Work
            </h2>
            <p className="text-red-600">{movementText}</p>
          </button>
        </Link>

        {/* Throwing */}
        <Link href="/throwing">
          <button className="w-full bg-blue-900 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Today’s Throwing</h2>
            <p className="text-blue-200">{throwingText}</p>
          </button>
        </Link>

        {/* Lift */}
        <Link href="/lift">
          <button className="w-full bg-red-600 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Today’s Lift</h2>
            <p className="text-red-100">{liftText}</p>
          </button>
        </Link>

        {/* Arm Care */}
        <Link href="/arm-care">
          <button className="w-full bg-gray-900 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Arm Care</h2>
            <p className="text-gray-300">
              Complete any 5 recovery exercises
            </p>
          </button>
        </Link>

        {/* Library */}
        <Link href="/library">
          <button className="w-full bg-white border-2 border-blue-900 hover:bg-gray-100 p-5 rounded-2xl text-left text-blue-900 shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Workout Library</h2>
            <p className="text-red-600">
              All drills, lifts, throwing, and long toss
            </p>
          </button>
        </Link>
      </div>
    </main>
  );
}