import ThrowingDayTemplate from "../ThrowingDayTemplate";

export default function SaturdayPage() {
  return (
    <ThrowingDayTemplate
      day="Saturday"
      intent="Game Warm-Up / High Intent"
      accent="blue"
      catchPlayThrows={35}
      distances="60 ft, 75 ft, 90 ft, 120 ft"
      notes="Use this as a game warm-up progression before a start, or as a high intent throwing day if there is no game."
      extras={[
        "Game Warm-Up Progression",
        "Flat Ground — 50 ft",
        "Bullpen or Pull-Downs (if scheduled)",
      ]}
    />
  );
}