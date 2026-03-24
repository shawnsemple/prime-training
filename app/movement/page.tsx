"use client";

import Link from "next/link";

export default function MovementHomePage() {
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
          MOVEMENT PROGRAM
        </h1>

        <Link href="/movement/monday">
          <button className="w-full bg-blue-900 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">MONDAY</h2>
            <p className="text-blue-200 mt-1">DYNAMIC WARM-UP + MED BALL</p>
          </button>
        </Link>

        <Link href="/movement/tuesday">
          <button className="w-full bg-red-600 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">TUESDAY</h2>
            <p className="text-red-100 mt-1">DYNAMIC WARM-UP + WATER BAG</p>
          </button>
        </Link>

        <Link href="/movement/wednesday">
          <button className="w-full bg-gray-900 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">WEDNESDAY</h2>
            <p className="text-gray-300 mt-1">DYNAMIC WARM-UP + RECOVERY</p>
          </button>
        </Link>

        <Link href="/movement/thursday">
          <button className="w-full bg-blue-100 p-5 rounded-2xl text-left text-blue-900 shadow">
            <h2 className="text-2xl font-bold">THURSDAY</h2>
            <p className="text-blue-700 mt-1">DYNAMIC WARM-UP + WATER BAG</p>
          </button>
        </Link>

        <Link href="/movement/friday">
          <button className="w-full bg-red-100 p-5 rounded-2xl text-left text-red-600 shadow">
            <h2 className="text-2xl font-bold">FRIDAY</h2>
            <p className="text-red-500 mt-1">DYNAMIC WARM-UP + PVC PIPE</p>
          </button>
        </Link>

        <Link href="/movement/saturday">
          <button className="w-full bg-blue-900 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">SATURDAY</h2>
            <p className="text-blue-200 mt-1">GAME DAY DYNAMIC WARM-UP</p>
          </button>
        </Link>
      </div>
    </main>
  );
}