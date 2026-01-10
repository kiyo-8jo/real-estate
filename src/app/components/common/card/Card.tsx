import { RealEstateDataType } from "@/app/types/types";
import styles from "./Card.module.css";
import Link from "next/link";
import {
  getTranslatedArea,
  getTranslatedBuildingType,
  getTranslatedType,
} from "@/app/hooks/getTranslatedValue";
import { supabase } from "@/app/lib/supabase";
import Image from "next/image";

interface CardProps {
  buildingData: RealEstateDataType;
}

const Card = async ({ buildingData }: CardProps) => {
  // 表示している物件に該当する見取り図をstorageから取得
  const floorImage = supabase.storage
    .from("floor-images")
    .getPublicUrl(`${buildingData.id}/image.png`).data;
  // 見取り図のurl
  const floorImageUrl = floorImage.publicUrl;

  // 物件のメイン画像
  const mainImage = supabase.storage
    .from("images")
    .getPublicUrl(`${buildingData.id}/${buildingData.id}-1.png`).data;
  // メイン画像のurl
  const mainImageUrl = mainImage.publicUrl;

  return (
    <Link href={`/detail/${buildingData.id}`} className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <div className={styles.status_container}>
          <p>{`${getTranslatedType(buildingData.type)} / ${getTranslatedBuildingType(
            buildingData.buildingType
          )}`}</p>
          <p>{getTranslatedArea(buildingData.area)}</p>
        </div>
        <h3>{buildingData.name}</h3>
      </div>
      <div className={styles.main_information_wrapper}>
        <div className={styles.left_container}>
          <Image
            alt={mainImageUrl}
            src={mainImageUrl}
            width={288}
            height={162}
          />
        </div>
        <div className={`${styles.right_container}`}>
          <div className={styles.container}>
            <p className={styles.label}>住所</p>
            <p className={styles.value}>{buildingData.address}</p>
          </div>
          <div className={styles.container}>
            <p className={styles.label}>築年</p>
            <p className={styles.value}>{buildingData.year}年</p>
          </div>
          <div className={styles.container}>
            <p className={styles.label}>階建</p>
            <p className={styles.value}>{buildingData.allFloor}階建</p>
          </div>
        </div>
      </div>
      <div className={styles.sub_information_wrapper}>
        <div className={styles.container}>
          <div className={styles.label}>
            <p>見取り図</p>
          </div>
          <div className={styles.value}>
            <Image
              alt={floorImageUrl}
              src={floorImageUrl}
              width={150}
              height={64}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            <p>階</p>
          </div>
          <div className={styles.value}>
            <p>{buildingData.floor}階</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            <p>賃料</p>
          </div>
          <div className={styles.value}>
            <p>{buildingData.value}円</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            <p>間取り/専有面積</p>
          </div>
          <div className={styles.value}>
            <p>
              {`${buildingData.layout} / ${buildingData.space}m`}
              <sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
