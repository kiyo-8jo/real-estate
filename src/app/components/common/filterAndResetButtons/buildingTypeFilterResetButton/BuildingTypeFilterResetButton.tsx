import Link from "next/link";
import styles from "./BuildingTypeFilterResetButton.module.css";

interface BuildingTypeFilterResetButton {
  setBuildingType: React.Dispatch<React.SetStateAction<string | null>>;
  area: string | null;
  sort: string;
  type: string;
}

const BuildingTypeFilterResetButton = ({
  setBuildingType,
  area,
  sort,
  type,
}: BuildingTypeFilterResetButton) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setBuildingType(null);
      }}
    >
      <Link
        href={`${type}?area=${area}&buildingType=null&sort=${sort}`}
        scroll={false}
      >
        Reset
      </Link>
    </div>
  );
};

export default BuildingTypeFilterResetButton;
