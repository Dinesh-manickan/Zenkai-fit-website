import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to"}
      title={["The", "DANGER", "Zone"]}
    >
      <div className="mx-auto max-w-[700px] w-fit text-slate-400 text-xs sm:text-sm text-justify px-4">
        <p>
          <b className="font-semibold">☆ Note ☆</b> -
          <span className="text-blue-400">Reps</span> are like the epic battles
          you face in your training arc—each one is a step towards victory!
          <span className="text-blue-400">Rest</span> is your time to recharge,
          like the calm before the next big fight.
          <span className="text-blue-400">Tempo</span> is the rhythm of your
          training saga, guiding you through the phases of eccentric - isometric
          - concentric (or down - pause - up) just like mastering a new skill!
          <br />
          <br />
          For <span className="text-blue-400">weight selection</span>, choose a
          weight that lets you conquer your reps with grace and strength,
          ensuring you maintain your form like a true hero in training!
          <br />
          <br />
          Keep pushing, and may your training journey be as thrilling as an epic
          anime adventure! 🌟
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
}
