import LiftDayTemplate from "../LiftDayTemplate";

export default function Monday() {
  return (
    <LiftDayTemplate
      day="Monday"
      title="Upper Body Power"
      blocks={[
        { name: "Block 1", exercises: ["DB Bench Press", "Pull-Ups"] },
        { name: "Block 2", exercises: ["Incline DB Press", "1-Arm DB Rows"] },
        { name: "Block 3", exercises: ["Landmine Press", "Chest Supported Rows"] },
        { name: "Block 4", exercises: ["Push-Ups", "Band Pull-Aparts"] },
      ]}
    />
  );
}