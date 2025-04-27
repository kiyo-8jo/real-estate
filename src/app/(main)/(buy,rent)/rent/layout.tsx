import FilterAndResetButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import Loading from "@/app/components/common/loading/Loading";
import Title from "@/app/components/common/title/Title";
import styles from "./layout.module.css";
import React, { ReactElement, Suspense } from "react";
import RentGoogleMap from "@/app/components/rent/RentGoogleMap/RentGoogleMap";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.wrapper}>
      <Title title={"借りる / Rent"} />
      <RentGoogleMap />
      <Suspense fallback={<Loading />}>
        <FilterAndResetButtons />
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
