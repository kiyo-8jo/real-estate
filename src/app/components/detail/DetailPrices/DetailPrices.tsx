import { RealEstateDataType } from "@/app/types/types";
import styles from "./DetailPrices.module.css";

interface PricesProps {
  realEstate: RealEstateDataType;
}

const DetailPrices = (props: PricesProps) => {
  return (
    <div className={styles.value_container}>
      <div className={styles.main_value}>
        <p>{props.realEstate.value}万円</p>
        <p>/</p>
        <p>管理費・共益費： -</p>
      </div>
      <div className={styles.sub_value}>
        <p>敷金： -</p>
        <p>/</p>
        <p>礼金： -</p>
        <p>/</p>
        <p>保証金： -</p>
      </div>
    </div>
  );
};

export default DetailPrices;
