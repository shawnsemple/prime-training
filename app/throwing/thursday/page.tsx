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

export default function ThursdayThrowingPage() {
  return (
    <ThrowingDayTemplate
      day="Thursday"
      intent="Low / Recovery Throwing"
      bandWork={bandWork}
      throwingItems={[
        "Easy catch",
        "60 ft",
        "75 ft",
        "90 ft",
        "Smooth rhythm and recovery",
      ]}
    />
  );
}