"use client";

import Link from "next/link";
import { useState } from "react";

const armCareExercises = [
  "Reverse Throws – Arm Care",
  "Band Pull-Aparts – Arm Care",
  "External Rotation – Arm Care",
  "90/90 External Rotation – Arm Care",
  "Face Pulls – Arm Care",
  "Trap Raises – Arm Care",
  "Scap Push-Ups – Arm Care",
  "Wall Slides – Arm Care",
  "Wrist Curls – Arm Care",
  "Reverse Wrist Curls – Arm Care",
  "Pronations – Arm Care",
  "Supinations – Arm Care",
];

const DAILY_GOAL = 5;

export default function ArmCarePage() {
  const [completed, setCompleted] = useState<boolean[]>(
    armCareExercises.map(() => false)
  );

  const doneCount = completed.filter(Boolean).length;

  const toggleExercise = (index: number) => {
    const updated = [...completed];

    // Prevent going over 5
    if (!updated[index] && doneCount >= DAILY_GOAL) return;

    updated[index] = !updated[index];
    setCompleted(updated);
  };

  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        
        <Link href="/">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back
          </button>
        </Link>

        <div>
          <h1 className="text-4xl text-blue-900">ARM CARE</h1>
          <p className="text-gray-600 mt-1">
            Complete <span className="font-semibold">5 exercises daily</span> to keep your arm healthy and recovered.
          </p>
        </div>

        {/* Progress */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow">
          <p className="text-sm font-semibold">
            Progress: {doneCount} / {DAILY_GOAL}
          </p>

          {doneCount === DAILY_GOAL && (
            <p className="text-green-600 text-sm mt-1">
              ✅ Daily arm care complete
            </p>
          )}
        </div>

        {/* Exercise List */}
        <div className="rounded-2xl bg-gray-900 text-white p-5 shadow space-y-4">
          <h2 className="text-2xl font-semibold">Choose Any 5</h2>

          <div className="space-y-3">
            {armCareExercises.map((exercise, index) => (
              <label key={exercise} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={completed[index]}
                  onChange={() => toggleExercise(index)}
                  className="h-5 w-5"
                />
                <span
                  className={`${
                    completed[index] ? "line-through text-gray-400" : ""
                  }`}
                >
                  {exercise}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Video Slot */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-3">
          <h2 className="text-2xl text-blue-900 font-semibold">Video Slot</h2>
          <p className="text-gray-600">Arm care videos coming soon</p>
        </div>

      </div>
    </main>
  );
}