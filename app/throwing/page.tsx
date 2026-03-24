"use client";

import Link from "next/link";

export default function ThrowingHomePage() {
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
          THROWING PROGRAM
        </h1>

        <Link href="/throwing/monday">
          <button className="w-full bg-blue-900 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">MONDAY</h2>
            <p className="text-blue-200 mt-1">BAND WORK + LOW INTENT</p>
          </button>
        </Link>

        <Link href="/throwing/tuesday">
          <button className="w-full bg-red-600 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">TUESDAY</h2>
            <p className="text-red-100 mt-1">BAND WORK + MEDIUM INTENT</p>
          </button>
        </Link>

        <Link href="/throwing/wednesday">
          <button className="w-full bg-gray-900 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">WEDNESDAY</h2>
            <p className="text-gray-300 mt-1">BAND WORK + HIGH INTENT</p>
          </button>
        </Link>

        <Link href="/throwing/thursday">
          <button className="w-full bg-blue-100 p-5 rounded-2xl text-left text-blue-900 shadow">
            <h2 className="text-2xl font-bold">THURSDAY</h2>
            <p className="text-blue-700 mt-1">BAND WORK + RECOVERY THROWING</p>
          </button>
        </Link>

        <Link href="/throwing/friday">
          <button className="w-full bg-red-100 p-5 rounded-2xl text-left text-red-600 shadow">
            <h2 className="text-2xl font-bold">FRIDAY</h2>
            <p className="text-red-500 mt-1">BAND WORK + FEEL GOOD THROWING</p>
          </button>
        </Link>

        <Link href="/throwing/saturday">
          <button className="w-full bg-blue-900 p-5 rounded-2xl text-left text-white shadow">
            <h2 className="text-2xl font-bold">SATURDAY</h2>
            <p className="text-blue-200 mt-1">BAND WORK + GAME WARM-UP</p>
          </button>
        </Link>
      </div>
    </main>
  );
}