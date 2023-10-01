import {
  IconPhotoStar,
  IconChairDirector,
  IconMan,
  IconWoman,
  IconUsers,
  IconSparkles,
} from "@tabler/icons-react";

import styles from "./Title.module.scss";

const Title = ({ category, title }) => {
  const icon = (category) => {
    switch (category) {
      case "best-picture":
        return <IconPhotoStar />;

      case "best-director":
        return <IconChairDirector />;

      case "best-actor":
        return <IconMan />;

      case "best-actress":
        return <IconWoman />;

      case "best-supporting-actor":
        return <IconUsers />;

      case "best-supporting-actress":
        return <IconUsers />;

      case "best-visual-effects":
        return <IconSparkles />;

      default:
        return null;
    }
  };

  return (
    <div className={`${styles.wrapper} | flex align-items-center`}>
      {icon(category)}
      <h2 className={styles.text}>{title}</h2>
    </div>
  );
};

export default Title;
