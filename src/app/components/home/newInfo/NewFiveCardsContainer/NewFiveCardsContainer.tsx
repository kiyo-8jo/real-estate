import styles from "./NewFiveCardsContainer.module.css";
import { RealEstateDataType } from "@/app/types/types";
import Card from "@/app/components/common/card/Card";

export const dynamic = "force-dynamic"; //動的にレンダリングする
export const fetchCache = "force-no-store"; // 常に最新のデータを取得する

const NewFiveCardsContainer = async () => {
  // 全てのデータを新着順で取得
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/getAllData`, { cache: "no-store" });
  const realEstates = await res.json();
  // 新着の5件のみ表示
  const filteredRealEstates = realEstates.slice(0, 5);

  return (
    <div className={styles.homes_container}>
      {filteredRealEstates.map((data: RealEstateDataType) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default NewFiveCardsContainer;
