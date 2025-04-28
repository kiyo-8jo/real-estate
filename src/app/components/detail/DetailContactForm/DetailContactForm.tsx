"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./DetailContactForm.module.css";
import Document from "../../common/document/Document";

interface DetailContactFormProps {
  id: number;
}

const DetailContactForm = (props: DetailContactFormProps) => {
  const router = useRouter();
  // documentを表示させるかどうかのstate
  const [display, setDisplay] = useState<boolean>(false);

  // サニタイズ用関数
  const getSanitizedValue = (inputValue: FormDataEntryValue | null) => {
    return String(inputValue)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;");
  };

  // formのsubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = getSanitizedValue(form.get("name"));
    const tel = getSanitizedValue(form.get("tel"));
    const email = getSanitizedValue(form.get("email"));
    const inquiry = getSanitizedValue(form.get("inquiry"));

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    try {
      await fetch(`${API_URL}/api/sendEmail/detailContact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, tel, email, inquiry, id: props.id }),
      });
    } catch (error) {
      alert(error);
    }
    router.push("/");
    alert("メールを送信しました");
  };

  return (
    <form
      onSubmit={async (formData) => {
        handleSubmit(formData);
      }}
    >
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
          name="name"
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
          name="tel"
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
          name="email"
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
          name="inquiry"
          required
        ></textarea>
      </div>
      <div className={styles.personalDataContainer}>
        <p className={styles.title}>個人情報について</p>
        <div className={styles.test} id="personal_data">
          <div>
            <span className={styles.click} onClick={() => setDisplay(true)}>
              クリックしてポリシーを確認して下さい
            </span>
            <div className={styles.input_container}>
              <input type="checkbox" id="checkbox" required />
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
  );
};

export default DetailContactForm;
