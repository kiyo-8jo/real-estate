"use client";

import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import { useState } from "react";
import Document from "@/app/components/common/document/Document";
import { useRouter } from "next/navigation";

const OwnerPage = () => {
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

    try {
      await fetch(`${API_URL}/api/sendEmail/ownerContact`, {
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
      <Title title="オーナー様用お問い合わせ" />
      <form onSubmit={handleSubmit}>
        {/* 名前 */}
        <div className={styles.form_part_container}>
          <div className={styles.label_container}>
            <label htmlFor="name">氏名</label>
          </div>

          <input
            type="text"
            id="name"
            placeholder="田中太郎"
            autoComplete="name"
            value={name}
            onChange={handleName}
            required
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
            required
          />
        </div>
        {/*email  */}
        <div className={styles.form_part_container}>
          <div className={styles.label_container}>
            <label htmlFor="email">メールアドレス</label>
          </div>

          <input
            type="email"
            id="email"
            placeholder="info@example.com"
            autoComplete="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>
        {/* inquiry */}
        <div className={styles.form_part_container}>
          <div className={styles.label_container}>
            <label htmlFor="inquiry">お問い合わせ内容</label>
          </div>
          <textarea
            id="inquiry"
            placeholder="お問い合わせ内容を入力してください"
            value={inquiry}
            onChange={handleInquiry}
            required
          ></textarea>
        </div>
        <div className={styles.personalDataContainer}>
          <p className={styles.title}>個人情報について</p>
          <div id="personal_data">
            <div>
              <span className={styles.click} onClick={() => setDisplay(true)}>
                クリックしてポリシーを確認して下さい
              </span>
              <div className={styles.input_container}>
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={checked}
                  onChange={handleChecked}
                  required
                />
                <label htmlFor="checkbox">ポリシーを確認し、同意しました</label>
              </div>
              {display && <Document />}
            </div>
          </div>
        </div>
        <div className={styles.button_container}>
          <button type="submit">送信する</button>
        </div>
      </form>
    </div>
  );
};

export default OwnerPage;
