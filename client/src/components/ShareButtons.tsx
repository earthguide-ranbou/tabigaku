/**
 * ShareButtons — SNSシェア導線（軍配 KPI宣言: シェア経由の流入・申込）
 * X / Facebook / LINE / Threads / リンクコピー
 * プリセット文はページごとの「売れる紹介文」（マーケティング特化）
 */
import { useState } from "react";

type FollowLinks = {
  instagram: string;
  facebook: string;
  threads: string;
  substack: string;
};

type Props = {
  url: string;
  text: string;
  title?: string;
  followLinks?: FollowLinks;
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

export default function ShareButtons({ url, text, title = "＼ この旅をシェア ／", followLinks }: Props) {
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
        {followLinks ? (
          <>
            <a
              href={followLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#E4405F",
                color: "#fff",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a
              href={followLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#1877F2",
                color: "#fff",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
            >
              <Icon d={FB_ICON} />
            </a>
            <a
              href={followLinks.threads}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              title="Threads"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#333",
                color: "#fff",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.096 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.152 7.164 1.432 1.781 3.632 2.695 6.542 2.717 2.073.015 3.816-.528 5.186-1.614 1.33-1.055 2.102-2.557 2.295-4.467l2.04.569c-.266 2.57-1.324 4.567-3.146 5.953-2.17 1.658-4.9 2.478-8.073 2.478z"/></svg>
            </a>
            <a
              href={followLinks.substack}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack"
              title="Substack"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#FF6719",
                color: "#fff",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
            </a>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}
