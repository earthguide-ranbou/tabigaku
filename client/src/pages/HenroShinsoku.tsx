import { useEffect } from "react";
import "./henro-shinsoku.css";
import { useSEO } from "@/hooks/useSEO";

const ASSET = "https://rpcr7nolzs3aq.kimi.page/";

export default function HenroShinsoku() {
  useSEO({
    title: "歩きお遍路ジャーニー ―神足歩行術で行く、発心の道場5日間の巻―（秋編）",
    description: "2026年10月23日〜27日、徳島・発心の道場を江戸の身体技法「神足歩行術（しんそくほこうじゅつ）」で歩く5日間。大場克則×らんぼうが案内する定員10名の特別なお遍路旅。小学3年生〜65歳対象。早割8/10まで。",
    keywords: "歩きお遍路, 神足歩行術, 江戸走り, お遍路ジャーニー, 旅育, 旅する学校, 大場克則, らんぼう, 徳島 お遍路, 発心の道場, 子ども お遍路, 四国遍路体験, 神山町, 太龍寺",
    ogImage: "https://assets.st-note.com/production/uploads/images/276486916/rectangle_large_type_2_57d46f085f55edf6af7f54bb01360974.png",
    ogUrl: "/henro-shinsoku",
    ogType: "article",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "歩きお遍路ジャーニー ―神足歩行術で行く、発心の道場5日間の巻―",
        "description": "江戸の身体技法「神足歩行術」を体感しながら徳島・発心の道場を歩く5日間のお遍路旅。大場克則×らんぼうが案内する定員10名の特別な体験。",
        "startDate": "2026-10-23",
        "endDate": "2026-10-27",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "徳島県 発心の道場（神山町〜太龍寺）",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "徳島県",
            "addressCountry": "JP"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "旅する学校 ／ あーすガイド",
          "url": "https://tabigaku.party"
        },
        "offers": {
          "@type": "Offer",
          "price": "100000",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/LimitedAvailability",
          "validFrom": "2026-07-01",
          "url": "https://share.google/tvcyQIuEC1A0Sl5UK"
        },
        "image": "https://assets.st-note.com/production/uploads/images/276486916/rectangle_large_type_2_57d46f085f55edf6af7f54bb01360974.png",
        "url": "https://tabigaku.party/henro-shinsoku"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://tabigaku.party" },
          { "@type": "ListItem", "position": 2, "name": "歩きお遍路ジャーニー（神足歩行術）", "item": "https://tabigaku.party/henro-shinsoku" }
        ]
      }
    ]
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@300;400;500;700&display=swap";
    document.head.appendChild(link);

    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="oj-page oj-body">



{/* ============ HERO ============ */}
<section className="hero">
  <div className="herokv"><img src={ASSET + "kv-hero.jpg"} alt="歩きお遍路ジャーニー ― 今、話題の「江戸走り（神足歩行術）」を“歩いて”体感する遍路旅" /></div>
  <div className="hero-inner">
    <span className="hero-badge">2026 秋 ・ 徳島 発心の道場 ・ 残り10名</span>
    <h1>白衣をまとい、<br className="br-sp" />江戸の歩法で<br className="br-sp" />1000年の祈りの道を<em className="nb">行く。</em></h1>
    <p className="hero-sub">歩きお遍路ジャーニー<br className="br-sp" />―神足歩行術（しんそくほこうじゅつ）で行く、発心の道場 5日間の巻―</p>
    <div className="hero-meta">
      <div className="hero-date">2026.10.23 <b>FRI</b> ― 10.27 <b>TUE</b></div>
      <div className="hero-cap">定員10名 ｜ 小学3年生〜65歳</div>
    </div>
    <div className="hero-btns">
      <a className="btn btn-shu" href="https://share.google/tvcyQIuEC1A0Sl5UK" target="_blank" rel="noopener">参加申し込みはこちら</a>
      <a className="btn btn-ink" href="#concept" style={{padding: "17px 40px", fontSize: "14.5px"}}>旅の物語を読む</a>
    </div>
  </div>
</section>

{/* ============ TICKER ============ */}
<div className="ticker" aria-hidden="true">
  <div className="ticker-track">
    <span>南無大師遍照金剛 <b>◆</b> 神足歩行術 <b>◆</b> 歩く瞑想 <b>◆</b> お接待 <b>◆</b> 先祖供養 <b>◆</b> 同行二人 <b>◆</b> 発心の道場 <b>◆</b></span>
    <span>南無大師遍照金剛 <b>◆</b> 神足歩行術 <b>◆</b> 歩く瞑想 <b>◆</b> お接待 <b>◆</b> 先祖供養 <b>◆</b> 同行二人 <b>◆</b> 発心の道場 <b>◆</b></span>
  </div>
