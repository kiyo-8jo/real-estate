import AllRentCardsContainer from "@/app/components/rent/allRentCardsContainer/AllRentCardsContainer";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

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

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${API_URL}/api/getRentData?area=${area}&buildingType=${buildingType}&sort=${sort}`,
    { cache: "no-store" }
  );

  const realEstates = await res.json();

  return <AllRentCardsContainer realEstates={realEstates} />;
};

export default RentPage;
