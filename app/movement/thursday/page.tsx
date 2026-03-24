import MovementDayTemplate from "../MovementDayTemplate";

export default function ThursdayMovementPage() {
  return (
    <MovementDayTemplate
      day="Thursday"
      movementTitle="Water Bag (Log)"
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
        "Power Stance Rotations",
        "Power Stance Step Back Rotations",
        "Kickstand Rotations",
      ]}
    />
  );
}