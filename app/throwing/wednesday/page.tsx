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

export default function WednesdayThrowingPage() {
  return (
    <ThrowingDayTemplate
      day="Wednesday"
      intent="High Intent Throwing"
      bandWork={bandWork}
      throwingItems={[
        "Catch Play",
        "60 ft",
        "75 ft",
        "90 ft",
        "120 ft",
        "Flat Ground or Pull-Downs",
      ]}
    />
  );
}