import "./sass/main.scss";
import styles from "./App.module.scss";
import Header from "./Components/Header";
import Ballot from "./Components/Ballot";

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1 className={styles.title}>Movie Awards 2023</h1>
          <p>Please select one nominee form each category</p>
          <br />
        </div>
        <Ballot />
      </main>
    </>
  );
}

export default App;
