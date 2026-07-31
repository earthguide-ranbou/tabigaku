import { useEffect, useRef, type ReactNode } from "react";
import ShareButtons from "@/components/ShareButtons";

const LINE = "https://lin.ee/N9eyIcP";
const KEYWORDS = ["太陽と風の塩づくり", "島の暮らし", "オルタナティブスクール", "焚き火と星空", "森のようちえん", "地域再生の聖地", "阿波おどり", "いのちの循環", "家族で参加OK"];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`efj-reveal ${className}`}>{children}</div>;
}

function CountdownBadge({ light = false }: { light?: boolean }) {
  const dep = new Date("2026-08-05T00:00:00+09:00").getTime();
  const end = new Date("2026-08-15T00:00:00+09:00").getTime();
  const now = Date.now();
  if (now >= end) return null;
  const days = Math.ceil((dep - now) / 86400000);
  return (
    <span className="efj-count" style={light ? { boxShadow: "0 4px 14px rgba(0,0,0,.15)" } : undefined}>
      🌏 {days > 0 ? <>出発まであと <b>{days}</b> 日｜少人数制・先着順</> : "ただいま旅の途中！"}
    </span>
  );
}

export default function Efj() {
  return (
    <div className="efj">
      <style>{`
        .efj { background:#faf7f2; color:#2c2c26; font-family:"Zen Kaku Gothic New","Hiragino Kaku Gothic ProN",sans-serif; overflow-x:hidden; }
        .efj img { max-width:100%; }
        /* HERO */
        .efj-hero { background:#123c32; }
        .efj-hero .banner { display:block; width:100%; max-width:1200px; margin:0 auto; height:auto; }
        .efj-hero .cta-band { text-align:center; padding:26px 20px 46px; }
        .efj-hero .inner { max-width:860px; margin:0 auto; color:#fff; }
        .efj-hero .lead-copy { font-size:clamp(14px,2.3vw,16.5px); line-height:2.1; color:rgba(255,255,255,.92); margin:0 auto 20px; max-width:640px; }
        .efj-hero .period { font-size:clamp(12.5px,1.9vw,14.5px); opacity:.8; margin:14px 0 18px; letter-spacing:.03em; }
        .efj-count { display:inline-block; background:#FFD94D; color:#1F1B16; font-weight:900; font-size:14px; padding:8px 18px; border-radius:999px; margin:0 auto 6px; box-shadow:0 4px 14px rgba(0,0,0,.25); }
        .efj-count b { font-size:18px; }
        .efj-btn { display:inline-block; background:linear-gradient(135deg,#06c755,#04a648); color:#fff; font-weight:900; font-size:clamp(15px,2.4vw,18px); padding:16px 34px; border-radius:999px; text-decoration:none; box-shadow:0 8px 24px rgba(6,199,85,.35); transition:transform .2s ease; }
        .efj-btn:hover { transform:translateY(-2px); }
        .efj-btn-sub { display:block; margin-top:10px; font-size:12px; opacity:.75; }
        /* MARQUEE */
        .efj-marquee { background:#FFD94D; padding:13px 0; overflow:hidden; white-space:nowrap; }
        .efj-marquee .track { display:inline-block; animation:efjscroll 26s linear infinite; }
        .efj-marquee span { display:inline-block; font-weight:900; font-size:14.5px; color:#1F1B16; padding:0 14px; letter-spacing:.06em; }
        .efj-marquee .star { color:#d65a3a; }
        @keyframes efjscroll { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        /* SECTIONS */
        .efj-sec { max-width:900px; margin:0 auto; padding:clamp(48px,7vw,80px) 20px 0; }
        .efj-label { font-size:12px; font-weight:900; letter-spacing:.28em; color:#d65a3a; margin:0 0 10px; }
        .efj-h2 { font-size:clamp(24px,4.6vw,36px); font-weight:900; line-height:1.4; margin:0 0 20px; letter-spacing:.02em; }
        .efj-h2 .u { background:linear-gradient(transparent 62%, #ffe08a 62%); }
        .efj-lead { font-size:clamp(14.5px,2.3vw,16.5px); line-height:2.1; color:#4a443a; margin:0 0 18px; }
        .efj-reveal { opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
        .efj-reveal.is-in { opacity:1; transform:none; }
        .efj-feats { display:grid; gap:14px; margin-top:26px; }
        .efj-feat { background:#fff; border:1px solid #eee2d0; border-radius:16px; padding:18px 20px; font-size:14.5px; line-height:1.9; color:#4a443a; }
        .efj-feat b { display:block; font-size:16px; color:#1d5c4d; margin-bottom:6px; }
        /* ITINERARY with photos */
        .efj-itin { margin-top:30px; }
        .efj-stop { background:#fff; border:1px solid #eee2d0; border-radius:20px; overflow:hidden; margin-bottom:22px; box-shadow:0 4px 18px rgba(60,45,20,.06); }
        .efj-stop .photo { width:100%; aspect-ratio:16/9; object-fit:cover; display:block; }
        .efj-stop .body { padding:20px 22px 24px; }
        .efj-stop .date { display:inline-block; font-size:12.5px; font-weight:900; color:#fff; background:#d65a3a; border-radius:999px; padding:4px 12px; letter-spacing:.06em; margin:0 0 10px; }
        .efj-stop h3 { font-size:clamp(18px,3vw,23px); font-weight:900; margin:0 0 4px; }
        .efj-stop .tagline { font-size:13.5px; font-weight:800; color:#1d5c4d; margin:0 0 10px; }
        .efj-stop p { font-size:14px; line-height:1.95; color:#4a443a; margin:0; }
        .efj-finale { background:linear-gradient(160deg,#123c32,#1d5c4d); color:#fff; border-radius:20px; padding:clamp(28px,5vw,44px); text-align:center; margin-top:8px; }
        .efj-finale .big { font-size:clamp(18px,3.4vw,26px); font-weight:900; line-height:1.7; margin:0 0 8px; }
        .efj-finale p { color:rgba(255,255,255,.85); font-size:14px; line-height:1.9; margin:0; }
        /* SCENES masonry-ish */
        .efj-scenes { columns:2; column-gap:10px; margin-top:24px; }
        @media (min-width:640px){ .efj-scenes { columns:3; } }
        .efj-scenes img { width:100%; border-radius:12px; margin-bottom:10px; display:block; break-inside:avoid; }
        /* PLANS */
        .efj-plans { display:grid; gap:16px; margin-top:26px; }
        .efj-plan { background:#fff; border:2px solid #eee2d0; border-radius:20px; padding:clamp(20px,4vw,28px); }
        .efj-plan.best { border-color:#d65a3a; box-shadow:0 10px 30px rgba(214,90,58,.14); }
        .efj-plan .besttag { display:inline-block; background:#d65a3a; color:#fff; font-size:12px; font-weight:900; padding:4px 12px; border-radius:999px; margin-bottom:8px; }
        .efj-plan h3 { font-size:clamp(18px,3vw,22px); font-weight:900; margin:0 0 2px; }
        .efj-plan .dates { font-size:13px; color:#6b6353; margin:0 0 12px; }
        .efj-plan .price { font-size:clamp(30px,6vw,40px); font-weight:900; color:#1d5c4d; margin:0; }
        .efj-plan .price small { font-size:14px; font-weight:700; color:#6b6353; }
        .efj-plan .jitsu { font-size:12.5px; color:#9a917f; margin:2px 0 12px; }
        .efj-plan ul { list-style:none; padding:0; margin:0 0 14px; font-size:13.5px; line-height:2; color:#4a443a; }
        .efj-plan ul b { color:#1d5c4d; }
        .efj-note { background:#f7f2e8; border-radius:16px; padding:18px 20px; font-size:13.5px; line-height:2; color:#4a443a; margin-top:20px; }
        .efj-note b { color:#1d5c4d; }
        /* GUIDE */
        .efj-guide { background:#fff; border:1px solid #eee2d0; border-radius:20px; padding:clamp(22px,4vw,32px); margin-top:26px; }
        .efj-guide .head { display:flex; align-items:center; gap:16px; margin-bottom:14px; }
        .efj-guide .head img { width:84px; height:84px; border-radius:50%; object-fit:cover; border:3px solid #ffd94d; }
        .efj-guide .head .name { font-size:20px; font-weight:900; margin:0; }
        .efj-guide .head .role { font-size:12.5px; font-weight:800; color:#d65a3a; margin:2px 0 0; }
        .efj-guide p { font-size:14px; line-height:2.05; color:#4a443a; margin:0 0 12px; }
        .efj-guide .path { font-size:13.5px; line-height:2.1; color:#4a443a; margin:0; }
        .efj-guide blockquote { border-left:4px solid #d65a3a; padding-left:14px; font-size:14.5px; font-weight:700; line-height:2; color:#2c2c26; margin:14px 0 0; }
        .efj-know { display:grid; gap:16px; margin-top:26px; }
        .efj-knowbox { background:#fff; border:1px solid #eee2d0; border-radius:16px; padding:18px 20px; font-size:13.5px; line-height:2; color:#4a443a; }
        .efj-knowbox b { display:block; color:#1d5c4d; margin-bottom:6px; font-size:15px; }
        .efj-final { text-align:center; background:linear-gradient(160deg,#123c32,#1d5c4d); border-radius:28px; color:#fff; padding:clamp(34px,6vw,56px) clamp(20px,5vw,48px); }
        .efj-final .big { font-size:clamp(20px,4.2vw,30px); font-weight:900; line-height:1.7; margin:0 0 14px; }
        .efj-final p { color:rgba(255,255,255,.85); line-height:2; font-size:clamp(13.5px,2.2vw,15.5px); }
        .efj-final .tel { display:inline-block; margin-top:14px; color:rgba(255,255,255,.85); font-size:13.5px; text-decoration:underline; text-underline-offset:4px; }
        .efj-fixed { position:fixed; left:0; right:0; bottom:0; z-index:50; background:rgba(250,247,242,.94); backdrop-filter:blur(10px); border-top:1px solid #eee2d0; padding:10px 16px; text-align:center; }
        .efj-fixed .efj-btn { padding:13px 30px; font-size:15.5px; }
        .efj-fixed .cd { display:block; font-size:11.5px; font-weight:800; color:#b3532f; margin-top:6px; }
        @media (prefers-reduced-motion: reduce) { .efj-reveal { opacity:1; transform:none; transition:none; } .efj-marquee .track { animation:none; } }
      `}</style>

      {/* ============ HERO ============ */}
      <header className="efj-hero">
        <img className="banner" src="/efj/banner.jpg" alt="地球家族ジャーニー 2026 祝島から神山へ 魂が震え、命が喜ぶ旅" />
        <div className="cta-band">
          <div className="inner">
            <CountdownBadge />
            <p className="lead-copy">
              山とともに、海とともに生きる。どこか懐かしくて、魂がふるえて、大切なものをおもいだす。
              1人で、家族と、友人と——笑い楽しみながら、人生観が変わってしまうかもしれない。
              そんなプレミアムな旅路へ、出発しませんか？
            </p>
            <a className="efj-btn" href={LINE} target="_blank" rel="noopener noreferrer">
              LINEで申し込む・相談する →
            </a>
            <span className="efj-btn-sub">※ 相談だけでもOK。「地球家族ジャーニー希望」とメッセージをどうぞ</span>
            <p className="period">2026年8月5日(水)〜14日(金)｜山口・祝島 → 徳島・神山｜少人数制（10名ほど）｜親子・ご家族歓迎｜小学生未満はドネーション制</p>
          </div>
        </div>
      </header>

      {/* ============ KEYWORD MARQUEE ============ */}
      <div className="efj-marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((n) => (
            <span key={n}>
              {KEYWORDS.map((k, i) => (
                <span key={i}>{k}<span className="star">　✳︎　</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ============ CONCEPT ============ */}
      <section className="efj-sec">
        <Reveal>
          <p className="efj-label">ABOUT THIS JOURNEY</p>
          <h2 className="efj-h2">いのちが喜び、<span className="u">脳みそがスパーク</span>しちゃう旅へ</h2>
          <p className="efj-lead">
            どうも、らんぼうです。僕は山口県の祝島や徳島県の神山町を拠点に、国内外をガイドしてきました。
            そこに生きる人たちの自然と共にある暮らしや想い、自然の美しさに心を打たれ、
            この感動を一人でも多くの人と共有したいと思うようになったからです。
          </p>
          <p className="efj-lead">
            そんなわけでこの夏、いのちが喜び、脳みそがスパークしちゃうような旅へご案内します。
            家族と共に。大切な友人と一緒に。もちろんおひとりでも、ウェルカムです。
          </p>
          <div className="efj-feats">
            <div className="efj-feat"><b>🌿 自然とともに暮らす知恵</b>塩づくり、島の自給、森の暮らし。これからの時代にほんとうに必要な「暮らしの知恵」を、実践する人たちから直接学びます。</div>
            <div className="efj-feat"><b>🔥 子どもも大人も本気であそぶ</b>焚き火を囲んで語り合い、川の音を聴き、星を見上げる。頭で考えるんじゃなくて、からだ全部で感じる忘れられないひとときを。</div>
            <div className="efj-feat"><b>🍙 心とからだが喜ぶ食</b>目に見える山や海の幸に感謝していただく、心もカラダも喜ぶ食。いのちの循環を、おいしく感じる時間が流れています。</div>
          </div>
        </Reveal>
      </section>

      {/* ============ ITINERARY ============ */}
      <section className="efj-sec">
        <Reveal>
          <p className="efj-label">ITINERARY</p>
          <h2 className="efj-h2">10日間の<span className="u">旅の道すじ</span></h2>
          <p className="efj-lead">山口県でアイデンティティーを呼び覚まし、徳島の聖地で未来に触れる。魂が震え、いのちが喜ぶ、忘れられない日々が待っています。</p>
          <div className="efj-itin">
            <div className="efj-stop">
              <img className="photo" src="/efj/hyakushoan.jpg" alt="百姓庵の塩と油谷湾の海" loading="lazy" />
              <div className="body">
                <span className="date">8/5(水)｜山口県長門市・油谷湾</span>
                <h3>百姓庵</h3>
                <p className="tagline">太陽と風と海がつくる、ほんものの塩</p>
                <p>日本でも数少ない伝統製法で塩づくりを続ける百姓庵。太陽と風、そして海の力だけでつくられる「百姓の塩」は、全国の一流料理人たちからも高く評価されています。でも本当に凄いのは塩だけではなく、井上悠然さん＆かみさん一家のニュースタイルな暮らしぶり。自然と共に、未来をつくる。これからの時代に必要な暮らしの知恵を学びます。</p>
              </div>
            </div>
            <div className="efj-stop">
              <img className="photo" src="/efj/tawara_dusk.jpg" alt="夕暮れの俵山温泉の街並み" loading="lazy" />
              <div className="body">
                <span className="date">8/6(木)–7(金)｜山口県長門市・俵山温泉</span>
                <h3>俵山ビレッジ</h3>
                <p className="tagline">地方から未来を創る、挑戦者の村</p>
                <p>レトロな湯治場・俵山温泉に誕生した地域創生の拠点。全国から挑戦者が集まるこの場所では、吉武大輔さんが「地方から未来を創る」を実践中です。地方だからこそ可能性がある。そんな新しい時代のコミュニティづくりを、温泉街の風情とともに体感します。</p>
              </div>
            </div>
            <div className="efj-stop">
              <img className="photo" src="/efj/terakoya.jpg" alt="地球子舎で過ごす家族と仲間" loading="lazy" />
              <div className="body">
                <span className="date">8/7(金)–8(土)｜山口県</span>
                <h3>オルタナティブスクール</h3>
                <p className="tagline">地球子舎＆こびとのおうちえん／森の学校みっけ——「子育てとは？」「教育とは？」「幸せとは？」</p>
                <p>神山町の「森の学校みっけ」のモデル校でもある、山口のオルタナティブスクール「地球子舎」。代表で森のようちえん「こびとのおうちえん」を運営する大下さんを訪ねます。大下さんと話していると、不思議と意識が変わり、人生が変わったという人も多い。当たり前だと思っていた価値観がほどけ、自分らしい生き方のヒントが見えてきます。</p>
              </div>
            </div>
            <div className="efj-stop">
              <img className="photo" src="/efj/iwaishima.jpg" alt="祝島の海と伝統の舟" loading="lazy" />
              <div className="body">
                <span className="date">8/8(土)–11(火)｜山口県・瀬戸内の島</span>
                <h3>祝島</h3>
                <p className="tagline">いのちの循環に触れる、島時間</p>
                <p>必要なものは自分たちでつくる。先人から受け継がれてきた島の暮らしを、からだごと体感します。心もカラダも喜ぶ食を通じ、いのちの循環を感じる。目に見える山や海の幸に感謝し、未来の世代のために大切なものを繋げようとする姿——僕はこういう生き方に心から感動するし、みんなと共有したいです。</p>
              </div>
            </div>
            <div className="efj-stop">
              <img className="photo" src="/efj/waterfall.jpg" alt="神山の滝と新緑" loading="lazy" />
              <div className="body">
                <span className="date">8/12(水)–14(金)｜徳島県・地方再生の聖地</span>
                <h3>神山町</h3>
                <p className="tagline">「やったらええんちゃうん？」の町</p>
                <p>移住希望者200人以上、視察が絶えない不思議な町。その理由は、町のあちこちで巻き起こる"オルタナティブ"な奇跡にあります。焚き火を囲んで語り合う。朝の森でからだをゆるめる。動物に触れ、川の音を聴き、星を見上げる。頭で考えるんじゃなくて、からだ全部で感じる時間。日常から離れて、自然の中で自分にご褒美をあげませんか？</p>
              </div>
            </div>
          </div>
          <div className="efj-finale">
            <p className="big">感動のフィナーレは、<br />徳島の大祭・阿波おどり！</p>
            <p>「踊る阿呆に観る阿呆、同じ阿呆なら踊らなソンソン！」魂が震え、いのちが喜ぶ。人生観がガラッと変わってしまうかもしれない。そんな忘れられない時間を、共に過ごしてみませんか？</p>
          </div>
        </Reveal>
      </section>

      {/* ============ SCENES ============ */}
      <section className="efj-sec">
        <Reveal>
          <p className="efj-label">SCENES</p>
          <h2 className="efj-h2">旅の風景</h2>
          <div className="efj-scenes">
            <img src="/efj/fire.jpg" alt="神山の夜、焚き火を囲む仲間" loading="lazy" />
            <img src="/efj/pizza.jpg" alt="ピザ窯を囲む仲間" loading="lazy" />
            <img src="/efj/tawara_people.jpg" alt="俵山の街で笑顔の集合写真" loading="lazy" />
            <img src="/efj/iwaishima.jpg" alt="祝島の青い海と伝統の舟" loading="lazy" />
            <img src="/efj/waterfall.jpg" alt="神山の滝と新緑" loading="lazy" />
            <img src="/efj/night.jpg" alt="俵山ビレッジの夜のイベント" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* ============ PLANS ============ */}
      <section className="efj-sec">
        <Reveal>
          <p className="efj-label">HOW TO JOIN</p>
          <h2 className="efj-h2">あなたに合った<span className="u">3つの同行スタイル</span></h2>
          <p className="efj-lead">道中の案内とコーディネートへのガイド料だけをお預かりする、仲間の旅への同行というかたち。基本は移動や食事、宿泊などが実費になります。行き先は時にインスピレーションでみんなで決めたり、フレキシブルに行きます。</p>
          <div className="efj-plans">
            <div className="efj-plan best">
              <span className="besttag">いちばんおすすめ</span>
              <h3>Aプラン｜全部まるごと10日間</h3>
              <p className="dates">8月5日(水) 〜 8月14日(金)</p>
              <p className="price">100,000<small> 円（税込）</small></p>
              <p className="jitsu">同行のガイド料（案内・コーディネート）＋実費（宿泊・食事・移動など）</p>
              <ul>
                <li><b>訪れる予定の場所</b>｜まなまな／百姓庵／俵山ビレッジ／地球子舎＆こびとのおうちえん／祝島／神山町／阿波おどり</li>
                <li><b>待ち合わせ</b>｜8/5(水) 11:30 山口県の駅にて</li>
                <li><b>お別れ</b>｜8/14(金) 15:00 神山町 道の駅にて</li>
              </ul>
              <a className="efj-btn" href={LINE} target="_blank" rel="noopener noreferrer">このスタイルでLINE申込 →</a>
            </div>
            <div className="efj-plan">
              <h3>Bプラン｜山口じっくり7日間</h3>
              <p className="dates">8月5日(水) 〜 8月11日(火)</p>
              <p className="price">78,000<small> 円（税込）</small></p>
              <p className="jitsu">同行のガイド料＋実費（宿泊・食事・移動など）</p>
              <ul>
                <li><b>訪れる予定の場所</b>｜まなまな／百姓庵／俵山ビレッジ／地球子舎＆こびとのおうちえん／祝島</li>
                <li><b>待ち合わせ</b>｜8/5(水) 11:30 山口県の駅にて</li>
                <li><b>お別れ</b>｜8/11 12:30 祝島にて（12:30発のフェリーがあります）</li>
              </ul>
              <a className="efj-btn" href={LINE} target="_blank" rel="noopener noreferrer">このスタイルでLINE申込 →</a>
            </div>
            <div className="efj-plan">
              <h3>Cプラン｜神山＆阿波おどり3日間</h3>
              <p className="dates">8月12日(水) 〜 8月14日(金)</p>
              <p className="price">39,000<small> 円（税込）</small></p>
              <p className="jitsu">同行のガイド料＋実費（宿泊・食事・移動など）</p>
              <ul>
                <li><b>訪れる予定の場所</b>｜神山町／阿波おどり</li>
                <li><b>待ち合わせ</b>｜8/12(水) 12:00 神山町 道の駅にて</li>
                <li><b>お別れ</b>｜8/14(金) 15:00 神山町 道の駅にて</li>
              </ul>
              <a className="efj-btn" href={LINE} target="_blank" rel="noopener noreferrer">このスタイルでLINE申込 →</a>
            </div>
          </div>
          <div className="efj-note">
            <b>🌱 この旅のかたち</b><br />
            これは、らんぼうが大好きな人と場所を訪ねてまわる夏の旅。そこに、ご家族や仲間が「一緒に行きたい！」と同行してくれるかたちです。現地で落ち合って、同じ時間を過ごして、またそれぞれの暮らしへ帰っていく。おすすめの宿や便は、いくらでも相談に乗ります。ガイド料は、道中の案内とコーディネートへのお気持ちとしてお預かりしています。行き先は、時にはインスピレーションでみんなで決めたり、フレキシブルに。その柔らかさも、この旅ならではのおもしろさとして一緒に楽しんでください。<br /><br />
            <b>🎫 うれしい割引</b><br />
            ・らんぼう塾割引｜10,000円割引（お一人様＆一家族全体で）<br />
            ・家族割引｜ご家族でご参加の場合、小学生以上の2人目以降のお子さまやご家族分のガイド料は、そのスタイルのガイド料の半額以上のドネーション制。「この旅の価値に期待してこれだけ応援したい！」そんな感覚に合わせて金額をお選びください。<br />
            ※小学生未満のお子様はドネーション制　※割引は併用可能です<br /><br />
            <b>👨‍👩‍👧 ご参加にあたって</b><br />
            10名ほどの少人数でじっくり巡ります（先着順）。移動は基本的に各自のお車でお願いしています。どうしても難しい方はご相談ください。みなさんの"お気持ち"が、次の未来を育てていきます。ご家族でのご参加も大歓迎です。
          </div>
        </Reveal>
      </section>

      {/* ============ GUIDE ============ */}
      <section className="efj-sec">
        <Reveal>
          <p className="efj-label">YOUR GUIDE</p>
          <h2 className="efj-h2">ガイドは、<span className="u">あーすガイド・らんぼう</span></h2>
          <div className="efj-guide">
            <a className="head" href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <img src="/efj/profile.jpg" alt="あーすガイド・らんぼう" loading="lazy" />
              <div>
                <p className="name">らんぼう</p>
                <p className="role">あーすガイド代表・旅する学校主宰</p>
                <p style={{ fontSize: "12px", fontWeight: 800, color: "#1d5c4d", margin: "4px 0 0" }}>▶ プロフィール詳細はあーすガイドへ</p>
              </div>
            </a>
            <p>
              地球一周を皮切りに10年の旅暮らしを経て、マサイ族の村やアマゾン、モンゴルなど世界各地で"自然と共に生きる叡智"を学ぶ。
              帰国後は全国で500本以上のトーク・上映会・ガイドツアーを実施し、案内した40人以上が各地に移住。
              2022年、徳島・神山町でオルタナティブスクール「森の学校みっけ」を仲間と設立。
              地域再生の聖地・神山町を拠点に、企業研修や視察ガイドも行う。
            </p>
            <p className="path">
              🌏 地球一周・10年の旅暮らし<br />
              🗣 全国で500本以上の講演・上映会<br />
              🏜 アタカマ砂漠250km チーム優勝（映画化）<br />
              🏫 森の学校みっけ 創設（移住60人以上）<br />
              🥾 旅する学校 主宰｜安藤財団 推奨モデル特別賞（2023）<br />
              🎓 KAMIYAMA FIELD SCHOOL 設立（2026）
            </p>
            <blockquote>
              「心が喜ぶ方へ、身体ごと飛び込んでみませんか？ 自然の中に帰ることで、見えてくる"ほんとの自分"。気がつけば、笑って、泣いて、語って、地球を丸ごと感じる旅になると思います」—— らんぼう
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* ============ GOOD TO KNOW ============ */}
      <section className="efj-sec">
        <Reveal>
          <p className="efj-label">GOOD TO KNOW</p>
          <h2 className="efj-h2">持ち物とご案内</h2>
          <div className="efj-know">
            <div className="efj-knowbox">
              <b>🎒 持ち物</b>
              カッパ上下／半袖・短パン／長袖・長ズボン／タオル／帽子／汚れてもいい靴・サンダル／ヘッドライト／海セット（水中メガネ・水着など）／洗面用具／お米8合／寝袋・マット／保険証／虫除け・常備薬／愛と勇気 ❤️<br />
              大自然の中で過ごす時間が多い旅です。動きやすく、汚れても気にならない服装でお越しください。
            </div>
            <div className="efj-knowbox">
              <b>📝 キャンセルについて</b>
              7日前まで：20,000円（ガイド料より）／6日前以降〜当日：ガイド料全額をお預かりします（現地の方々との調整や準備があるため、ご了承ください）
            </div>
            <div className="efj-knowbox">
              <b>📮 お問い合わせ</b>
              LINE｜<a href={LINE} target="_blank" rel="noopener noreferrer" style={{ color: "#04a648", fontWeight: 800 }}>公式LINEはこちら</a><br />
              TEL｜090-7518-8816　Mail｜earthguide.jpn@gmail.com<br />
              ※メールの件名は「地球家族ジャーニー」としてお送りください
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ FINAL ============ */}
      <section className="efj-sec">
        <Reveal>
          <div className="efj-final">
            <p className="big">心が喜ぶ方へ、<br />身体ごと飛び込んでみませんか？</p>
            <p>
              家族と共に。大切な友人と一緒に。もちろんおひとりでも、ウェルカムです。<br />
              お会いできるのを、心から楽しみにしています。
            </p>
            <div style={{ marginTop: 22 }}>
              <CountdownBadge light />
              <div>
                <a className="efj-btn" href={LINE} target="_blank" rel="noopener noreferrer">
                  🌏 LINEで申し込む・相談する →
                </a>
              </div>
              <a className="tel" href="tel:09075188816">📞 電話で相談する（090-7518-8816）</a>
            </div>
          </div>
        </Reveal>
      </section>

      <ShareButtons
        url="https://www.tabigaku.party/efj"
        text="地球家族ジャーニー 2026｜8/5-14 祝島から神山へ10日間。太陽と風の塩づくり、島の暮らし、オルタナティブスクール、焚き火と星空、阿波おどり。魂が震え、命が喜ぶ旅へ。親子・家族歓迎・少人数制。"
        title="＼ 地球家族ジャーニーをシェア ／"
      />

      <div style={{ height: 90 }} />

      {/* ============ 固定CTA ============ */}
      <div className="efj-fixed">
        <a className="efj-btn" href={LINE} target="_blank" rel="noopener noreferrer">
          地球家族ジャーニーに申し込む（LINE）
        </a>
        {(() => {
          const dep = new Date("2026-08-05T00:00:00+09:00").getTime();
          const end = new Date("2026-08-15T00:00:00+09:00").getTime();
          const now = Date.now();
          if (now >= end) return null;
          const days = Math.ceil((dep - now) / 86400000);
          return days > 0 ? <span className="cd">出発 8/5 まで あと{days}日｜少人数制・先着順</span> : null;
        })()}
      </div>
    </div>
  );
}
