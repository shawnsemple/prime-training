import LiftDayTemplate from "../LiftDayTemplate";

export default function FridayLift() {
  return (
    <LiftDayTemplate
      day="Friday"
      focus="Lower Body Explosive — Light + Fast"
      blocks={[
        {
          title: "Block 1",
          exercises: [
            "Double Broad Jumps – 3 x 5",
            "Yoga Ball MB Overhead Throw (2 lb) – 3 x 6",
            "PVC Hip/Shoulder Separation – 3 x 5 each side",
          ],
        },
        {
          title: "Block 2",
          exercises: [
            "DB Step-Ups – 3 x 6 each side",
            "Skater Hops – 3 x 6 each side",
            "Yoga Ball Leg Curls – 3 x 6",
          ],
        },
        {
          title: "Block 3",
          exercises: [
            "Banded Split Squat Jumps – 3 x 6 each side",
            "Med Ball Side to Side Slams (4–6 lb) – 3 x 6 each side",
            "Bench Single Leg Hip Thrusts – 3 x 6 each side",
          ],
        },
      ]}
      notes={[
        "All jumps explosive",
        "Use lighter weights for speed",
        "Reset between reps",
        "Focus on balance on landings",
      ]}
    />
  );
}