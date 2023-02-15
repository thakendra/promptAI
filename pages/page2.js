import Header from "../components/header";
import PopularExercisesContainer from "../components/popular-exercises-container";
import styles from "./page2.module.css";

const Page2 = () => {
  return (
    <div className={styles.page2}>
      <Header />
      <div className={styles.page2Parent}>
        <b className={styles.page21}>Page 2</b>
        <div className={styles.popularexercisessection}>
          <PopularExercisesContainer />
        </div>
      </div>
    </div>
  );
};

export default Page2;
