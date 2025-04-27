import BuyGoogleMap from "@/app/components/buy/BuyGoogleMap/BuyGoogleMap";
import FilterAndResetButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import Title from "@/app/components/common/title/Title";
import styles from "./layout.module.css";
import { ReactElement, Suspense } from "react";
import Loading from "@/app/components/common/loading/Loading";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.wrapper}>
      <Title title={"買う / Buy"} />
      <BuyGoogleMap />
      <Suspense fallback={<Loading />}>
        <FilterAndResetButtons />
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
