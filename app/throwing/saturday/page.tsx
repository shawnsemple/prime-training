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

export default function SaturdayThrowingPage() {
  return (
    <ThrowingDayTemplate
      day="Saturday"
      intent="Game Warm-Up / High Intent"
      bandWork={bandWork}
      throwingItems={[
        "Game Warm-Up Progression",
        "Flat Ground",
        "Bullpen or Pull-Downs if scheduled",
        "Stay sharp and athletic",
      ]}
    />
  );
}