import styles from "./PageNation.module.css";
import { SetStateAction } from "react";

interface PageNationProps {
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  currentPage: number;
  displayItemsNumber: number;
  getItemsNumber: number;
}

const PageNation = ({
  setCurrentPage,
  currentPage,
  displayItemsNumber,
  getItemsNumber,
}: PageNationProps) => {
  // 必要なページ数
  const pagesNumber = Math.ceil(getItemsNumber / displayItemsNumber);
  // ページを格納する空の配列
  const pagesArray: number[] = [];
  // 配列にページを格納
  for (let i = 1; i < pagesNumber + 1; i++) {
    pagesArray.push(i);
  }
  return (
    <div className={styles.wrapper}>
      {/* fetchした要素数が0でない場合表示 */}
      {getItemsNumber !== 0 && (
        <div className={styles.container}>
          {pagesArray.map((page) => (
            <p
              className={currentPage === page ? styles.active : ""}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageNation;
