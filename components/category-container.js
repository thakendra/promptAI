import styles from "./category-container.module.css";

const CategoryContainer = ({
  promptIdeasCount,
  promptIdeasText,
  videoCountText,
}) => {
  return (
    <div className={styles.category}>
      <div className={styles.div}>{promptIdeasCount}</div>
      <div className={styles.action}>
        <div className={styles.titles}>
          <div className={styles.title}>{promptIdeasText}</div>
          <div className={styles.courses}>{videoCountText}</div>
        </div>
        <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
      </div>
    </div>
  );
};

export default CategoryContainer;
