import Title from "../../common/title/Title";
import NewFiveCardsContainer from "./NewFiveCardsContainer/NewFiveCardsContainer";
import styles from "./NewInfo.module.css";

const NewInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Title title={"新着情報 / New Information"} />
      <NewFiveCardsContainer />
    </div>
  );
};

export default NewInfo;
