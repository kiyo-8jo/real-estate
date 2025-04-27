import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import SelectButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import { Suspense } from "react";
import Loading from "@/app/components/common/loading/Loading";
import AllBuyCardsContainer from "@/app/components/buy/allBuyCardsContainer/AllBuyCardsContainer";
import BuyGoogleMap from "@/app/components/buy/BuyGoogleMap/BuyGoogleMap";

const BuyPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    area: string | null;
    buildingType: string | null;
    sort: string;
  }>;
}) => {
  const { area, buildingType, sort } = await searchParams;

  return (
    <div className={styles.wrapper}>
      <Title title={"買う / Buy"} />
      <BuyGoogleMap />
      <SelectButtons />
      <Suspense fallback={<Loading />}>
        <AllBuyCardsContainer
          area={area}
          buildingType={buildingType}
          sort={sort}
        />
      </Suspense>
    </div>
  );
};

export default BuyPage;
