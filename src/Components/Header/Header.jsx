import styles from "./Header.module.scss";
// import DarkLight from "../DarkLight";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className="container | flex space-between align-items-center h-100">
        <span className={styles.logo}>
          <strong>Movie</strong>Awards
        </span>

        {/* <DarkLight /> */}
      </div>
    </header>
  );
};

export default Header;
