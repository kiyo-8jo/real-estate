import Link from "next/link";
import styles from "./DetailContact.module.css";
import { RealEstateDataType } from "@/app/types/types";

interface DetailContact {
  realEstate: RealEstateDataType;
}

const DetailContactButton = (props: DetailContact) => {
  return (
    <div className={styles.wrapper}>
      <Link href={`/detail/${props.realEstate.id}/contact`}>
        <div className={styles.btn}>
          <span>この物件を問い合わせる</span>
        </div>
      </Link>
    </div>
  );
};

export default DetailContactButton;
