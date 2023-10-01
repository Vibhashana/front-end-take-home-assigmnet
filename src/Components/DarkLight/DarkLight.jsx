import { useState } from "react";
import styles from "./DarkLight.module.scss";
import { IconSunHigh, IconMoon } from "@tabler/icons-react";

const DarkLight = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={handleChange}
      />
      <span className={styles.inner}>
        <span className={styles.icon}>
          <IconSunHigh size={16} />
        </span>
        <span className={styles.icon}>
          <IconMoon size={16} />
        </span>
      </span>
    </label>
  );
};

export default DarkLight;
