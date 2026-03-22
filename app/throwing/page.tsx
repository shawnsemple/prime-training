import Link from "next/link";

const throwingDays = [
  {
    name: "Monday",
    intent: "Low Intent",
    href: "/throwing/monday",
    color: "bg-gray-100 border border-gray-200 text-red-600",
  },
  {
    name: "Tuesday",
    intent: "Medium Intent",
    href: "/throwing/tuesday",
    color: "bg-gray-100 border border-gray-200 text-blue-900",
  },
  {
    name: "Wednesday",
    intent: "High Intent",
    href: "/throwing/wednesday",
    color: "bg-blue-900 text-white",
  },
  {
    name: "Thursday",
    intent: "Low / Recovery",
    href: "/throwing/thursday",
    color: "bg-gray-100 border border-gray-200 text-red-600",
  },
  {
    name: "Friday",
    intent: "Medium / Feel Good",
    href: "/throwing/friday",
    color: "bg-red-600 text-white",
  },
  {
    name: "Saturday",
    intent: "Game Warm-Up / High Intent",
    href: "/throwing/saturday",
    color: "bg-gray-900 text-white",
  },
];

export default function ThrowingPage() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back
          </button>
        </Link>

        <h1 className="text-4xl tracking-wide text-blue-900">
          THROWING PROGRESSION
        </h1>

        <p className="text-gray-600">
          Click the day to see the full dynamic warm-up, plyo care, throwing progression, and extras.
        </p>

        <div className="space-y-4">
          {throwingDays.map((day) => (
            <Link key={day.name} href={day.href}>
              <button
                className={`w-full rounded-2xl p-5 text-left shadow hover:opacity-90 active:scale-95 transition ${day.color}`}
              >
                <h2 className="text-2xl font-semibold">{day.name}</h2>
                <p
                  className={
                    day.color.includes("text-white")
                      ? "text-white/80"
                      : "text-gray-600"
                  }
                >
                  {day.intent}
                </p>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}