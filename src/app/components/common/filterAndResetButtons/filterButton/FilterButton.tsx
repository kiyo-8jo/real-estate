import styles from "../FilterAndResetButtons.module.css";

interface FilterButtonProps {
  setFunction: React.Dispatch<React.SetStateAction<string | null>>;
  selectedType: string | null;
  value: string;
  label: string;
}

const FilterButton = ({
  setFunction,
  selectedType,
  value,
  label,
}: FilterButtonProps) => {
  return (
    <button
      onClick={() => {
        setFunction(value);
      }}
      className={`${selectedType === value && styles["active"]}`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
