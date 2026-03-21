import Link from "next/link";

const liftDays = [
  { name: "Monday", type: "Upper Body Power", href: "/lift/monday", color: "bg-blue-900 text-white" },
  { name: "Tuesday", type: "Lower Body Power", href: "/lift/tuesday", color: "bg-red-600 text-white" },
  { name: "Wednesday", type: "Sprints + Arm Care", href: "/lift/wednesday", color: "bg-gray-900 text-white" },
  { name: "Thursday", type: "Upper Explosive + Mobility", href: "/lift/thursday", color: "bg-blue-100 text-blue-900" },
  { name: "Friday", type: "Lower Explosive + Mobility", href: "/lift/friday", color: "bg-red-100 text-red-600" },
];

export default function LiftPage() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/">
          <button className="text-blue-900 hover:underline">← Back</button>
        </Link>

        <h1 className="text-4xl text-blue-900">LIFTING PROGRAM</h1>

        <div className="space-y-4">
          {liftDays.map((day) => (
            <Link key={day.name} href={day.href}>
              <button className={`w-full p-5 rounded-2xl text-left shadow ${day.color}`}>
                <h2 className="text-2xl">{day.name}</h2>
                <p>{day.type}</p>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}