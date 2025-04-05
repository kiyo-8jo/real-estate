import { Html } from "@react-email/components";

interface EmailProps {
  name: string;
  tel: string;
  email: string;
  inquiry: string;
}

export default function Email({ name, tel, email, inquiry }: EmailProps) {
  return (
    <Html style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "32px" }}>問い合わせメールが届きました</h1>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              marginRight: "20px",
            }}
          >
            氏名:
          </p>
          <p>{name}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ marginRight: "20px" }}>TEL:</p>
          <p>{tel}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ marginRight: "20px" }}>Email:</p>
          <p>{email}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ marginRight: "20px" }}>問い合わせ内容:</p>
          <p>{inquiry}</p>
        </div>
      </div>
    </Html>
  );
}
