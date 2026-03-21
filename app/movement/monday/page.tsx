import MovementDayTemplate from "../MovementDayTemplate";

export default function MondayMovementPage() {
  return (
    <MovementDayTemplate
      day="Monday"
      title="Med Ball (2 LB Only)"
      accent="blue"
      drills={[
        "Pitching Position MB Throw – Movement",
        "Step Behind MB Throw – Movement",
        "Forward Hop MB Throw – Movement",
      ]}
    />
  );
}