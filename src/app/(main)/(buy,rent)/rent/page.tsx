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
    <div>
      <AllRentCardsContainer
        area={area}
        buildingType={buildingType}
        sort={sort}
      />
    </div>
  );
};

export default RentPage;
