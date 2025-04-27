import FilterAndResetButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import Title from "@/app/components/common/title/Title";
import styles from "./layout.module.css";
import React, { ReactElement } from "react";
import RentGoogleMap from "@/app/components/rent/RentGoogleMap/RentGoogleMap";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.wrapper}>
      <Title title={"借りる / Rent"} />
      <RentGoogleMap />
      <FilterAndResetButtons />
      {children}
    </div>
  );
};

export default Layout;
