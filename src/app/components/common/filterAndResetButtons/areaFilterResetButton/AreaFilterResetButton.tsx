import Link from "next/link";
import styles from "./AreaFilterResetButton.module.css";

interface AreaFilterResetButtonProps {
  setArea: React.Dispatch<React.SetStateAction<string | null>>;
  buildingType: string | null;
  option: string;
}

const AreaFilterResetButton = ({
  setArea,
  buildingType,
  option,
}: AreaFilterResetButtonProps) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setArea(null);
      }}
    >
      <Link
        href={`/buy?area=null&buildingType=${buildingType}&sort=${option}`}
        scroll={false}
      >
        Reset
      </Link>
    </div>
  );
};

export default AreaFilterResetButton;
