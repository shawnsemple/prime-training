import MovementDayTemplate from "../MovementDayTemplate";

export default function FridayMovementPage() {
  return (
    <MovementDayTemplate
      day="Friday"
      movementTitle="PVC Pipe"
      warmup={[
        "Jog or skip",
        "Knee hugs",
        "Quad pulls",
        "Walking lunges",
        "Side lunges",
        "Leg swings",
        "Arm circles",
        "A-skips",
        "High knees",
        "Butt kicks",
      ]}
      movementItems={[
        "Airplanes",
        "Single Leg Airplanes",
        "Pivot Rotations",
        "Neutral Rotations",
        "Hip Separation Drill",
      ]}
    />
  );
}