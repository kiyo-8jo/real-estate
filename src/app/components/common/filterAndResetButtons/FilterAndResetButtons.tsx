"use client";

import { useState } from "react";
import AreaFilterButtons from "./areaFilterButtons/AreaFilterButtons";
import AreaFilterResetButton from "./areaFilterResetButton/AreaFilterResetButton";
import styles from "./FilterAndResetButtons.module.css";
import BuildingTypeFilterResetButton from "./buildingTypeFilterResetButton/BuildingTypeFilterResetButton";
import BuildingFilterButtons from "./buildingFilterButtons/BuildingFilterButtons";
import Select from "./select/Select";
import { usePathname, useSearchParams } from "next/navigation";

const FilterAndResetButtons = () => {
  const searchParams = useSearchParams();
  // rentPageかrentPageか判別
  const type = usePathname();

  const [area, setArea] = useState<string | null>(
    searchParams.get("area") || null
  );
  const [buildingType, setBuildingType] = useState<string | null>(
    searchParams.get("buildingType")
  );
  const [sort, setSort] = useState<string>("recommendation");

  return (
    <div className={styles.wrapper}>
      <div className={styles.button_container}>
        <p>地域</p>
        <AreaFilterButtons
          area={area}
          setArea={setArea}
          buildingType={buildingType}
          sort={sort}
          type={type}
        />
        <AreaFilterResetButton
          setArea={setArea}
          buildingType={buildingType}
          sort={sort}
          type={type}
        />
      </div>
      <div className={styles.button_container}>
        <p>種類</p>
        <BuildingFilterButtons
          buildingType={buildingType}
          setBuildingType={setBuildingType}
          area={area}
          sort={sort}
          type={type}
        />
        <BuildingTypeFilterResetButton
          setBuildingType={setBuildingType}
          area={area}
          sort={sort}
          type={type}
        />
      </div>
      <div className={styles.select_container}>
        <Select
          setSort={setSort}
          area={area}
          buildingType={buildingType}
          type={type}
        />
      </div>
    </div>
  );
};

export default FilterAndResetButtons;
