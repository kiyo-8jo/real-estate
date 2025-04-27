import BuyGoogleMap from "@/app/components/buy/BuyGoogleMap/BuyGoogleMap";
import FilterAndResetButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import Title from "@/app/components/common/title/Title";
import styles from "./layout.module.css";
import { ReactElement, Suspense } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.wrapper}>
      <Title title={"買う / Buy"} />
      <BuyGoogleMap />
      <Suspense>
        <FilterAndResetButtons />
      </Suspense>
      {children}
    </div>
  );
};

export default Layout;
