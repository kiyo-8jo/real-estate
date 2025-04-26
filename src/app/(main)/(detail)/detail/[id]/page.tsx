import { RealEstateDataType } from "@/app/types/types";
import styles from "./page.module.css";
import DetailGoogleMap from "@/app/components/detail/DetailGoogleMap/DetailGoogleMap";
import Title from "@/app/components/common/title/Title";
import DetailTable from "@/app/components/detail/DetailTable/DetailTable";
import DetailPrices from "@/app/components/detail/DetailPrices/DetailPrices";
import DetailContact from "@/app/components/detail/DetailContact/DetailContact";
import DetailImgsContainer from "@/app/components/detail/DetailImgsContainer/DetailImgsContainer";

export const dynamic = 'force-static'

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/getDetailData/${id}`);
  const realEstate: RealEstateDataType = await res.json();

  return (
    <div className={styles.wrapper}>
      <Title title={realEstate.name} />
      <div className={styles.sub_wrapper}>
        <DetailPrices realEstate={realEstate} />
        <DetailContact realEstate={realEstate} />
      </div>
      <DetailImgsContainer id={realEstate.id} />
      <DetailTable realEstate={realEstate} />
      <DetailGoogleMap mapLat={realEstate.mapLat} mapLng={realEstate.mapLng} />
    </div>
  );
};

export default DetailPage;
