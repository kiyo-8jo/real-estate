import { RealEstateDataType } from "@/app/types/types";
import styles from "./DetailContactTitle.module.css";

interface DetailContactTitleProps {
  realEstate: RealEstateDataType;
}

const DetailContactTitle = (props: DetailContactTitleProps) => {
  return (
    <h2 className={styles.title}>{`${props.realEstate.name}の問い合わせ`}</h2>
  );
};

export default DetailContactTitle;
