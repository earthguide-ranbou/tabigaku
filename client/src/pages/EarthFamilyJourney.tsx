
const LIVE_SITE = "https://earth-family-journey-world.runbou.chatgpt.site/";
const OFFICIAL_SITE = "https://dao.tabigaku.party/";

/** Keep the latest published journey and its working forms together. */
export default function EarthFamilyJourney() {
  return (
    <>
      <main style={{ position: "fixed", inset: 0, background: "#f6f3eb", overflow: "hidden", zIndex: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "8px 14px", flexShrink: 0, fontSize: "12px", color: "#245b76" }}>
          <h1 style={{ margin: 0, fontSize: "12px", fontWeight: 600 }}>Earth Family Journey</h1>
          <a href={OFFICIAL_SITE} style={{ textDecoration: "underline", minHeight: "28px", display: "inline-flex", alignItems: "center" }}>公式サイトを直接開く ↗</a>
        </div>
        <iframe
          src={LIVE_SITE}
          title="Earth Family Journey 最新公式サイト"
          allow="autoplay; fullscreen; picture-in-picture; web-share"
          allowFullScreen
          style={{ display: "block", width: "100%", flex: 1, minHeight: 0, border: 0 }}
        />
      </main>
    </>
  );
}
