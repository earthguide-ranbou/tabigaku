/**
 * らんぼう塾 ランディングページ (/juku)
 * 軍配 KPI宣言: らんぼう塾1期生の申込数
 * 素材: note記事(n0770f382a7d8)の写真・文章表現（著作者＝使用者本人の許可済み）
 */
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import ShareButtons from "@/components/ShareButtons";

const LINE = "https://lin.ee/p3CvLfQ";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`juku-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Juku() {
  useSEO({
    title: "らんぼう塾｜世界を学び、仲間と人生を動かす111日間【1期生募集】",
    description: "限定ラジオ・Zoomライブ・神山合宿・バズ部屋。Threads攻略から世界の裏側、学校づくりのリアルまで。111日間のオンラインプログラム「らんぼう塾」1期生募集中。",
  });

  useEffect(() => {
    const els = document.querySelectorAll(".juku-reveal");
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="juku">
      <style>{`
        .juku { background:#faf7f2; color:#2b2620; font-family:inherit; }
        .juku-reveal { opacity:0; transform:translateY(22px); transition:opacity .8s cubic-bezier(.22,.61,.36,1), transform .8s cubic-bezier(.22,.61,.36,1); }
        .juku-reveal.in { opacity:1; transform:none; }
        .juku-hero2 { background:#123c32; }
        .juku-hero2 .flyer { display:block; width:100%; max-width:1100px; margin:0 auto; height:auto; }
        .juku-hero2 .cta-band { background:#123c32; text-align:center; padding:26px 20px 40px; }
        .juku-hero2 .cta-band .inner { max-width:860px; margin:0 auto; color:#fff; }
        .juku-hero2 .period { font-size:clamp(13px,2.2vw,15.5px); font-weight:700; color:rgba(255,255,255,.85); margin:0 0 16px; }
        .juku-kicker { display:inline-block; background:#d65a3a; color:#fff; font-weight:800; font-size:12.5px; letter-spacing:.12em; border-radius:999px; padding:7px 18px; margin-bottom:18px; }
        .juku-h1 { font-size:clamp(28px,6vw,52px); font-weight:900; line-height:1.35; margin:0 0 14px; text-shadow:0 2px 24px rgba(0,0,0,.4); }
        .juku-h1 .accent { color:#ffd94d; }
        .juku-hero-sub { font-size:clamp(14px,2.4vw,18px); line-height:1.9; color:rgba(255,255,255,.92); margin:0 0 26px; }
        .juku-btn { display:inline-block; background:linear-gradient(135deg,#06C755,#04a347); color:#fff; font-weight:800; font-size:clamp(15px,2.6vw,18px); padding:16px 40px; border-radius:999px; text-decoration:none; box-shadow:0 10px 30px rgba(6,199,85,.4); transition:transform .25s ease, box-shadow .25s ease; }
        .juku-btn:hover { transform:translateY(-3px) scale(1.02); box-shadow:0 16px 40px rgba(6,199,85,.5); }
        .juku-btn-sub { display:block; margin-top:12px; color:rgba(255,255,255,.75); font-size:12.5px; }
        .juku-sec { max-width:860px; margin:0 auto; padding:clamp(56px,9vw,96px) 20px 0; }
        .juku-sec:last-of-type { padding-bottom:40px; }
        .juku-label { text-align:center; font-size:11.5px; font-weight:800; letter-spacing:.28em; color:#d65a3a; margin-bottom:10px; }
        .juku-h2 { text-align:center; font-size:clamp(22px,4.4vw,34px); font-weight:900; line-height:1.45; margin:0 0 12px; }
        .juku-h2 .u { background:linear-gradient(transparent 62%, #ffe08a 62%); }
        .juku-lead { text-align:center; color:#6b6357; font-size:clamp(13.5px,2.2vw,15.5px); line-height:2; margin:0 auto 34px; max-width:640px; }
        .juku-photo-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(120px,1fr)); gap:10px; margin:24px auto 0; max-width:640px; }
        .juku-photo-grid img { width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,.1); }
        .juku-photo-grid img:nth-child(odd) { transform:rotate(-1.5deg); }
        .juku-photo-grid img:nth-child(even) { transform:rotate(1.5deg); }
        .juku-caption { text-align:center; font-size:12px; color:#9a917f; margin-top:8px; }
        .juku-story { font-size:clamp(14.5px,2.4vw,16.5px); line-height:2.2; }
        .juku-story p { margin:0 0 1.6em; }
        .juku-story .big { font-size:clamp(18px,3.4vw,24px); font-weight:900; line-height:1.8; text-align:center; margin:1.6em 0; }
        .juku-stats { display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:12px; }
        .juku-stat { background:#fff; border-radius:16px; padding:22px 14px; text-align:center; box-shadow:0 6px 20px rgba(0,0,0,.06); border:1px solid #f0eade; }
        .juku-stat b { display:block; font-size:clamp(22px,4.4vw,30px); font-weight:900; color:#d65a3a; font-variant-numeric:tabular-nums; }
        .juku-stat span { font-size:12px; color:#6b6357; font-weight:700; }
        .juku-cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:14px; }
        .juku-card { background:#fff; border-radius:18px; padding:24px 20px; box-shadow:0 6px 24px rgba(0,0,0,.06); border:1px solid #f0eade; }
        .juku-card .ico { font-size:26px; }
        .juku-card h3 { font-size:16.5px; font-weight:800; margin:10px 0 6px; }
        .juku-card p { font-size:13.5px; line-height:1.9; color:#6b6357; margin:0; }
        .juku-card .tag { display:inline-block; font-size:11px; font-weight:800; color:#1d5c4d; background:#e7f2ec; border-radius:999px; padding:3px 10px; margin-top:10px; }
        .juku-quote { border-left:4px solid #d65a3a; background:#fff; border-radius:0 16px 16px 0; padding:20px 24px; margin:26px 0; font-size:15px; line-height:2.1; box-shadow:0 6px 20px rgba(0,0,0,.05); }
        .juku-change { background:#1d5c4d; border-radius:24px; padding:clamp(28px,5vw,48px) clamp(20px,4vw,40px); color:#fff; }
        .juku-change h3 { text-align:center; font-size:clamp(19px,3.6vw,26px); font-weight:900; margin:0 0 22px; }
        .juku-change li { list-style:none; padding:10px 0 10px 34px; position:relative; font-size:clamp(14px,2.4vw,16px); line-height:1.8; border-bottom:1px dashed rgba(255,255,255,.2); }
        .juku-change li::before { content:"✓"; position:absolute; left:4px; color:#ffd94d; font-weight:900; }
        .juku-change ul { margin:0; padding:0; }
        .juku-price { background:#fff; border:2px solid #f0e4d4; border-radius:24px; padding:clamp(26px,5vw,44px); text-align:center; box-shadow:0 12px 40px rgba(0,0,0,.07); }
        .juku-price .term { font-weight:800; color:#6b6357; font-size:14px; }
        .juku-price .amount { font-size:clamp(40px,9vw,64px); font-weight:900; color:#2b2620; font-variant-numeric:tabular-nums; line-height:1.1; }
        .juku-price .amount small { font-size:18px; }
        .juku-price .perday { display:inline-block; margin-top:10px; background:#fff3df; color:#b06a00; font-weight:800; font-size:13.5px; border-radius:999px; padding:6px 16px; }
        .juku-price .discount { margin-top:16px; font-size:14px; color:#6b6357; }
        .juku-price .discount b { color:#d65a3a; font-size:18px; }
        .juku-spec { text-align:left; max-width:560px; margin:22px auto 0; font-size:13.5px; line-height:2; color:#6b6357; }
        .juku-faq details { background:#fff; border:1px solid #f0eade; border-radius:14px; margin-bottom:10px; overflow:hidden; }
        .juku-faq summary { cursor:pointer; font-weight:800; font-size:14.5px; padding:16px 18px; list-style:none; }
        .juku-faq summary::before { content:"Q. "; color:#d65a3a; }
        .juku-faq .a { padding:0 18px 16px; font-size:13.5px; line-height:2; color:#6b6357; }
        .juku-profile { display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:clamp(24px,4vw,44px); background:#fff; border-radius:24px; padding:clamp(26px,5vw,44px); box-shadow:0 10px 36px rgba(0,0,0,.07); border:1px solid #f0eade; }
        .juku-profile img { width:clamp(160px,30vw,230px); height:clamp(160px,30vw,230px); object-fit:cover; border-radius:50%; box-shadow:0 10px 30px rgba(0,0,0,.16); flex-shrink:0; }
        .juku-profile .txt { flex:1 1 320px; max-width:520px; }
        .juku-profile h3 { font-size:clamp(20px,3.4vw,26px); font-weight:900; margin:0 0 4px; }
        .juku-profile .role { font-size:13px; font-weight:800; color:#d65a3a; margin:0 0 12px; }
        .juku-profile p { font-size:14px; line-height:2.1; color:#4a443a; margin:0 0 14px; }
        .juku-eg-link { display:inline-block; background:#1d5c4d; color:#fff; font-weight:800; font-size:14px; padding:12px 24px; border-radius:999px; text-decoration:none; transition:transform .2s ease; }
        .juku-eg-link:hover { transform:translateY(-2px); }
        .juku-final { text-align:center; background:linear-gradient(160deg,#123c32,#1d5c4d); border-radius:28px; color:#fff; padding:clamp(34px,6vw,56px) clamp(20px,5vw,48px); }
        .juku-final .big { font-size:clamp(20px,4.2vw,30px); font-weight:900; line-height:1.7; margin:0 0 14px; }
        .juku-final p { color:rgba(255,255,255,.85); line-height:2; font-size:clamp(13.5px,2.2vw,15.5px); }
        .juku-fixed { position:fixed; left:0; right:0; bottom:0; z-index:50; background:rgba(250,247,242,.94); backdrop-filter:blur(10px); border-top:1px solid #eee2d0; padding:10px 16px; text-align:center; }
        .juku-fixed .juku-btn { padding:13px 30px; font-size:15.5px; }
        .juku-price .regular { font-size:14px; color:#9a917f; margin:0 0 4px; }
        .juku-price .regular s { font-weight:800; font-size:17px; }
        .juku-price .tokkak { display:inline-block; background:#d65a3a; color:#fff; font-weight:900; font-size:12.5px; padding:5px 14px; border-radius:999px; margin:0 0 10px; letter-spacing:.06em; }
        @media (prefers-reduced-motion: reduce) { .juku-reveal { opacity:1; transform:none; transition:none; } }
        .juku-count { display:inline-block; background:#FFD94D; color:#1F1B16; font-weight:900; font-size:14px; padding:8px 18px; border-radius:999px; margin:0 auto 14px; letter-spacing:.02em; box-shadow:0 4px 14px rgba(0,0,0,.25); }
        .juku-count b { font-size:18px; }
        .juku-fixed .cd { display:block; font-size:11.5px; font-weight:800; color:#b3532f; margin-top:6px; }
        .juku-voice { background:#fff; border:1px solid #eee2d0; border-left:5px solid #d65a3a; border-radius:18px; padding:clamp(20px,4vw,30px); margin-top:clamp(24px,4vw,36px); }
        .juku-voice .vlabel { font-size:12px; font-weight:900; letter-spacing:.2em; color:#d65a3a; margin:0 0 10px; }
        .juku-voice blockquote { font-size:clamp(15px,2.4vw,18px); font-weight:800; line-height:1.9; color:#2c2c26; margin:0 0 10px; }
        .juku-voice .who { font-size:12.5px; color:#9a917f; margin:0; }
        .juku-anchor { font-size:13px; line-height:1.9; color:#6b6353; background:#f7f2e8; border-radius:12px; padding:12px 16px; margin:12px 0 0; }
      `}</style>

      {/* ============ HERO ============ */}
      <header className="juku-hero2">
        <img className="flyer" src="/juku/title.jpg" alt="ワクワクとドキドキがきたらGOサイン！111日で、人生はもっと面白くなる。らんぼう塾 1期生募集" />
        <div className="cta-band">
          <div className="inner">
            {(() => {
              const open = new Date("2026-08-18T00:00:00+09:00").getTime();
              const days = Math.ceil((open - Date.now()) / 86400000);
              return days > 0 ? (
                <span className="juku-count">🌈 1期生 受付中｜開講まであと <b>{days}</b> 日</span>
              ) : null;
            })()}
            <p style={{ fontSize: "clamp(17px,3.4vw,24px)", fontWeight: 900, color: "#FFD94D", margin: "4px 0 14px", letterSpacing: ".04em", lineHeight: 1.6 }}>
              いのちが喜ぶことを、カタチにする。
            </p>
            <p className="period">111日間のオンラインプログラム｜2026年8月18日(火)〜12月6日(日)</p>
            <a className="juku-btn" href={LINE} target="_blank" rel="noopener noreferrer">
              まずLINEで無料相談する →
            </a>
            <span className="juku-btn-sub">※ 相談だけでもOK。押し売りはしません。</span>
          </div>
        </div>
      </header>

      {/* ============ STORY ============ */}
      <section className="juku-sec">
        <Reveal>
          <p className="juku-label">WHY</p>
          <h2 className="juku-h2">この塾をはじめる<span className="u">理由</span></h2>
          <div className="juku-story">
            <p style={{ fontWeight: 700, color: "#1d5c4d", lineHeight: 2.2, borderLeft: "4px solid #FFD94D", paddingLeft: 16, margin: "0 0 22px" }}>
              海が汚れ、川が枯れ、動物たちが姿を消し、人が人と争い、地球が病んでいく。<br />
              自分にできることは微力かもしれない。それでも、よりよい未来をつくるために、できることをしたい。<br />
              魂が喜ぶ方へ。いのちが喜ぶ方へ。
            </p>
            <p>
              <b>世界で起きているホントのことを、知りたい。自分の人生を、自分の手で動かしたい。</b><br />
              ——そう思ったことがある人へ、この塾をつくりました。
            </p>
            <p>
              地球一周の旅で、戦争や貧困、環境破壊が起きている現場を、この目で見てきました。
              ネイティブアメリカンの長老からは、<b>「7世代先の子どもたちのことを考えて行動しなさい」</b>と教わりました。
              その言葉が、今も僕の行動の原点です。
            </p>
            <p>
              悲しい現実も、たくさん見てきた。それでも、未来はまだ、つくれると信じています。
              <b>よりよい未来をつくるために、自分にできることを。いのちが喜ぶことを、ひとつずつカタチにしていく。</b>
              その積み重ねが、7世代先の子どもたちに誇れる明日になるはずだから。
            </p>
            <p>
              僕の人生には、一つだけルールがあります。<br />
              <b>「ワクワクとドキドキが同時に来たらGOサイン。」</b>
            </p>
            <p>
              その繰り返しで、地球一周したり、砂漠1000kmを走ったり、学校をつくったりしてきました。
              カヌーで1500キロの航海をしたり、家族でバリ島出産旅に行ったり、マサイの村には4度お伺いしました。
              砂漠マラソンに挑戦する1ヶ月前に交通事故に遭い、むちうちで前しか向けなくなったこともありました（笑）。
            </p>
            <div className="juku-photo-grid">
              <img src="/juku/canoe.jpg" alt="カヌーで宮崎〜広島1500km航海" loading="lazy" />
              <img src="/juku/kayak.jpg" alt="瀬戸内カヤック横断隊" loading="lazy" />
              <img src="/juku/maasai.jpg" alt="マサイの村にて" loading="lazy" />
              <img src="/juku/rainbow.jpg" alt="標高5200mレインボーマウンテン" loading="lazy" />
            </div>
            <p className="juku-caption">カヌー1500km航海／瀬戸内カヤック横断／マサイの村／標高5200mレインボーマウンテン</p>
            <p>
              心の声に従って動き続けてきたら、想像以上に面白いことばかりでした。
              この感動を共有したい。人生一度きり。何か変えたい。何か始めたい。
              そんな人たちと一緒に、次の景色を見に行く場所が<b>らんぼう塾</b>です。
            </p>
            <p className="big">不安でもいい。準備ができてなくて大丈夫。<br />すべては未完成からはじまる。</p>
          </div>
        </Reveal>
      </section>

      {/* ============ RESULTS ============ */}
      <section className="juku-sec">
        <Reveal>
          <p className="juku-label">RESULTS</p>
          <h2 className="juku-h2">やることは全部、<span className="u">自分で証明済み</span></h2>
          <p className="juku-lead">SNSも、AIも、使い方ひとつで人生は大きく変わります。0期生と一緒に実際に起きたことです。</p>
          <div className="juku-stats">
            <div className="juku-stat"><b>15,000</b><span>Threadsフォロワー（2ヶ月半で）</span></div>
            <div className="juku-stat"><b>500万</b><span>総再生View達成</span></div>
            <div className="juku-stat"><b>500回+</b><span>全国各地での講演</span></div>
            <div className="juku-stat"><b>100人+</b><span>移住のキッカケづくり</span></div>
            <div className="juku-stat"><b>500km+</b><span>子どもたちと歩いたお遍路</span></div>
          </div>
        </Reveal>
      </section>

      {/* ============ CONTENTS ============ */}
      <section className="juku-sec">
        <Reveal>
          <p className="juku-label">CONTENTS</p>
          <h2 className="juku-h2">111日間の<span className="u">全部入り</span>プログラム</h2>
          <p className="juku-lead">「知る」だけで終わらせない。聴いて、話して、会って、伸ばして、つながる。続くしかけが全部そろっています。</p>
          <div className="juku-cards">
            <div className="juku-card">
              <div className="ico">🎙</div>
              <h3>限定ラジオ</h3>
              <p>世界の裏側、旅のリアル、学校づくりの失敗と成功。ここでしか話せないことを惜しみなく。</p>
              <span className="tag">火・木・土 配信</span>
            </div>
            <div className="juku-card">
              <div className="ico">💻</div>
              <h3>Zoomライブミーティング</h3>
              <p>月2回の生配信。ゲスト出演もあり。質問し放題、相談し放題。録画ありだから忙しくても追いつけます。</p>
              <span className="tag">月2回・録画あり</span>
            </div>
            <div className="juku-card">
              <div className="ico">🌈</div>
              <h3>神山合宿</h3>
              <p>地方創生の聖地・神山町に集まる特別合宿。画面越しの仲間が、リアルの仲間に変わる日。</p>
              <span className="tag">リアル開催</span>
            </div>
            <div className="juku-card">
              <div className="ico">🤝</div>
              <h3>ワクドキ祭り</h3>
              <p>塾生同士が「やりたいこと」を持ち寄る発表の場。本気で夢を語れる仲間がここにいます。</p>
              <span className="tag">塾生企画</span>
            </div>
            <div className="juku-card">
              <div className="ico">📈</div>
              <h3>バズ部屋</h3>
              <p>Threads伸ばしあいルーム。投稿を見せ合い、伸びた工夫を全員で共有。再現性が手に入ります。</p>
              <span className="tag">Threads攻略</span>
            </div>
            <div className="juku-card">
              <div className="ico">💬</div>
              <h3>LINE交流グループ</h3>
              <p>111日間つながり続ける日常の場。世界情勢から今日の一歩まで、何でも話せる仲間。</p>
              <span className="tag">常時開放</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ LEARN ============ */}
      <section className="juku-sec">
        <Reveal>
          <p className="juku-label">LEARN</p>
          <h2 className="juku-h2">この塾で<span className="u">学べること</span></h2>
          <div className="juku-quote">
            <b>🔥 Threads攻略</b><br />
            Threadsで1カ月半で10,000フォロワー、2ヶ月半で15,000フォロワー達成。2026年1月、XのアクティブユーザーをThreadsがついに超えました。伸ばし方は、才能ではなく仕組みです。
          </div>
          <div className="juku-quote">
            <b>🌏 世界でいま起きている「ホントのこと」</b><br />
            ニュースを見ていても、何がホントか分からない——そんな時代です。地球一周し、紛争地や世界各地を自分の足で歩いてきたからこそ見えた、メディアには流れない現場のリアル。世界でいま何が起きているのか、その「ホントのこと」をお話しします。知ったうえで、よりよい未来のためにできることを、みんなで考えていきます。
          </div>
          <div className="juku-quote">
            <b>🤖 AI活用術</b><br />
            文章・画像・チラシ・サイト制作まで、AIで作る実践術。なんと、このページ自体もすべてAIで作っています。
          </div>
          <div className="juku-quote">
            <b>🌈 ゲストトーク｜本物（虹の戦士）に会える</b><br />
            地球のあちこちで、らんぼうが巡り会ってきた「本物」たちが塾にやってきます。マサイの戦士、海を渡る航海士、暮らしを自給する実践者、地域を動かす変わり者——。教科書には載っていない生き方、活動のはじめ方、好きを仕事に変える仕事づくりを、本人の言葉で直接聞ける特別授業です。「こんな生き方があったのか」。その出逢いが、あなたの人生の選択肢を増やします。
          </div>
          <div className="juku-quote">
            <b>🏫 オルタナティブな学校づくりのリアル</b><br />
            「森の学校みっけ」「旅する学校」「KAMIYAMA FIELD SCHOOL」——3つの学校立ち上げに関わり、成功も失敗も含めた現場から見えてきた「これからの時代に本当に必要な力」をお話しします。
          </div>
        </Reveal>
      </section>

      {/* ============ CHANGE ============ */}
      <section className="juku-sec">
        <Reveal>
          <div className="juku-change">
            <h3>111日後のあなたは、こう変わっている</h3>
            <ul>
              <li>想いを言葉にできるようになっている</li>
              <li>世界や未来を自分の言葉で語れるようになっている</li>
              <li>好きなことが少しずつ仕事になり始めている</li>
              <li>本気で夢を語れる仲間がいる</li>
              <li>気づけば、自分のヴィジョンに向かって歩き出している</li>
            </ul>
          </div>
          <p className="juku-lead" style={{ marginTop: 24 }}>
            劇的に人生が変わるかは分かりません。でも、きっと昨日までの自分とは少し違っています。<br />
            人生って、ある日突然変わるより、コツコツ続けた時間が振り返ると一番大きな一歩だったりするんです。
          </p>
        </Reveal>
      </section>

      {/* ============ VOICES ============ */}
      <section className="juku-sec">
        <Reveal>
          <p className="juku-label">VOICES</p>
          <h2 className="juku-h2">参加者の<span className="u">声</span></h2>
          <div className="juku-voice">
            <p className="vlabel">0期 受講生の声</p>
            <blockquote>
              「自分がどの環境に身を置くか？　今回、身をもって体感しました。<br /><br />
              <b>『やってみるといいんとちゃう。』</b><br />
              その言葉が、今回一番残っています。<br /><br />
              今まで、やったらダメ！できない！無理！わがままを言ってはいけない！そんな環境で育ってきました。自分が自分に制限をかけていたことに、気づけました。<br /><br />
              『やってみるといいんとちゃう』なんて言ってくれる人は、周りにいなかった。<br /><br />
              自分の足を地につけて、行動してみる。やってみないとわからないこともある。やったからこそ見える景色がある。ホンマに、未完成でもいいからやってみる‼︎　そこに意味があったんだと、私は思いました。」
            </blockquote>
            <p className="who">—— 0期受講生（長崎・女性）</p>
          </div>
        </Reveal>
      </section>

      {/* ============ PROFILE ============ */}
      <section className="juku-sec">
        <Reveal>
          <p className="juku-label">TEACHER</p>
          <h2 className="juku-h2">教えるのは、<span className="u">らんぼう</span></h2>
          <div className="juku-profile">
            <img src="/juku/canoe.jpg" alt="らんぼう" loading="lazy" />
            <div className="txt">
              <h3>らんぼう</h3>
              <p className="role">旅人・砂漠ランナー・学校づくり・4児の父</p>
              <p>
                地球一周の旅暮らしを経て、徳島・神山町へ。砂漠1000km走破。
                オルタナティブスクール3校を仲間と立ち上げ、のべ100人の子どもたちと500km以上の歩きお遍路旅。
                全国各地で500回以上の講演。Threadsは2ヶ月半で15,000フォロワー。
                やることは全部、まず自分でやってみる人です。
              </p>
              <a className="juku-eg-link" href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener noreferrer">
                らんぼうの全貌は「あーすガイド」へ →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ PRICE ============ */}
      <section className="juku-sec">
        <Reveal>
          <p className="juku-label">PRICE</p>
          <h2 className="juku-h2">受講料</h2>
          <div className="juku-price">
            <p className="tokkak">🌈 1期生特別価格（今回だけ）</p>
            <p className="term">111日間・全コンテンツ込み</p>
            <p className="regular">正規価格 <s>49,800円</s> のところ</p>
            <p className="amount">39,800<small>円（税込）</small></p>
            <p className="perday">1日あたり 約358円 ＝ コーヒー1杯以下</p>
            <p className="juku-anchor">内訳：限定ラジオ 約48回（火・木・土×16週）＋ Zoomライブ 約8回 ＋ 神山合宿・ワクドキ祭り ＋ バズ部屋・LINEグループ111日間。1コンテンツあたり 約710円 の計算です。</p>
            <p className="discount">
              仲間と一緒につくり上げる記念すべき1期だからこその価格です。<b>2期以降は正規価格49,800円を予定</b>しています。
            </p>
            <div className="juku-spec">
              <b>【期間】</b>2026年8月18日(火)〜12月6日(日)（111日間）<br />
              <b>【形式】</b>オンライン中心（限定ラジオ・Zoom・LINEグループ）＋神山合宿・ワクドキ祭り<br />
              <b>【申込後の流れ】</b>LINEで申込 → 受講料のお振込確認後、8月18日までにLINEグループへご招待<br />
              <b>【振込先】</b>PAYPAY銀行 かわせみ支店(007) 普通 4304359 ウエダナオキ
            </div>
            <div style={{ marginTop: 26 }}>
              <a className="juku-btn" href={LINE} target="_blank" rel="noopener noreferrer">
                LINEで申し込む・相談する →
              </a>
              <span className="juku-btn-sub" style={{ color: "#9a917f" }}>「らんぼう塾の件」とメッセージをどうぞ</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ FAQ ============ */}
      <section className="juku-sec">
        <Reveal>
          <p className="juku-label">FAQ</p>
          <h2 className="juku-h2">よくある質問</h2>
          <div className="juku-faq">
            <details>
              <summary>忙しくてリアルタイム参加が難しいのですが</summary>
              <div className="a">Zoomは録画をお渡ししますし、限定ラジオは好きな時間に聴けます。111日あるので、ご自分のペースで追いつけます。</div>
            </details>
            <details>
              <summary>SNS初心者でも大丈夫ですか</summary>
              <div className="a">大丈夫です。バズ部屋でみんなと一緒に伸ばしてゆきます。未経験スタートでも大丈夫です。</div>
            </details>
            <details>
              <summary>神山合宿・ワクドキ祭りは必須ですか</summary>
              <div className="a">任意です。来られる方はぜひ。来られなくてもオンラインで十分に価値を受け取れる設計です。</div>
            </details>
            <details>
              <summary>子育て中でも参加できますか</summary>
              <div className="a">オンライン中心なので、家事や子育ての合間にご参加いただけます。Zoomは録画もあるので、リアルタイムでなくても大丈夫です。らんぼう自身も4児の父です。</div>
            </details>
            <details>
              <summary>申し込む前に相談できますか</summary>
              <div className="a">はい。LINEで無料相談を受け付けています。「自分に合うかな？」という段階から一緒に考えます。押し売りはしませんので、お気軽にどうぞ。</div>
            </details>
            <details>
              <summary>どんな人が向いていますか</summary>
              <div className="a">「何か変えたい」「何か始めたい」人。教育・旅・地域づくり・発信に関心がある人。完璧な準備はいりません。ワクワクとドキドキが来ているなら、それがGOサインです。</div>
            </details>
          </div>
        </Reveal>
      </section>

      {/* ============ FINAL ============ */}
      <section className="juku-sec">
        <Reveal>
          <div className="juku-final">
            <p className="big">ワクワクとドキドキは、<br />未来の自分から届くGOサイン。</p>
            <p>
              一緒に、そんな景色を見に行きませんか？<br />
              不安でもいい。準備ができてなくて大丈夫。すべては未完成からはじまる。
            </p>
            <div style={{ marginTop: 22 }}>
              <a className="juku-btn" href={LINE} target="_blank" rel="noopener noreferrer">
                🌈 1期生として参加する →
              </a>
              <p style={{ marginTop: 18 }}>
                <a href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.8)", fontSize: 13, textDecoration: "underline", textUnderlineOffset: 4 }}>
                  らんぼう公式サイト「あーすガイド」を見る →
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <ShareButtons
        url="https://www.tabigaku.party/juku"
        text="111日間のオンラインプログラム「らんぼう塾」1期生募集中。限定ラジオ・ゲスト出演Zoom・神山合宿・バズ部屋・AI活用術まで。世界を学び、仲間と人生を動かす。"
        title="＼ らんぼう塾をシェア ／"
      />

      <div style={{ height: 90 }} />

      {/* ============ 固定CTA ============ */}
      <div className="juku-fixed">
        <a className="juku-btn" href={LINE} target="_blank" rel="noopener noreferrer">
          らんぼう塾 1期生に申し込む（LINE）
        </a>
        {(() => {
          const open = new Date("2026-08-18T00:00:00+09:00").getTime();
          const days = Math.ceil((open - Date.now()) / 86400000);
          return days > 0 ? <span className="cd">開講 8/18 まで あと{days}日</span> : null;
        })()}
      </div>
    </div>
  );
}