</div>

{/* ============ CONCEPT ============ */}
<section className="concept" id="concept">
  <div className="kanji">祈</div>
  <div className="wrap reveal">
    <span className="tag center">CONCEPT ― 想い</span>
    <p className="concept-quote">「100年後の未来に<br /><em className="nb">江戸時代の歩法</em>を繋ぎたい」</p>
    <p className="lead-p">
      かつて江戸の人々が、そうやって旅したであろう道。<br />
      徳島県＝「発心の道場」と呼ばれる歩き遍路の道を、<br className="br-pc" />
      古来から伝わる身体技法で巡礼してみませんか。<br /><br />
      大人も子どもも、一緒に歩く5日間。<br />
      新しい世界に出逢い、自分の枠を越えて、<br className="br-pc" />
      可能性を広げる旅です。
    </p>
    <div className="seal">発心の道場</div>
  </div>
</section>

{/* ============ BAND 1 ============ */}
<div className="band reveal">
  <img src={ASSET + "p-tanbo.jpg"} alt="夕日に輝く田んぼのあぜ道を歩くお遍路一行" loading="lazy" />
  <span className="cap">1000年続く、祈りの道。</span>
</div>

{/* ============ STATS ============ */}
<section className="stats">
  <div className="stats-grid reveal">
    <div className="stat"><b>約70km</b><span>発心の道場を歩く距離</span></div>
    <div className="stat"><b>5日間</b><span>10/23(金)〜10/27(火)</span></div>
    <div className="stat"><b>3.5億回</b><span>「江戸走り」SNS総再生</span></div>
    <div className="stat"><b>500km+</b><span>子どもたちと歩いた実績</span></div>
    <div className="stat"><b>1000年</b><span>続く巡礼の文化</span></div>
  </div>
</section>

{/* ============ DUO ============ */}
<section id="story">
  <div className="wrap duo-grid reveal">
    <div>
      <span className="tag">NAVIGATORS ― 案内人</span>
      <h2 className="h2">地球を歩いた男と、<br />江戸の走法を<span className="mk">蘇らせた男。</span></h2>
      <p className="body">
        案内人は、「旅する学校」主宰・<b>らんぼう</b>。<br />
        地球一周、砂漠1000km走破、オルタナティブスクール創設。<br />
        その道のりの先で、延べ100人以上の子どもたちと、<br className="br-pc" />
        500km以上のお遍路を歩いてきました。
      </p>
      <p className="body">
        今回ご一緒するのは、江戸時代の走法「神足歩行術」の研究者として、<br className="br-pc" />
        いま全国的に注目を集める<b className="nb">大場克則</b><span className="nb">さん。</span><br />
        2013年、初挑戦の100kmマラソンで途中棄権。<br />
        そこから「長距離を壊れずに進める身体の使い方」の探究が始まりました。
      </p>
      <div className="chips">
        <span className="chip2">安藤財団 2023年度特別推奨モデル賞</span>
        <span className="chip2">2025年度 流行語大賞「江戸走り」</span>
      </div>
    </div>
    <div className="frame">
      <img src="https://assets.st-note.com/img/1778895610-MdvVpBaIJLhGmoYRkeg1zOCn.jpg?width=1200&height=1200&fit=bounds&quality=85" alt="大場克則さんとらんぼう" loading="lazy" />
      <span className="chip">大場克則 × らんぼう</span>
    </div>
  </div>
</section>

{/* ============ EDO ============ */}
<section className="edo">
  <div className="wrap duo-grid rev reveal">
    <div className="frame">
      <img src="https://assets.st-note.com/img/1778895665-u2aGrCvPc85oMxKSze1VB9y0.jpg?width=1200&height=1200&fit=bounds&quality=85" alt="江戸走りを実演する大場克則さん" loading="lazy" />
      <span className="chip">神足歩行術（しんそくほこうじゅつ）</span>
    </div>
    <div>
      <span className="tag">EDO-BASHIRI ― 江戸走り</span>
      <h2 className="h2">1日40里（約160km）。<br />失われた<em>「神足歩行術」。</em></h2>
      <blockquote>「江戸時代には1日40里を移動できた走り方があった」</blockquote>
      <p className="body">
        その史実に出会った大場さんは、国会図書館に通い、文献調査を重ねました。<br />
        浮世絵や資料をもとに、身体の使い方を研究。<br />
        その探究はSNSで一気に広がり、「江戸走り」は2025年度流行語大賞に選ばれました。
      </p>
      <p className="body">
        現在は「江戸時代の走り方で江戸から京都（約500km）を3日で走る」実証実験にも挑戦中。<br />
        この旅では、その神足歩行術を<b>“歩いて”体感</b>しながら、<br className="br-pc" />
        お遍路道を進みます。
      </p>
      <div className="metrics">
        <div className="metric"><b>3.5億回</b><span>SNS総再生</span></div>
        <div className="metric"><b>13.9万人</b><span>Instagram</span></div>
        <div className="metric"><b>6.09万人</b><span>YouTube</span></div>
      </div>
    </div>
  </div>
