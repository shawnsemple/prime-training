import LiftDayTemplate from "../LiftDayTemplate";

export default function ThursdayLift() {
  return (
    <LiftDayTemplate
      day="Thursday"
      focus="Upper Body Explosive — Light + Fast"
      blocks={[
        {
          title: "Block 1",
          exercises: [
            "Med Ball Ear Throw (2 lb) – 3 x 5 each side",
            "Lateral Bear Crawls – 3 x 10 yards",
            "TRX Rows – 3 x 8",
          ],
        },
        {
          title: "Block 2",
          exercises: [
            "BB Inverted Rows – 3 x 8",
            "Med Ball Chest Pass (4–6 lb) – 3 x 8",
            "Plank Bench Taps – 3 x 6 each side",
          ],
        },
        {
          title: "Block 3",
          exercises: [
            "T Y I Iso Holds – 3 x 10 sec each position",
            "Band Face Pulls – 3 x 10",
            "Mountain Climbers – 3 x 20",
          ],
        },
      ]}
      notes={[
        "Move fast on every rep",
        "Stop if speed drops",
        "Keep movements athletic",
        "Med balls: 2 lb (ear throws), 4–6 lb others",
      ]}
    />
  );
}