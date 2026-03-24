"use client";

import Link from "next/link";
import { useState } from "react";

export default function NutritionPage() {
  const [hydrationDone, setHydrationDone] = useState(false);
  const [caloriesDone, setCaloriesDone] = useState(false);
  const [proteinDone, setProteinDone] = useState(false);
  const [foodDone, setFoodDone] = useState(false);
  const [avoidDone, setAvoidDone] = useState(false);

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
            NUTRITION
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            SIMPLE RULES THAT ACTUALLY HELP YOU PERFORM
          </p>
        </div>

        <div className="bg-blue-100 p-5 rounded-2xl shadow">
          <h2 className="text-lg font-bold text-blue-900">HYDRATION</h2>
          <div className="mt-3 space-y-2 text-sm text-blue-900">
            <p>• Bodyweight x 0.5 = ounces per day</p>
            <p>• Example: 160 lb = 80 oz minimum</p>
            <p>• Add 20–30 oz on training days</p>
            <p>• Add electrolytes on heavy sweat days</p>
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-blue-900">
            <input
              type="checkbox"
              checked={hydrationDone}
              onChange={() => setHydrationDone(!hydrationDone)}
            />
            HYDRATION CHECKED
          </label>
        </div>

        <div className="bg-blue-900 p-5 rounded-2xl shadow text-white">
          <h2 className="text-lg font-bold">CALORIES</h2>
          <div className="mt-3 space-y-2 text-sm text-blue-200">
            <p>• Bodyweight x 15–18 calories</p>
            <p>• Example: 160 lb = 2400–2800 calories</p>
            <p>• Enough to grow without overthinking</p>
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={caloriesDone}
              onChange={() => setCaloriesDone(!caloriesDone)}
            />
            CALORIES CHECKED
          </label>
        </div>

        <div className="bg-red-600 p-5 rounded-2xl shadow text-white">
          <h2 className="text-lg font-bold">PROTEIN</h2>
          <div className="mt-3 space-y-2 text-sm text-red-100">
            <p>• Bodyweight x 0.7–1g protein</p>
            <p>• Example: 160 lb = 110–160g protein</p>
            <p>• Protein builds your strength. Don’t skip it.</p>
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={proteinDone}
              onChange={() => setProteinDone(!proteinDone)}
            />
            PROTEIN CHECKED
          </label>
        </div>

        <div className="bg-gray-900 p-5 rounded-2xl shadow text-white">
          <h2 className="text-lg font-bold">WHAT TO EAT</h2>
          <div className="mt-3 space-y-2 text-sm text-gray-300">
            <p>• Protein every meal</p>
            <p>• Carbs for energy: rice, pasta, potatoes</p>
            <p>• Healthy fats: eggs, peanut butter, avocado</p>
            <p>• Pre-training: carbs + protein</p>
            <p>• Post-training: protein + carbs ASAP</p>
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={foodDone}
              onChange={() => setFoodDone(!foodDone)}
            />
            FOOD RULES CHECKED
          </label>
        </div>

        <div className="bg-white border-2 border-blue-900 p-5 rounded-2xl shadow text-blue-900">
          <h2 className="text-lg font-bold">WHAT TO AVOID</h2>
          <div className="mt-3 space-y-2 text-sm">
            <p>• Skipping meals</p>
            <p>• Only eating snacks</p>
            <p>• Not drinking water</p>
            <p>• Energy drinks instead of food</p>
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-blue-900">
            <input
              type="checkbox"
              checked={avoidDone}
              onChange={() => setAvoidDone(!avoidDone)}
            />
            AVOID LIST CHECKED
          </label>
        </div>
      </div>
    </main>
  );
}