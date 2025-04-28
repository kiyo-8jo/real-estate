"use client";

import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import { useState } from "react";
import Document from "@/app/components/common/document/Document";
import { useRouter } from "next/navigation";
import { sendOwnerEmailAction } from "@/app/hooks/email/sendOwnerEmailAction";

const OwnerPage = () => {
  const router = useRouter();
  // documentを表示させるかどうかのstate
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Title title="オーナー様用お問い合わせ" />
      <form
        action={async (formData) => {
          await sendOwnerEmailAction(formData);
          alert("メールを送信しました");
          router.push("/");
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
          <div id="personal_data">
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
    </div>
  );
};

export default OwnerPage;
