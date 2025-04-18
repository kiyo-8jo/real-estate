import DetailGoogleMap from "@/app/components/detail/DetailGoogleMap/DetailGoogleMap";
import styles from "./page.module.css";
import Title from "@/app/components/common/title/Title";
import { RealEstateDataType } from "@/app/types/types";
import { buildingTypeArray } from "@/app/options/options";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/getDetailData/${id}`, {
    cache: "no-store",
  });
  const realEstate: RealEstateDataType = await res.json();

  // 建物種別を日本語に変換する関数
  const changeBuildingTypeToJap = () => {
    let buildingLabel = "";
    buildingTypeArray.map((buildingType) => {
      if (buildingType.value === realEstate.buildingType) {
        buildingLabel = buildingType.label;
      }
    });
    return buildingLabel;
  };

  return (
    <div className={styles.wrapper}>
      <Title title={realEstate.name} />
      <div className={styles.value_container}>
        <div className={styles.main_value}>
          <p>{realEstate.value}万円</p>
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
      <DetailGoogleMap mapLat={realEstate.mapLat} mapLng={realEstate.mapLng} />
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>所在地</th>
            <td colSpan={4}>{realEstate.address}</td>
          </tr>
          <tr>
            <th>建物種別</th>
            <td colSpan={4}>{changeBuildingTypeToJap()}</td>
          </tr>
          <tr>
            <th>間取り</th>
            <td>{realEstate.layout}</td>
            <th>専有面積</th>
            <td>
              {realEstate.space}m<sup>2</sup>
            </td>
          </tr>
          <tr>
            <th>築年数</th>
            <td>築{realEstate.year}年</td>
            <th>階</th>
            <td>1階</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailPage;
