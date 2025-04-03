import Access from "@/app/components/home/access/Access";
import styles from "./page.module.css";
import MainImg from "@/app/components/img/main/MainImg";
import NewInfo from "@/app/components/home/newInfo/NewInfo";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <MainImg />
      <NewInfo />
      <Access />
    </div>
  );
}
