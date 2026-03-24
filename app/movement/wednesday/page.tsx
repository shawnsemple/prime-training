import MovementDayTemplate from "../MovementDayTemplate";

export default function WednesdayMovementPage() {
  return (
    <MovementDayTemplate
      day="Wednesday"
      movementTitle="Recovery / Light Movement"
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
        "Light mobility flow",
        "Easy lower half movement",
        "Reset and recovery work",
      ]}
    />
  );
}