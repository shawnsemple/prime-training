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
  const [dynamicDone, setDynamicDone] = useState(false);
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
    Number(dynamicDone) +
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

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow">
          <p className="text-sm">
            <span className="font-semibold">Progress:</span>{" "}
            {completedCount} / {totalCount} completed
          </p>
        </div>

        <div className={`${accentClasses} rounded-2xl p-5 shadow space-y-4`}>
          <div>
            <h2 className="text-2xl font-semibold">Dynamic Warm-Up</h2>
            <p className={accent === "gray" ? "text-gray-700" : "text-white/80"}>
              Complete before throwing every day
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <p>Jog / Skip Progression</p>
            <p>High Knees</p>
            <p>Butt Kicks</p>
            <p>Leg Swings</p>
            <p>Lunge Stretch</p>
            <p>Hamstring Sweep</p>
            <p>Quad Pull</p>
            <p>Inchworms</p>
            <p>Hip Openers</p>
            <p>Shoulder / T-Spine Mobility</p>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={dynamicDone}
              onChange={() => setDynamicDone(!dynamicDone)}
              className="h-5 w-5"
            />
            <span>Dynamic warm-up completed</span>
          </label>

          <div className="rounded-xl bg-white/20 p-3 text-sm">
            <p className="font-semibold">Video Slot</p>
            <p>Dynamic warm-up video coming soon</p>
          </div>
        </div>

        <div className={`${accentClasses} rounded-2xl p-5 shadow space-y-4`}>
          <div>
            <h2 className="text-2xl font-semibold">Plyo Care</h2>
            <p className={accent === "gray" ? "text-gray-700" : "text-white/80"}>
              Complete before throwing
            </p>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={tapAndGoDone}
              onChange={() => setTapAndGoDone(!tapAndGoDone)}
              className="h-5 w-5"
            />
            <span>Tap and Gos — 10 throws</span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={stepBackDone}
              onChange={() => setStepBackDone(!stepBackDone)}
              className="h-5 w-5"
            />
            <span>Step-Back Throws — 10 throws</span>
          </label>

          <div className="rounded-xl bg-white/20 p-3 text-sm">
            <p className="font-semibold">Video Slot</p>
            <p>Plyo Care video coming soon</p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-4">
          <div>
            <h2 className="text-2xl text-blue-900">Throwing</h2>
            <p className="text-gray-600">{catchPlayThrows} total throws</p>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Distances:</span> {distances}
            </p>
            <p>
              <span className="font-semibold">Notes:</span> {notes}
            </p>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={catchPlayDone}
              onChange={() => setCatchPlayDone(!catchPlayDone)}
              className="h-5 w-5"
            />
            <span>Throwing completed</span>
          </label>

          <div className="rounded-xl bg-gray-50 p-3 text-sm">
            <p className="font-semibold">Video Slot</p>
            <p>Throwing video coming soon</p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-4">
          <div>
            <h2 className="text-2xl text-blue-900">Extras</h2>
            <p className="text-gray-600">Additional work for the day</p>
          </div>

          <div className="space-y-3">
            {extras.map((extra, index) => (
              <label key={extra} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={extrasDone[index]}
                  onChange={() => {
                    const updated = [...extrasDone];
                    updated[index] = !updated[index];
                    setExtrasDone(updated);
                  }}
                  className="h-5 w-5"
                />
                <span>{extra}</span>
              </label>
            ))}
          </div>

          <div className="rounded-xl bg-gray-50 p-3 text-sm">
            <p className="font-semibold">Video Slot</p>
            <p>Extras video coming soon</p>
          </div>
        </div>
      </div>
    </main>
  );
}