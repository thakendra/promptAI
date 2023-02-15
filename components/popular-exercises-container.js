import ExerciseCardContainer from "../components/exercise-card-container";
import styles from "./popular-exercises-container.module.css";

const PopularExercisesContainer = () => {
  return (
    <div className={styles.popularexercises}>
      <div className={styles.title}>
        <div className={styles.popularExercises}>Popular Exercises</div>
        <div className={styles.seeMoreExercises}>SEE MORE EXERCISES</div>
      </div>
      <ExerciseCardContainer
        activityImageUrl="../cardimage2@2x.png"
        activityName="Treadmill"
        activityIconUrl="../rectangle-106.svg"
        activityImageUrl2="../image1@2x.png"
        roboPigActivityName="Running"
        activityIconUrl2="../rectangle-106.svg"
        disasterActivityImageUrl="../cardimage3@2x.png"
        stretchingActivityName="Stretching"
        activityImageUrl3="../rectangle-108.svg"
        activityImageUrl4="../group-63@2x.png"
        characterActivityName="Lifting"
        activityIconUrl3="../rectangle-108.svg"
        activityImageUrl5="../group-64@2x.png"
        girlYogaActivityName="Yoga"
        activityIconUrl4="../rectangle-1010.svg"
        characterImageUrl="../group-65@2x.png"
        oldManActivityName="Pushup"
        activityImageUrl6="../rectangle-1010.svg"
        group6Display="inline-block"
        girlDisplay="inline-block"
        group6Display1="inline-block"
        oldManDisplay="inline-block"
        propDisplay="inline-block"
        propDisplay1="inline-block"
        propDisplay2="inline-block"
        propDisplay3="inline-block"
        propDisplay4="inline-block"
        propDisplay5="inline-block"
        propDisplay6="inline-block"
        propDisplay7="inline-block"
      />
    </div>
  );
};

export default PopularExercisesContainer;
