import LiftDayTemplate from "../LiftDayTemplate";

export default function Tuesday() {
  return (
    <LiftDayTemplate
      day="Tuesday"
      title="Lower Body Power"
      blocks={[
        { name: "Block 1", exercises: ["Trap Bar Deadlift", "Broad Jumps"] },
        { name: "Block 2", exercises: ["Front Squat", "Skater Jumps"] },
        { name: "Block 3", exercises: ["Romanian Deadlift", "Lateral Lunges"] },
        { name: "Block 4", exercises: ["Split Squat", "Step-Ups"] },
      ]}
    />
  );
}