import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "../Skeleton/Skeleton";
import Title from "../Title/Title";
import Card from "../Card";
import styles from "./Ballot.module.scss";
import Button from "../Button";
import SuccessModal from "../SuccessModal/SuccessModal";

const API_URL = "http://localhost:8080/api/getBallotData";

const Ballot = () => {
  const [ballotData, setBallotData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowingSuccessModal, setIsShowingSuccessModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [error, setError] = useState(null);
  const [selectedBallot, setSelectedBallot] = useState({
    "best-picture": null,
    "best-director": null,
    "best-actor": null,
    "best-actress": null,
    "best-supporting-actor": null,
    "best-supporting-actress": null,
    "best-visual-effects": null,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setBallotData(response.data.items);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(
        "There seem to be an error loading data. Please try again later.",
      );
    }
  };

  const handleBallotSelection = (category, movie) => {
    setSelectedBallot((prevSelectedBallot) => ({
      ...prevSelectedBallot,
      [category]: movie,
    }));
  };

  const submitBallot = () => {
    try {
      setModalContent(() => (
        <div className={styles.result}>
          <h4 className={styles.successTitle}>
            Your selections has been submitted successfully.
          </h4>
          <p>Here is the summary of your submission:</p>
          <div className={styles.resultInner}>
            {ballotData.map((item, index) => (
              <div key={index}>
                <strong className={styles.categoryTitle}>{item.title}</strong>
                <Card
                  image={selectedBallot[item.id].photoUrL}
                  title={selectedBallot[item.id].title}
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>
      ));

      setIsShowingSuccessModal(true);
      setSelectedBallot({
        "best-picture": null,
        "best-director": null,
        "best-actor": null,
        "best-actress": null,
        "best-supporting-actor": null,
        "best-supporting-actress": null,
        "best-visual-effects": null,
      });
    } catch (error) {}
  };

  const dismissModal = () => {
    setIsShowingSuccessModal(false);
    setModalContent(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="container">
          <Skeleton />
        </div>
      ) : error ? (
        <div className="container">
          <h4>Uh oh...</h4>
          <p>{error}</p>
        </div>
      ) : (
        <div className="container">
          {ballotData.map((category) => (
            <div className={styles.item} key={`category-${category.id}`}>
              <Title category={category.id} title={category.title} />

              <div className={styles.inner}>
                {category.items.map((item) => (
                  <Card
                    key={`item-${item.id}`}
                    image={item.photoUrL}
                    title={item.title}
                    id={category.id}
                    handleSelection={() =>
                      handleBallotSelection(category.id, item)
                    }
                    selected={selectedBallot[category.id]?.id === item.id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {Object.values(selectedBallot).some((value) => value !== null) && (
        <footer className={styles.footer}>
          <div className="container">
            <Button
              type="button"
              variant="primary"
              disabled={
                !Object.values(selectedBallot).every((value) => value !== null)
              }
              onClick={submitBallot}
            >
              Submit your vote
            </Button>
          </div>
        </footer>
      )}

      {isShowingSuccessModal && (
        <SuccessModal
          title="Successfully submitted!"
          dismissModal={dismissModal}
        >
          {modalContent}
        </SuccessModal>
      )}
    </>
  );
};

export default Ballot;
