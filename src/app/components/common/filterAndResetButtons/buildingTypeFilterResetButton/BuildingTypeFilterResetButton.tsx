import Link from "next/link";
import styles from "./BuildingTypeFilterResetButton.module.css";

interface BuildingTypeFilterResetButton {
  setBuildingType: React.Dispatch<React.SetStateAction<string | null>>;
  area: string | null;
  option: string;
}

const BuildingTypeFilterResetButton = ({
  setBuildingType,
  area,
  option,
}: BuildingTypeFilterResetButton) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setBuildingType(null);
      }}
    >
      <Link
        href={`/buy?area=${area}&buildingType=null&sort=${option}`}
        scroll={false}
      >
        Reset
      </Link>
    </div>
  );
};

export default BuildingTypeFilterResetButton;
