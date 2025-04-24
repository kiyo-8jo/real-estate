"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { FaHome } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
// import { IoMdMail } from "react-icons/io";

const Header = () => {
  const query = "?area=null&buildingType=null&sort=recommendation";
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          <Link href="/">アイランド不動産</Link>
        </h1>
      </div>
      <div className={styles.link_container}>
        <div>
          <Link href="/rent">
            <IoHomeOutline />
            <p>借りる</p>
          </Link>
        </div>
        <div>
          <Link href={`/buy${query}`}>
            <FaHome />
            <p>買う</p>
          </Link>
        </div>
        <div>
          <Link href="/owner">
            <FaPerson />
            <p>オーナー様</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