</section>

{/* ============ BAND 2 ============ */}
<div className="band reveal">
  <img src={ASSET + "p-kasa.jpg"} alt="菅笠をかぶり金剛杖をついて杉林の遍路道を行く" loading="lazy" />
  <span className="cap">同行二人 ― お大師さまと、一緒に歩く。</span>
</div>

{/* ============ ROUTE ============ */}
<section>
  <div className="wrap reveal">
    <span className="tag">ROUTE ― 歩く道</span>
    <h2 className="h2">神山から太龍寺へ、<br className="br-sp" /><em className="nb">約70km</em>の巡礼路。</h2>
    <div className="route-wrap">
      <div>
        <div className="route-line">
          <div className="stop">
            <div className="node">発</div>
            <div className="rcard">
              <h3><small>START ・ 徳島県神山町</small>染昌（そめしょう）</h3>
              <p>地方創生の聖地・神山町を出発。秋の山里の空気のなか、遍路の一歩を踏み出します。</p>
            </div>
          </div>
          <div className="stop">
            <div className="node">13</div>
            <div className="rcard">
              <h3><small>十三番札所</small>大日寺</h3>
              <p>大日如来の大いなる光に照らされ、祈りを重ねる札所へ。</p>
            </div>
          </div>
          <div className="stop">
            <div className="node">21</div>
            <div className="rcard">
              <h3><small>二十一番札所 ・ GOAL</small>太龍寺</h3>
              <p>龍の詩が聞こえる高い山々。山深い修行の道を歩き続けることで、心身が研ぎ澄まされていく。自分たちの小さな足で、大きな祈りを刻むゴール。</p>
            </div>
          </div>
        </div>
        <div className="route-note">
          <b>歩行ペース：</b>みんなと相談しながら1日15〜25km前後。秋色に染まった四国の山々を越え、先人たちの想いを未来に紡ぐ旅。かけがえのない時間が、きっと待っています。
        </div>
      </div>
      <div className="route-photo">
        <img src={ASSET + "p-torii.jpg"} alt="朱色の山門の前で笑顔のお遍路一行" loading="lazy" />
      </div>
    </div>
  </div>
</section>

{/* ============ BAND 3 ============ */}
<div className="band reveal">
  <img src={ASSET + "p-gate.jpg"} alt="札所の山門の前で金剛杖を持つお遍路さんたち" loading="lazy" />
  <span className="cap">札所の門をくぐるたび、心が整っていく。</span>
</div>

{/* ============ WHY ============ */}
<section>
  <div className="wrap reveal">
    <span className="tag">WHY NOW ― 理由</span>
    <h2 className="h2">なぜ、今、<em className="nb">お遍路</em>を歩くのか。</h2>
    <div className="why-grid">
      <div className="why-card">
        <div className="im"><img src="https://assets.st-note.com/img/1778895581-rD7aHESuvoZyXbF2W1R59jkB.jpg?width=1000&height=1000&fit=bounds&quality=80" alt="お寺の前で集まるお遍路一行" loading="lazy" /></div>
        <div className="tx">
          <div className="no">壱</div>
          <h3>先祖供養</h3>
          <p>私たちが今ここにいるのは、ご先祖さんがいたからこそ。亡くなった方々を思い出し、たくさんの人に支えられて生きていることを感じてほしい。</p>
        </div>
      </div>
      <div className="why-card">
        <div className="im"><img src="https://assets.st-note.com/img/1778905732-ZoNz10RI2ar6dTscU8DfAMpK.jpg?width=1000&height=1000&fit=bounds&quality=80" alt="青空の下で合掌するお遍路さん" loading="lazy" /></div>
        <div className="tx">
          <div className="no">弐</div>
          <h3>祈りの作法</h3>
          <p>お遍路では「世のために、自分を大きく生かせますように」と手を合わせます。すべての生き物の幸せを想う心と向き合う時間。</p>
        </div>
      </div>
      <div className="why-card">
        <div className="im"><img src="https://assets.st-note.com/img/1778905605-obEejQv0p8I2rnJ6HBU4F9s3.jpg?width=1000&height=1000&fit=bounds&quality=80" alt="杉林の石段で笑顔の仲間たち" loading="lazy" /></div>
        <div className="tx">
          <div className="no">参</div>
          <h3>可能性を広げる</h3>
          <p>普段はなかなか体験しない距離を歩く中で、助け合い、新しい発見や文化に触れる。「こんなに歩けたんだ」が、自分の枠を越えていく。</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ SETTAI ============ */}
