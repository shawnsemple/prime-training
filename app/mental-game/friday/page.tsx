import MentalDayTemplate from "../MentalDayTemplate";

export default function MentalFridayPage() {
  return (
    <MentalDayTemplate
      day="Friday"
      subtitle="Confidence + Compete Day"
      sectionOneTitle="Highlight Reel Visualization"
      sectionOneItems={[
        "Replay your best outings",
        "Replay your best pitches",
        "Replay your success moments",
        "Build swagger before the weekend",
      ]}
      sectionTwoTitle="Self-Talk + Game Plan"
      sectionTwoItems={[
        "I’m prepared",
        "I trust my stuff",
        "I compete every pitch",
        "What type of pitcher am I today?",
        "What is my strength today?",
      ]}
      prompts={[
        {
          title: "What is my strength today?",
          description: "What am I leaning on when I compete?",
        },
        {
          title: "What pitcher am I today?",
          description: "Power, command, tempo, bulldog, competitor.",
        },
      ]}
    />
  );
}