import ThrowingDayTemplate from "../ThrowingDayTemplate";

export default function MondayPage() {
  return (
    <ThrowingDayTemplate
      day="Monday"
      intent="Low Intent"
      accent="gray"
      catchPlayThrows={30}
      distances="60 ft, 75 ft, 90 ft"
      notes="Easy build-up day. Focus on rhythm, feel, and staying loose."
      extras={[
        "Light recovery throwing focus",
      ]}
    />
  );
}