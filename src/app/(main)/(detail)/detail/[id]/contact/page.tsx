import styles from "./page.module.css";
import DetailContactForm from "@/app/components/detail/DetailContactForm/DetailContactForm";
import DetailContactTitle from "@/app/components/detail/DetailContactTitle/DetailContactTitle";
import { RealEstateDataType } from "@/app/types/types";

export const dynamic = "force-static";

const DetailContactPage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/getDetailData/${id}`);
  const realEstate: RealEstateDataType = await res.json();

  return (
    <div className={styles.wrapper}>
      <DetailContactTitle realEstate={realEstate} />
      <DetailContactForm id={id} />
    </div>
  );
};

export default DetailContactPage;
