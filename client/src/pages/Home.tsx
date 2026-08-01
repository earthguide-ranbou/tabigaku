import { useRef, useState, useEffect, useCallback } from "react";
import { useSEO } from "@/hooks/useSEO";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Award } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubstackCTA from "@/components/SubstackCTA";
import ShareButtons from "@/components/ShareButtons";
import { Section, SectionHeader } from "@/components/ui/section";
import { Curtain } from "@/components/Fx";

// ─── Image URLs (uploaded to webdev storage) ───────────────────────────────
// チラシのメインビジュアル（山岳トレッキング写真）
const FLYER_IMAGE = "/manus-storage/1000006557_f808d89c.jpg";
const GROUP_PHOTO = "/manus-storage/group_photo_road_24eb956b.jpg";
const TOKUSHIMA_SHIMBUN = "/manus-storage/tokushima_shimbun_e14fdcec.jpg";
const BG_TEXTURE = "/manus-storage/bg_texture_paper_6f447ab3.jpg";

// Journey images
const SHIMA_JOURNEY = "/manus-storage/note_shima_journey_351f0c2e.jpg";
const CHIKYU_KAZOKU = "/manus-storage/note_chikyu_kazoku_b81012db.png";
const OHENRO_JOURNEY = "/manus-storage/note_ohenro_journey_e9f341c0.png";
const KAMIYAMA_JOURNEY = "/manus-storage/kamiyama_journey_3f2b7506.jpeg";

// 公式LINE（旅する学校）
const LINE_TABIGAKU = "https://lin.ee/odygMT3";

// スライドショー用写真（9枚、新聞画像は除外）
const SLIDESHOW_IMAGES = [
  { src: "/manus-storage/1000004115_06c74ce0.jpg", alt: "ラフティング体験 - 笑顔の子どもたち" },
  { src: "/manus-storage/1000004123_e028eb96.jpg", alt: "川旅 - ラフトボートで川を下る" },
  { src: "/manus-storage/1000004150_903a0660.jpg", alt: "川旅 - 集合写真" },
  { src: "/manus-storage/1000004176_31a086d5.jpg", alt: "川旅 - 河原での集合写真" },
  { src: "/manus-storage/1000001172_8a6f1543.jpg", alt: "滝登り体験" },
  { src: "/manus-storage/1000004240_be8c9310.jpg", alt: "お遷路 - お寺での集合写真" },
  { src: "/manus-storage/1000001570_3c9e3e33.jpg", alt: "お遷路 - 大木の下で" },
  { src: "/manus-storage/1000001580_d659373c.jpg", alt: "お遷路 - 道を歩く子どもたち" },
  { src: "/manus-storage/04c0f8f6-e273-48d3-862b-c02e41546226-1_all_101_23720d72.jpg", alt: "お遷路 - 交差点での一コマ" },
  { src: "/manus-storage/1000005403_ebc39300.jpg", alt: "海旅 - 釣った魚を持つ笑顔の子" },
  { src: "/manus-storage/04c0f8f6-e273-48d3-862b-c02e41546226-1_all_2087_16d1a6ff.jpg", alt: "海旅 - 海中の魚の群れ" },
  { src: "/manus-storage/04c0f8f6-e273-48d3-862b-c02e41546226-1_all_8374_72089744.jpg", alt: "海旅 - 漁師さんと船の上で" },
  // 注意: TOKUSHIMA_SHIMBUN (新聞画像) はスライドショーに含めない
];

