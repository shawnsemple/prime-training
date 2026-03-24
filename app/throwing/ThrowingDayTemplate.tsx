"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  day: string;
  intent: string;
  bandWork: string[];
  throwingItems: string[];
};

export default function ThrowingDayTemplate({
  day,
  intent,
  bandWork,
  throwingItems,
}: Props) {
  const [bandComplete, setBandComplete] = useState(false);
  const [plyoComplete, setPlyoComplete] = useState(false);
  const [throwingComplete, setThrowingComplete] = useState(false);

  return (
    <main className="min-h-screen bg-white px-4 py-4">
      <div className="max-w-md mx-auto space-y-5">

        <Link href="/throwing">
          <button className="text-blue-900 text-sm">← Back</button>
        </Link>

        <div>
          <h1
            className="text-[28px] font-extrabold tracking-[0.12em] text-blue-900"
            style={{ WebkitTextStroke: "0.5px #dc2626" }}
          >
            TODAY&apos;S THROWING
          </h1>
          <p className="text-gray-600 text-sm mt-2">{day.toUpperCase()}</p>
        </div>

        {/* BAND WORK */}
        <div className="bg-blue-100 p-5 rounded-2xl shadow">
          <h2 className="text-lg font-bold text-blue-900">BAND WORK</h2>

          <div className="mt-3 space-y-2 text-sm text-blue-900">
            {bandWork.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-blue-900">
            <input
              type="checkbox"
              checked={bandComplete}
              onChange={() => setBandComplete(!bandComplete)}
            />
            BAND WORK COMPLETED
          </label>
        </div>

        {/* PLYO CARE */}
        <div className="bg-blue-900 p-5 rounded-2xl shadow text-white">
          <h2 className="text-lg font-bold">Plyo Care</h2>
          <p className="text-sm text-blue-200 mt-1">
            Complete before throwing
          </p>

          <div className="mt-3 space-y-2 text-sm text-blue-200">
            <p>• Tap & Go — 10 throws</p>
            <p>• Step-Back Throws — 10 throws</p>
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={plyoComplete}
              onChange={() => setPlyoComplete(!plyoComplete)}
            />
            PLYO CARE COMPLETED
          </label>
        </div>

        {/* THROWING */}
        <div className="bg-blue-100 p-5 rounded-2xl shadow">
          <h2 className="text-lg font-bold text-blue-900">
            {intent.toUpperCase()}
          </h2>

          <div className="mt-3 space-y-2 text-sm text-blue-900">
            {throwingItems.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-blue-900">
            <input
              type="checkbox"
              checked={throwingComplete}
              onChange={() => setThrowingComplete(!throwingComplete)}
            />
            THROWING COMPLETED
          </label>
        </div>

      </div>
    </main>
  );
}