import Link from "next/link";

const workoutLibrary = {
  "Lower Body": [
    "Trap Bar Deadlift",
    "Front Squat",
    "Goblet Squat",
    "Romanian Deadlift",
    "Barbell Hip Thrust",
    "Hamstring Walkouts",
    "Nordic Hamstring Curls",
    "Glute Ham Raise",
    "Eccentric Glute Ham Raise",
    "Assisted Glute Ham Raise",
    "Glute Ham Hold",
    "GHD Hip Extensions",
    "Weighted Hip Extensions",
    "Paused Hip Extensions",
    "GHD Back Extensions",
    "Back Extension Hold",
  ],
  "Single Leg": [
    "Rear Foot Elevated Split Squat",
    "Goblet Split Squat",
    "Banded Split Squat",
    "Walking Lunges",
    "Reverse Lunges",
    "Step-Ups",
    "Explosive Step-Ups",
    "Skater Squats",
    "Single-Leg RDL",
    "B-Stance RDL",
    "Single-Leg Hip Extensions",
  ],
  Lateral: [
    "Lateral Lunges",
    "Cossack Squats",
    "Lateral Bounds",
  ],
  Power: [
    "Broad Jumps",
    "Box Jumps",
    "Split Squat Jumps",
    "Skater Bounds",
    "Med Ball Scoop Toss",
    "Med Ball Slams",
    "Med Ball Rotational Throws",
    "Step-Back Shot Put Throws",
  ],
  "Upper Push": [
    "Push-Ups",
    "Tempo Push-Ups",
    "Yoga Push-Ups",
    "Landmine Press",
    "DB Floor Press",
    "Incline DB Press",
  ],
  "Upper Pull": [
    "Pull-Ups",
    "Chin-Ups",
    "Inverted Rows",
    "1-Arm DB Rows",
    "Chest-Supported Rows",
    "Cable Rows",
  ],
  "Arm Care": [
    "Band Pull-Aparts",
    "Face Pulls",
    "YTWs",
    "Blackburns",
    "Wall Slides",
    "Scap Push-Ups",
  ],
  Core: [
    "Pallof Press",
    "Dead Bugs",
    "Bird Dogs",
    "Bear Crawls",
    "Planks",
    "Ab Rollouts",
    "6-Inch Holds",
  ],
  Speed: [
    "10 Yard Sprints",
    "20 Yard Sprints",
    "30 Yard Sprints",
    "Cut Sprints (30-20-10)",
    "Lateral Shuffle to Sprint",
  ],
};

const throwingLibrary = {
  "Arm Care": [
    "Kneeling Pivot Throws",
    "Pivot Pickoff Throws",
    "Reverse Throws",
    "Janitor Throws",
  ],
  Mechanics: [
    "Rocker Throws",
    "Rocker Figure 8 Throws",
    "Step-Behind Throws",
    "Step-Back Throws",
    "Shuffle to Throw",
    "Walkthrough Throws",
    "Figure 8 Throws",
    "Rhythm Throws",
    "Rhythm Relay Throws",
    "Tap and Go Throws",
    "Connection Ball Throws",
    "Separation Throws",
    "Rock Back Wind Up Throws",
    "Dry Mound Throws",
  ],
  Athletic: [
    "Run Away Stop & Throw",
  ],
  Velocity: [
    "45 Degree Turn and Burn Throws",
    "Pull-Down Throws",
  ],
};

const longTossLibrary = {
  "Arm Care": [
    "Short Catch",
    "Stretch It Out (Build-Up)",
    "Long Toss Extension",
  ],
  Velocity: [
    "Pull-Downs",
  ],
};

function SectionCard({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: "blue" | "red" | "gray";
}) {
  const styles = {
    blue: {
      header: "text-blue-900",
      badge: "bg-blue-100 text-blue-900",
      border: "border-blue-200",
    },
    red: {
      header: "text-red-600",
      badge: "bg-red-100 text-red-700",
      border: "border-red-200",
    },
    gray: {
      header: "text-gray-900",
      badge: "bg-gray-100 text-gray-800",
      border: "border-gray-200",
    },
  };

  const s = styles[color];

  return (
    <div className={`rounded-2xl border ${s.border} bg-white shadow p-5`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-2xl ${s.header}`}>{title}</h2>
        <span className={`text-xs px-3 py-1 rounded-full ${s.badge}`}>
          Folder
        </span>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-gray-50 px-4 py-3 border border-gray-100"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/">
          <button className="text-blue-900 font-medium hover:underline">
            ← Back
          </button>
        </Link>

        <h1 className="text-4xl tracking-wide text-blue-900">
          WORKOUT LIBRARY
        </h1>

        <p className="text-gray-600">
          Organized into simple folders so you can easily find lifts, throwing drills,
          and long toss work. Videos can be added later.
        </p>

        <div className="rounded-2xl bg-blue-900 text-white p-5 shadow">
          <h2 className="text-2xl mb-2">Workout Library</h2>
          <p className="text-blue-100">
            Lower body, single leg, lateral, power, upper body, arm care, core, and speed.
          </p>
        </div>

        {Object.entries(workoutLibrary).map(([title, items]) => (
          <SectionCard key={title} title={title} items={items} color="blue" />
        ))}

        <div className="rounded-2xl bg-red-600 text-white p-5 shadow">
          <h2 className="text-2xl mb-2">Throwing Library</h2>
          <p className="text-red-100">
            Arm care, mechanics, athletic work, and velocity drills.
          </p>
        </div>

        {Object.entries(throwingLibrary).map(([title, items]) => (
          <SectionCard key={title} title={title} items={items} color="red" />
        ))}

        <div className="rounded-2xl bg-gray-900 text-white p-5 shadow">
          <h2 className="text-2xl mb-2">Long Toss</h2>
          <p className="text-gray-300">
            Simple long toss progression folders.
          </p>
        </div>

        {Object.entries(longTossLibrary).map(([title, items]) => (
          <SectionCard key={title} title={title} items={items} color="gray" />
        ))}
      </div>
    </main>
  );
}