import styles from "./Skeleton.module.scss";

const Skeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span className={styles.icon}></span>
        <span className={styles.titleNode}></span>
      </div>

      <div className={styles.tileWrapper}>
        <div className={styles.tile}>
          <div className={styles.img}></div>
          <div className={styles.text}></div>
          <div className={styles.btn}></div>
        </div>

        <div className={styles.tile}>
          <div className={styles.img}></div>
          <div className={styles.text}></div>
          <div className={styles.btn}></div>
        </div>

        <div className={styles.tile}>
          <div className={styles.img}></div>
          <div className={styles.text}></div>
          <div className={styles.btn}></div>
        </div>

        <div className={styles.tile}>
          <div className={styles.img}></div>
          <div className={styles.text}></div>
          <div className={styles.btn}></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
