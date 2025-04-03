import Title from "../../common/title/Title";
import styles from "./Access.module.css";

const Access = () => {
  return (
    <div className={styles.wrapper}>
      <Title title={"アクセス / Access"} />
      <div className={styles.content_container}>
        <div className={styles.left_container}>map</div>
        <div className={styles.right_container}>
          <div className={styles.container}>
            <p className={styles.label}>住所</p>
            <p className={styles.value}>東京都八丈島八丈町三根5392</p>
          </div>
          <div className={styles.container}>
            <p className={styles.label}>TEL</p>
            <p className={styles.value}>00-0000-0000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
