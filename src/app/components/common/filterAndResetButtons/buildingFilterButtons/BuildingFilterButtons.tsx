"use client";

import { buildingTypeArray } from "@/app/options/options";
import Link from "next/link";

import styles from "./BuildingFilterButtons.module.css";

interface BuildingFilterButtonsProps {
  buildingType: string | null;
  setBuildingType: React.Dispatch<React.SetStateAction<string | null>>;
  area: string | null;
  sort: string;
  type: string;
}

const BuildingFilterButtons = ({
  buildingType,
  setBuildingType,
  area,
  sort,
  type,
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
            href={`${type}?area=${area}&buildingType=${_buildingType.value}&sort=${sort}`}
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