const journeys = [
  {
    id: 1,
    image: CHIKYU_KAZOKU,
    alt: "地球家族ジャーニー",
    tags: [
      { label: "募集中", color: "bg-primary" },
      { label: "10日間", color: "bg-emerald-700" },
      { label: "家族向け", color: "bg-sky-700" },
      { label: "途中参加OK", color: "bg-amber-600" },
    ],
    date: "8月5日(水)〜8月14日(金)（途中参加OK）",
    emoji: "🌊",
    title: "地球家族ジャーニー",
    subtitle: "〜祝島から神山へ 魂が震え、命が喜ぶ旅〜",
    description: "祝島から神山へ。魂が震え、命が喜ぶ旅。家族で参加できる特別な夏の体験。途中参加も歓迎。",
    href: "/efj",
  },
  {
    id: 2,
    image: "/manus-storage/thai_img_00_2e972116.jpg",
    alt: "EarthfamilyJourney in Thailand",
    tags: [
      { label: "募集中", color: "bg-primary" },
      { label: "6〜9日間", color: "bg-emerald-700" },
      { label: "家族向け", color: "bg-sky-700" },
    ],
    date: "8月22日(土)〜 8月30日(日)",
    emoji: "✈️",
    title: "EarthfamilyJourney in Thailand",
    subtitle: "〜そうだ！タイに行こう〜",
    description: "子連れ海外を諦めてきたあなたへ。上田家と一緒に、家族でタイを旅しよう。A日程6日間・B日程9日間。",
    href: "/thai",
  },
  {
    id: 3,
    image: "/manus-storage/group_photo_1124f3c4.jpg",
    alt: "歩きお遍路ジャーニー vol.5",
    tags: [
      { label: "募集中", color: "bg-primary" },
      { label: "6日間", color: "bg-emerald-700" },
      { label: "小3〜中3", color: "bg-sky-700" },
    ],
    date: "10月10日(土)〜10月15日(木)",
    emoji: "",
    title: "歩きお遍路ジャーニー vol.5",
    subtitle: "〜修行の道場・高知編〜",
    description: "四国最南端・足摺岬から歩き始める6日間の巡礼。仲間と助け合い、一歩ずつ歩いた距離だけ強くなれる。対象：小学3年生〜中学3年生。",
    href: "/henro",
  },
  {
    id: 4,
    image: OHENRO_JOURNEY,
    alt: "歩きお遍路ジャーニー",
    tags: [
      { label: "募集中", color: "bg-primary" },
      { label: "5日間", color: "bg-emerald-700" },
      { label: "小3〜65歳", color: "bg-sky-700" },
    ],
    date: "10月23日(金)〜10月27日(火)",
    emoji: "",
    title: "歩きお遍路ジャーニー",
    subtitle: "―神足歩行術で行く、発心の道場5日間の巻―",
    description: "神足歩行術で行く、発心の道場5日間。古の身体技法を学び、疲れ知らずの体で聖地を巡る特別な旅。対象：小学3年生〜65歳。",
    href: "/henro-shinsoku",
  },
];

