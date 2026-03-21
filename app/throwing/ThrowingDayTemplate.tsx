"use client";

import Link from "next/link";
import { useState } from "react";

type ThrowingDayTemplateProps = {
  day: string;
  intent: string;
  accent: "blue" | "red" | "gray";
  catchPlayThrows: number;
  distances: string;
  notes: string;
  extras: string[];
};

export default function ThrowingDayTemplate({
  day,
  intent,
  accent,
  catchPlayThrows,
  distances,
  notes,
  extras,
}: ThrowingDayTemplateProps) {
  const [bandWorkDone, setBandWorkDone] = useState(false);
  const [tapAndGoDone, setTapAndGoDone] = useState(false);
  const [stepBackDone, setStepBackDone] = useState(false);
  const [catchPlayDone, setCatchPlayDone] = useState(false);
  const [extrasDone, setExtrasDone] = useState<boolean[]>(extras.map(() => false));

  const accentClasses =
    accent === "blue"
      ? "bg-blue-900 text-white"
      : accent === "red"
      ? "bg-red-600 text-white"
      : "bg-gray-100 border border-gray-200 text-black";

  const titleClasses =
    accent === "blue"
      ? "text-blue-900"
      : accent === "red"
      ? "text-red-600"
      : "text-blue-900";

  const completedCount =
    Number(bandWorkDone) +
    Number(tapAndGoDone) +
    Number(stepBackDone) +
    Number(catchPlayDone) +
    extrasDone.filter(Boolean).length;

  const totalCount = 4 + extras.length;

  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        
        <Link href="/throwing">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back to Throwing
          </button>
        </Link>

        <div>
          <h1 className={`text-4xl tracking-wide ${titleClasses}`}>
            {day.toUpperCase()}
          </h1>
          <p className="text-gray-600 mt-1">{intent}</p>
        </div>

        {/* Progress */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow">
          <p className="text-sm">
            <span className="font-semibold">Progress:</span>{" "}
            {completedCount} / {totalCount} completed
          </p>
        </div>

        {/* BAND WORK */}
        <div className={`${accentClasses} rounded-2xl p-5 shadow space-y-4`}>
          <div>
            <h2 className="text-2xl font-semibold">Band Work</h2>
            <p className={accent === "gray" ? "text-gray-700" : "text-white/80"}>
              Complete before throwing every day
            </p>

            <div className="mt-3 space-y-2 text-sm">
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

            <div className="mt-4 flex items-center gap-3">
              <input
                type="checkbox"
                checked={bandWorkDone}
                onChange={() => setBandWorkDone(!bandWorkDone)}
                className="h-5 w-5"
              />
              <span>Band work completed</span>
            </div>

            <div className="mt-3 rounded-xl bg-white/20 p-3 text-sm">
              <p className="font-semibold">Video Slot</p>
              <p>Band work video coming soon</p>
            </div>
          </div>
        </div>

        {/* PLYO CARE */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-4">
          <h2 className="text-2xl text-blue-900">Plyo Care</h2>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={tapAndGoDone}
              onChange={() => setTapAndGoDone(!tapAndGoDone)}
            />
            Tap and Gos — 10 throws
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={stepBackDone}
              onChange={() => setStepBackDone(!stepBackDone)}
            />
            Step-Back Throws — 10 throws
          </label>
        </div>

        {/* THROWING */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-4">
          <h2 className="text-2xl text-blue-900">Throwing</h2>

          <p>{catchPlayThrows} total throws</p>
          <p><strong>Distances:</strong> {distances}</p>
          <p><strong>Notes:</strong> {notes}</p>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={catchPlayDone}
              onChange={() => setCatchPlayDone(!catchPlayDone)}
            />
            Throwing completed
          </label>
        </div>

        {/* EXTRAS */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-4">
          <h2 className="text-2xl text-blue-900">Extras</h2>

          {extras.map((extra, index) => (
            <label key={index} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={extrasDone[index]}
                onChange={() => {
                  const updated = [...extrasDone];
                  updated[index] = !updated[index];
                  setExtrasDone(updated);
                }}
              />
              {extra}
            </label>
          ))}
        </div>

      </div>
    </main>
  );
}