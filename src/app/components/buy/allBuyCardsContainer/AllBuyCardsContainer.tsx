import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllBuyCardsContainer.module.css";

interface AllBuyCardsContainerProps {
  area: string | null;
  buildingType: string | null;
  sort: string;
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const AllBuyCardsContainer = async ({
  area,
  buildingType,
  sort,
}: AllBuyCardsContainerProps) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(
    `${API_URL}/api/getBuyData?area=${area}&buildingType=${buildingType}&sort=${sort}`,
    { cache: "no-store" }
  );

  const realEstates = await res.json();

  return (
    <div className={styles.homes_container}>
      {realEstates.length === 0 ? (
        <p className={styles.no_items}>該当する物件がありません</p>
      ) : (
        <div className={styles.homes_container}>
          {realEstates.map((data: RealEstateDataType) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBuyCardsContainer;
