import LiftDayTemplate from "../LiftDayTemplate";

export default function MondayLift() {
  return (
    <LiftDayTemplate
      day="Monday"
      focus="Upper Body Power — Heavy + Controlled"
      blocks={[
        {
          title: "Block 1",
          exercises: [
            "Bear Crawls – 3 x 10 yards",
            "Med Ball Step Behind Scoop Toss – 3 x 6 each side",
            "Yoga Push-Ups – 3 x 8",
          ],
        },
        {
          title: "Block 2",
          exercises: [
            "Landmine Press – 3 x 8 each side",
            "Single Arm DB Row – 3 x 8 each side",
            "Band Pull-Aparts – 3 x 10",
          ],
        },
        {
          title: "Block 3",
          exercises: [
            "Scap Push-Ups – 3 x 10",
            "Blackburns – 3 x 8",
            "Dead Bugs – 3 x 8 each side",
          ],
        },
      ]}
      notes={[
        "Use challenging weight on Landmine Press and DB Rows",
        "Control every rep, especially lowering phase",
        "Keep core tight on all lifts",
        "Med balls should be 4 lb or 6 lb and thrown with control",
      ]}
    />
  );
}