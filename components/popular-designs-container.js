import ExerciseCardContainer from "../components/exercise-card-container";
import styles from "./popular-designs-container.module.css";

const PopularDesignsContainer = () => {
  return (
    <div
      className={styles.popularexercisessection}
      data-scroll-to="popularExercisesSection"
    >
      <div className={styles.popularexercises}>
        <div className={styles.title}>
          <div className={styles.popularDesigns}>Popular Designs</div>
        </div>
        <ExerciseCardContainer
          activityImageUrl="../cardimage@2x.png"
          activityName="Mars"
          activityIconUrl="../rectangle-10.svg"
          activityImageUrl2="../image@2x.png"
          roboPigActivityName="Robo Pig"
          activityIconUrl2="../rectangle-10.svg"
          disasterActivityImageUrl="../cardimage1@2x.png"
          stretchingActivityName="Disaster"
          activityImageUrl3="../rectangle-102.svg"
          activityImageUrl4="../group-6@2x.png"
          characterActivityName="Character"
          activityIconUrl3="../rectangle-102.svg"
          activityImageUrl5="../group-61@2x.png"
          girlYogaActivityName="Girl"
          activityIconUrl4="../rectangle-104.svg"
          characterImageUrl="../group-62@2x.png"
          oldManActivityName="Old man"
          activityImageUrl6="../rectangle-104.svg"
          group6Display="none"
          girlDisplay="none"
          group6Display1="none"
          oldManDisplay="none"
          propDisplay="none"
          propDisplay1="none"
          propDisplay2="none"
          propDisplay3="none"
          propDisplay4="none"
          propDisplay5="none"
          propDisplay6="none"
          propDisplay7="none"
        />
      </div>
    </div>
  );
};

export default PopularDesignsContainer;
