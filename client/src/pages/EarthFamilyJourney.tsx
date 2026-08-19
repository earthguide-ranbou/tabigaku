import { useEffect, type CSSProperties } from "react";
import ShareButtons from "@/components/ShareButtons";

const TITLE = "EARTH FAMILY JOURNEY｜世界中で「おかえり」「ただいま」と言い合える家族のような関係を｜旅する学校";
const DESC = "旅は幸せになる。家族との旅は一生の宝物。つながりは人生を豊かにする——研究が証明する3つを、旅で確かめるプロジェクト。神山町を拠点に世界各地で暮らすように旅します。地球家族ジャーニー（祝島→神山）と Earth family Journey（タイ）からはじまります。";

const LNK: CSSProperties = { color: "#04a648", fontWeight: 800, fontSize: "13.5px", textDecoration: "underline", textUnderlineOffset: 3 };

export default function EarthFamilyJourney() {
  useEffect(() => {
    document.title = TITLE;
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", DESC);
    setMeta("property", "og:title", TITLE);
    setMeta("property", "og:description", DESC);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", "https://www.tabigaku.party/earth-family");
    setMeta("property", "og:image", "https://www.tabigaku.party/efj/earth-family-journey.jpg");
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;600;700;900&family=Zen+Maru+Gothic:wght@400;500;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div className="efjw">
      <style>{`
        .efjw { font-family:'Zen Maru Gothic','Hiragino Maru Gothic ProN',sans-serif; background:#faf6ee; color:#2b2620; min-height:100vh; }
        .efjw .wrap { max-width:820px; margin:0 auto; padding:0 20px; }
        .efjw h1,.efjw h2,.efjw h3 { font-family:'Noto Serif JP',serif; }

        /* ---------- HERO ---------- */
        .efjw-hero img.main { width:100%; display:block; }
        .efjw-sub { background:linear-gradient(180deg,#123c32,#1d5c4d); color:#fff; text-align:center; padding:24px 20px 22px; }
        .efjw-sub p.jp { font-family:'Noto Serif JP',serif; font-size:clamp(17px,4.6vw,24px); font-weight:900; line-height:1.9; margin:0 0 10px; letter-spacing:.04em; }
        .efjw-sub p.en { color:#FFD94D; font-size:12px; font-weight:800; letter-spacing:.22em; margin:0; }

        /* ---------- SECTIONS ---------- */
        .efjw-sec { padding:clamp(46px,8vw,80px) 0 0; }
        .efjw-label { text-align:center; font-size:11.5px; font-weight:800; letter-spacing:.28em; color:#d65a3a; margin-bottom:10px; }
        .efjw-h2 { text-align:center; font-size:clamp(21px,5vw,32px); font-weight:900; line-height:1.5; margin:0 0 26px; }
        .efjw-h2 .u { background:linear-gradient(transparent 62%,#ffe9a8 62%); }
        .efjw p.lead { font-size:15.5px; line-height:2.2; margin:0 0 18px; }
        .efjw b { color:#123c32; }

        .efjw-quote { background:#fff; border-radius:18px; padding:22px 22px; border-left:5px solid #FFD94D; box-shadow:0 10px 30px rgba(29,60,50,.06); margin:0 0 18px; font-size:14.5px; line-height:2.1; }
        .efjw-quote b.t { display:block; color:#123c32; margin-bottom:8px; font-size:15.5px; }
        .efjw-quote ol { margin:0; padding-left:1.4em; }
        .efjw-quote li { margin-bottom:6px; }
        .efjw-src { display:block; font-size:11.5px; color:#9a917f; margin-top:10px; }

        .efjw-big { text-align:center; font-family:'Noto Serif JP',serif; font-weight:900; font-size:clamp(19px,4.6vw,27px); line-height:1.9; color:#123c32; margin:30px 0 8px; }
        .efjw-ask { background:#123c32; color:#fff; border-radius:18px; text-align:center; padding:26px 22px; margin-top:26px; }
        .efjw-ask p { margin:0; font-size:clamp(16px,4vw,21px); font-weight:900; line-height:1.9; }
        .efjw-ask p em { color:#FFD94D; font-style:normal; }

        /* ---------- VISION ---------- */
        .efjw-vision { background:linear-gradient(180deg,#fdf9ef,#eef4ea); border-radius:22px; padding:26px 22px; border:1px solid #e8ddc8; }
        .efjw-vision .toast { text-align:center; font-size:clamp(17px,4.2vw,23px); font-weight:900; color:#123c32; font-family:'Noto Serif JP',serif; line-height:2; margin:0 0 14px; }
        .efjw-vision .toast em { font-style:normal; color:#d65a3a; }

        /* ---------- JOURNEY CARDS ---------- */
        .efjw-cards { display:grid; gap:20px; margin-top:8px; }
        @media(min-width:680px){ .efjw-cards { grid-template-columns:1fr 1fr; } }
        .efjw-card { background:#fff; border-radius:20px; overflow:hidden; box-shadow:0 14px 40px rgba(29,60,50,.10); text-decoration:none; color:inherit; display:block; transition:transform .25s ease, box-shadow .25s ease; border:1px solid #eee2d0; }
        .efjw-card:hover { transform:translateY(-4px); box-shadow:0 20px 50px rgba(29,60,50,.16); }
        .efjw-card img { width:100%; aspect-ratio:16/9; object-fit:cover; display:block; }
        .efjw-card .body { padding:18px 20px 20px; }
        .efjw-card .tag { font-size:11px; font-weight:800; letter-spacing:.18em; color:#d65a3a; margin-bottom:6px; }
        .efjw-card h3 { margin:0 0 8px; font-size:19px; font-weight:900; }
        .efjw-card p { margin:0 0 12px; font-size:13.5px; line-height:1.9; color:#5c554a; }
        .efjw-card .go { font-size:13.5px; font-weight:900; color:#04a648; }


      {/* ===== 挑戦の軌跡 ===== */}
      <section style={{padding: "80px 16px", background: "#f5f0e8"}}>
        <div style={{maxWidth: 900, margin: "0 auto"}}>
          <p style={{color: "#c17f45", fontSize: "0.75rem", letterSpacing: "0.3em", textAlign: "center", marginBottom: "0.8rem"}}>CHALLENGE</p>
          <h2 style={{textAlign: "center", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 700, color: "#2c3e3a", marginBottom: "3rem", letterSpacing: "0.05em"}}>
            想いもしなかった挑戦が<br />学校づくりに繋がった
          </h2>

          {/* 砂漠マラソン */}
          <div style={{display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", marginBottom: "64px"}}>
            <div style={{flex: "1 1 300px"}}>
              <img
                src="/images/desert-marathon.jpg"
                alt="アタカマ砂漠マラソンでチーム優勝"
                style={{width: "100%", borderRadius: 12, boxShadow: "0 8px 30px rgba(0,0,0,0.12)"}}
                loading="lazy"
              />
            </div>
            <div style={{flex: "1 1 300px"}}>
              <h3 style={{fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#2c3e3a", marginBottom: "1rem", lineHeight: 1.5}}>
                交通事故に遭い、むちうちで<br />前しか向けなくなった1ヶ月後、<br />250kmの砂漠を走る極限レースで<br />奇跡の全員完走＆チーム優勝
              </h3>
              <p style={{color: "#5a4a3a", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", lineHeight: 1.9}}>
                チリ・アタカマ砂漠で開催された250kmの過酷なマラソンレース。
                交通事故で首を痛めたばかりの体に無理はできないはずだった。
                でも「ワクワクとドキドキが同時に来たらGOサイン」。
                仲間と一緒に走り抜けた先にあったのは、想像を超える感動と、
                「自分の足で歩いた距離だけ、人は強くなれる」という確信だった。
                この経験が、後の「旅する学校」の礎となった。
              </p>
            </div>
          </div>

          {/* バリ島出産旅 */}
          <div style={{display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", flexDirection: "row-reverse"}}>
            <div style={{flex: "1 1 300px"}}>
              <img
                src="/images/bali-family.jpg"
                alt="バリ島での家族との時間"
                style={{width: "100%", borderRadius: 12, boxShadow: "0 8px 30px rgba(0,0,0,0.12)"}}
                loading="lazy"
              />
            </div>
            <div style={{flex: "1 1 300px"}}>
              <h3 style={{fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#2c3e3a", marginBottom: "1rem", lineHeight: 1.5}}>
                バリ島出産旅。<br />「家族で世界を学ぶ」という<br />新しい教育の形を見つけた
              </h3>
              <p style={{color: "#5a4a3a", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", lineHeight: 1.9}}>
                妻の妊娠を機に、バリ島へ。現地の人々と共に過ごす日常の中で、
                「学校」という枠を超えた学びの豊かさを実感した。
                子どもたちが自然の中で笑い、異文化に触れ、
                家族みんなで成長していく姿を見て、
                「旅する学校」というアイデアが具体的な形を取り始めた。
                想いもしなかった出産旅が、今の活動の原点になっている。
              </p>
            </div>
          </div>
        </div>
      </section>

        /* ---------- CIRCLE (学びの循環) ---------- */
        .efjw-flow { display:grid; gap:12px; margin:18px 0 8px; }
        .efjw-flow .step { background:#fff; border:1px solid #e8ddc8; border-radius:16px; padding:16px 18px; font-size:14px; line-height:2; }
        .efjw-flow .step b { display:block; margin-bottom:4px; font-size:15px; }

        /* ---------- SUPPORT ---------- */
        .efjw-support { background:linear-gradient(150deg,#123c32,#1d5c4d); color:#fff; border-radius:24px; padding:32px 24px; text-align:center; }
        .efjw-support h3 { margin:0 0 12px; font-size:clamp(19px,4.6vw,26px); font-weight:900; color:#FFD94D; }
        .efjw-support p { font-size:14.5px; line-height:2.1; margin:0 0 16px; }
        .efjw-bank { background:rgba(255,255,255,.1); border:1px solid rgba(255,217,77,.4); border-radius:16px; padding:18px 18px; font-size:15px; line-height:2.1; margin:0 auto 14px; max-width:440px; }
        .efjw-bank b { color:#FFD94D; font-size:16px; }
        .efjw-support .note { font-size:12px; opacity:.8; }

        .efjw-foot { text-align:center; font-size:12.5px; color:#8a8274; padding:34px 20px 30px; line-height:2.2; }
      `}</style>

      {/* ============ HERO ============ */}
      <header className="efjw-hero">
        <img className="main" src="/efj/earth-family-journey.jpg" alt="EARTH FAMILY JOURNEY 旅して、暮らして、学んで、つながる。いのちが喜ぶ地球の未来へ。" />
        <div className="efjw-sub">
          <p className="jp">世界中で「おかえり」「ただいま」と言い合える、<br />家族のような関係を。</p>
          <p className="en">旅して、暮らして、学んで、つながる。いのちが喜ぶ地球の未来へ。</p>
        </div>
      </header>

      {/* ============ キッカケ ============ */}
      <section style={{padding: "80px 16px", background: "#f5f0e8"}}>
        <div className="wrap" style={{maxWidth: 720, margin: "0 auto"}}>
          <p className="efjw-label" style={{color: "#d65a3a"}}>WHY WE STARTED</p>
          <h2 className="efjw-h2">キッカケは、いつも<br className="sp" /><span className="u">子どもたちを遊ばせに行った川が<br className="sp" />枯れたこと</span>だった。</h2>
          <p className="lead" style={{textAlign: "center", lineHeight: 2, marginTop: 24}}>
            子どものころ、僕は毎日のように近所の川で遊んでいた。水に足をつけて、魚を追いかけて、夏はずっとそこにいた。でもある日、あの川は枯れてしまった。海に行っても、かつてのように魚が跳ねる姿は少なくなっていた。
          </p>
          <div style={{margin: "32px auto", maxWidth: 560, borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,.12)"}}>
            <img src="/efj/dried-river.jpg" alt="かつて子どもたちが遊んでいた川。今は水が枯れ、石だけが残っている。" style={{width: "100%", display: "block"}} />
            <p style={{fontSize: 12, color: "#888", textAlign: "center", padding: "8px 12px", background: "#fff", margin: 0}}>かつては水が流れ、魚が泳いでいた。今は石だけが残っている。</p>
          </div>
          <p className="lead" style={{textAlign: "center", lineHeight: 2}}>
            生き物が減り、人と人が分断されていく。SNSでは誰かを責めることばかりが増えて、本当の「対話」が少なくなっている。そんな世界を、未来の子どもたちに手渡していいのだろうか。
          </p>
          <p className="lead" style={{textAlign: "center", lineHeight: 2, marginTop: 16}}>
            でも僕は思う。インプットだけの世界じゃなく、アウトプットもある。行ったりきたりすることで、何かが生まれる可能性がある。旅から学び、学びを旅に還元する。そうした循環の中で、人と人が「おかえり」と言い合える場所を、一つずつ増やしていく。
          </p>
        </div>
      </section>

      {/* ============ 地球再生ビジョン ============ */}
      <section style={{padding: "80px 16px", background: "#123c32", color: "#f5f0e8"}}>
        <div className="wrap" style={{maxWidth: 720, margin: "0 auto", textAlign: "center"}}>
          <p className="efjw-label" style={{color: "#ffe9a8", opacity: .9}}>OUR VISION</p>
          <h2 className="efjw-h2" style={{color: "#f5f0e8"}}>あくまでも<br className="sp" /><span style={{background: "linear-gradient(transparent 62%,#d65a3a 62%)"}}>目指すは地球再生の方向</span>。</h2>
          <p style={{textAlign: "center", lineHeight: 2, marginTop: 24, fontSize: "clamp(14px,3.2vw,16px)"}}>
            Earth Family Journey が目指すのは、一つだけじゃない。地球再生も、僕たちのビジョンの一つだ。世界中の海や山、里山や島々を巡りながら、そこで生きる人たちと向き合い、子どもたちが自然の中で遊び、学び、大人たちが対話を重ねる。
          </p>
          <p style={{textAlign: "center", lineHeight: 2, marginTop: 16, fontSize: "clamp(14px,3.2vw,16px)"}}>
            旅を通じて「つながり」を再生し、教育を通じて「未来」を育み、地域を通じて「場」をつくる。そうして、未来の子どもたちが「おかえり」と言い合える地球を、一緒に手渡していく。
          </p>
          <p style={{textAlign: "center", lineHeight: 2, marginTop: 16, fontSize: "clamp(14px,3.2vw,16px)"}}>
            インプットとアウトプット。行ったりきたりすることの可能性。旅から学び、学びを旅に還元する。そうした循環の中で、地球が少しずつ変わっていく。それが、僕たちの目的です。
          </p>
          <div style={{marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 480, margin: "40px auto 0"}}>
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "clamp(28px,6vw,40px)", fontWeight: 900, color: "#d65a3a", margin: 0}}>1<span style={{fontSize: 18}}>周</span></p>
              <p style={{fontSize: 12, opacity: .8, margin: "4px 0 0"}}>地球を旅した</p>
            </div>
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "clamp(28px,6vw,40px)", fontWeight: 900, color: "#d65a3a", margin: 0}}>500+<span style={{fontSize: 18}}>回</span></p>
              <p style={{fontSize: 12, opacity: .8, margin: "4px 0 0"}}>講演・上映・対話</p>
            </div>
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "clamp(28px,6vw,40px)", fontWeight: 900, color: "#d65a3a", margin: 0}}>∞</p>
              <p style={{fontSize: 12, opacity: .8, margin: "4px 0 0"}}>神山での学校づくり</p>
            </div>
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "clamp(28px,6vw,40px)", fontWeight: 900, color: "#d65a3a", margin: 0}}>多数</p>
              <p style={{fontSize: 12, opacity: .8, margin: "4px 0 0"}}>移住者が集まる街</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 研究 ============ */}
      <section className="efjw-sec"><div className="wrap">
        <p className="efjw-label">ONE LIFE</p>
        <h2 className="efjw-h2">人生一度きり。<br className="sp" /><span className="u">後悔のない人生</span>を送りたい。</h2>
        <p className="lead">
          そして、人は何を後悔するのか、どうすれば後悔しないのか――その答えを探しました。
        </p>
        <div className="efjw-quote">
          <b className="t">📖 人生の最後に、人は何を後悔するのか</b>
          終末期の患者を何百人も看取った看護師の記録「The Top Five Regrets of the Dying」では、後悔の上位は<b>「自分に正直な人生を生きればよかった」「仕事ばかりせず、大切な人との時間をもっと持てばよかった」</b>。心理学者 Thomas Gilovich の研究でも、長く残るのは「やった失敗」より<b>「挑戦しなかったこと」「行動しなかったこと」の後悔</b>でした。<br />
          失敗したことより、やらなかったことが残る——。じゃあ、後悔しないためには何をすればいいのか。その答えも、研究が教えてくれていました。
        </div>
        <p className="lead" style={{ textAlign: "center", fontWeight: 900, color: "#123c32", fontSize: "17px", margin: "26px 0 16px" }}>
          後悔しないための3つのヒント
        </p>
        <div className="efjw-quote">
          <b className="t">🧳 旅は、お金で買えるいちばん幸福なもの —— コーネル大学の研究</b>
          心理学者 Thomas Gilovich らの研究で、幸福度が長続きするのは「モノ」を買うより「経験」にお金を使うことだと分かっています。モノは慣れて古びるけれど、<b>旅の経験は、時間がたつほど良い思い出に育ち、誰かと分かち合える</b>。だから旅は「贅沢」じゃなくて、人生へのいちばん良い投資なんです。
        </div>
        <div className="efjw-quote">
          <b className="t">👨‍👩‍👧 人生最も幸せな思い出は「家族との旅行」—— イギリスの大規模調査</b>
          英 Family Holiday Association の調査では、人生最も幸せな思い出を尋ねたところ、<b>約半数（49%）の人が「家族との旅行」</b>と答えました。家族の旅は、何年たっても心を支えてくれる「幸せの貯金」になります。
        </div>
        <div className="efjw-quote">
          <b className="t">🤝 幸せの最大の要因は「あたたかい人間関係」—— ハーバード大学・80年研究</b>
          80年以上続くハーバード大学の成人発達研究がたどり着いた結論はシンプルでした。幸せで健康な人生を決めるのは、富でも名声でもなく、<b>「あたたかい人間関係の質」</b>。つながりこそが、人生そのものを豊かにしていました。
        </div>
        <p className="efjw-big">旅は、幸せになる。<br />家族との旅は、一生の宝物になる。<br />つながりは、人生を豊かにする。</p>
        <p className="lead" style={{ textAlign: "center", marginTop: 6 }}>
          人生一度きり。後悔のない人生を送りたい。だからこそ、研究が証明しているこの3つを、僕らは旅で確かめにいきます。
        </p>
        <div className="efjw-ask">
          <p>あなたが今、<em>一歩踏み出したいこと</em>は、何ですか？</p>
        </div>
      </div></section>

      {/* ============ VISION ============ */}
      <section className="efjw-sec"><div className="wrap">
        <p className="efjw-label">OUR ANSWER</p>
        <h2 className="efjw-h2">晩酌の席で、<br className="sp" />ひとつの質問をしました</h2>
        <div className="efjw-vision">
          <p className="toast">「なんの制限もなかったとしたら、<br />あなたは何をする？」</p>
          <p className="lead" style={{ textAlign: "center" }}>
            旅先で、あちこちで晩酌をしながら聞いてまわったこの質問。<br />
            返ってきた答えに、いつも2つの言葉が入っていました。<br />
            <b>「旅」</b>と、<b>「家族」</b>です。
          </p>
          <p className="lead">
            どうも、らんぼうです。僕は徳島・神山町に拠点をおきながら、世界各地で暮らすように旅をしたい。
            時には家族と。時には仲間と。時には子どもたちと。
            訪ねる先に「おかえり」と言ってくれる人がいて、帰る場所に「ただいま」と言える人がいる。
            だから、そんな関係をつくっていく<b>「EARTH FAMILY JOURNEY」</b>というプロジェクトをはじめることにしました。
          </p>
        </div>
      </div></section>

      {/* ============ JOURNEYS ============ */}
      <section className="efjw-sec"><div className="wrap">
        <p className="efjw-label">START HERE</p>
        <h2 className="efjw-h2">だからこそ、<br className="sp" /><span className="u">こんな旅からはじめます</span></h2>
        <div className="efjw-cards">
          <a className="efjw-card" href="/efj">
            <img src="/efj/banner.jpg" alt="地球家族ジャーニー 祝島から神山へ" loading="lazy" />
            <div className="body">
              <p className="tag">JAPAN｜2026年8月5日〜14日</p>
              <h3>地球家族ジャーニー</h3>
              <p>山口・祝島から徳島・神山へ。太陽と風の塩づくり、島の暮らし、オルタナティブスクール、焚き火と星空、阿波おどり。魂が震え、いのちが喜ぶ10日間。親子・ご家族歓迎。</p>
              <span className="go">旅の詳細を見る →</span>
            </div>
          </a>
          <a className="efjw-card" href="/thai">
            <img src="/manus-storage/thai_img_00_2e972116.jpg" alt="Earth family Journey タイ編" loading="lazy" />
            <div className="body">
              <p className="tag">THAILAND｜EarthfamilyJourney タイ編</p>
              <h3>Earth family Journey</h3>
              <p>タイの自然と人々の暮らしに飛び込む、家族で参加できる海外編。世界の「おかえり」「ただいま」が、ここから広がっていきます。</p>
              <span className="go">旅の詳細を見る →</span>
            </div>
          </a>
        </div>
      </div></section>

      {/* ============ 学びの循環 ============ */}
      <section className="efjw-sec"><div className="wrap">
        <p className="efjw-label">PASS IT ON</p>
        <h2 className="efjw-h2">旅で得た学びを、<span className="u">次へ繋いでいく</span></h2>
        <p className="lead">
          旅は、行って終わりにしません。そこで得た学びや出逢いを、かたちにして次へ渡していきます。
        </p>
        <div className="efjw-flow">
          <div className="step"><b>🏫 学校・オルタナティブスクールで</b>旅の経験を子どもたちに共有する授業や、世界の「ホントのこと」を伝える出前トーク。</div>
          <div className="step"><b>🗣 各地でのお話会</b>旅先の人と暮らし、文化の記録を、お話会や上映会というかたちで届ける。</div>
          <div className="step"><b>🌈 らんぼう塾（オンラインスクール）</b>旅で学んだことを、仲間と一緒に実践へ移していく111日間の場。</div>
          <div className="step"><b>🏢 企業研修・視察</b>神山町の地域づくりの現場から、組織と人のあり方を一緒に考える時間。</div>
        </div>
        <p className="lead" style={{ marginTop: 18 }}>
          そうやって、国内外のあちこちを行ったり来たりする、<b>家族のような関係性</b>をつくっていきます。
          その先にあるのは、失われつつある文化や自然環境、平和や人権——<b>先人から受け継がれてきた大切なものを、未来へ繋いでいくこと</b>。
          それが、この EARTH FAMILY JOURNEY のゴールです。
        </p>
      </div></section>

      {/* ============ 応援する ============ */}
      <section className="efjw-sec"><div className="wrap">
        <p className="efjw-label">SUPPORT</p>
        <h2 className="efjw-h2">この旅を、<span className="u">応援する</span></h2>
        <div className="efjw-support">
          <h3>あなたの応援が、誰かの「一歩」になる</h3>
          <p>
            この旅と学びの循環は、応援してくれる仲間の力で育っていきます。<br />
            金額に決まりはありません。一口のお気持ちが、子どもたちへの授業の足代になり、
            文化の記録を残す一冊になり、誰かが踏み出すきっかけになります。<br />
            「応援してるよ」の気持ちを、よろしければお振込みでお寄せください。
          </p>
          <div className="efjw-bank">
            <b>お振込先</b><br />
            PAYPAY銀行　かわせみ支店（007）<br />
            普通　4304359　ウエダ ナオキ<br />
            <span style={{ fontSize: 12.5, opacity: .85 }}>※ お名前の前に「エフジェーおうえん」など、一言添えていただけると嬉しいです</span>
          </div>
          <p className="note">
            ご寄付・応援のご連絡や、講演・出前授業のご依頼は LINE またはメールでお気軽にどうぞ。<br />
            シェアしていただくだけでも、大きな応援になります。
          </p>
        </div>
      </div></section>

      <div style={{ height: 34 }} />

      <ShareButtons
        url="https://www.tabigaku.party/earth-family"
        text="EARTH FAMILY JOURNEY｜世界中で「おかえり」「ただいま」と言い合える家族のような関係を。旅は幸せになる。家族との旅は一生の宝物。つながりは人生を豊かにする。一歩踏み出す旅が、ここからはじまります。"
        title="＼ EARTH FAMILY JOURNEY をシェア ／"
      />

      <div className="efjw-foot">
        企画・運営｜あーすガイド（らんぼう）／ 旅する学校<br />
        <a href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener noreferrer" style={LNK}>あーすガイド公式サイト</a>
        <span style={{ margin: "0 10px", color: "#c9c2b2" }}>｜</span>
        <a href="https://note.com/shiftdaigaku" target="_blank" rel="noopener noreferrer" style={LNK}>note</a>
        <span style={{ margin: "0 10px", color: "#c9c2b2" }}>｜</span>
        <a href="mailto:earthguide.jpn@gmail.com" style={LNK}>お問い合わせ</a>
      </div>
    </div>
  );
}
