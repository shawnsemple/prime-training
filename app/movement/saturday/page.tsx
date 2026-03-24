import MovementDayTemplate from "../MovementDayTemplate";

export default function SaturdayMovementPage() {
  return (
    <MovementDayTemplate
      day="Saturday"
      movementTitle="Game Day Dynamic Warm-Up"
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
        "Fast warm-up flow",
        "Get loose and ready to compete",
        "Stay athletic and game ready",
      ]}
    />
  );
}