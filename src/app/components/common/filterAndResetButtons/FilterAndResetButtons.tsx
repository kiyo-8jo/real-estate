import FilterButton from "./filterButton/FilterButton";
import styles from "./FilterAndResetButtons.module.css";
import ResetButton from "./resetButton/ResetButton";
import { areaArray, buildingTypeArray, options } from "@/app/options/options";

interface FilterAndResetButtonsProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  setSelectedArea: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedBuildingType: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  selectedArea: string | null;
  selectedBuildingType: string | null;
}

const FilterAndResetButtons = ({
  setSelectedOption,
  setSelectedArea,
  setSelectedBuildingType,
  setCurrentPage,
  selectedArea,
  selectedBuildingType,
}: FilterAndResetButtonsProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button_container}>
        <p>地域</p>
        {areaArray.map((area) => (
          <FilterButton
            key={area.value}
            setFunction={setSelectedArea}
            selectedType={selectedArea}
            value={area.value}
            label={area.label}
          />
        ))}
        <ResetButton
          setFunction={setSelectedArea}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className={styles.button_container}>
        <p>種類</p>
        {buildingTypeArray.map((buildingType) => (
          <FilterButton
            key={buildingType.value}
            setFunction={setSelectedBuildingType}
            selectedType={selectedBuildingType}
            value={buildingType.value}
            label={buildingType.label}
          />
        ))}
        <ResetButton
          setFunction={setSelectedBuildingType}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className={styles.select_container}>
        <p>並び替え :</p>
        <select
          onChange={(e) => setSelectedOption(e.target.value)}
          id="options"
        >
          {options.map((_option) => (
            <option key={_option.value} value={_option.value}>
              {_option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterAndResetButtons;
