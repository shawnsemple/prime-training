import ThrowingDayTemplate from "../ThrowingDayTemplate";

export default function WednesdayPage() {
  return (
    <ThrowingDayTemplate
      day="Wednesday"
      intent="High Intent"
      accent="blue"
      catchPlayThrows={50}
      distances="60 ft, 75 ft, 90 ft, 120 ft, 150 ft"
      notes="Highest intent day. Build up, throw hard, and stay through every throw."
      extras={[
        "Long Toss Extension",
        "Compression Throws",
        "Flat Ground — 50 ft",
        "Accuracy Bullpen or Pull-Downs",
      ]}
    />
  );
}