<section className="settai">
  <div className="wrap reveal">
    <span className="tag center">OSETTAI ― お接待</span>
    <h2 className="h2">「お接待」という、<br className="br-sp" /><em className="nb">1000年の優しさ。</em></h2>
    <p className="lead-p">
      お遍路は、平安時代に空海が拓いた四国88ヶ所の巡礼の旅。<br />
      実際に歩いてみると、何万人もの人がそれぞれの祈りを胸に<br className="br-pc" />
      この道を歩いてきたことを実感します。
    </p>
    <div className="settai-fig">
      <img src={ASSET + "p-temple.jpg"} alt="提灯の灯る本堂で納経を受けるお遍路一行" loading="lazy" />
    </div>
    <p className="settai-em">
      ヘトヘトなときに差し出される、お茶やおむすび。<br />
      遍路小屋を整備する人、道を守る人、交流ノートを残す人。<br />
      <em>人は一人では生きられない</em> ―<br className="br-sp" />
      1000年以上この文化が続いてきた理由が、ここにあります。
    </p>
  </div>
</section>

{/* ============ MID CTA ============ */}
<section className="mid-cta">
  <div className="wrap reveal">
    <span className="tag center">LIMITED ― 残席</span>
    <h2 className="h2">この秋、<em className="nb">10人だけ</em><span className="nb">の特別な旅。</span></h2>
    <p className="lead-p" style={{marginInline: "auto"}}>早割は2026年9月10日（木）まで。気になったら、まずはお気軽にご相談ください。</p>
    <a className="btn btn-shu" href="https://share.google/tvcyQIuEC1A0Sl5UK" target="_blank" rel="noopener">申し込む</a>
  </div>
</section>

{/* ============ BAND 4 ============ */}
<div className="band reveal">
  <img src={ASSET + "hero.jpg"} alt="石灯籠の並ぶ参道を歩くお遍路一行" loading="lazy" />
  <span className="cap">さあ、白衣をまとって出かけよう。</span>
</div>

{/* ============ GUIDES ============ */}

<section>
  <div className="wrap reveal">
    <span className="tag">GUIDES ― 案内人</span>
    <h2 className="h2">この旅の<em>案内人。</em></h2>

    <div className="guide">
      <div className="ph"><img src={ASSET + "oba.jpg"} alt="江戸走り研究家 大場克則" loading="lazy" /></div>
      <div>
        <div className="role">江戸走り研究家</div>
        <h3>大場 克則<small>おおば かつのり</small></h3>
        <p>1964年 栃木県生まれ。2013年に初めて挑戦した100kmマラソンの途中棄権をきっかけに、長距離を走れる走り方に興味を持つ。2014年「江戸時代には1日40里（160km）走れる走り方があった」ことを知り、国会図書館に通って文献調査を開始。文献資料と浮世絵を基に、残された内容と矛盾しない身体の動き方を研究している。</p>
        <ul>
          <li>SNS総再生回数 3億5千万回突破／インスタ13.9万人・YouTube6.09万人</li>
          <li>「江戸走り」2025年度 流行語大賞</li>
          <li>江戸時代の走り方で東海道五十三次（約500km）を3日で走る実証実験に挑戦中</li>
        </ul>
      </div>
    </div>

    <div className="guide">
      <div className="ph"><img src={ASSET + "ranbou.jpg"} alt="あーすガイド代表 らんぼう（上田直樹）" loading="lazy" /></div>
      <div>
        <div className="role">あーすガイド代表 ・ 旅する学校代表</div>
        <h3>らんぼう<small>上田 直樹（うえだ なおき）</small></h3>
        <p>1982年 北海道札幌生まれ。徳島県神山町在住。地球一周を皮切りに10年間の旅暮らしの中で様々な先住民の土地を訪れ、自然とともにある生き方に感銘を受ける。2008年より『あーすガイド』の屋号で全国各地500本以上の対話の場づくりに出演。国内外で体験学習型ツアー「スタディロード」を主催し、参加した40人以上が各地に移住。</p>
        <ul>
          <li>2016年 アタカマ砂漠マラソン250km完走・チーム優勝・映画化</li>
          <li>2022年 オルタナティブスクール「森の学校みっけ」創設</li>
          <li>2023年 「旅する学校」主宰。安藤財団「2023年度特別推奨モデル賞」受賞</li>
          <li>2024年 ゴビ砂漠マラソン250km完走</li>
        </ul>
        <a className="plink" href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener">あーすガイド公式サイト（SNS・リンク集）→</a>
      </div>
    </div>
  </div>
