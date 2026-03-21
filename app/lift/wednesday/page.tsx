import LiftDayTemplate from "../LiftDayTemplate";

export default function Wednesday() {
  return (
    <LiftDayTemplate
      day="Wednesday"
      title="Sprints + Arm Care"
      blocks={[
        { name: "Block 1", exercises: ["30-20-10 Cut Sprints", "10 Yard Sprints"] },
        { name: "Block 2", exercises: ["20 Yard Sprints", "30 Yard Sprints"] },
        { name: "Block 3", exercises: ["Band Pull-Aparts", "Face Pulls"] },
        { name: "Block 4", exercises: ["YTWs", "Scap Push-Ups"] },
      ]}
    />
  );
}