import { IconX } from "@tabler/icons-react";
import styles from "./SuccessModal.module.scss";

const SuccessModal = ({ title, children, dismissModal }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>
          {title}
          <button
            type="button"
            className={styles.closeBtn}
            onClick={dismissModal}
            title="Close"
          >
            <IconX />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default SuccessModal;
