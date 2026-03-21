import MovementDayTemplate from "../MovementDayTemplate";

export default function FridayMovementPage() {
  return (
    <MovementDayTemplate
      day="Friday"
      title="PVC Pipe"
      accent="blue"
      drills={[
        "Airplanes – Movement",
        "Single Leg Airplanes – Movement",
        "Pivot Rotations – Movement",
        "Neutral Rotations – Movement",
        "Hip Separation Drill – Movement",
      ]}
    />
  );
}