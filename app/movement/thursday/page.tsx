import MovementDayTemplate from "../MovementDayTemplate";

export default function ThursdayMovementPage() {
  return (
    <MovementDayTemplate
      day="Thursday"
      title="Water Bag (Log)"
      accent="gray"
      drills={[
        "Power Stance Rotations – Movement",
        "Power Stance Step Back Rotations – Movement",
        "Kickstand Rotations – Movement",
      ]}
    />
  );
}