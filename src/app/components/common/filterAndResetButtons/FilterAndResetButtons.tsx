import FilterButton from "./filterButton/FilterButton";
import styles from "./FilterAndResetButtons.module.css";
import ResetButton from "./resetButton/ResetButton";

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
  const areaArray = [
    { value: "mitsune", label: "三根" },
    { value: "okago", label: "大賀郷" },
    { value: "kashitate", label: "樫立" },
    { value: "nakanogo", label: "中之郷" },
    { value: "sueyoshi", label: "末吉" },
    { value: "others", label: "その他" },
  ];
  const buildingTypeArray = [
    { value: "apartment", label: "アパート" },
    { value: "house", label: "一戸" },
    { value: "terrace", label: "テラス" },
    { value: "land", label: "土地" },
    { value: "shop", label: "店舗" },
    { value: "others", label: "その他" },
  ];
  const options = [
    { value: "recommendation", label: "おすすめ順" },
    { value: "new", label: "新着順" },
    { value: "cheap", label: "低価格順" },
    { value: "expensive", label: "高価格順" },
    { value: "year", label: "築年数が新しい順" },
    { value: "space", label: "専有面積が広い順" },
  ];
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
        <select onChange={(e) => setSelectedOption(e.target.value)} id="options">
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
