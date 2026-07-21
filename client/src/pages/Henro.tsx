import { useEffect } from "react";
import "./henro.css";

export default function Henro() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const reveals = document.querySelectorAll(".henro-page .reveal");
    reveals.forEach((el) => {
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(":scope > .reveal"));
        const sibIndex = siblings.indexOf(el);
        if (sibIndex > 0) {
          (el as HTMLElement).style.transitionDelay = `${sibIndex * 0.08}s`;
        }
      }
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="henro-page">
      {/* ===== HEADER ===== */}
      <header className="henro-header">
        <div className="henro-header-inner">
          <div className="henro-logo">
            <span className="henro-logo-main">歩きお遍路ジャーニー</span>
            <span className="henro-logo-sub">EARTHFAMILY JOURNEY</span>
          </div>
          <a
            href="https://share.google/yiy4Xtnmzc0Ty4c4U"
            target="_blank"
            rel="noopener noreferrer"
            className="henro-cta-btn"
          >
            お申し込み
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="henro-hero">
        <img
          src="/manus-storage/group_photo_1124f3c4.jpg"
          alt="お遍路の仲間たち"
          className="henro-hero-bg"
        />
        <div className="henro-hero-overlay" />
        <div className="henro-hero-content reveal">
          <p className="henro-hero-presents">旅する学校 presents</p>
          <h1 className="henro-hero-title">
            歩きお遍路<em>ジャーニー</em>
          </h1>
          <p className="henro-hero-subtitle">〜 修行の道場・高知編 vol.5 〜</p>
          <p className="henro-hero-lead">
            「自分の足で歩いた距離だけ、人は強くなれる。」
          </p>
          <div className="henro-hero-badges">
            <span className="henro-badge">
              <strong>2026.10.10</strong> 土 — <strong>10.15</strong> 木
            </span>
            <span className="henro-badge">
              <strong>6日間</strong> の巡礼
            </span>
            <span className="henro-badge">
              小3〜中3　<strong className="accent">定員10名</strong>
            </span>
          </div>
          <p className="henro-hero-start">
            四国最南端　<span className="accent">足摺岬</span>　スタート
          </p>
        </div>
        <div className="henro-hero-scroll">
          <span className="henro-scroll-line" />
          SCROLL
        </div>
      </section>

      {/* ===== OPENING MESSAGE ===== */}
      <section className="henro-opening">
        <div className="henro-opening-inner reveal">
          <p>
            教科書では学べないことがある。
            <br />
            テストでは測れない力がある。
          </p>
          <p>
            汗をかいて、泣いて、笑って、
            <br />
            仲間と助け合って歩いた日々は、
            <br />
            一生消えない<strong>「自分への信頼」</strong>になる。
          </p>
        </div>
      </section>

      {/* ===== STAGE ===== */}
      <section className="henro-section henro-stage">
        <div className="henro-section-inner henro-stage-grid">
          <div className="henro-stage-text reveal">
            <p className="henro-section-label">STAGE</p>
            <h2>
              今回の舞台は、
              <br />
              四国最南端 <span className="accent">「足摺岬」</span>
            </h2>
            <p>
              黒潮が打ち寄せる断崖絶壁と、
              どこまでも続く水平線。
            </p>
            <p>
              1200年以上、お遍路さんを迎え続けてきた
              四国霊場第38番札所・<strong>金剛福寺</strong>。
              <br />
              「ここまで来られて本当によかった」——
              多くの人がそう感じる、特別な場所です。
            </p>
            <blockquote>
              前回の旅の「ゴール」が、
              <br />
              今回、新たな旅の「スタート」になります。
            </blockquote>
          </div>
          <div className="henro-stage-img reveal">
            <img
              src="/manus-storage/img1_ashizuri_b29ac393.png"
              alt="足摺岬近くの遍路道を歩く子どもたち"
              loading="lazy"
            />
            <span className="henro-img-caption">黒潮が育む海の絶景の中を歩く</span>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="henro-stats">
        <div className="henro-stats-inner">
          <div className="henro-stat reveal">
            <span className="henro-stat-num">600</span>
            <span className="henro-stat-unit">km</span>
            <span className="henro-stat-label">これまで歩いた遍路道</span>
          </div>
          <div className="henro-stat reveal">
            <span className="henro-stat-num">1,200</span>
            <span className="henro-stat-unit">年</span>
            <span className="henro-stat-label">受け継がれる巡礼の歴史</span>
          </div>
          <div className="henro-stat reveal">
            <span className="henro-stat-prefix">第</span>
            <span className="henro-stat-num">38</span>
            <span className="henro-stat-unit">番</span>
            <span className="henro-stat-label">札所・金剛福寺から出発</span>
          </div>
          <div className="henro-stat reveal">
            <span className="henro-stat-num">6</span>
            <span className="henro-stat-unit">日間</span>
            <span className="henro-stat-label">仲間と過ごす冒険</span>
          </div>
        </div>
        <p className="henro-stats-tagline reveal">
          一歩ずつ歩いた人だけが、出会える感動がある。
        </p>
      </section>

      {/* ===== JOURNEY SO FAR ===== */}
      <section className="henro-section henro-journey">
        <div className="henro-section-inner">
          <p className="henro-section-label reveal">JOURNEY SO FAR</p>
          <h2 className="reveal">
            これまで歩いてきた道、
            <br />
            そしてこれからの道
          </h2>
          <p className="reveal">
            【発心の道場】徳島県から歩き始め、
            【修行の道場】高知県へ——。
            <br />
            子どもたちと約<strong>600km</strong>の遍路道を、
            一歩ずつ歩いてきました。
          </p>
          <div className="henro-journey-imgs">
            <div className="henro-journey-img reveal">
              <img
                src="/manus-storage/kids_walking_8dac5fb6.jpg"
                alt="仲間と歩く遍路道"
                loading="lazy"
              />
              <span className="henro-img-caption">仲間と歩く遍路道</span>
            </div>
            <div className="henro-journey-img reveal">
              <img
                src="/manus-storage/kids_reading_11616371.jpg"
                alt="お寺で読経する子どもたち"
                loading="lazy"
              />
              <span className="henro-img-caption">お寺で読経する子どもたち</span>
            </div>
          </div>
          <p className="henro-journey-quote reveal">
            前回、子どもたちから飛び出したリクエストは——
            <br />
            「四万十川を<strong>40km以上</strong>、川下りしたい！」
            <br />
            「1日<strong>40km</strong>歩いてみたい！」
          </p>

          {/* ===== 川下り＆冒険写真 ===== */}
          <div className="henro-journey-adventure">
            <div className="henro-journey-adventure-img reveal">
              <img
                src="/manus-storage/rafting_1d496717.jpg"
                alt="四万十川を仲間とラフティングする子どもたち"
                loading="lazy"
              />
              <span className="henro-img-caption">四万十川40km、全力で漕いだ！</span>
            </div>
            <div className="henro-journey-adventure-img reveal">
              <img
                src="/manus-storage/sunset_path_ba2a0c3b.jpg"
                alt="夕日の田んぼ道を歩く子どもたち"
                loading="lazy"
              />
              <span className="henro-img-caption">夕暮れの遍路道、まだまだ歩ける</span>
            </div>
          </div>

          <p className="reveal">
            漕いで、泳いで、釣って、食べて。
            <br />
            焚き火を囲み、キャンプをしながら進んだ野遊びの旅。
            <br />
            体力はもちろん、
            <strong>仲間との絆</strong>と<strong>挑戦する心</strong>が、大きく育ちました。
          </p>
        </div>
      </section>

      {/* ===== PARENT VOICE ===== */}
      <section className="henro-section henro-voice">
        <div className="henro-section-inner">
          <p className="henro-section-label reveal">PARENT'S VOICE</p>
          <h2 className="reveal">参加した保護者の声</h2>
          <div className="henro-voice-cards">
            <div className="henro-voice-card reveal">
              <p className="henro-voice-text">
                「帰ってきた息子の目が、まるで別人のように輝いていました。
                『お母さん、僕ってすごいんだよ』って。
                あの自信に満ちた笑顔は、一生忘れません。」
              </p>
              <span className="henro-voice-from">— 小5男子の母</span>
            </div>
            <div className="henro-voice-card reveal">
              <p className="henro-voice-text">
                「娘は人見知りで心配でしたが、
                仲間と助け合う中で、自分から声をかけられる子に変わりました。
                お遍路が教えてくれたのは、人を信じる力でした。」
              </p>
              <span className="henro-voice-from">— 小4女子の母</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY WE WALK ===== */}
      <section className="henro-section henro-why">
        <div className="henro-section-inner">
          <p className="henro-section-label reveal">WHY WE WALK</p>
          <h2 className="reveal">
            なぜ、子どもたちと
            <br />
            お遍路を歩くのか？
          </h2>
          <div className="henro-why-list">
            <div className="henro-why-item reveal">
              <span className="henro-why-num">01</span>
              <h3>命のつながりに、感謝する</h3>
              <p>
                今の自分がいるのは、たくさんの命がつながり、
                ご先祖様が生きてきてくれたから。
                「自分は一人で生きているのではない」——
                手を合わせるたび、そのことを全身で感じられる旅です。
              </p>
            </div>
            <div className="henro-why-item reveal">
              <span className="henro-why-num">02</span>
              <h3>世のために、自分を生かす</h3>
              <p>
                自分だけでなく、まわりの人も、すべての命も幸せに——。
                お遍路には「世のために自分を大きく生かせますように」
                と祈る文化があります。自分の生き方について、静かに向き合う時間です。
              </p>
            </div>
            <div className="henro-why-item reveal">
              <span className="henro-why-num">03</span>
              <h3>「歩ける自分」に、出会う</h3>
              <p>
                1日40kmを歩き切ったとき、子どもたちの表情は、みんな変わっていました。
                「自分って、こんなに歩けるんだ。」
                勉強では得られないこの自信こそが、人生の大きな財産になると信じています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT HENRO ===== */}
      <section className="henro-section henro-about">
        <div className="henro-section-inner henro-about-grid">
          <div className="henro-about-text reveal">
            <p className="henro-section-label">ABOUT HENRO</p>
            <h3>お遍路とは</h3>
            <p>
              弘法大師・空海が修行した道を辿り、
              四国八十八ヶ所のお寺を巡る旅。
            </p>
            <p>
              江戸時代には、供養・自分探し・人生の節目・
              家族の幸せなど、さまざまな願いを胸に歩く人が増えました。
            </p>
            <p>
              今も世界中から、多くの人が
              それぞれの祈りを胸に、この道を歩いています。
            </p>
          </div>
          <div className="henro-about-img reveal">
            <img
              src="/manus-storage/img4_yamashiro_2bd8a3b4.jpg"
              alt="山道を登る白装束の後ろ姿"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== OSETTAI ===== */}
      <section className="henro-section henro-osettai">
        <div className="henro-section-inner henro-osettai-grid">
          <div className="henro-osettai-img reveal">
            <img
              src="/manus-storage/kids_temizu_8d74ca62.jpg"
              alt="手水舎で作法を学ぶ子どもたち"
              loading="lazy"
            />
          </div>
          <div className="henro-osettai-text reveal">
            <p className="henro-section-label">OSETTAI</p>
            <h3>お接待という、日本の宝</h3>
            <p>
              疲れ切って歩いていると、
              知らない方がお茶やおむすびをくださる。
              「頑張ってね」——そのひと言に、また歩き出せる。
            </p>
            <p>
              遍路小屋を整える人、道を掃除する人、
              反射シールを配ってくれるお巡りさん。
              1000年以上つづくこの文化は、世界に誇れる日本の宝です。
            </p>
            <blockquote>
              苦しい時、誰かが支えてくれる。
              <br />
              だから今度は、自分も誰かを
              支えられる人になってほしい。
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="henro-section henro-highlights">
        <div className="henro-section-inner">
          <p className="henro-section-label reveal">HIGHLIGHTS</p>
          <h2 className="reveal">今回の旅の魅力</h2>
          <div className="henro-highlights-hero reveal">
            <img
              src="/manus-storage/dougyou_ninin_3b4ab71f.jpg"
              alt="同行二人、大木の下を歩く後ろ姿"
              loading="lazy"
            />
            <span className="henro-img-caption">仲間と、弘法大師さんと歩く道</span>
          </div>
          <ol className="henro-highlights-list">
            <li className="reveal">
              四国最南端・<strong>足摺岬</strong>から歩き始める特別な巡礼
            </li>
            <li className="reveal">海岸線・漁村・古い集落を辿る、美しい遍路道</li>
            <li className="reveal">1000年つづくお接待文化との出会い</li>
            <li className="reveal">
              仲間と助け合いながら進む<strong>6日間</strong>
            </li>
            <li className="reveal">キャンプ・自炊・焚き火・温泉——暮らす体験</li>
            <li className="reveal">子どもたち自身が行き先を決める、本物の冒険</li>
          </ol>
          <p className="henro-highlights-tagline reveal">
            「歩く」こと以上に、<em>「生きる力」</em>を育てる旅。
          </p>
          <div className="henro-highlights-img2 reveal">
            <img
              src="/manus-storage/kids_kasa_f5b7d7f3.jpg"
              alt="笠の子どもたちが道を歩く"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== ROUTE ===== */}
      <section className="henro-section henro-route">
        <div className="henro-section-inner">
          <p className="henro-section-label reveal">ROUTE &amp; SCHEDULE</p>
          <h2 className="reveal">旅のルートは、子どもたち自身が決める</h2>
          <p className="reveal">
            毎朝、地図を広げて「今日はどこまで歩こう？」と話し合い。
            <br />
            大人が決めたスケジュールではなく、自分たちの足で、自分たちの旅をつくります。
          </p>
          <div className="henro-route-cards">
            <div className="henro-route-card reveal">
              <span className="henro-route-day">初日集合</span>
              <p>
                <strong>2026年10月10日（土）16:00</strong>
                <br />
                オートキャンプ場とまろっと
                <br />
                （高知県四万十市）
              </p>
            </div>
            <div className="henro-route-card reveal">
              <span className="henro-route-day">最終日解散</span>
              <p>
                <strong>10月15日（木）お昼頃</strong>
                <br />
                ゴール地点は事前に決めません。
                <br />
                子どもたちが歩いた先が、ゴールです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INFORMATION ===== */}
      <section className="henro-section henro-info">
        <div className="henro-section-inner">
          <p className="henro-section-label reveal">INFORMATION</p>
          <h2 className="reveal">参加概要</h2>
          <div className="henro-info-table reveal">
            <div className="henro-info-row">
              <span className="henro-info-key">参加費</span>
              <span className="henro-info-val">
                <strong>78,000円</strong>（税込）
              </span>
            </div>
            <div className="henro-info-row">
              <span className="henro-info-key">実費</span>
              <span className="henro-info-val">20,000〜30,000円前後</span>
            </div>
            <div className="henro-info-row">
              <span className="henro-info-key">早割</span>
              <span className="henro-info-val accent">5,000円引き（9月10日まで）</span>
            </div>
            <div className="henro-info-row">
              <span className="henro-info-key">兄弟割</span>
              <span className="henro-info-val">2人目以降 5,000円引き</span>
            </div>
            <div className="henro-info-row">
              <span className="henro-info-key">対象</span>
              <span className="henro-info-val">小学3年生〜中学3年生</span>
            </div>
            <div className="henro-info-row">
              <span className="henro-info-key">定員</span>
              <span className="henro-info-val accent">10名</span>
            </div>
          </div>
          <p className="henro-info-note reveal">
            ※ 参加費には、ガイド料・保険料・通信費が含まれます。
            <br />
            ※ 実費（食費・宿泊費・交通費等）は現地で都度精算します。
          </p>
        </div>
      </section>

      {/* ===== PACKING ===== */}
      <section className="henro-section henro-packing">
        <div className="henro-section-inner">
          <h3 className="reveal">持ち物</h3>
          <div className="henro-packing-grid reveal">
            <div className="henro-packing-col">
              <h4>歩くリュック（15〜25L）</h4>
              <ul>
                <li>カッパ／水筒／行動食／財布</li>
                <li>ヘッドライト／タオル／ビニール袋</li>
                <li>帽子または菅笠／白衣／金剛杖</li>
                <li>歩き慣れた靴</li>
              </ul>
            </div>
            <div className="henro-packing-col">
              <h4>預け荷物</h4>
              <ul>
                <li>寝袋</li>
                <li>着替え・ダウン</li>
                <li>自炊セットなど</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOTES ===== */}
      <section className="henro-section henro-notes">
        <div className="henro-section-inner">
          <h3 className="reveal">ご理解いただきたいこと</h3>
          <ul className="henro-notes-list reveal">
            <li>旅の様子はSNSやラジオで発信します。</li>
            <li>スマホ・ゲーム機の持ち込みはできません。</li>
            <li>怪我などのリスクはゼロではありません。保険に加入します。</li>
            <li>天候等により内容を変更する場合があります。</li>
          </ul>
        </div>
      </section>

      {/* ===== GUIDE ===== */}
      <section className="henro-section henro-guide">
        <div className="henro-section-inner henro-guide-grid">
          <div className="henro-guide-img reveal">
            <img
              src="/manus-storage/guide_torii_3a17f72b.jpg"
              alt="らんぼう（上田直樹）"
              loading="lazy"
            />
          </div>
          <div className="henro-guide-text reveal">
            <p className="henro-section-label">GUIDE</p>
            <h3>案内人</h3>
            <p className="henro-guide-name">らんぼう（上田直樹）</p>
            <p>
              あーすガイド代表／旅する学校代表。
              <br />
              子どもたちと四国遍路を歩き続けて5年目。
              「大人が教える」のではなく、
              「一緒に歩く」スタイルで、
              子どもたちの内なる力を引き出します。
            </p>
            <a
              href="https://earthguide.tabigaku.party"
              target="_blank"
              rel="noopener noreferrer"
              className="henro-guide-link"
            >
              あーすガイド公式HP ↗
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="henro-cta">
        <div className="henro-cta-inner reveal">
          <p className="henro-cta-lead">
            お子さんの目が輝く瞬間を、一緒に見ませんか。
          </p>
          <h2>一緒に歩こう。</h2>
          <p>
            四国最南端から始まる、6日間の巡礼の旅。
            <br />
            仲間と、弘法大師さんと、一歩ずつ。
          </p>
          <a
            href="https://share.google/yiy4Xtnmzc0Ty4c4U"
            target="_blank"
            rel="noopener noreferrer"
            className="henro-cta-btn-large"
          >
            お申し込みはこちら →
          </a>
          <p className="henro-cta-sub">
            定員10名・先着順
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="henro-footer">
        <p>© 2024 旅する学校. All rights reserved.</p>
        <a
          href="https://earthguide.tabigaku.party"
          target="_blank"
          rel="noopener noreferrer"
        >
          earthguide.tabigaku.party
        </a>
      </footer>
    </div>
  );
}
