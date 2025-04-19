import styles from "./page.module.css";
import DetailContactForm from "@/app/components/detail/DetailContactForm/DetailContactForm";
import DetailContactTitle from "@/app/components/detail/DetailContactTitle/DetailContactTitle";

const DetailContactPage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;

  return (
    <div className={styles.wrapper}>
      <DetailContactTitle id={id} />
      <DetailContactForm id={id} />
    </div>
  );
};

export default DetailContactPage;
