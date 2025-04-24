"use client";

import { areaArray } from "@/app/options/options";
import Link from "next/link";

import styles from "./AreaFilterButtons.module.css";

interface AreaFilterButtonsProps {
  area: string | null;
  setArea: React.Dispatch<React.SetStateAction<string | null>>;
  buildingType: string | null;
  option: string;
}

const AreaFilterButtons = ({
  area,
  setArea,
  buildingType,
  option,
}: AreaFilterButtonsProps) => {
  return (
    <div className={styles.wrapper}>
      {areaArray.map((_area) => (
        <button
          key={_area.value}
          onClick={() => setArea(_area.value)}
          className={`${area === _area.value && styles["active"]}`}
        >
          <Link
            href={`/buy?area=${_area.value}&buildingType=${buildingType}&sort=${option}`}
            scroll={false}
          >
            {_area.label}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default AreaFilterButtons;
