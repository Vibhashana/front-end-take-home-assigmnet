import { IconCheck } from "@tabler/icons-react";
import Button from "./../Button";
import styles from "./Card.module.scss";

const Card = ({ image, title, id, handleSelection, size, selected }) => {
  return (
    <div className={`${styles.wrapper} ${selected ? styles.selected : null}`}>
      <div className={size === "sm" ? styles.smallInner : styles.inner}>
        {size !== "sm" && (
          <span className={styles.checked}>
            <IconCheck />
          </span>
        )}
        <div
          className={size === "sm" ? styles.smallImgWrapper : styles.imgWrapper}
        >
          <img src={image} alt={title} loading="lazy" className={styles.img} />
        </div>
        <div className={styles.titleWrapper}>
          <p id={id}>{title}</p>
          {size !== "sm" && (
            <Button
              variant="secondary"
              size="small"
              disabled={selected}
              onClick={handleSelection}
              aria-describedby={id}
            >
              {selected ? "Selected" : "Select"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
