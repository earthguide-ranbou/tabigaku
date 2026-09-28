
const LIVE_SITE = "https://earth-family-journey-world.runbou.chatgpt.site/";

/** Keep the latest published journey and its working forms together. */
export default function EarthFamilyJourney() {
  return (
    <>
      <main style={{ position: "fixed", inset: 0, background: "#f6f3eb", overflow: "hidden", zIndex: 10 }}>
        <iframe
          src={LIVE_SITE}
          title="Earth Family Journey 最新公式サイト"
          allow="autoplay; fullscreen; picture-in-picture; web-share"
          allowFullScreen
          style={{ display: "block", width: "100%", height: "100%", border: 0 }}
        />
      </main>
    </>
  );
}
