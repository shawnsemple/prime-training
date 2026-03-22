import Link from "next/link";

export default function MentalGamePage() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        
        <Link href="/">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back
          </button>
        </Link>

        <div>
          <h1
            className="text-[30px] font-extrabold tracking-[0.12em] text-blue-900 leading-none"
            style={{
              WebkitTextStroke: "0.5px #dc2626",
            }}
          >
            THE MENTAL GAME
          </h1>

          <p className="text-gray-600 mt-2">
            Build routines, confidence, focus, and reset skills.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow space-y-3">
          <h2 className="text-xl font-semibold text-blue-900">
            Coming Soon
          </h2>

          <p>Breathing work</p>
          <p>Reset routines</p>
          <p>Confidence building</p>
          <p>Game-day mindset</p>
          <p>Focus cues</p>
        </div>

      </div>
    </main>
  );
}