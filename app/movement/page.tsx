import Link from "next/link";

const movementDays = [
  {
    name: "Monday",
    type: "Med Ball (2 LB Only)",
    href: "/movement/monday",
    color: "bg-blue-900 text-white",
  },
  {
    name: "Tuesday",
    type: "Water Bag (Circle)",
    href: "/movement/tuesday",
    color: "bg-red-600 text-white",
  },
  {
    name: "Thursday",
    type: "Water Bag (Log)",
    href: "/movement/thursday",
    color: "bg-gray-900 text-white",
  },
  {
    name: "Friday",
    type: "PVC Pipe",
    href: "/movement/friday",
    color: "bg-blue-100 text-blue-900",
  },
  {
    name: "Saturday",
    type: "Recovery + Mobility + Arm Care",
    href: "/movement/saturday",
    color: "bg-gray-300 text-blue-900",
  },
];

export default function MovementPage() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back
          </button>
        </Link>

        <h1 className="text-4xl text-blue-900">MOVEMENT DRILLS</h1>

        <p className="text-gray-600">
          Weekly movement work including med ball, water bag, PVC, and Saturday recovery sessions.
        </p>

        <div className="space-y-4">
          {movementDays.map((day) => (
            <Link key={day.name} href={day.href}>
              <button
                className={`w-full rounded-2xl p-5 text-left shadow hover:opacity-90 active:scale-95 transition ${day.color}`}
              >
                <h2 className="text-2xl font-semibold">{day.name}</h2>
                <p
                  className={
                    day.color.includes("text-white")
                      ? "text-white/80"
                      : "text-gray-700"
                  }
                >
                  {day.type}
                </p>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}