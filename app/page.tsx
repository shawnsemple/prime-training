"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type DayInfo = {
  todayName: string;
  planSummary: string;
  movementTitle: string;
  movementText: string;
  throwingTitle: string;
  throwingText: string;
  liftText: string;
};

function getTodayInfo(date: Date): DayInfo {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayName = dayNames[date.getDay()];

  if (todayName === "Monday") {
    return {
      todayName,
      planSummary: "Your Monday training is ready below.",
      movementTitle: "TODAY'S MOVEMENT",
      movementText: "Dynamic Warm-Up + Med Ball (2 LB Only)",
      throwingTitle: "TODAY'S THROWING / BAND WORK",
      throwingText: "Low Intent",
      liftText: "Upper Body Power",
    };
  }

  if (todayName === "Tuesday") {
    return {
      todayName,
      planSummary: "Your Tuesday training is ready below.",
      movementTitle: "TODAY'S MOVEMENT",
      movementText: "Dynamic Warm-Up + Water Bag (Circle)",
      throwingTitle: "TODAY'S THROWING / BAND WORK",
      throwingText: "Medium Intent",
      liftText: "Lower Body Power",
    };
  }

  if (todayName === "Wednesday") {
    return {
      todayName,
      planSummary: "Your Wednesday training is ready below.",
      movementTitle: "TODAY'S MOVEMENT",
      movementText: "Dynamic Warm-Up + Recovery / Light Movement",
      throwingTitle: "TODAY'S THROWING / BAND WORK",
      throwingText: "High Intent",
      liftText: "Recovery / Arm Care + Conditioning",
    };
  }

  if (todayName === "Thursday") {
    return {
      todayName,
      planSummary: "Your Thursday training is ready below.",
      movementTitle: "TODAY'S MOVEMENT",
      movementText: "Dynamic Warm-Up + Water Bag (Log)",
      throwingTitle: "TODAY'S THROWING / BAND WORK",
      throwingText: "Low / Recovery",
      liftText: "Upper Body Explosive",
    };
  }

  if (todayName === "Friday") {
    return {
      todayName,
      planSummary: "Your Friday training is ready below.",
      movementTitle: "TODAY'S MOVEMENT",
      movementText: "Dynamic Warm-Up + PVC Pipe",
      throwingTitle: "TODAY'S THROWING / BAND WORK",
      throwingText: "Medium / Feel Good",
      liftText: "Lower Body Explosive",
    };
  }

  if (todayName === "Saturday") {
    return {
      todayName,
      planSummary: "Compete and recover.",
      movementTitle: "TODAY'S MOVEMENT",
      movementText: "Dynamic Warm-Up + Recovery Mobility",
      throwingTitle: "TODAY'S THROWING / BAND WORK",
      throwingText: "Game Warm-Up / High Intent",
      liftText: "Optional Recovery",
    };
  }

  return {
    todayName,
    planSummary:
      "Recovery day. Full off unless you need to finish Saturday recovery work.",
    movementTitle: "TODAY'S MOVEMENT",
    movementText: "Dynamic Warm-Up + Off Day / Saturday Recovery If Needed",
    throwingTitle: "TODAY'S THROWING / BAND WORK",
    throwingText: "Off or Very Light Catch",
    liftText: "Off Day",
  };
}

export default function Home() {
  const supabase = createClient();
  const [dayInfo, setDayInfo] = useState<DayInfo | null>(null);

  useEffect(() => {
    setDayInfo(getTodayInfo(new Date()));
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.replace("/login");
  }

  if (!dayInfo) {
    return (
      <main className="min-h-screen bg-white text-black px-4 py-4">
        <div className="max-w-md mx-auto">
          <p className="text-blue-900">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black px-4 py-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h1
            className="flex-1 min-w-0 text-[30px] font-extrabold tracking-[0.12em] text-blue-900 leading-none"
            style={{ WebkitTextStroke: "0.5px #dc2626" }}
          >
            PRIME TRAINING
          </h1>

          <button
            onClick={handleLogout}
            className="shrink-0 border border-gray-400 text-gray-600 px-3 py-2 rounded-xl text-sm"
          >
            LOGOUT
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold text-blue-900">
            {dayInfo.todayName.toUpperCase()}
          </h2>
          <p className="text-gray-600 text-sm">{dayInfo.planSummary}</p>
        </div>

        <Link href="/movement">
          <button className="w-full bg-blue-100 p-5 rounded-2xl text-left mb-4 text-blue-900 shadow">
            <h2 className="text-xl font-semibold">{dayInfo.movementTitle}</h2>
            <p className="text-red-600 mt-2">{dayInfo.movementText}</p>
          </button>
        </Link>

        <Link href="/throwing">
          <button className="w-full bg-blue-900 p-5 rounded-2xl text-left mb-4 text-white shadow">
            <h2 className="text-xl font-semibold">{dayInfo.throwingTitle}</h2>
            <p className="text-blue-200 mt-2">{dayInfo.throwingText}</p>
          </button>
        </Link>

        <Link href="/lift">
          <button className="w-full bg-red-600 p-5 rounded-2xl text-left mb-4 text-white shadow">
            <h2 className="text-xl font-semibold">TODAY'S LIFT</h2>
            <p className="text-red-100 mt-2">{dayInfo.liftText}</p>
          </button>
        </Link>

        <Link href="/arm-care">
          <button className="w-full bg-gray-900 p-5 rounded-2xl text-left mb-4 text-white shadow">
            <h2 className="text-xl font-semibold">ARM CARE</h2>
            <p className="text-gray-300 mt-2">
              COMPLETE ANY 5 RECOVERY EXERCISES
            </p>
          </button>
        </Link>

        <Link href="/mental-game">
          <button className="w-full bg-blue-900 p-5 rounded-2xl text-left mb-4 text-white shadow">
            <h2 className="text-xl font-semibold">THE MENTAL GAME</h2>
            <p className="text-blue-200 mt-2">COMPLETE 3 SESSIONS THIS WEEK</p>
          </button>
        </Link>

        <Link href="/library">
          <button className="w-full bg-white border-2 border-blue-900 p-5 rounded-2xl text-left text-blue-900 shadow">
            <h2 className="text-xl font-semibold">WORKOUT LIBRARY</h2>
            <p className="text-red-600 mt-2">
              ALL DRILLS, LIFTS, THROWING, AND LONG TOSS
            </p>
          </button>
        </Link>
      </div>
    </main>
  );
}