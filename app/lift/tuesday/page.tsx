import LiftDayTemplate from "../LiftDayTemplate";

export default function TuesdayLift() {
  return (
    <LiftDayTemplate
      day="Tuesday"
      focus="Lower Body Power — Heavy + Controlled"
      running={["Cut 20s – 4 reps"]}
      blocks={[
        {
          title: "Block 1",
          exercises: [
            "Seated Box Jumps – 3 x 6",
            "Side to Side Overhead Med Ball Slams – 3 x 8 each side",
            "Bear Crawl Shoulder Taps – 3 x 10 each side",
          ],
        },
        {
          title: "Block 2",
          exercises: [
            "Front Pinned Squat – 3 x 8 sec hold",
            "Goblet Squat – 3 x 8",
            "Single Leg Glute Bridge – 3 x 8 each side",
          ],
        },
        {
          title: "Block 3",
          exercises: [
            "Copenhagen Plank Dips – 3 x 8 each side",
            "Lateral Lunges – 3 x 8 each side",
            "Yoga Ball Rollouts – 3 x 8",
          ],
        },
      ]}
      notes={[
        "Squats should be heavy but controlled",
        "Stay balanced on all single-leg work",
        "Full control on the way down",
        "Jumps = explosive but controlled",
      ]}
    />
  );
}