</section>

{/* ============ INFO ============ */}
<section style={{background: "var(--washi2)", borderBlock: "1px solid var(--line)"}}>
  <div className="wrap reveal">
    <span className="tag">INFORMATION ― 概要</span>
    <h2 className="h2">開催概要・<em>お申し込み。</em></h2>
    <div className="info-grid">
      <div className="card">
        <h3>開催概要</h3>
        <div className="flyer">
          <img src="https://assets.st-note.com/production/uploads/images/276486916/rectangle_large_type_2_57d46f085f55edf6af7f54bb01360974.png?width=1200&height=1200&fit=bounds&quality=85" alt="歩きお遍路ジャーニー秋編フライヤー" loading="lazy" />
        </div>
        <dl className="def">
          <dt>日程</dt><dd>2026年10月23日（金）〜10月27日（火）5日間</dd>
          <dt>集合</dt><dd>10/23（金）12:00 神山町 道の駅</dd>
          <dt>解散</dt><dd>10/27（火）15:00頃（必要な方は徳島駅まで送迎）</dd>
          <dt>行程</dt><dd>染昌（神山町）→ 13番札所・大日寺 → 21番札所・太龍寺 約70km</dd>
          <dt>定員</dt><dd>10名（先着順）</dd>
          <dt>参加資格</dt><dd>小学3年生〜65歳の男女。やる気があること。あきらめないこと。仲間と助けあえること。</dd>
          <dt>保険</dt><dd>メンバー全員、傷害保険に加入します</dd>
        </dl>
        <details>
          <summary>持ち物・装備について</summary>
          <div className="inner">
            <p><b>【歩くときのリュック（15〜25L推奨）の中】</b></p>
            <ul><li>カッパ上下／行動食（毎回最低1000kcal以上）／水筒／財布／ビニール袋2〜3枚／タオル／ヘッドライト</li></ul>
            <p style={{marginTop: "10px"}}><b>【お遍路のお参りグッズ（さんや袋・ポシェットに）】</b></p>
            <ul><li>小冊子（般若心経など。無料配布）／ライター or マッチ／ジプロック2〜3袋／お線香・ローソク（らんぼうが配布）／納経帳（御朱印を集めたい人）／納札</li></ul>
            <p style={{marginTop: "10px"}}><b>【服装】</b></p>
            <ul><li>速乾性の軽いインナー／動きやすいパンツ／靴下／歩き慣れた運動靴／ウインドブレーカー／ボールペン</li></ul>
            <p style={{marginTop: "10px"}}><b>【預け荷物（車に預けます）】</b></p>
            <ul><li>お米10合／洗面用具・歯ブラシ／保険証コピー／サンダル／寝袋（-2〜5度対応・1kg未満）／マット／着替え3日分／ウォータープルーフバッグ／ダウン／行動食1000〜1500kcal／自炊3食分・バーナー・ボンベ・食器／テント（宿を各自で取る方は不要）</li></ul>
            <p style={{marginTop: "10px"}}>※装備についてはメンバー確定後のLINEグループで情報共有・相談できます。</p>
          </div>
        </details>
        <details>
          <summary>注意事項・キャンセルについて</summary>
          <div className="inner">
            <ul>
              <li>食事は、自炊や地元のお店など、その土地ならではの楽しみを大切にしながら、参加者みんなで相談して決めていきます。</li>
              <li>旅の様子は、SNSやラジオなどで発信する予定です。また、メディアの取材・撮影・掲載が入る場合がありますので、あらかじめご了承ください。</li>
              <li>天候や自然条件、交通事情などにより、安全を最優先に判断し、行程や内容を変更する場合があります。その時々で最善の選択をしながら旅を進めます。</li>
              <li>私たちは参加者一人ひとりが安心して挑戦できるよう、全力でサポートいたします。一方で、自然の中での活動には予測できないリスクも伴います。万が一に備えて旅行保険に加入いたしますが、保険の補償範囲を超える責任は負いかねます。不測の事態等リスクはゼロにはできないことをご理解いただき、お互いに協力しながら安全な旅をつくっていければ幸いです。</li>
            </ul>
            <p style={{marginTop: "14px"}}><b>【キャンセルについて】</b><br />
              開催8日前まで：参加費の50％<br />
              開催7日前〜当日：参加費の100％</p>
            <p style={{marginTop: "10px"}}>※事前準備のため、ご理解とご協力をお願いいたします。</p>
          </div>
        </details>
      </div>

      <div className="card">
        <h3>参加費用</h3>
        <div className="price">100,000<small> 円（税込）</small></div>
        <p style={{fontSize: "12.5px", color: "var(--sumi2)", marginTop: "6px"}}>＋ 実費 20,000〜30,000円前後<br />（ケータリング・温泉・キャンプ場・行動食・宿・御朱印など）</p>
        <div className="disc">
          <b>早期割引</b>｜2026/9/10（木）までの申し込み＆一括入金で <b>12,000円引き</b><br />
          <b>家族割引</b>｜小学3年生以上2人目以降は、1人につき66,000円以上のドネーション制<br />
          <b>オプション</b>｜ツアー前後に「神山ガイド」も案内可能
        </div>
        <h3 style={{marginTop: "30px"}}>お申し込みの流れ</h3>
        <dl className="def">
          <dt>STEP 1</dt><dd>申し込みフォームに必要事項（住所・氏名・性別・生年月日・電話番号 ※保険のため）を記入して送信</dd>
          <dt>STEP 2</dt><dd>送信完了後、3営業日以内にお振り込み</dd>
          <dt>STEP 3</dt><dd>確認メールを送信。申込みが重なった場合は先着順</dd>
        </dl>
        <a className="btn btn-shu apply-btn" href="https://share.google/tvcyQIuEC1A0Sl5UK" target="_blank" rel="noopener">申し込みフォームへ進む</a>
        <p className="c-note">ご相談はお気軽に。特に本人からの連絡をお待ちしています。<br />
          らんぼう携帯：<a href="tel:09075188816">090-7518-8816</a> ／ <a href="mailto:earthguide.jpn@gmail.com">earthguide.jpn@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</section>

