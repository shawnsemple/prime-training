import LiftDayTemplate from "../LiftDayTemplate";

export default function WednesdayLift() {
  return (
    <LiftDayTemplate
      day="Wednesday"
      focus="Recovery / Arm Care + Conditioning — Light + Controlled + Recovery"
      running={["25 Yard Cut Sprints – 8 reps"]}
      blocks={[
        {
          title: "Block 1",
          exercises: [
            "Banded External Rotation – 2 x 12",
            "Banded Internal Rotation – 2 x 12",
            "Band Pull-Aparts – 2 x 15",
          ],
        },
        {
          title: "Block 2",
          exercises: [
            "Banded Wrist Flexion – 2 x 15",
            "Banded Wrist Extension – 2 x 15",
            "Pronations (Band or Light DB) – 2 x 12 each side",
          ],
        },
      ]}
      notes={[
        "Keep everything light, controlled, and clean.",
        "This is a recovery and arm care day, not a max effort day.",
        "Focus on quality of movement and staying fresh.",
        "Conditioning should be smooth and athletic, not all-out.",
      ]}
    />
  );
}