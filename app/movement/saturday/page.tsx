"use client";

import Link from "next/link";
import { useState } from "react";

const mobility = [
  "Hip Flexor Stretch",
  "Hamstring Stretch",
  "Adductor Rockbacks",
  "Thoracic Rotations",
  "Shoulder CARs",
  "Ankle Mobility",
];

const armCare = [
  "Reverse Throws",
  "Band Pull-Aparts",
  "External Rotation",
  "90/90 External Rotation",
  "Face Pulls",
  "Trap Raises",
  "Scap Push-Ups",
  "Wall Slides",
];

const running = [
  "8 x 60 yard tempo runs",
  "Walk back recovery between each rep",
  "Stay smooth and controlled",
];

export default function SaturdayPage() {
  const [mobilityDone, setMobilityDone] = useState<boolean[]>(
    mobility.map(() => false)
  );
  const [armDone, setArmDone] = useState<boolean[]>(
    armCare.map(() => false)
  );
  const [runningDone, setRunningDone] = useState<boolean[]>(
    running.map(() => false)
  );

  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back
          </button>
        </Link>

        <h1 className="text-4xl text-blue-900">SATURDAY RECOVERY</h1>

        <p className="text-gray-600">
          Game day or post-game recovery. Focus on running, mobility, and arm care.
        </p>

        <div className="rounded-2xl bg-red-600 text-white p-5 shadow space-y-4">
          <h2 className="text-2xl font-semibold">Post-Game Running</h2>
          <p className="text-white/80">Get your flush run in after the game</p>

          {running.map((item, i) => (
            <label key={item} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={runningDone[i]}
                onChange={() => {
                  const updated = [...runningDone];
                  updated[i] = !updated[i];
                  setRunningDone(updated);
                }}
              />
              {item}
            </label>
          ))}
        </div>

        <div className="rounded-2xl bg-blue-900 text-white p-5 shadow space-y-4">
          <h2 className="text-2xl font-semibold">Mobility Work</h2>
          <p className="text-white/80">Complete 4–6 movements</p>

          {mobility.map((item, i) => (
            <label key={item} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={mobilityDone[i]}
                onChange={() => {
                  const updated = [...mobilityDone];
                  updated[i] = !updated[i];
                  setMobilityDone(updated);
                }}
              />
              {item}
            </label>
          ))}
        </div>

        <div className="rounded-2xl bg-gray-900 text-white p-5 shadow space-y-4">
          <h2 className="text-2xl font-semibold">Arm Care</h2>
          <p className="text-gray-300">Complete 5 exercises</p>

          {armCare.map((item, i) => (
            <label key={item} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={armDone[i]}
                onChange={() => {
                  const updated = [...armDone];
                  updated[i] = !updated[i];
                  setArmDone(updated);
                }}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </main>
  );
}