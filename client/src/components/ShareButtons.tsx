/**
 * ShareButtons — SNSシェア導線（軍配 KPI宣言: シェア経由の流入・申込）
 * X / Facebook / LINE / Threads / リンクコピー
 * プリセット文はページごとの「売れる紹介文」（マーケティング特化）
 */
import { useState } from "react";

type Props = {
  url: string;
  text: string;
  title?: string;
};

const X_ICON = "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";
const FB_ICON = "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z";
const LINE_ICON = "M12 2C6.48 2 2 5.64 2 10.13c0 4.03 3.55 7.4 8.35 8.05.33.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1.01.88.55 1.08-.46 5.83-3.44 7.96-5.89 1.47-1.62 2.04-3.26 2.04-5-.01-4.48-4.48-8.12-10-8.12z";
const LINK_ICON = "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71";

function Icon({ d, stroke }: { d: string; stroke?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={stroke ? "none" : "currentColor"} stroke={stroke ? "currentColor" : undefined} strokeWidth={stroke ? 2 : undefined} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function ShareButtons({ url, text, title = "＼ この旅をシェア ／" }: Props) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;

  const buttons = [
    { name: "Xでシェア", bg: "#111", href: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`, icon: <Icon d={X_ICON} /> },
    { name: "Facebookでシェア", bg: "#1877F2", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}&quote=${enc(text)}`, icon: <Icon d={FB_ICON} /> },
    { name: "LINEでシェア", bg: "#06C755", href: `https://social-plugins.line.me/lineit/share?url=${enc(url)}&text=${enc(text)}`, icon: <Icon d={LINE_ICON} /> },
    { name: "Threadsでシェア", bg: "#333", href: `https://www.threads.net/intent/post?text=${enc(text + " " + url)}`, icon: <span style={{ fontWeight: 800, fontSize: 17, lineHeight: 1 }}>@</span> },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = `${text} ${url}`;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px 12px" }}>
      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#888", margin: "0 0 12px" }}>{title}</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        {buttons.map((b) => (
          <a
            key={b.name}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={b.name}
            title={b.name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: b.bg,
              color: "#fff",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
          >
            {b.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={copy}
          aria-label="リンクをコピー"
          title="リンクをコピー"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            height: 44,
            padding: "0 16px",
            borderRadius: 999,
            border: "1.5px solid #ccc",
            background: copied ? "#1d5c4d" : "#fff",
            color: copied ? "#fff" : "#555",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <Icon d={LINK_ICON} stroke />
          {copied ? "コピーしました！" : "リンク"}
        </button>
      </div>
    </div>
  );
}
