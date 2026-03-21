"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  day: string;
  title: string;
  blocks: { name: string; exercises: string[] }[];
};

export default function LiftDayTemplate({ day, title, blocks }: Props) {
  const [completed, setCompleted] = useState<boolean[]>(
    blocks.flatMap((b) => b.exercises.map(() => false))
  );

  let index = 0;

  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/lift">
          <button className="text-blue-900 hover:underline">
            ← Back to Lifting
          </button>
        </Link>

        <h1 className="text-4xl text-blue-900">{day.toUpperCase()}</h1>
        <p className="text-gray-600">{title}</p>

        {blocks.map((block, bIndex) => (
          <div key={block.name} className="bg-gray-100 p-5 rounded-2xl shadow space-y-3">
            <h2 className="text-2xl text-blue-900">{block.name}</h2>

            {block.exercises.map((exercise, eIndex) => {
              const currentIndex = index;
              index++;

              return (
                <label key={exercise} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={completed[currentIndex]}
                    onChange={() => {
                      const updated = [...completed];
                      updated[currentIndex] = !updated[currentIndex];
                      setCompleted(updated);
                    }}
                  />
                  <span>
                    {exercise} — 3 x 8
                  </span>
                </label>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
}