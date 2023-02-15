import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./header.module.css";

const Header = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExercisesClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTrainersClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onPricingClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLoginClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <button className={styles.logo} onClick={onLogoClick}>
          WORKOUT
        </button>
        <div className={styles.menuright}>
          <div className={styles.menulinks}>
            <button className={styles.exercises} onClick={onExercisesClick}>
              EXERCISES
            </button>
            <button className={styles.exercises} onClick={onTrainersClick}>
              TRAINERS
            </button>
            <button className={styles.exercises} onClick={onPricingClick}>
              PRICING
            </button>
            <button className={styles.login} onClick={onLoginClick}>
              LOGIN
            </button>
          </div>
          <button className={styles.hamburgerIcon}>
            <img className={styles.group2Icon} alt="" src="../group21.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
