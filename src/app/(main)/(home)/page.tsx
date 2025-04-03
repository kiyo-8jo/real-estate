import Access from "@/app/components/home/access/Access";
import styles from "./page.module.css";
import MainImg from "@/app/components/img/main/MainImg";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <MainImg />
      <Access />
    </div>
  );
}
