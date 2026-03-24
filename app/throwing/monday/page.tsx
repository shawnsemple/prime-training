import ThrowingDayTemplate from "../ThrowingDayTemplate";

const bandWork = [
  "Side Extensions",
  "Forward Flies",
  "Reverse Flies",
  "Internal Rotation",
  "External Rotation",
  "Elevated Internal",
  "Elevated External",
  "Reverse Throwing",
  "Forward Motion",
];

export default function MondayThrowingPage() {
  return (
    <ThrowingDayTemplate
      day="Monday"
      intent="Low Intent Throwing"
      bandWork={bandWork}
      throwingItems={[
        "Catch Play",
        "60 ft",
        "75 ft",
        "90 ft",
        "Stay loose and smooth",
      ]}
    />
  );
}