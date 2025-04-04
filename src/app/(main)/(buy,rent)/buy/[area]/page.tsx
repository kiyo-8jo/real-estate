"use client";

import Title from "@/app/components/common/title/Title";
import styles from "../page.module.css";
import SelectButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import PageNation from "@/app/components/common/pageNation/PageNation";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";
import AllBuyCardsContainer from "@/app/components/buy/allBuyCardsContainer/AllBuyCardsContainer";
import { useParams } from "next/navigation";
import BuyImg from "@/app/components/img/buy/BuyImg";

const BuyPage = () => {
  const { area }: { area: string } = useParams();

  // 取得したデータを格納するstate
  const [allBuyRealEstates, setAllBuyRealEstates] = useState<
    RealEstateDataType[]
  >([]);

  // 現在のページ位置を格納するstate
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 表示するデータを格納するstate
  const [displayBuyRealEstates, setDisplayBuyRealEstates] = useState<
    RealEstateDataType[]
  >([]);

  // データをソートするための値を格納するstate
  const [selectedOption, setSelectedOption] =
    useState<string>("recommendation");

  // データを絞り込むための値（地域）を格納するstate
  const [selectedArea, setSelectedArea] = useState<string | null>(area);

  // データを絞り込むための値（種類）を格納するstate
  const [selectedBuildingType, setSelectedBuildingType] = useState<
    string | null
  >(null);

  // 1ページあたりに表示する要素数
  const displayItemsNumber = 2;

  //取得した要素数
  const getItemsNumber = Object.keys(allBuyRealEstates).length;

  useEffect(() => {
    const fetchData = async () => {
      // selectedOptionによってたたくapiを変える
      const res = await fetch(
        `http://localhost:3000/api/getAllBuyData/${selectedOption}`,
        {
          method: "POST",
          body: JSON.stringify({
            // ソートのためにarea,buildingTypeをpost
            area: selectedArea,
            buildingType: selectedBuildingType,
          }),
        }
      );
      const _realEstates = await res.json();
      setAllBuyRealEstates(_realEstates);
      setDisplayBuyRealEstates(
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
      <Title title={"買う / Buy"} />
      <BuyImg/>
      <SelectButtons
        setSelectedOption={setSelectedOption}
        setSelectedArea={setSelectedArea}
        setSelectedBuildingType={setSelectedBuildingType}
        setCurrentPage={setCurrentPage}
        selectedArea={selectedArea}
        selectedBuildingType={selectedBuildingType}
      />
      <AllBuyCardsContainer
        displayBuyRealEstates={displayBuyRealEstates}
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

export default BuyPage;
