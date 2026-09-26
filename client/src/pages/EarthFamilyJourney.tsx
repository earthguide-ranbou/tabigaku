import { Helmet } from "react-helmet-async";

const PUBLIC_URL = "https://www.tabigaku.party/earth-family-journey";
const LIVE_SITE = "https://earth-family-journey-world.runbou.chatgpt.site/";

/** Keep the latest published journey and its working forms together. */
export default function EarthFamilyJourney() {
  return (
    <>
      <Helmet>
        <title>Earth Family Journey｜旅して、暮らして、学んで、つながる。</title>
        <meta name="description" content="家族6人で世界の暮らしを訪ねるEarth Family Journey。旅は最高の学校。旅の記録と、参加・応援はこちら。" />
        <link rel="canonical" href={PUBLIC_URL} />
        <meta property="og:url" content={PUBLIC_URL} />
        <meta property="og:title" content="Earth Family Journey｜旅して、暮らして、学んで、つながる。" />
        <meta property="og:type" content="website" />
      </Helmet>
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
