import MovementDayTemplate from "../MovementDayTemplate";

export default function MondayMovementPage() {
  return (
    <MovementDayTemplate
      day="Monday"
      movementTitle="Med Ball (2 LB Only)"
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
        "Pitching Position MB Throw",
        "Step Behind MB Throw",
        "Forward Hop MB Throw",
      ]}
    />
  );
}