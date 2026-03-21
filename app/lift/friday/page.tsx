import LiftDayTemplate from "../LiftDayTemplate";

export default function Friday() {
  return (
    <LiftDayTemplate
      day="Friday"
      title="Lower Explosive + Mobility"
      blocks={[
        { name: "Block 1", exercises: ["Box Jumps", "Broad Jumps"] },
        { name: "Block 2", exercises: ["Split Squat Jumps", "Skater Bounds"] },
        { name: "Block 3", exercises: ["Goblet Squat", "Lateral Lunges"] },
        { name: "Block 4", exercises: ["Step-Ups", "Reverse Lunges"] },
      ]}
    />
  );
}