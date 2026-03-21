"use client";

import Link from "next/link";
import { useState } from "react";

type MovementDayTemplateProps = {
  day: string;
  title: string;
  accent: "blue" | "red" | "gray";
  drills: string[];
};

export default function MovementDayTemplate({
  day,
  title,
  accent,
  drills,
}: MovementDayTemplateProps) {
  const [bandDone, setBandDone] = useState(false);
  const [completed, setCompleted] = useState<boolean[]>(drills.map(() => false));

  const titleColor =
    accent === "blue"
      ? "text-blue-900"
      : accent === "red"
      ? "text-red-600"
      : "text-gray-900";

  const cardColor =
    accent === "blue"
      ? "bg-blue-900 text-white"
      : accent === "red"
      ? "bg-red-600 text-white"
      : "bg-gray-900 text-white";

  const doneCount = Number(bandDone) + completed.filter(Boolean).length;
  const totalCount = 1 + drills.length;

  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/movement">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back to Movement
          </button>
        </Link>

        <div>
          <h1 className={`text-4xl ${titleColor}`}>{day.toUpperCase()}</h1>
          <p className="text-gray-600 mt-1">{title}</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow">
          <p className="text-sm">
            <span className="font-semibold">Progress:</span> {doneCount} / {totalCount} completed
          </p>
        </div>

        {/* BAND WORK */}
        <div className={`${cardColor} rounded-2xl p-5 shadow space-y-4`}>
          <div>
            <h2 className="text-2xl font-semibold">Band Work</h2>
            <p className="text-white/80">Complete before movement and throwing</p>
          </div>

          <div className="space-y-2 text-sm">
            <p>Side Extensions – Arm Care</p>
            <p>Forward Flies – Arm Care</p>
            <p>Reverse Flies – Arm Care</p>
            <p>Internal Rotation (elbow at side) – Arm Care</p>
            <p>External Rotation (elbow at side) – Arm Care</p>
            <p>Elevated Internal Rotation – Arm Care</p>
            <p>Elevated External Rotation – Arm Care</p>
            <p>Reverse Throwing – Arm Care</p>
            <p>Forward Throwing Motion – Mechanics</p>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={bandDone}
              onChange={() => setBandDone(!bandDone)}
              className="h-5 w-5"
            />
            <span>Band work completed</span>
          </label>

          <div className="rounded-xl bg-white/20 p-3 text-sm">
            <p className="font-semibold">Video Slot</p>
            <p>Band work video coming soon</p>
          </div>
        </div>

        {/* MOVEMENT DRILLS */}
        <div className={`${cardColor} rounded-2xl p-5 shadow space-y-4`}>
          <div>
            <h2 className="text-2xl font-semibold">Movement Drills</h2>
            <p className="text-white/80">Complete all listed drills for the day</p>
          </div>

          <div className="space-y-3">
            {drills.map((drill, index) => (
              <label key={drill} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={completed[index]}
                  onChange={() => {
                    const updated = [...completed];
                    updated[index] = !updated[index];
                    setCompleted(updated);
                  }}
                  className="h-5 w-5"
                />
                <span>{drill}</span>
              </label>
            ))}
          </div>

          <div className="rounded-xl bg-white/20 p-3 text-sm">
            <p className="font-semibold">Video Slot</p>
            <p>Movement drill videos coming soon</p>
          </div>
        </div>
      </div>
    </main>
  );
}