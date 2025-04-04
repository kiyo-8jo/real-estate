import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllBuyCardsContainer.module.css";

interface AllBuyCardsProps {
  displayBuyRealEstates: RealEstateDataType[];
  getItemsNumber: number;
}

const AllBuyCardsContainer = ({
  displayBuyRealEstates,
  getItemsNumber,
}: AllBuyCardsProps) => {
  return (
    <div className={styles.homes_container}>
      {getItemsNumber === 0 ? (
        <p className={styles.no_items}>該当する物件がありません</p>
      ) : (
        <div className={styles.homes_container}>
          {displayBuyRealEstates.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBuyCardsContainer;
