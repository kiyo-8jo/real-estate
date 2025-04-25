import Link from "next/link";
import styles from "./AreaFilterResetButton.module.css";

interface AreaFilterResetButtonProps {
  setArea: React.Dispatch<React.SetStateAction<string | null>>;
  buildingType: string | null;
  sort: string;
  type: string;
}

const AreaFilterResetButton = ({
  setArea,
  buildingType,
  sort,
  type,
}: AreaFilterResetButtonProps) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setArea(null);
      }}
    >
      <Link
        href={`${type}?area=null&buildingType=${buildingType}&sort=${sort}`}
        scroll={false}
      >
        Reset
      </Link>
    </div>
  );
};

export default AreaFilterResetButton;
