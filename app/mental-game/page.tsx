"use client";

import Link from "next/link";

export default function MentalGameHomePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-4">
      <div className="max-w-md mx-auto space-y-4">
        <Link href="/">
          <button className="text-blue-900 text-sm">← Back</button>
        </Link>

        <h1
          className="text-[28px] font-extrabold tracking-[0.12em] text-blue-900"
          style={{ WebkitTextStroke: "0.5px #dc2626" }}
        >
          THE MENTAL GAME
        </h1>

        <Link href="/mental-game/monday">
          <button className="w-full bg-blue-900 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">MONDAY</h2>
            <p className="text-blue-200 mt-1">FOCUS + INTENT DAY</p>
          </button>
        </Link>

        <Link href="/mental-game/wednesday">
          <button className="w-full bg-gray-900 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">WEDNESDAY</h2>
            <p className="text-gray-300 mt-1">RESET + BREATHE DAY</p>
          </button>
        </Link>

        <Link href="/mental-game/friday">
          <button className="w-full bg-red-600 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">FRIDAY</h2>
            <p className="text-red-100 mt-1">CONFIDENCE + COMPETE DAY</p>
          </button>
        </Link>
      </div>
    </main>
  );
}