{/* ============ CTA ============ */}
<section className="cta">
  <div className="wrap reveal">
    <span className="tag center" style={{color: "#f3c9b8"}}>JOIN THE JOURNEY</span>
    <h2 className="h2">1000年の祈りの道を、<br /><em className="nb">自分の足</em>で歩く5日間。</h2>
    <p className="lead-p">秋の四国の山々を越えて、太龍寺へ。<br className="br-sp" />先人たちからの想いを未来に紡ぐ旅に、あなたも出ませんか。<br />定員10名・先着順です。</p>
    <a className="btn btn-shu" href="https://share.google/tvcyQIuEC1A0Sl5UK" target="_blank" rel="noopener">2026年10月23日の旅に申し込む</a>
    <div><div className="seal">同行二人</div></div>
    <p className="contact">
      お問い合わせ：らんぼう（あーすガイド）　
      <a href="tel:09075188816">090-7518-8816</a>　／　
      <a href="mailto:earthguide.jpn@gmail.com">earthguide.jpn@gmail.com</a>
    </p>
  </div>
</section>

{/* ============ FOOTER ============ */}
<footer>
  <div className="wrap">
    <div className="fb">
      <b>あーすガイド ／ 旅する学校</b><br />
      明日の明るい地球をガイドする。徳島県神山町を拠点に、オルタナティブ教育や暮らしの案内、ガイド・企業研修・上映会・講演・旅する学校を主宰。
    </div>
    <div className="sns">
      <a href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener">あーすガイド公式サイト（SNS・リンク集）→</a>
    </div>
    <p className="copy">© あーすガイド ｜ 歩きお遍路ジャーニー ―神足歩行術で行く、発心の道場5日間の巻―（秋編）</p>
  </div>
</footer>

<a className="btn btn-shu float-cta" href="https://share.google/tvcyQIuEC1A0Sl5UK" target="_blank" rel="noopener">申し込む →</a>


    </div>
  );
}
