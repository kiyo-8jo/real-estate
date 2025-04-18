import { buildingTypeArray } from "@/app/options/options";
import styles from "./DetailTable.module.css";
import { RealEstateDataType } from "@/app/types/types";

interface DetailTableProps {
  realEstate: RealEstateDataType;
}

const DetailTable = (props: DetailTableProps) => {
  // 建物種別を日本語に変換する関数
  const changeBuildingTypeToJap = () => {
    let buildingLabel = "";
    buildingTypeArray.map((buildingType) => {
      if (buildingType.value === props.realEstate.buildingType) {
        buildingLabel = buildingType.label;
      }
    });
    return buildingLabel;
  };

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>所在地</th>
          <td colSpan={4}>{props.realEstate.address}</td>
        </tr>
        <tr>
          <th>建物種別</th>
          <td colSpan={4}>{changeBuildingTypeToJap()}</td>
        </tr>
        <tr>
          <th>間取り</th>
          <td>{props.realEstate.layout}</td>
          <th>専有面積</th>
          <td>
            {props.realEstate.space}m<sup>2</sup>
          </td>
        </tr>
        <tr>
          <th>築年数</th>
          <td>築{props.realEstate.year}年</td>
          <th>階</th>
          <td>1階</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailTable;
