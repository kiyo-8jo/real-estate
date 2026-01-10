import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllRentCardsContainer.module.css";

interface AllRentCardsContainerProps {
  realEstates: RealEstateDataType[];
}

const AllRentCardsContainer = async ({
  realEstates,
}: AllRentCardsContainerProps) => {
  return (
    <div className={styles.homes_container}>
      {realEstates.length === 0 ? (
        <p className={styles.no_items}>該当する物件がありません</p>
      ) : (
        <div className={styles.homes_container}>
          {realEstates.map((data: RealEstateDataType) => (
            <Card key={data.id} buildingData={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRentCardsContainer;
