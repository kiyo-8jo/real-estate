"use client";

import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Document from "@/app/components/common/document/Document";
import { useParams, useRouter } from "next/navigation";

const DetailContactPage = () => {
  const { id } = useParams();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [buildingName, setBuildingName] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/api/getDetailData/${id}`, {
        cache: "no-store",
      });
      const _realEstate = await res.json();
      setBuildingName(_realEstate.name);
    };
    getData();
  }, [id, API_URL]);


  const router = useRouter();
  // documentを表示させるかどうかのstate
  const [display, setDisplay] = useState<boolean>(false);
  // checkboxにcheckされているかどうかのstate
  const [checked, setChecked] = useState<boolean>(false);

  // form入力内容
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [inquiry, setInquiry] = useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(getSanitizedValue(e.target.value));
  };
  const handleTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTel(getSanitizedValue(e.target.value));
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(getSanitizedValue(e.target.value));
  };
  const handleInquiry = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInquiry(getSanitizedValue(e.target.value));
  };
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  // サニタイズ用関数
  const getSanitizedValue = (inputValue: string) => {
    return String(inputValue)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;");
  };

  // formのsubmit
  const handleSubmit = async (e: React.FormEvent) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    e.preventDefault();
    if (!name || !email || !inquiry || !checked) {
      alert("必須項目に入力がありません");
      return;
    }
    try {
      await fetch(`${API_URL}/api/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, tel, email, inquiry }),
      });
    } catch (error) {
      alert(error);
    }
    router.push("/");
    alert("メールを送信しました");
  };

  return (
    <div className={styles.wrapper}>
      <Title title={`${buildingName}の問い合わせ`} />
      <form onSubmit={handleSubmit}>
        {/* 名前 */}
        <div className={styles.form_part_container}>
          <div className={styles.label_container}>
            <label htmlFor="name">氏名</label>
            <span>必須</span>
          </div>

          <input
            type="text"
            id="name"
            placeholder="田中太郎"
            autoComplete="name"
            value={name}
            onChange={handleName}
          />
        </div>
        {/*　電話番号  */}
        <div className={styles.form_part_container}>
          <div className={styles.label_container}>
            <label htmlFor="tel">電話番号</label>
          </div>
          <input
            type="tel"
            id="tel"
            placeholder="000-0000-0000"
            autoComplete="tel"
            value={tel}
            onChange={handleTel}
          />
        </div>
        {/*email  */}
        <div className={styles.form_part_container}>
          <div className={styles.label_container}>
            <label htmlFor="email">メールアドレス</label>
            <span>必須</span>
          </div>

          <input
            type="email"
            id="email"
            placeholder="info@example.com"
            autoComplete="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        {/* inquiry */}
        <div className={styles.form_part_container}>
          <div className={styles.label_container}>
            <label htmlFor="inquiry">お問い合わせ内容</label>
            <span>必須</span>
          </div>
          <textarea
            id="inquiry"
            placeholder="お問い合わせ内容を入力してください"
            value={inquiry}
            onChange={handleInquiry}
          ></textarea>
        </div>
        <div className={styles.personalDataContainer}>
          <p className={styles.title}>個人情報について</p>
          <div className={styles.test} id="personal_data">
            <div>
              <p className={styles.click} onClick={() => setDisplay(true)}>
                クリックしてポリシーを確認して下さい
              </p>
              {display && <Document />}
            </div>
            {display && (
              <div className={styles.input_container}>
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={checked}
                  onChange={handleChecked}
                />
                <label htmlFor="checkbox">ポリシーを確認し、同意しました</label>
              </div>
            )}
          </div>
        </div>
        <div className={styles.button_container}>
          <button type="submit">送信する</button>
        </div>
      </form>
    </div>
  );
};

export default DetailContactPage;
