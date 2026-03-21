import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h1
            className="flex-1 min-w-0 text-[30px] font-extrabold tracking-[0.12em] text-blue-900 leading-none"
            style={{
              WebkitTextStroke: "0.5px #dc2626",
            }}
          >
            PRIME TRAINING
          </h1>

          <Link href="/login">
            <button className="shrink-0 border-2 border-blue-900 text-blue-900 px-3 py-2 rounded-xl hover:bg-blue-900 hover:text-white transition shadow text-sm">
              Login
            </button>
          </Link>
        </div>

        <Link href="/movement">
          <button className="w-full bg-blue-100 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-blue-900 shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Today’s Movement / Band Work</h2>
            <p className="text-red-600">Med ball, bands, water bag, PVC</p>
          </button>
        </Link>

        <Link href="/throwing">
          <button className="w-full bg-blue-900 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Today’s Throwing</h2>
            <p className="text-blue-200">Weekly throwing progression</p>
          </button>
        </Link>

        <Link href="/lift">
          <button className="w-full bg-red-600 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Today’s Lift</h2>
            <p className="text-red-100">5-day weekly lifting program</p>
          </button>
        </Link>

        <button className="w-full bg-gray-900 hover:opacity-90 p-5 rounded-2xl text-left mb-4 text-white shadow active:scale-95 transition">
          <h2 className="text-xl font-semibold">Arm Care</h2>
          <p className="text-gray-300">Bands + Recovery</p>
        </button>

        <Link href="/library">
          <button className="w-full bg-white border-2 border-blue-900 hover:bg-gray-100 p-5 rounded-2xl text-left text-blue-900 shadow active:scale-95 transition">
            <h2 className="text-xl font-semibold">Workout Library</h2>
            <p className="text-red-600">All drills, lifts, throwing, and long toss</p>
          </button>
        </Link>
      </div>
    </main>
  );
}