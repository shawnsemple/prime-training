"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

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

  if (todayName === "Monday") {
    return {
      todayName,
      planSummary: "Your Monday training is ready below.",
      movementText: "Med Ball (2 LB Only)",
      throwingText: "Low Intent",
      liftText: "Upper Body Power",
    };
  }

  if (todayName === "Tuesday") {
    return {
      todayName,
      planSummary: "Your Tuesday training is ready below.",
      movementText: "Water Bag (Circle)",
      throwingText: "Medium Intent",
      liftText: "Lower Body Power",
    };
  }

  if (todayName === "Wednesday") {
    return {
      todayName,
      planSummary: "Your Wednesday training is ready below.",
      movementText: "No scheduled movement drills today",
      throwingText: "High Intent",
      liftText: "Recovery / Arm Care + Conditioning",
    };
  }

  if (todayName === "Thursday") {
    return {
      todayName,
      planSummary: "Your Thursday training is ready below.",
      movementText: "Water Bag (Log)",
      throwingText: "Low / Recovery",
      liftText: "Upper Body Explosive",
    };
  }

  if (todayName === "Friday") {
    return {
      todayName,
      planSummary: "Your Friday training is ready below.",
      movementText: "PVC Pipe",
      throwingText: "Medium / Feel Good",
      liftText: "Lower Body Explosive",
    };
  }

  if (todayName === "Saturday") {
    return {
      todayName,
      planSummary: "Compete and recover.",
      movementText: "Recovery + Mobility + Arm Care",
      throwingText: "Game Warm-Up / High Intent",
      liftText: "Optional Recovery",
    };
  }

  return {
    todayName,
    planSummary:
      "Recovery day. Full off unless you need to finish Saturday recovery work.",
    movementText: "Off Day / Saturday Recovery If Needed",
    throwingText: "Off or Very Light Catch",
    liftText: "Off Day",
  };
}

export default function Home() {
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        window.location.href = "/login";
        return;
      }

      setUser(data.user);
      setLoading(false);
    }

    checkUser();
  }, [supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-black px-4 py-4">
        <div className="max-w-md mx-auto">
          <p className="text-blue-900 font-semibold">Loading...</p>
        </div>
      </main>
    );
  }

  const { todayName, planSummary, movementText, throwingText, liftText } =
    getTodayInfo();

  return (
    <main className="min-h-screen bg-white text-black px-4 py-4">
      <div className="max-w-md mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <h1
            className="flex-1 min-w-0 text-[30px] font-extrabold tracking-[0.12em] text-blue-900 leading-none"
            style={{
              WebkitTextStroke: "0.5px #dc2626",
            }}
          >
            PRIME TRAINING
          </h1>

          {user && (
            <button
              onClick={handleLogout}
              className="shrink-0 border border-gray-400 text-gray-600 px-3 py-2 rounded-xl hover:bg-gray-100 transition text-sm"
            >
              Logout
            </button>
          )}
        </div>

        {/* DAY */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-blue-900 leading-tight">
            {todayName.toUpperCase()}
          </h2>
          <p className="text-gray-600 text-sm">{planSummary}</p>
        </div>

        {/* MOVEMENT */}
        <Link href="/movement">
          <button className="w-full bg-blue-100 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-blue-900 shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">
              Today’s Movement / Band Work
            </h2>
            <p className="text-red-600">{movementText}</p>
          </button>
        </Link>

        {/* THROWING */}
        <Link href="/throwing">
          <button className="w-full bg-blue-900 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Today’s Throwing</h2>
            <p className="text-blue-200">{throwingText}</p>
          </button>
        </Link>

        {/* LIFT */}
        <Link href="/lift">
          <button className="w-full bg-red-600 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Today’s Lift</h2>
            <p className="text-red-100">{liftText}</p>
          </button>
        </Link>

        {/* ARM CARE */}
        <Link href="/arm-care">
          <button className="w-full bg-gray-900 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Arm Care</h2>
            <p className="text-gray-300">
              Complete any 5 recovery exercises
            </p>
          </button>
        </Link>

        {/* LIBRARY */}
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