import { RealEstateDataType } from "@/app/types/types";
import styles from "./Card.module.css";
import Link from "next/link";
import {
  getTranslatedArea,
  getTranslatedBuildingType,
  getTranslatedType,
} from "@/app/hooks/getTranslatedValue";

interface CardProps {
  data: RealEstateDataType;
}

const Card = ({ data }: CardProps) => {
  return (
    <Link href={`/detail/${data.id}`} className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <div className={styles.status_container}>
          <p>{`${getTranslatedType(data.type)} / ${getTranslatedBuildingType(
            data.buildingType
          )}`}</p>
          <p>{getTranslatedArea(data.area)}</p>
        </div>
        <h3>{data.name}</h3>
      </div>
      <div className={styles.main_information_wrapper}>
        <div className={styles.left_container}>
          <div className={styles.img}>img</div>
        </div>
        <div className={`${styles.right_container}`}>
          <div className={styles.container}>
            <p className={styles.label}>住所</p>
            <p className={styles.value}>{data.address}</p>
          </div>
          <div className={styles.container}>
            <p className={styles.label}>築年</p>
            <p className={styles.value}>{data.year}年</p>
          </div>
          <div className={styles.container}>
            <p className={styles.label}>階建</p>
            <p className={styles.value}>{data.allFloor}階建</p>
          </div>
        </div>
      </div>
      <div className={styles.sub_information_wrapper}>
        <div className={styles.container}>
          <div className={styles.label}>
            <p>見取り図</p>
          </div>
          <div className={styles.value}>img</div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            <p>階</p>
          </div>
          <div className={styles.value}>
            <p>{data.floor}階</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            <p>賃料</p>
          </div>
          <div className={styles.value}>
            <p>{data.value}円</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            <p>間取り/専有面積</p>
          </div>
          <div className={styles.value}>
            <p>
              {`${data.layout} / ${data.space}m`}
              <sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
