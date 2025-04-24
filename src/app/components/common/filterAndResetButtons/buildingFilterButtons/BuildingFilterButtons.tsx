"use client";

import { buildingTypeArray } from "@/app/options/options";
import Link from "next/link";

import styles from "./BuildingFilterButtons.module.css";

interface BuildingFilterButtonsProps {
  buildingType: string | null;
  setBuildingType: React.Dispatch<React.SetStateAction<string | null>>;
  area: string | null;
  option: string;
}

const BuildingFilterButtons = ({
  buildingType,
  setBuildingType,
  area,
  option,
}: BuildingFilterButtonsProps) => {
  return (
    <div className={styles.wrapper}>
      {buildingTypeArray.map((_buildingType) => (
        <button
          key={_buildingType.value}
          onClick={() => setBuildingType(_buildingType.value)}
          className={`${buildingType === _buildingType.value && styles["active"]}`}
        >
          <Link
            href={`/buy?area=${area}&buildingType=${_buildingType.value}&sort=${option}`}
            scroll={false}
          >
            {_buildingType.label}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default BuildingFilterButtons;
