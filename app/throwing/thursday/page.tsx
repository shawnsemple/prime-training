import ThrowingDayTemplate from "../ThrowingDayTemplate";

export default function ThursdayPage() {
  return (
    <ThrowingDayTemplate
      day="Thursday"
      intent="Low / Recovery"
      accent="gray"
      catchPlayThrows={30}
      distances="60 ft, 75 ft, 90 ft"
      notes="Flush the arm. Keep it light and focus on feel."
      extras={[
        "Light drill work if needed",
      ]}
    />
  );
}