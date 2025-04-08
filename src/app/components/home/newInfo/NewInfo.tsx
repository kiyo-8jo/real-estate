import { Suspense } from "react";
import Title from "../../common/title/Title";
import NewFiveCardsContainer from "./NewFiveCardsContainer/NewFiveCardsContainer";
import styles from "./NewInfo.module.css";
import Loading from "../../common/loading/Loading";


const NewInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Title title={"新着情報 / New Information"} />
      <Suspense fallback={<Loading />}>
        <NewFiveCardsContainer />
      </Suspense>
    </div>
  );
};

export default NewInfo;
