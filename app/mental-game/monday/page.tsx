import MentalDayTemplate from "../MentalDayTemplate";

export default function MentalMondayPage() {
  return (
    <MentalDayTemplate
      day="Monday"
      subtitle="Focus + Intent Day"
      sectionOneTitle="Visualization"
      sectionOneItems={[
        "See yourself throwing strikes",
        "See yourself competing with confidence",
        "See yourself handling adversity the right way",
        "5 minutes of locked-in mental reps",
      ]}
      sectionTwoTitle="Next Pitch Reset Cue"
      sectionTwoItems={[
        "Pick one phrase: Next pitch",
        "Pick one phrase: Right here",
        "Pick one phrase: Attack",
        "Use the same cue every time you need a reset",
      ]}
      prompts={[
        {
          title: "Today I’m focused on:",
          description: "Write the one thing your mind needs to lock in on.",
        },
        {
          title: "One thing I will do well today:",
          description: "Keep it simple and specific.",
        },
      ]}
    />
  );
}