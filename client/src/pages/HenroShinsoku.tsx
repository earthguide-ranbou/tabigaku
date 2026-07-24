import { useEffect } from "react";
import "./henro-shinsoku.css";

const APPLY_URL = "https://note.com/shiftdaigaku/n/n41c54ea46e73";

export default function HenroShinsoku() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "歩きお遍路ジャーニー ―神足歩行術で行く、発心の道場5日間の巻―";
  }, []);

  return (
    <div className="hs-page">
      {/* ===== ヘッダー ===== */}
      <header className="hs-header">
        <div className="hs-header__brand">
          歩きお遍路ジャーニー
          <span>ARUKI OHENRO JOURNEY 2026</span>
        </div>
        <a className="hs-btn hs-btn--small" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
          申し込む
        </a>
      </header>

      {/* ===== 1. ヒーロー ===== */}
      <section className="hs-hero">
        <div className="hs-hero__image hs-placeholder">
          <span>IMAGE：白衣で杉林の遍路道を歩く一行</span>
        </div>
        <div className="hs-hero__overlay" />
        <div className="hs-hero__content">
          <p className="hs-hero__badge">2026 秋 ・ 徳島 発心の道場 ・ 定員10名</p>
          <h1 className="hs-hero__title">
            歩きお遍路ジャーニー
            <span className="hs-hero__subtitle">
              ― 神足歩行術（しんそくほこうじゅつ）で行く、発心の道場 5日間の巻 ―
            </span>
          </h1>
          <div className="hs-hero__meta">
            <p className="hs-hero__date">2026.10.23 <b>木</b> ― 10.27 <b>月</b>（5日間）</p>
            <p className="hs-hero__target">対象：小学4年生〜65歳 ｜ 1番札所 霊山寺スタート</p>
          </div>
          <a className="hs-btn hs-btn--large" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
            参加申し込みはこちら
          </a>
        </div>
      </section>

      {/* ===== 2. 神足歩行術とは ===== */}
      <section className="hs-section hs-section--dark">
        <div className="hs-container">
          <p className="hs-label">SHINSOKU HOKO JUTSU</p>
          <h2 className="hs-heading">神足歩行術とは</h2>
          <div className="hs-cols">
            <div>
              <p className="hs-text">
                神足歩行術は、古来から伝わる歩行法。<br />
                江戸時代の人々は、1日40里（約160km）もの距離を、
                疲れをためずに進んでいたと言われています。
              </p>
              <p className="hs-text">
                その秘密は、<b>軸・呼吸・足運びの三位一体</b>。<br />
                体の中心に一本の軸を通し、呼吸に合わせ、
                地面からの力をそのまま推進力に変える。<br />
                力まないからこそ、いつまでも歩き続けられるのです。
              </p>
              <p className="hs-text">
                この旅では、走るのではなく、あえて<b>"歩いて"体感</b>します。<br />
                歩くこと自体が、心を整える修行になる。<br />
                それが神足歩行術の本質です。
              </p>
            </div>
            <div className="hs-placeholder hs-placeholder--tall">
              <span>IMAGE：神足歩行術を実演する様子</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. 発心の道場とは ===== */}
      <section className="hs-section">
        <div className="hs-container">
          <p className="hs-label">HOSSHIN NO DOJO</p>
          <h2 className="hs-heading">発心の道場とは</h2>
          <div className="hs-cols hs-cols--rev">
            <div className="hs-placeholder hs-placeholder--tall">
              <span>IMAGE：1番札所 霊山寺の山門</span>
            </div>
            <div>
              <p className="hs-text">
                四国八十八ヶ所の巡礼は、大きく四つの「道場」に分かれています。<br />
                その最初が、徳島県（阿波国）にあたる<b>「発心の道場」</b>。
              </p>
              <p className="hs-text">
                「発心」とは、悟りを求める心がはじめて芽生えること。<br />
                1番札所 霊山寺から23番札所 薬王寺までの約100kmは、
                まさに<b>旅の始まりの地</b>。お遍路さんの心が生まれる場所です。
              </p>
              <p className="hs-text">
                今回はその起点、<b>1番札所 霊山寺（りょうぜんじ）</b>から歩き始めます。<br />
                白衣をまとい、金剛杖を手に、1000年続く祈りの道へ。<br />
                あなたの「はじめの一歩」を、ここから踏み出します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. 5日間のスケジュール ===== */}
      <section className="hs-section hs-section--green">
        <div className="hs-container">
          <p className="hs-label">SCHEDULE</p>
          <h2 className="hs-heading">5日間の歩み</h2>
          <div className="hs-timeline">
            {[
              { day: "Day 1", date: "10/23（木）", title: "霊山寺にて開眼 ― 旅の始まり", text: "1番札所 霊山寺に集合。白衣を整え、金剛杖を受け取り、最初のお参り。神足歩行術の基本（軸・呼吸・足運び）を体に入れ、近隣の札所へゆるりと一歩目を刻みます。" },
              { day: "Day 2", date: "10/24（金）", title: "呼吸と足運びを整える", text: "早朝の空気のなか出発。三位一体の歩きを意識しながら、田園と山里の遍路道を進みます。立ち寄るお店やお接待との出会いも旅の楽しみ。" },
              { day: "Day 3", date: "10/25（土）", title: "歩くこと自体が修行になる", text: "距離は少しずつ伸ばして、1日15〜25km。話すときは笑い合い、黙るときは自分と向き合う。歩く瞑想の時間が深まっていきます。" },
              { day: "Day 4", date: "10/26（日）", title: "祈りを重ねる山道", text: "山深い道へ。息づかいと足音だけが響く時間のなかで、先祖供養・祈りの作法にじっくり触れます。仲間と助け合いながら、自分の枠を越える一日。" },
              { day: "Day 5", date: "10/27（月）", title: "結願 ― 大きな祈りを刻む", text: "5日間の歩みを胸に、ゴールの札所へ。納経を受け、みんなで旅を分かち合う結びの時間。その後、現地にて解散（必要な方は徳島駅まで送迎）。" },
            ].map((d) => (
              <div className="hs-day" key={d.day}>
                <div className="hs-day__head">
                  <span className="hs-day__num">{d.day}</span>
                  <span className="hs-day__date">{d.date}</span>
                </div>
                <div className="hs-day__body">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. 参加概要 ===== */}
      <section className="hs-section">
        <div className="hs-container">
          <p className="hs-label">INFORMATION</p>
          <h2 className="hs-heading">参加概要</h2>
          <div className="hs-info-grid">
            <div className="hs-card">
              <h3 className="hs-card__title">開催概要</h3>
              <dl className="hs-def">
                <dt>日程</dt><dd>2026年10月23日（木）〜10月27日（月）5日間</dd>
                <dt>対象</dt><dd>小学4年生〜65歳（親子参加も歓迎）</dd>
                <dt>定員</dt><dd>10名（先着順）</dd>
                <dt>集合</dt><dd>10/23（木）1番札所 霊山寺（徳島県）※現地集合</dd>
                <dt>解散</dt><dd>10/27（月）現地解散（必要な方は徳島駅まで送迎）</dd>
                <dt>保険</dt><dd>万が一に備え、旅行保険に加入いたします</dd>
              </dl>
            </div>
            <div className="hs-card">
              <h3 className="hs-card__title">参加費用</h3>
              <p className="hs-price">80,000<span> 円</span></p>
              <p className="hs-note">※現地集合・現地解散。食事・宿泊・御朱印などの実費は別途ご案内します。</p>
              <h3 className="hs-card__title hs-card__title--mt">主な持ち物</h3>
              <ul className="hs-list">
                <li>歩き慣れた運動靴・動きやすい服装・カッパ上下</li>
                <li>リュック（15〜25L推奨）・水筒・行動食・タオル</li>
                <li>寝袋・着替え・洗面用具（荷物は車に預けられます）</li>
                <li>お参りグッズは当日ご案内（経本など無料配布あり）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. 案内人 ===== */}
      <section className="hs-section hs-section--dark">
        <div className="hs-container">
          <p className="hs-label">GUIDE</p>
          <h2 className="hs-heading">この旅の案内人</h2>
          <div className="hs-guide">
            <div className="hs-placeholder hs-placeholder--portrait">
              <span>IMAGE：らんぼうのポートレート</span>
            </div>
            <div className="hs-guide__text">
              <p className="hs-guide__role">あーすガイド代表 ・ 旅する学校代表</p>
              <h3 className="hs-guide__name">らんぼう <small>上田 直樹（うえだ なおき）</small></h3>
              <p className="hs-text">
                1982年 北海道札幌生まれ。徳島県神山町在住。<br />
                地球一周を皮切りに10年間の旅暮らしを経て、自然とともにある生き方を探求。
                「あーすガイド」として全国各地500本以上の対話の場づくりに携わる。
              </p>
              <ul className="hs-list hs-list--light">
                <li>アタカマ砂漠250km・ゴビ砂漠250kmマラソン完走</li>
                <li>オルタナティブスクール「森の学校みっけ」創設</li>
                <li>「旅する学校」主宰／安藤財団 2023年度特別推奨モデル賞 受賞</li>
                <li>100人以上の子どもたちと500km以上のお遍路を伴走</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. 申し込み ===== */}
      <section className="hs-cta">
        <div className="hs-container hs-cta__inner">
          <h2 className="hs-heading hs-heading--light">
            1000年の祈りの道を、<br />自分の足で歩く5日間。
          </h2>
          <p className="hs-text hs-text--center">
            2026年10月23日、1番札所 霊山寺から始まる旅へ。<br />
            定員10名・先着順です。ご質問だけでもお気軽にどうぞ。
          </p>
          <a className="hs-btn hs-btn--large" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
            お申し込みはこちら
          </a>
          <p className="hs-contact">
            お問い合わせ：らんぼう（あーすガイド）090-7518-8816 ／ earthguide.jpn@gmail.com
          </p>
        </div>
      </section>

      {/* ===== フッター ===== */}
      <footer className="hs-footer">
        <p>
          あーすガイド ／ 旅する学校 ｜ 歩きお遍路ジャーニー
          ―神足歩行術で行く、発心の道場5日間の巻―
        </p>
      </footer>
    </div>
  );
}
