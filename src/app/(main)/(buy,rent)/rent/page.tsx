import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import SelectButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import RentGoogleMap from "@/app/components/rent/RentGoogleMap/RentGoogleMap";
import Loading from "@/app/components/common/loading/Loading";
import { Suspense } from "react";
import AllRentCardsContainer from "@/app/components/rent/allRentCardsContainer/AllRentCardsContainer";

const RentPage = async ({
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
      <Title title={"借りる / Rent"} />
      <RentGoogleMap />
      <SelectButtons />
      <Suspense fallback={<Loading />}>
        <AllRentCardsContainer
          area={area}
          buildingType={buildingType}
          sort={sort}
        />
      </Suspense>
    </div>
  );
};

export default RentPage;
