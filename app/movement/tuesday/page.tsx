import MovementDayTemplate from "../MovementDayTemplate";

export default function TuesdayMovementPage() {
  return (
    <MovementDayTemplate
      day="Tuesday"
      title="Water Bag (Circle)"
      accent="red"
      drills={[
        "Center Chaos – Movement",
        "Frontside Chaos – Movement",
        "Overhead Chaos – Movement",
      ]}
    />
  );
}