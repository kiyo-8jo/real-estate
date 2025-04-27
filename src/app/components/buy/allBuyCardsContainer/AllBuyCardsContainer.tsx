import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllBuyCardsContainer.module.css";

interface AllBuyCardsContainerProps {
  realEstates: RealEstateDataType[];
}

const AllBuyCardsContainer = async ({
  realEstates,
}: AllBuyCardsContainerProps) => {
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
