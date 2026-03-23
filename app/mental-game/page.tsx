"use client";

import { useState } from "react";
import Link from "next/link";

export default function MentalGamePage() {
  const [checks, setChecks] = useState([false, false, false]);

  const toggleCheck = (index: number) => {
    const updated = [...checks];
    updated[index] = !updated[index];
    setChecks(updated);
  };

  return (
    <main className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-md mx-auto space-y-6">

        {/* BACK */}
        <Link href="/">
          <button className="text-blue-900 text-sm">
            ← Back
          </button>
        </Link>

        {/* HEADER */}
        <h1
          className="text-[26px] font-extrabold tracking-[0.12em] text-blue-900 text-center"
          style={{ WebkitTextStroke: "0.5px #dc2626" }}
        >
          THE MENTAL GAME
        </h1>

        {/* SHADOW WORK */}
        <div className="bg-gray-100 p-5 rounded-2xl shadow">
          <h2 className="text-blue-900 font-bold mb-2">
            SHADOW WORK
          </h2>
          <p className="text-sm text-gray-700">
            Step on the rubber. Lock in. Visualize 10 perfect pitches.
            Lose focus = restart.
          </p>
        </div>

        {/* WIN THE DAY */}
        <div className="bg-gray-100 p-5 rounded-2xl shadow">
          <h2 className="text-blue-900 font-bold mb-2">
            WIN THE DAY
          </h2>

          <div className="space-y-2 text-sm">
            <p>⬜ Arm Care</p>
            <p>⬜ Lift / Mobility</p>
            <p>⬜ Mental Reps</p>
            <p>⬜ Log / Reflection</p>
          </div>
        </div>

        {/* BREATH */}
        <div className="bg-gray-100 p-5 rounded-2xl shadow">
          <h2 className="text-blue-900 font-bold mb-2">
            COMMAND BREATH
          </h2>
          <p className="text-sm text-gray-700">
            Inhale (4s) walking back. Exhale (8s) locking into the target.
          </p>
        </div>

        {/* ✅ WEEKLY CHECKMARK SYSTEM */}
        <div className="bg-blue-900 text-white p-5 rounded-2xl shadow">
          <h2 className="font-bold mb-3">
            COMPLETE 3 THIS WEEK
          </h2>

          <div className="space-y-2">
            {checks.map((checked, i) => (
              <div
                key={i}
                onClick={() => toggleCheck(i)}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <div className="w-5 h-5 border border-white flex items-center justify-center rounded">
                  {checked && "✔"}
                </div>
                <span>Session {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}