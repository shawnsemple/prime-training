import Link from "next/link";

export default function CoachPage() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/">
          <button className="text-blue-900 hover:underline">
            ← Back
          </button>
        </Link>

        <h1 className="text-4xl text-blue-900">COACH / ADMIN</h1>

        <div className="bg-gray-100 rounded-2xl p-5 shadow space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Athlete Name</label>
            <input
              type="text"
              placeholder="Enter athlete name"
              className="w-full border border-gray-300 rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Athlete Email</label>
            <input
              type="email"
              placeholder="Enter athlete email"
              className="w-full border border-gray-300 rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Group</label>
            <input
              type="text"
              placeholder="Example: HS Pitchers"
              className="w-full border border-gray-300 rounded-xl p-3"
            />
          </div>

          <button className="w-full bg-red-600 text-white rounded-xl p-3 hover:opacity-90">
            Add Athlete
          </button>
        </div>
      </div>
    </main>
  );
}