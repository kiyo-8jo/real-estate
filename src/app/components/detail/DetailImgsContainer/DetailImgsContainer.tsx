import { supabase } from "@/app/lib/supabase";

import styles from './DetailImgsContainer.module.css'

import "swiper/css";
import DetailImgs from "../DetailImgs/DetailImgs";

interface DetailImgsContainerProps {
  id: number;
}

const DetailImgsContainer = async (props: DetailImgsContainerProps) => {
  // 表示している物件に該当するimgをstorageから取得
  const { data } = await supabase.storage.from("images").list(`${props.id}`);
  const dataLength = data!.length;

  //imgのurlを格納する配列
  const urlAry = [];

  for (let i = 1; i <= dataLength; i++) {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`${props.id}/${i}.png`);
    const imgUrl = data.publicUrl;
    urlAry.push(imgUrl);
  }

  return (
    <div className={styles.wrapper}>
      <DetailImgs urlAry={urlAry} />
    </div>
  );
};

export default DetailImgsContainer;
