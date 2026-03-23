"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-md mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1
            className="text-[28px] font-extrabold tracking-[0.12em] text-blue-900"
            style={{ WebkitTextStroke: "0.5px #dc2626" }}
          >
            PRIME TRAINING
          </h1>

          <button className="border border-blue-900 text-blue-900 px-4 py-1 rounded-full text-sm">
            LOGOUT
          </button>
        </div>

        {/* DAY */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-blue-900">SUNDAY</h2>
          <p className="text-gray-600 text-sm">
            RECOVERY DAY. FULL OFF UNLESS YOU NEED TO FINISH SATURDAY RECOVERY WORK.
          </p>
        </div>

        {/* MOVEMENT */}
        <Link href="/movement">
          <div className="bg-blue-100 p-5 rounded-2xl shadow mb-4">
            <h3 className="font-bold text-blue-900">
              TODAY'S MOVEMENT / BAND WORK
            </h3>
            <p className="text-red-600 text-sm">
              OFF DAY / SATURDAY RECOVERY IF NEEDED
            </p>
          </div>
        </Link>

        {/* THROWING */}
        <Link href="/throwing">
          <div className="bg-blue-900 p-5 rounded-2xl shadow mb-4 text-white">
            <h3 className="font-bold">TODAY'S THROWING</h3>
            <p className="text-sm">OFF OR VERY LIGHT CATCH</p>
          </div>
        </Link>

        {/* LIFT */}
        <Link href="/lift">
          <div className="bg-red-600 p-5 rounded-2xl shadow mb-4 text-white">
            <h3 className="font-bold">TODAY'S LIFT</h3>
            <p className="text-sm">OFF DAY</p>
          </div>
        </Link>

        {/* ✅ FIXED ARM CARE (DARK AGAIN) */}
        <Link href="/arm-care">
          <div className="bg-gray-900 p-5 rounded-2xl shadow mb-4 text-white">
            <h3 className="font-bold">ARM CARE</h3>
            <p className="text-sm">COMPLETE ANY 5 RECOVERY EXERCISES</p>
          </div>
        </Link>

        {/* MENTAL GAME */}
        <Link href="/mental-game">
          <div className="bg-blue-900 p-5 rounded-2xl shadow mb-4 text-white">
            <h3 className="font-bold">THE MENTAL GAME</h3>
            <p className="text-sm opacity-80">COMPLETE 3 SESSIONS THIS WEEK</p>
          </div>
        </Link>

        {/* LIBRARY */}
        <Link href="/library">
          <div className="border-2 border-blue-900 p-5 rounded-2xl shadow text-blue-900">
            <h3 className="font-bold">WORKOUT LIBRARY</h3>
            <p className="text-red-600 text-sm">
              ALL DRILLS, LIFTS, THROWING, AND LONG TOSS
            </p>
          </div>
        </Link>

      </div>
    </main>
  );
}