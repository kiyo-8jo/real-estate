import AllBuyCardsContainer from "@/app/components/buy/allBuyCardsContainer/AllBuyCardsContainer";

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
    <div>
      <AllBuyCardsContainer
        area={area}
        buildingType={buildingType}
        sort={sort}
      />
    </div>
  );
};

export default BuyPage;
