"use client";

import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import SelectButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import PageNation from "@/app/components/common/pageNation/PageNation";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";
import AllRentCardsContainer from "@/app/components/rent/allRentCardsContainer/AllRentCardsContainer";
import RentGoogleMap from "@/app/components/rent/RentGoogleMap/RentGoogleMap";

const RentPage = () => {
  // 取得したデータを格納するstate
  const [allRentRealEstates, setAllRentRealEstates] = useState<
    RealEstateDataType[]
  >([]);
  // 現在のページ位置を格納するstate
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 表示するデータを格納するstate
  const [displayRentRealEstates, setDisplayRentRealEstates] = useState<
    RealEstateDataType[]
  >([]);

  // データをソートするための値を格納するstate
  const [selectedOption, setSelectedOption] =
    useState<string>("recommendation");

  // データを絞り込むための値（地域）を格納するstate
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  // データを絞り込むための値（種類）を格納するstate
  const [selectedBuildingType, setSelectedBuildingType] = useState<
    string | null
  >(null);

  // 1ページあたりに表示する要素数
  const displayItemsNumber = 2;

  //取得した要素数
  const getItemsNumber = Object.keys(allRentRealEstates).length;

  useEffect(() => {
    const fetchData = async () => {
      // selectedOptionによってたたくapiを変える
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(
        `${API_URL}/api/getAllRentData/${selectedOption}`,
        {
          method: "POST",
          body: JSON.stringify({
            // ソートのためにarea,buildingTypeをpost
            area: selectedArea,
            buildingType: selectedBuildingType,
          }),
          cache: "no-store",
        }
      );
      const _realEstates = await res.json();
      setAllRentRealEstates(_realEstates);
      setDisplayRentRealEstates(
        _realEstates.slice(
          currentPage * displayItemsNumber - displayItemsNumber,
          currentPage * displayItemsNumber
        )
      );
    };

    fetchData();
  }, [selectedOption, selectedArea, selectedBuildingType, currentPage]);

  return (
    <div className={styles.wrapper}>
      <Title title={"借りる / Rent"} />
      <RentGoogleMap/>
      <SelectButtons
        setSelectedOption={setSelectedOption}
        setSelectedArea={setSelectedArea}
        setSelectedBuildingType={setSelectedBuildingType}
        setCurrentPage={setCurrentPage}
        selectedArea={selectedArea}
        selectedBuildingType={selectedBuildingType}
      />
      <AllRentCardsContainer
        displayRentRealEstates={displayRentRealEstates}
        getItemsNumber={getItemsNumber}
      />
      <PageNation
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        displayItemsNumber={displayItemsNumber}
        getItemsNumber={getItemsNumber}
      />
    </div>
  );
};

export default RentPage;
