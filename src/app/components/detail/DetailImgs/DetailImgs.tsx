import { supabase } from "@/app/lib/supabase";
import Image from "next/image";
// import styles from './DetailImgs.module.css'

interface DetailImgsProps {
  id: number;
}

const DetailImgs = async (props: DetailImgsProps) => {
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
    <div>
      {urlAry.map((url) => {
        return <Image src={url} alt={url} width={500} height={400} key={url} />;
      })}
    </div>
  );
};

export default DetailImgs;
