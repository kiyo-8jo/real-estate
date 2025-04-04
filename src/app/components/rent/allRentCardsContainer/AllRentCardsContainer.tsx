import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllRentCardsContainer.module.css";

interface AllRentCardsProps {
  displayRentRealEstates: RealEstateDataType[];
  getItemsNumber: number;
}

const AllRentCardsContainer = ({
  displayRentRealEstates,
  getItemsNumber,
}: AllRentCardsProps) => {
  return (
    <div className={styles.homes_container}>
      {getItemsNumber === 0 ? (
        <p className={styles.no_items}>該当する物件がありません</p>
      ) : (
        <div className={styles.homes_container}>
          {displayRentRealEstates.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRentCardsContainer;