// ─── Slideshow Component ────────────────────────────────────────────────────
// スワイプ式横スクロール実装。自動再生なし。バグなし。
// 全画像を横に並べ、translateXで表示位置を切り替える。
// 高さは常に現在の画像で確定するため、下のセクションが透けることがない。
function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const total = SLIDESHOW_IMAGES.length;

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(total - 1, index)));
  }, [total]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta < -50 && current < total - 1) goTo(current + 1);
    else if (delta > 50 && current > 0) goTo(current - 1);
  }, [touchStartX, current, total, goTo]);

  return (
    <div
      className="relative w-full overflow-hidden select-none page-enter"
      style={{ aspectRatio: "4/3" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* クロスフェード: 全画像をabsoluteで重ね、activeのみopacity:1 */}
      {SLIDESHOW_IMAGES.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover block"
            draggable={false}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* ドットインジケーター */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
        {SLIDESHOW_IMAGES.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* 左右タップ領域 */}
      <button
        className="absolute left-0 top-0 h-full w-1/3 z-10 opacity-0"
        onClick={() => goTo(current - 1)}
        aria-label="前の写真"
      />
      <button
        className="absolute right-0 top-0 h-full w-1/3 z-10 opacity-0"
        onClick={() => goTo(current + 1)}
        aria-label="次の写真"
      />

      {/* カウンター */}
      <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
        {current + 1} / {total}
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function Home() {
  useSEO({
    title: "旅する学校｜徳島・神山発オルタナティブな学びの場｜歩き遍路｜旅育",
    description: "徳島・神山発のオルタナティブな学びの場「旅する学校」。子どもたちと行く「歩き遍路」や四万十川カヌーなど、四国の大自然を舞台にした「旅育（たびいく）」プログラムを提供。安藤財団特別推奨モデル賞受賞。スプリングスクール・サマースクール参加者募集中。",
    keywords: "旅する学校, 旅育, 歩き遍路, お遍路, 四国遍路, 徳島, 神山町, オルタナティブな学びの場, オルタナティブスクール, スプリングスクール, サマースクール, 自然体験, 子どもキャンプ, 教育, 移住体験, 安藤財団賞",
    ogImage: "/manus-storage/group_photo_road_24eb956b.jpg",
    ogUrl: "/",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "旅する学校 ／ あーすガイド",
        "url": "https://tabigaku.party",
        "logo": "https://tabigaku.party/favicon.ico",
        "description": "徳島・神山発のオルタナティブな学びの場。旅育プログラム・お遍路ジャーニー・神山ガイドを提供。",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "徳島県",
          "addressLocality": "神山町",
          "addressCountry": "JP"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "090-7518-8816",
          "email": "earthguide.jpn@gmail.com",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.instagram.com/earthguide.ranbow",
          "https://note.com/shiftdaigaku",
          "https://earthguide.tabigaku.party"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "旅する学校",
        "url": "https://tabigaku.party",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://tabigaku.party/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScrollY, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(heroScrollY, [0, 0.75], [1, 0]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 overflow-x-hidden">
      <Navigation />


      {/* ── 募集バナー ── */}
      {(() => {
        const dep = new Date("2026-08-05T00:00:00+09:00").getTime();
        const end = new Date("2026-08-15T00:00:00+09:00").getTime();
        const now = Date.now();
        const days = Math.ceil((dep - now) / 86400000);
        const efjLive = now < end;
        return (
          <div className="w-full text-white" style={{background: "linear-gradient(90deg,#1d5c4d,#2e8b6e)", padding: "10px 16px", marginTop: "72px", fontSize: "13.5px", fontWeight: 700, letterSpacing: ".04em", lineHeight: 1.7, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px 20px", textAlign: "center"}}>
            {efjLive && (
              <a href="/efj" style={{color: "#fff"}}>
                🌍 {days > 0 ? `出発まであと${days}日！` : "ただいま旅の途中！"}地球家族ジャーニー 8/5-14 祝島→神山（少人数制）
                <span style={{textDecoration: "underline", textUnderlineOffset: "3px", marginLeft: 6}}>詳細・申込 →</span>
              </a>
            )}
            <a href="/juku" style={{color: "#fff"}}>
              🎓 らんぼう塾（111日オンライン）1期生 受付中
              <span style={{textDecoration: "underline", textUnderlineOffset: "3px", marginLeft: 6}}>詳細 →</span>
            </a>
          </div>
        );
      })()}

      {/* ── Hero — チラシデザインをベースに ── */}
      <div
        ref={heroRef}
        className="relative overflow-hidden bg-white"
      >
        {/* チラシ画像 — 元の縦長比率を尊重して全体表示。左側が切れないようパディングを添加 */}
        <motion.div style={{ y: heroY }} className="relative z-0">
          {/*
            チラシ画像は左端にテキストが配置されているため、
            左右に小さなパディングを設けて全体を表示。
          */}
          {/* 上部にナビバー分のパディングを追加して「旅は、最高の学校だ。」がナビバーに醠ならないよう調整 */}
          <img
            src={FLYER_IMAGE}
            alt="旅する学校 — 山岳トレッキング"
            className="w-full h-auto block"
            style={{ maxHeight: "100vh", objectFit: "contain", objectPosition: "center top", padding: "56px 4px 0" }}
          />
          {/* ナビバーエリアの上部に微妙な黒グラデーションを追加して「旅する学校」ロゴを見やすく */}
          <div
            className="absolute inset-x-0 top-0"
            style={{ height: "80px", background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 100%)", zIndex: 1 }}
          />
          {/*
            モヤは最下部のみ。
            QRコード・クラフト紙エリア（下15%）だけ白へフェード。
            写真中心部（子どもたち）には一切影響しない。
          */}
          {/* 下40%を完全に白で覆う。「続きは、ここから。」QRコードエリアを完全隐蔽 */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{ height: "38%", background: "linear-gradient(to top, white 0%, white 65%, rgba(255,255,255,0) 100%)" }}
          />
        </motion.div>

        {/* ヒーロー下部の白エリア — 白い部分を最小限に */}
        <div className="relative z-10 bg-white px-6 pb-8 md:pb-10 -mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm mx-auto"
          >
            {/* エディトリアルライン */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px flex-1 bg-foreground/15" />
              <span className="text-[0.6rem] font-bold tracking-[0.25em] text-foreground/40 uppercase">Tabigaku</span>
              <div className="h-px flex-1 bg-foreground/15" />
            </div>

            {/* メインキャッチコピー */}
            <p className="text-foreground/80 text-lg md:text-xl font-serif leading-relaxed tracking-wide mb-2">
              ワクワクとドキドキ、
            </p>
            <p className="text-foreground/80 text-lg md:text-xl font-serif leading-relaxed tracking-wide mb-6">
              がきたらGOサイン！
            </p>

            {/* サブテキスト */}
            <p className="text-foreground/45 text-xs md:text-sm font-sans leading-relaxed tracking-wider mb-8">
              子どもたちの笑顔が湢れる、本物の旅が待っている。
            </p>

            {/* スクロールインジケーター */}
            <motion.a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-1.5 text-primary/60 hover:text-primary transition-colors duration-200"
            >
              <span className="text-[0.58rem] font-bold tracking-[0.3em] uppercase">Scroll</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 3v12M3 9l6 6 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── About ── */}
      <Section id="about" className="py-28 md:py-40">
        {/* Subtle background accent */}
        <div className="absolute inset-y-0 right-0 w-[40%] bg-muted/60 -z-10 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-0">
            <SectionHeader title="旅こそが学校" subtitle="ABOUT US" />

            <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-[1.9] text-left">
              <p>
                未知なる世界に飛び出し、
                <br className="hidden md:block" />
                自然の中でめーいっぱい身体を動かす。
              </p>
              <p>
                自分はどこから来て、今どこにいて、どこへ向かうのか？
              </p>
              <p>
                先人から受け継がれてきたスピリットを感じながら、
                <br className="hidden md:block" />
                その物語を、体感として学んでゆく。
              </p>
              <p>「あ〜生きてて良かったなぁ〜！」という</p>
              <p>いのちが喜ぶ瞬間を、積み重ねながら。</p>
              <p>歩きお遍路、川旅、海旅など</p>
              <p>
                旅する学校では、自然の中で
                <br className="hidden md:block" />
                子どもたちと可能性の枠をひろげ、
                <br className="hidden md:block" />
                地球と共にあるよりよい未来を創造してゆきます。
              </p>
            </div>

            {/* Award card */}
            <Link
              href="/award"
              className="mt-10 flex items-start gap-5 bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg hover:border-primary/25 transition-all duration-500 ease-out cursor-pointer group block"
            >
              <div className="bg-amber-50 border border-amber-200/60 p-3 rounded-full shrink-0 mt-0.5">
                <Award className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 text-foreground group-hover:text-primary transition-colors">
                  安藤財団 特別推奨モデル賞受賞
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  2023年度 安藤スポーツ・食文化振興財団より、私たちの活動「子どもたちといく4泊5日の秋のお遷路巡礼の旅」が表彰されました。
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-bold text-xs tracking-wide">
                  詳細を見る <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={GROUP_PHOTO}
                  alt="Group Photo"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/8 rounded-full -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-muted rounded-full -z-10" />
              {/* Small accent line */}
              <div className="absolute top-6 -left-3 w-1 h-20 bg-primary/30 rounded-full" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── Photo Gallery Slideshow ── */}
      <Section background="muted" className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <SectionHeader
            title="旅の記録"
            subtitle="PHOTO GALLERY"
            centered
          />
        </motion.div>

        {/* 全幅表示 — containerのpxを完全に打ち消す (mobile: 1.25rem, md: 2rem, lg: 3rem) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="-mx-5 md:-mx-8 lg:-mx-12 overflow-hidden shadow-2xl"
        >
          <PhotoSlideshow />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          川旅・山旅・お遷路…子どもたちの笑顔が湢れる旅の瞬間
        </motion.p>
      </Section>

      {/* ── Media ── */}
      <Section background="default" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/60"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image side */}
              <div className="w-full md:w-[48%] shrink-0">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <Curtain cover="#1d5c4d">
                    <img
                      src={TOKUSHIMA_SHIMBUN}
                      alt="徳島新聞掲載記事"
                      className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000 ease-out"
                    />
                  </Curtain>
                </div>
              </div>
              {/* Text side */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center gap-4">
                <span className="inline-block bg-primary/10 text-primary text-[0.65rem] font-bold px-3 py-1 rounded-full tracking-widest uppercase w-fit">
                  新聞掲載
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight text-foreground">
                  徳島新聞に
                  <br />
                  掲載されました
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-left">
                  私たちの活動「歩き遍路ジャーニー」が徳島新聞に取り上げられました。
                  子どもたちが60kmの道のりを踏破し、地域の方々と触れ合いながら成長していく様子が紹介されています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Journeys ── */}
      <Section id="journeys" background="muted" className="py-24 md:py-36">
        <SectionHeader title="現在募集中のJourney" subtitle="UPCOMING JOURNEYS" centered />
        <ShareButtons
          url="https://www.tabigaku.party/"
          text="「旅は、最高の学校。」祝島→神山10日間の地球家族ジャーニー（8/5出発）、歩きお遍路、家族タイ旅…子どもが主役の本物の旅、いま募集中。"
          title="＼ このJourneyをシェア ／"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {journeys.map((j, i) => (
            <motion.a
              key={j.id}
              href={j.href}
              {...(j.href.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
              className="group bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-500 ease-out flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <Curtain delay={i * 0.1} cover="#1d5c4d">
                  <img
                    src={j.image}
                    alt={j.alt}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </Curtain>
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Tags over image */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {j.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`${tag.color} text-white text-[0.6rem] font-bold px-2.5 py-0.5 rounded-full tracking-wide`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-7 flex-1 flex flex-col gap-3">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{j.date}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {j.emoji && <span className="mr-1">{j.emoji}</span>}
                    {j.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-snug">
                    {j.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 text-left">
                  {j.description}
                </p>

                {/* CTA */}
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary tracking-wide">
                    詳細・お申し込み
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section
        background="image"
        backgroundImage={BG_TEXTURE}
        className="py-36 text-center"
      >
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-background/60 z-10" />
        <div className="max-w-2xl mx-auto relative z-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.65rem] font-sans font-bold tracking-[0.22em] uppercase text-primary/70 mb-5"
          >
            CONTACT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-serif font-bold mb-10 text-foreground"
          >
            さあ、冒険の始まりだ。
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            自然の中で、仲間と共に、
            <br className="hidden md:block" />
            一生忘れられない思い出を作りませんか？
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            {/* LINE CTA（第一導線） */}
            <a
              href={LINE_TABIGAKU}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-xl"
              style={{ background: "linear-gradient(135deg,#06c755,#04a648)", boxShadow: "0 10px 30px rgba(6,199,85,.35)" }}
            >
              LINEで相談・申し込む
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-muted-foreground -mt-3">※ 一番早くて確実です。相談だけでもOK</p>

            {/* Contact info */}
            <div className="flex flex-col items-center gap-2">
              <a
                href="tel:09075188816"
                className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors tracking-widest"
              >
                090-7518-8816
              </a>
              <a
                href="mailto:earthguide.jpn@gmail.com"
                className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                earthguide.jpn@gmail.com
              </a>
            </div>

            {/* Note CTA */}
            <a
              href="https://earthguide.tabigaku.party/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all duration-400 ease-out hover:scale-[1.03] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              あーすガイド公式HP
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ============ LINE 登録しかけ ============ */}
      <Section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(150deg,#eef7ee,#fdf9ef)", border: "1px solid #d8e8d8", boxShadow: "0 18px 50px rgba(29,92,77,.10)" }}
        >
          <p className="text-sm font-bold tracking-[0.2em] mb-3" style={{ color: "#04a648" }}>OFFICIAL LINE</p>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-5 text-foreground leading-snug">
            次の冒険の先行案内を、<br />いち早くお届けします
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-loose mb-6">
            人気の旅は、募集開始からあっという間に満席になります。<br className="hidden md:block" />
            公式LINEにご登録いただくと——
          </p>
          <div className="text-left inline-block text-sm md:text-base leading-loose mb-7" style={{ color: "#1d5c4d", fontWeight: 700 }}>
            🌏 新しい旅・イベントの先行案内<br />
            🎫 LINE登録者限定のお得な割引情報<br />
            📖 らんぼうの旅日記・子育てと自然のヒント
          </div>
          <div>
            <a
              href={LINE_TABIGAKU}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-xl"
              style={{ background: "linear-gradient(135deg,#06c755,#04a648)", boxShadow: "0 10px 30px rgba(6,199,85,.35)" }}
            >
              無料でLINEに登録する
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-muted-foreground mt-3">※ 登録は10秒。いつでも解除できます</p>
          </div>
        </motion.div>
      </Section>

      <SubstackCTA />
      <Footer />

      {/* フローティングLINEボタン */}
      <a
        href={LINE_TABIGAKU}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="公式LINEに登録"
        style={{
          position: "fixed", right: 16, bottom: 18, zIndex: 60,
          display: "flex", alignItems: "center", gap: 8,
          background: "linear-gradient(135deg,#06c755,#04a648)", color: "#fff",
          fontWeight: 900, fontSize: 14, padding: "13px 20px", borderRadius: 999,
          textDecoration: "none", boxShadow: "0 10px 28px rgba(6,199,85,.45)",
        }}
      >
        <span style={{ fontSize: 18 }}>💬</span> LINE登録
      </a>
    </div>
  );
}
