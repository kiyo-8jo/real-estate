import { supabase } from "@/app/lib/supabase";
import Image from "next/image";
// import styles from './DetailImgs.module.css'

interface DetailImgsProps {
  id: number;
}

const DetailImgs = (props: DetailImgsProps) => {
  const { data } = supabase.storage.from("images").getPublicUrl("1-1.png");
  const imgUrl = data.publicUrl;
  return (
    <div>
      <Image src={imgUrl} alt={imgUrl} width={500} height={400} />
    </div>
  );
};

export default DetailImgs;
