import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./a-i-trainers-container.module.css";

const AITrainersContainer = () => {
  const router = useRouter();

  const onButton2Click = useCallback(() => {
    router.push("/gifts");
  }, [router]);

  return (
    <div className={styles.trainers} data-scroll-to="trainers">
      <div className={styles.trainerscta}>
        <div className={styles.ctaframe}>
          <div className={styles.background} />
          <div className={styles.title}>
            <h2 className={styles.aiMidjourneyPromptContainer}>
              <p className={styles.ai}>{`AI `}</p>
              <p className={styles.ai}>MIDJOURNEY</p>
              <p className={styles.ai}>PROMPT</p>
              <p className={styles.generator}>GENERATOR</p>
            </h2>
            <img className={styles.splashIcon} alt="" src="../splash.svg" />
          </div>
          <div className={styles.description}>
            <div
              className={styles.withPromptaiYoull}
            >{`With PromptAI, you'll never run out of ideas. Simply enter your preferred genre and type of prompt, and our AI will generate a customized prompt tailored to your needs. `}</div>
            <button className={styles.button} onClick={onButton2Click}>
              <div className={styles.getStarted}>Get Started</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.trainersimages}>
        <div className={styles.desktop}>
          <div className={styles.trainer3}>
            <img
              className={styles.trainer3Child}
              alt=""
              src="../group-142@2x.png"
            />
            <div className={styles.samanthaWilliam}>Samantha William</div>
            <div className={styles.trainer}>Trainer</div>
          </div>
          <div className={styles.trainer2}>
            <img
              className={styles.trainer3Child}
              alt=""
              src="../group-147@2x.png"
            />
            <div className={styles.samanthaWilliam}>Karen Summer</div>
            <div className={styles.trainer}>Trainer</div>
          </div>
          <div className={styles.trainer11}>
            <img
              className={styles.trainer1Child}
              alt=""
              src="../group-146@2x.png"
            />
            <div className={styles.jonathanWise}>Jonathan Wise</div>
            <div className={styles.trainer4}>Trainer</div>
          </div>
        </div>
        <div className={styles.tablet}>
          <div className={styles.trainer31}>
            <img
              className={styles.trainer3Item}
              alt=""
              src="../group-1471@2x.png"
            />
            <div className={styles.karenSummer1}>Karen Summer</div>
            <div className={styles.trainer5}>Trainer</div>
          </div>
          <div className={styles.trainer21}>
            <img
              className={styles.trainer2Item}
              alt=""
              src="../group-1461@2x.png"
            />
            <div className={styles.jonathanWise1}>Jonathan Wise</div>
            <div className={styles.trainer6}>Trainer</div>
          </div>
          <div className={styles.trainer12}>
            <img
              className={styles.trainer1Item}
              alt=""
              src="../group-1421@2x.png"
            />
            <div className={styles.samanthaWilliam1}>Samantha William</div>
            <div className={styles.trainer7}>Trainer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrainersContainer;
