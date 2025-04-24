"use client";

import React from "react";
import styles from "./Select.module.css";
import { options } from "@/app/options/options";
import { useRouter } from "next/navigation";

interface SelectProps {
  setOption: React.Dispatch<React.SetStateAction<string>>;
  area: string | null;
  buildingType: string | null;
}

const Select = ({ setOption, area, buildingType }: SelectProps) => {
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
    router.push(
      `/buy?area=${area}&buildingType=${buildingType}&sort=${e.target.value}`,
      { scroll: false }
    );
  };
  return (
    <select
      className={styles.wrapper}
      onChange={(e) => {
        handleChange(e);
      }}
      id="options"
    >
      {options.map((_option) => (
        <option key={_option.value} value={_option.value}>
          {_option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
