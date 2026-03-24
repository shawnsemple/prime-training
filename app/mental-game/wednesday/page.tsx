import MentalDayTemplate from "../MentalDayTemplate";

export default function MentalWednesdayPage() {
  return (
    <MentalDayTemplate
      day="Wednesday"
      subtitle="Reset + Breathe Day"
      sectionOneTitle="Box Breathing"
      sectionOneItems={[
        "Inhale 4 seconds",
        "Hold 4 seconds",
        "Exhale 4 seconds",
        "Hold 4 seconds",
        "Repeat for 3 to 5 minutes",
      ]}
      sectionTwoTitle="Thought Control"
      sectionTwoItems={[
        "Replace: Don’t miss",
        "With: Hit the glove",
        "Replace: I hope",
        "With: I will",
        "Relax jaw, shoulders, and hands",
      ]}
      prompts={[
        {
          title: "What thought am I replacing today?",
          description: "Swap weak language for strong language.",
        },
        {
          title: "Where did I feel tension?",
          description: "Jaw, shoulders, hands, breath, or body.",
        },
      ]}
    />
  );
}