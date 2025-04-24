"use client";

import { useState } from "react";
import AreaFilterButtons from "./areaFilterButtons/AreaFilterButtons";
import AreaFilterResetButton from "./areaFilterResetButton/AreaFilterResetButton";
import styles from "./FilterAndResetButtons.module.css";
import BuildingTypeFilterResetButton from "./buildingTypeFilterResetButton/BuildingTypeFilterResetButton";
import BuildingFilterButtons from "./buildingFilterButtons/BuildingFilterButtons";
import Select from "./select/Select";

const FilterAndResetButtons = () => {
  const [area, setArea] = useState<string | null>(null);
  const [buildingType, setBuildingType] = useState<string | null>(null);
  const [option, setOption] = useState<string>("recommendation");

  return (
    <div className={styles.wrapper}>
      <div className={styles.button_container}>
        <p>地域</p>
        <AreaFilterButtons
          area={area}
          setArea={setArea}
          buildingType={buildingType}
          option={option}
        />
        <AreaFilterResetButton
          setArea={setArea}
          buildingType={buildingType}
          option={option}
        />
      </div>
      <div className={styles.button_container}>
        <p>種類</p>
        <BuildingFilterButtons
          buildingType={buildingType}
          setBuildingType={setBuildingType}
          area={area}
          option={option}
        />
        <BuildingTypeFilterResetButton
          setBuildingType={setBuildingType}
          area={area}
          option={option}
        />
      </div>
      <div className={styles.select_container}>
        <Select setOption={setOption} area={area} buildingType={buildingType} />
      </div>
    </div>
  );
};

export default FilterAndResetButtons;
