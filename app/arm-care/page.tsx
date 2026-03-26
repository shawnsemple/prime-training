"use client";

import Link from "next/link";
import useTrackedChecklist from "@/hooks/useTrackedChecklist";

const exercises = [
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

export default function ArmCarePage() {
  const itemKeys = exercises.map((_, index) => `exercise-${index + 1}`);
  const { checks, ready, toggleCheck } = useTrackedChecklist(
    "arm-care",
    itemKeys
  );

  if (!ready) {
    return (
      <main className="min-h-screen bg-white px-4 py-4">
        <div className="max-w-md mx-auto">
          <p className="text-blue-900">Loading...</p>
        </div>
      </main>
    );
  }

  const completedCount = itemKeys.filter((key) => checks[key]).length;

  return (
    <main className="min-h-screen bg-white px-4 py-4">
      <div className="max-w-md mx-auto space-y-5">
        <Link href="/">
          <button className="text-blue-900 text-sm">← Back</button>
        </Link>

        <div>
          <h1
            className="text-[28px] font-extrabold tracking-[0.12em] text-blue-900"
            style={{ WebkitTextStroke: "0.5px #dc2626" }}
          >
            ARM CARE
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            COMPLETE ANY 5 RECOVERY EXERCISES
          </p>
        </div>

        <div className="bg-gray-900 p-5 rounded-2xl shadow text-white">
          <h2 className="text-lg font-bold">RECOVERY CHECKLIST</h2>
          <p className="text-sm text-gray-300 mt-1">
            COMPLETED: {completedCount} / {exercises.length}
          </p>

          <div className="mt-4 space-y-3">
            {exercises.map((exercise, index) => {
              const key = `exercise-${index + 1}`;

              return (
                <label key={key} className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={!!checks[key]}
                    onChange={() => toggleCheck(key)}
                  />
                  {exercise}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}