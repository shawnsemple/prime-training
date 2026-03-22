import ThrowingDayTemplate from "../ThrowingDayTemplate";

export default function FridayPage() {
  return (
    <ThrowingDayTemplate
      day="Friday"
      intent="Medium / Feel Good"
      accent="red"
      catchPlayThrows={40}
      distances="60 ft, 75 ft, 90 ft, 120 ft"
      notes="Feel sharp and confident going into the weekend."
      extras={["Compression Throws", "Light Command Work"]}
    />
  );
}