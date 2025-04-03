import styles from "./NewFiveCardsContainer.module.css";
import { RealEstateDataType } from "@/app/types/types";
import Card from "@/app/components/common/card/Card";

const NewFiveCardsContainer = async () => {
  // 全てのデータを新着順で取得
  const res = await fetch("http://localhost:3000/api/getAllData");
  const realEstates = await res.json();
  // 新着の5件のみ表示
  const filteredRealEstates = realEstates.slice(0, 5);

  return (
    <div className={styles.homes_container}>
      {filteredRealEstates!.map((data: RealEstateDataType) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default NewFiveCardsContainer;
