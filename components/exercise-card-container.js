import { useMemo } from "react";
import styles from "./exercise-card-container.module.css";

const ExerciseCardContainer = ({
  activityImageUrl,
  activityName,
  activityIconUrl,
  activityImageUrl2,
  roboPigActivityName,
  activityIconUrl2,
  disasterActivityImageUrl,
  stretchingActivityName,
  activityImageUrl3,
  activityImageUrl4,
  characterActivityName,
  activityIconUrl3,
  activityImageUrl5,
  girlYogaActivityName,
  activityIconUrl4,
  characterImageUrl,
  oldManActivityName,
  activityImageUrl6,
  group6Display,
  girlDisplay,
  group6Display1,
  oldManDisplay,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propDisplay5,
  propDisplay6,
  propDisplay7,
}) => {
  const subtitleStyle = useMemo(() => {
    return {
      display: group6Display,
    };
  }, [group6Display]);

  const divStyle = useMemo(() => {
    return {
      display: girlDisplay,
    };
  }, [girlDisplay]);

  const subtitle1Style = useMemo(() => {
    return {
      display: group6Display1,
    };
  }, [group6Display1]);

  const div1Style = useMemo(() => {
    return {
      display: oldManDisplay,
    };
  }, [oldManDisplay]);

  const subtitlesStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const div2Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const estCaloriesStyle = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const div3Style = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const estCalories1Style = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const div4Style = useMemo(() => {
    return {
      display: propDisplay5,
    };
  }, [propDisplay5]);

  const estCalories2Style = useMemo(() => {
    return {
      display: propDisplay6,
    };
  }, [propDisplay6]);

  const div5Style = useMemo(() => {
    return {
      display: propDisplay7,
    };
  }, [propDisplay7]);

  return (
    <div className={styles.exercisecards}>
      <div className={styles.column1}>
        <div className={styles.exercisecard}>
          <img className={styles.cardimageIcon} alt="" src={activityImageUrl} />
          <div className={styles.text}>
            <div className={styles.titles}>
              <div className={styles.title}>{activityName}</div>
              <div
                className={styles.subtitle}
                style={subtitleStyle}
              >{`250 est calories `}</div>
            </div>
            <div className={styles.duration}>
              <img
                className={styles.durationChild}
                alt=""
                src={activityIconUrl}
              />
              <div className={styles.div} style={divStyle}>
                58:24
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exercisecard}>
          <img className={styles.imageIcon} alt="" src={activityImageUrl2} />
          <div className={styles.text}>
            <div className={styles.titles}>
              <div className={styles.title}>{roboPigActivityName}</div>
              <div
                className={styles.subtitle}
                style={subtitle1Style}
              >{`250 est calories `}</div>
            </div>
            <div className={styles.duration}>
              <img
                className={styles.durationChild}
                alt=""
                src={activityIconUrl2}
              />
              <div className={styles.div} style={div1Style}>
                58:24
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.column1}>
        <div className={styles.exercisecard2}>
          <img
            className={styles.imageIcon}
            alt=""
            src={disasterActivityImageUrl}
          />
          <div className={styles.text}>
            <div className={styles.titles}>
              <div className={styles.title}>{stretchingActivityName}</div>
              <div
                className={styles.subtitle}
                style={subtitlesStyle}
              >{`250 est calories `}</div>
            </div>
            <div className={styles.duration}>
              <img
                className={styles.durationChild}
                alt=""
                src={activityImageUrl3}
              />
              <div className={styles.div} style={div2Style}>
                58:24
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exercisecard}>
          <img className={styles.imageIcon} alt="" src={activityImageUrl4} />
          <div className={styles.text}>
            <div className={styles.titles}>
              <div className={styles.title}>{characterActivityName}</div>
              <div
                className={styles.subtitle}
                style={estCaloriesStyle}
              >{`250 est calories `}</div>
            </div>
            <div className={styles.duration}>
              <img
                className={styles.durationChild}
                alt=""
                src={activityIconUrl3}
              />
              <div className={styles.div} style={div3Style}>
                58:24
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.column1}>
        <div className={styles.exercisecard2}>
          <img className={styles.imageIcon} alt="" src={activityImageUrl5} />
          <div className={styles.text}>
            <div className={styles.titles}>
              <div className={styles.title}>{girlYogaActivityName}</div>
              <div
                className={styles.subtitle}
                style={estCalories1Style}
              >{`250 est calories `}</div>
            </div>
            <div className={styles.duration}>
              <img
                className={styles.durationChild}
                alt=""
                src={activityIconUrl4}
              />
              <div className={styles.div} style={div4Style}>
                58:24
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exercisecard}>
          <img className={styles.imageIcon} alt="" src={characterImageUrl} />
          <div className={styles.text}>
            <div className={styles.titles}>
              <div className={styles.title}>{oldManActivityName}</div>
              <div
                className={styles.subtitle}
                style={estCalories2Style}
              >{`250 est calories `}</div>
            </div>
            <div className={styles.duration}>
              <img
                className={styles.durationChild}
                alt=""
                src={activityImageUrl6}
              />
              <div className={styles.div} style={div5Style}>
                58:24
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCardContainer;
