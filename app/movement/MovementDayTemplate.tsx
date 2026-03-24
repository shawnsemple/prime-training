"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  day: string;
  movementTitle: string;
  warmup: string[];
  movementItems: string[];
};

export default function MovementDayTemplate({
  day,
  movementTitle,
  warmup,
  movementItems,
}: Props) {
  const [warmupComplete, setWarmupComplete] = useState(false);
  const [movementComplete, setMovementComplete] = useState(false);

  return (
    <main className="min-h-screen bg-white px-4 py-4">
      <div className="max-w-md mx-auto space-y-5">
        <Link href="/movement">
          <button className="text-blue-900 text-sm">← Back</button>
        </Link>

        <div>
          <h1
            className="text-[28px] font-extrabold tracking-[0.12em] text-blue-900"
            style={{ WebkitTextStroke: "0.5px #dc2626" }}
          >
            TODAY&apos;S MOVEMENT
          </h1>
          <p className="text-gray-600 text-sm mt-2">{day.toUpperCase()}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded-2xl shadow">
          <h2 className="text-lg font-bold text-blue-900">DYNAMIC WARM-UP</h2>

          <div className="mt-3 space-y-2 text-sm text-blue-900">
            {warmup.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-blue-900">
            <input
              type="checkbox"
              checked={warmupComplete}
              onChange={() => setWarmupComplete(!warmupComplete)}
            />
            DYNAMIC WARM-UP COMPLETED
          </label>
        </div>

        <div className="bg-blue-900 p-5 rounded-2xl shadow text-white">
          <h2 className="text-lg font-bold">{movementTitle.toUpperCase()}</h2>

          <div className="mt-3 space-y-2 text-sm text-blue-200">
            {movementItems.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={movementComplete}
              onChange={() => setMovementComplete(!movementComplete)}
            />
            MOVEMENT COMPLETED
          </label>
        </div>
      </div>
    </main>
  );
}