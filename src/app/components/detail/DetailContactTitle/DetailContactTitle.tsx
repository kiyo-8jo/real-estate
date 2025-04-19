import { RealEstateDataType } from "@/app/types/types";
import styles from "./DetailContactTitle.module.css";

interface DetailContactTitleProps {
  id: number;
}

const DetailContactTitle = async (props: DetailContactTitleProps) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/getDetailData/${props.id}`, {
    cache: "no-store",
  });
  const realEstate: RealEstateDataType = await res.json();

  return (
    <h2 className={styles.title}>{`${realEstate.name}の問い合わせ`}</h2>
  );
};

export default DetailContactTitle;
