import LiftDayTemplate from "../LiftDayTemplate";

export default function Thursday() {
  return (
    <LiftDayTemplate
      day="Thursday"
      title="Upper Explosive + Mobility"
      blocks={[
        { name: "Block 1", exercises: ["Med Ball Slams", "Push-Ups"] },
        { name: "Block 2", exercises: ["Landmine Press", "Inverted Rows"] },
        { name: "Block 3", exercises: ["Yoga Push-Ups", "Band Pull-Aparts"] },
        { name: "Block 4", exercises: ["Wall Slides", "Blackburns"] },
      ]}
    />
  );
}