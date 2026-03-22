import ThrowingDayTemplate from "../ThrowingDayTemplate";

export default function TuesdayPage() {
  return (
    <ThrowingDayTemplate
      day="Tuesday"
      intent="Medium Intent"
      accent="blue"
      catchPlayThrows={40}
      distances="60 ft, 75 ft, 90 ft, 120 ft"
      notes="Build intent. Stay through the target and let the arm work."
      extras={["Long Toss Extension", "Compression Throws"]}
    />
  );
}