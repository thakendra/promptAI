import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./main-header.module.css";

const MainHeader = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTrainers1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='trainers']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPricingClick = useCallback(() => {
    router.push("/page2");
  }, [router]);

  const onLoginClick = useCallback(() => {
    router.push("/page2");
  }, [router]);

  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <button className={styles.logo} onClick={onLogoClick}>
          PromptAI
        </button>
        <div className={styles.menuright}>
          <div className={styles.menulinks}>
            <button className={styles.trainers} onClick={onTrainers1Click}>
              Blog
            </button>
            <button className={styles.trainers} onClick={onPricingClick}>
              PRICING
            </button>
            <button className={styles.login} onClick={onLoginClick}>
              LOGIN
            </button>
          </div>
          <button className={styles.hamburgerIcon}>
            <img className={styles.group2Icon} alt="" src="../group2.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
