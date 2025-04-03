import styles from "./Title.module.css";

const Title = ({ title }: { title: string | undefined }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default Title;
