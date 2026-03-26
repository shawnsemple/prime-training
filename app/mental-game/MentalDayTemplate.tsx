"use client";

import Link from "next/link";
import useTrackedChecklist from "@/hooks/useTrackedChecklist";

type Prompt = {
  title: string;
  description: string;
};

type Props = {
  day: string;
  subtitle: string;
  sectionOneTitle: string;
  sectionOneItems: string[];
  sectionTwoTitle: string;
  sectionTwoItems: string[];
  prompts: Prompt[];
};

export default function MentalDayTemplate({
  day,
  subtitle,
  sectionOneTitle,
  sectionOneItems,
  sectionTwoTitle,
  sectionTwoItems,
  prompts,
}: Props) {
  const pageKey = `mental-${day.toLowerCase()}`;
  const { checks, ready, toggleCheck } = useTrackedChecklist(pageKey, [
    "section-one-complete",
    "section-two-complete",
    "journal-complete",
    "session-1",
    "session-2",
    "session-3",
  ]);

  if (!ready) {
    return (
      <main className="min-h-screen bg-white px-4 py-4">
        <div className="max-w-md mx-auto">
          <p className="text-blue-900">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-4">
      <div className="max-w-md mx-auto space-y-5">
        <Link href="/mental-game">
          <button className="text-blue-900 text-sm">← Back</button>
        </Link>

        <div>
          <h1
            className="text-[28px] font-extrabold tracking-[0.12em] text-blue-900"
            style={{ WebkitTextStroke: "0.5px #dc2626" }}
          >
            THE MENTAL GAME
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            {day.toUpperCase()} — {subtitle}
          </p>
        </div>

        <div className="bg-blue-100 p-5 rounded-2xl shadow">
          <h2 className="text-lg font-bold text-blue-900">{sectionOneTitle}</h2>
          <div className="mt-3 space-y-2 text-sm text-blue-900">
            {sectionOneItems.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-blue-900">
            <input
              type="checkbox"
              checked={!!checks["section-one-complete"]}
              onChange={() => toggleCheck("section-one-complete")}
            />
            {sectionOneTitle.toUpperCase()} COMPLETED
          </label>
        </div>

        <div className="bg-blue-900 p-5 rounded-2xl shadow text-white">
          <h2 className="text-lg font-bold">{sectionTwoTitle}</h2>
          <div className="mt-3 space-y-2 text-sm text-blue-200">
            {sectionTwoItems.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={!!checks["section-two-complete"]}
              onChange={() => toggleCheck("section-two-complete")}
            />
            {sectionTwoTitle.toUpperCase()} COMPLETED
          </label>
        </div>

        <div className="bg-white border-2 border-blue-900 p-5 rounded-2xl shadow text-blue-900">
          <h2 className="text-lg font-bold">QUICK JOURNAL</h2>
          <div className="mt-3 space-y-3 text-sm">
            {prompts.map((prompt, i) => (
              <div key={i}>
                <p className="font-semibold">{prompt.title}</p>
                <p className="text-gray-600">{prompt.description}</p>
              </div>
            ))}
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-blue-900">
            <input
              type="checkbox"
              checked={!!checks["journal-complete"]}
              onChange={() => toggleCheck("journal-complete")}
            />
            JOURNAL COMPLETED
          </label>
        </div>

        <div className="bg-gray-900 p-5 rounded-2xl shadow text-white">
          <h2 className="text-lg font-bold">COMPLETE 3 THIS WEEK</h2>
          <div className="mt-3 space-y-3">
            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={!!checks["session-1"]}
                onChange={() => toggleCheck("session-1")}
              />
              SESSION 1
            </label>

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={!!checks["session-2"]}
                onChange={() => toggleCheck("session-2")}
              />
              SESSION 2
            </label>

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={!!checks["session-3"]}
                onChange={() => toggleCheck("session-3")}
              />
              SESSION 3
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}