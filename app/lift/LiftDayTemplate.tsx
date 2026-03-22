"use client";

import Link from "next/link";
import { useState } from "react";

type LiftDayTemplateProps = {
  day: string;
  focus: string;
  running?: string[];
  blocks: {
    title: string;
    exercises: string[];
  }[];
  notes: string[];
};

export default function LiftDayTemplate({
  day,
  focus,
  running,
  blocks,
  notes,
}: LiftDayTemplateProps) {
  const runningList = running ?? [];
  const exerciseList = blocks.flatMap((block) => block.exercises);

  const [runningDone, setRunningDone] = useState<boolean[]>(
    runningList.map(() => false)
  );

  const [exerciseDone, setExerciseDone] = useState<boolean[]>(
    exerciseList.map(() => false)
  );

  const [weightsUsed, setWeightsUsed] = useState<string[]>(
    exerciseList.map(() => "")
  );

  const [workoutRating, setWorkoutRating] = useState<string>("");

  const totalItems = runningList.length + exerciseList.length;
  const completedItems =
    runningDone.filter(Boolean).length + exerciseDone.filter(Boolean).length;

  let exerciseIndex = 0;

  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/lift">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back to Lift
          </button>
        </Link>

        <div>
          <h1 className="text-4xl text-red-600 tracking-wide">
            {day.toUpperCase()}
          </h1>
          <p className="text-gray-600 mt-1">{focus}</p>
        </div>

        {/* Notes first */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow space-y-3">
          <h2 className="text-xl font-semibold text-blue-900">Notes</h2>
          {notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>

        {/* Progress */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow">
          <p className="text-sm">
            <span className="font-semibold">Progress:</span> {completedItems} /{" "}
            {totalItems} completed
          </p>
        </div>

        {/* Running */}
        {runningList.length > 0 && (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow space-y-3">
            <h2 className="text-xl font-semibold text-blue-900">Running</h2>
            {runningList.map((r, index) => (
              <label key={r} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={runningDone[index]}
                  onChange={() => {
                    const updated = [...runningDone];
                    updated[index] = !updated[index];
                    setRunningDone(updated);
                  }}
                  className="h-5 w-5"
                />
                <span>{r}</span>
              </label>
            ))}
          </div>
        )}

        {/* Blocks */}
        {blocks.map((block) => (
          <div
            key={block.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-4"
          >
            <h2 className="text-xl font-semibold text-blue-900">
              {block.title}
            </h2>

            {block.exercises.map((exercise) => {
              const currentIndex = exerciseIndex;
              exerciseIndex++;

              return (
                <div
                  key={exercise}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4 space-y-3"
                >
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={exerciseDone[currentIndex]}
                      onChange={() => {
                        const updated = [...exerciseDone];
                        updated[currentIndex] = !updated[currentIndex];
                        setExerciseDone(updated);
                      }}
                      className="h-5 w-5 mt-1"
                    />
                    <span>{exercise}</span>
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weight Used
                    </label>
                    <input
                      type="text"
                      value={weightsUsed[currentIndex]}
                      onChange={(e) => {
                        const updated = [...weightsUsed];
                        updated[currentIndex] = e.target.value;
                        setWeightsUsed(updated);
                      }}
                      placeholder="ex: 40 lb, bodyweight, 2 lb MB"
                      className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Workout Rating */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-3">
          <h2 className="text-xl font-semibold text-blue-900">
            Workout Toughness
          </h2>
          <p className="text-gray-600">Rate how tough the workout felt today.</p>

          <select
            value={workoutRating}
            onChange={(e) => setWorkoutRating(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-3 py-2"
          >
            <option value="">Select 1–5</option>
            <option value="1">1 - Very Easy</option>
            <option value="2">2 - Easy</option>
            <option value="3">3 - Moderate</option>
            <option value="4">4 - Hard</option>
            <option value="5">5 - Very Hard</option>
          </select>
        </div>
      </div>
    </main>
  );
}