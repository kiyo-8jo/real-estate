import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import SelectButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import { Suspense } from "react";
import Loading from "@/app/components/common/loading/Loading";
import AllBuyCardsContainer from "@/app/components/buy/allBuyCardsContainer/AllBuyCardsContainer";
import BuyGoogleMap from "@/app/components/buy/BuyGoogleMap/BuyGoogleMap";
import { RealEstateDataType } from "@/app/types/types";

export const dynamic = "force-static";

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
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(
    `${API_URL}/api/getBuyData?area=${area}&buildingType=${buildingType}&sort=${sort}`
  );

  const realEstates: RealEstateDataType[] = await res.json();

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
          realEstates={realEstates}
        />
      </Suspense>
    </div>
  );
};

export default BuyPage;
