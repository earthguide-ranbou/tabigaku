import { useEffect } from "react";
import "./thai.css";

export default function Thai() {
  useEffect(() => {
    // IntersectionObserver for reveal animations
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
    const reveals = document.querySelectorAll(".thai-page .reveal");
    reveals.forEach((el, i) => {
      // Add staggered delay for elements that are siblings
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
        const sibIndex = siblings.indexOf(el);
        if (sibIndex > 0) {
          (el as HTMLElement).style.transitionDelay = `${sibIndex * 0.08}s`;
        }
      }
      io.observe(el);
    });

    // Countdown
    const cd = document.getElementById("cd");
    if (cd) {
      const days = Math.ceil(
        (new Date("2026-08-22T00:00:00+09:00").getTime() - new Date().getTime()) / 86400000
      );
      if (days > 0) {
        cd.textContent = String(days);
      } else {
        const countdown = cd.closest(".countdown") as HTMLElement;
        if (countdown) countdown.style.display = "none";
      }
    }

    // Hide the main site's nav/footer if present
    document.body.style.overflow = "auto";

    // Update page title and OGP meta for /thai
    const originalTitle = document.title;
    document.title = "旅する学校｜EarthfamilyJourney";
    
    // Update meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("property", "og:title", "旅する学校｜EarthfamilyJourney");
    setMeta("property", "og:description", "旅は最高の学校");
    setMeta("property", "og:url", "https://tabigaku.party/thai");
    setMeta("property", "og:image", "https://tabigaku.party/manus-storage/thai_img_00_2e972116.jpg");
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", "https://tabigaku.party/manus-storage/thai_img_00_2e972116.jpg");
    setMeta("name", "description", "旅は最高の学校");

    return () => {
      io.disconnect();
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="thai-page">
      <header className="brandbar">
        <div className="logo">
          Earthfamily<span>Journey</span>
        </div>
      </header>

      <section className="hero">
        <h1 className="sr-only">
          EarthfamilyJourney in Thailand ── 地球を家族と旅をする育成プログラム
        </h1>
        <div className="hero-visual">
          <img
            src="/manus-storage/thai_img_00_2e972116.jpg"
            alt="EarthfamilyJourney in Thailand そうだ！タイに行こう"
          />
        </div>
        <div className="plans">
          <div className="plan-chip a">
            <b>A日程・6日間</b>8/22（土）〜 8/27（木）
          </div>
          <div className="plan-chip b">
            <b>B日程・9日間</b>8/22（土）〜 8/30（日）
          </div>
        </div>
        <p className="countdown">
          ✈️ 8月22日 出発まで、あと<b id="cd">--</b>日！
        </p>
      </section>

      <section className="story">
        <div className="inner">
          <p className="s-eyebrow reveal">── 子連れ海外を、諦めてきたあなたへ ──</p>

          <div className="s-block reveal">
            <p className="s-lead">
              子どもには、<br />
              もっと広い世界を<br />
              見せてあげたい。
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-text">
              自然の中で遊び、<br />
              いろんな人と出会い、<br />
              言葉の通じない世界で、<br />
              心が動く体験をしてほしい。
            </p>
          </div>

          <figure className="tilt-l reveal">
            <img
              src="/manus-storage/thai_img_01_9a185c4b.jpg"
              alt="ペルー・アンデスの山を旅する"
              loading="lazy"
            />
            <figcaption>アンデスの山の上でも、赤ちゃんは背中ですくすく。</figcaption>
          </figure>

          <div className="s-block reveal">
            <p className="s-text s-quiet">
              でも、家族で海外は<br />
              やっぱり不安。<br />
              <br />
              飛行機、ごはん、体調、<br />
              言葉、学校、仕事。<br />
              <br />
              考え出したら、行かない理由は<br />
              いくらでも出てくる。
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-text">
              でも、異国の地で<br />
              新しい命を迎えた旅の中で、<br />
              気づいたことがある。
            </p>
          </div>

          <figure className="tilt-r reveal">
            <img
              src="/manus-storage/thai_img_02_71e9e264.jpg"
              alt="バリ島で生まれた赤ちゃんを迎えるきょうだい"
              loading="lazy"
            />
            <figcaption>バリ島で、家族に新しい命を。はじめましての瞬間。</figcaption>
          </figure>

          <div className="s-block reveal">
            <p className="s-big">
              世界は、思っていたより<br />
              <span className="accent">怖くない</span>。
            </p>
            <p className="s-big" style={{ marginTop: "26px" }}>
              人は、思っていたより<br />
              <span className="accent">あたたかい</span>。
            </p>
            <p className="s-big" style={{ marginTop: "26px" }}>
              子どもは、思っているより<br />
              ずっと<span className="accent">たくましい</span>。
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-big">
              この夏、行き先は<span className="accent">タイ</span>。
            </p>
          </div>

          <div className="thai-grid">
            <figure className="wide tilt-l reveal">
              <img
                src="/manus-storage/thai_img_03_dff322a9.jpg"
                alt="エメラルドの海に浮かぶロングテールボートと石灰岩の島"
                loading="lazy"
              />
              <figcaption>エメラルドの海と、そびえる石灰岩。ここが子どもたちの遊び場になる。</figcaption>
            </figure>
            <figure className="tilt-r reveal">
              <img
                src="/manus-storage/thai_img_04_7bcc2f80.jpg"
                alt="夕暮れに輝く暁の寺ワット・アルン"
                loading="lazy"
              />
              <figcaption>暁の寺ワット・アルン。祈りの国の静けさ。</figcaption>
            </figure>
            <figure className="tilt-l reveal">
              <img
                src="/manus-storage/thai_img_05_1f27ba11.jpg"
                alt="バナナの葉にのったエビのパッタイ"
                loading="lazy"
              />
              <figcaption>屋台のパッタイ。「おいしい！」が止まらない。</figcaption>
            </figure>
            <figure className="wide tilt-r reveal">
              <img
                src="/manus-storage/thai_img_06_c68a40c8.jpg"
                alt="タイのジャングルの天然温泉で遊ぶ子どもたち"
                loading="lazy"
              />
              <figcaption>ジャングルの天然温泉。タイの自然がまるごと、子どもたちの遊び場。</figcaption>
            </figure>
          </div>

          <div className="s-block reveal">
            <p className="s-sensory">
              やさしい笑顔。<br />
              ゆるやかな時間。<br />
              南国の風。<br />
              市場のにおい。<br />
              お寺の静けさ。<br />
              子どもたちを包んでくれる、<br />
              あたたかい空気。
            </p>
          </div>

          <figure className="tilt-l reveal">
            <img
              src="/manus-storage/thai_img_07_1ea2f736.jpg"
              alt="南国の夜ごはん、世界の友だちと"
              loading="lazy"
            />
            <figcaption>南国の夜ごはん。言葉が違っても、子ども同士はすぐ友だち。</figcaption>
          </figure>

          <figure className="tilt-r reveal">
            <img
              src="/manus-storage/thai_img_08_8c926dc5.jpg"
              alt="旅先で出会う家族たち"
              loading="lazy"
            />
            <figcaption>旅先で出会う仲間たち。家族の旅が、みんなの旅になっていく。</figcaption>
          </figure>

          <div className="s-block reveal">
            <p className="s-text">
              旅に、ハプニングはつきもの。<br />
              予定通りにいかない日も、<br />
              泣く日も、迷う日もある。<br />
              <br />
              だって、あたりまえ。<br />
              だったら、<b>まるごと楽しんじゃおう。</b>
              <br />
              <br />
              その全部が、<br />
              <b>家族だけの物語</b>になっていく。
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-text">旅は、ただの旅行じゃない。</p>
            <p className="s-text" style={{ marginTop: "22px" }}>
              子どもの世界が広がる時間。<br />
              そして、
              <span className="s-marker">
                <b>
                  お母さんとお父さんの人生も、<br />
                  もう一度ひらいていく時間。
                </b>
              </span>
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-text">
              子どもが小さくて、<br />
              海外の旅を諦めてきたお母さん。<br />
              <br />
              楽しさより大変さが勝って、<br />
              その機会を逃してきたあなた。
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-text">
              その<b>「行きたい」</b>という気持ちに、<br />
              この旅の仲間と一緒に、<br />
              チャレンジできる。
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-big">
              チャレンジした人にしか<br />
              見えない<span className="accent">景色</span>が、<br />
              そこにある。
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-go">
              この10年、小さな子どもたちと<br />
              旅をしてきた上田家が、<br />
              そのチャレンジを共にできたら<br />
              <span className="s-marker">光栄です。</span>
            </p>
          </div>

          <div className="s-block reveal">
            <p className="s-go">
              ワクワクとドキドキが来たら、<br />
              それはきっと、<span className="s-marker">家族のGOサイン。</span>
            </p>
          </div>

          <div className="s-block reveal" style={{ marginBottom: 0 }}>
            <p className="s-big">
              この夏、<br />
              一緒に<span className="accent">タイ</span>へ行こう。
            </p>
            <p className="s-arrow">↓</p>
          </div>
        </div>
      </section>

      <section className="profiles">
        <div className="inner">
          <h2 className="p-heading">同行人プロフィール</h2>
          <p className="p-sub">上田家が、まるごと一緒に旅します。</p>

          <figure className="reveal">
            <img
              src="/manus-storage/thai_img_09_610526a8.jpg"
              alt="上田家ファミリー"
              loading="lazy"
            />
            <figcaption>4人の子どもと旅する、上田家です。</figcaption>
          </figure>

          <div className="journey-log reveal">
            <p className="jl-title">上田家、これまでの子連れ旅。</p>
            <p className="jl-sub">ふたりの原点から、4人の子連れ旅まで。</p>

            <div className="jl-item">
              <span className="flag">🌺</span>
              <div>
                <span className="jl-country">ハワイ島</span>
                <span className="jl-text">
                  まいちゃんがジャングルで暮らし、オフグリッドな暮らしを学んだ場所。「大地とともに生きる」の原点。
                </span>
                <div className="jl-photo2">
                  <img src="/manus-storage/thai_img_10_1ee754a8.jpg" alt="透きとおる海に浮かぶまいちゃん" loading="lazy" />
                  <img src="/manus-storage/thai_img_11_988ce720.jpg" alt="夜空を焦がす火山の火" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="jl-item">
              <span className="flag">🇰🇪</span>
              <div>
                <span className="jl-country">ケニア</span>
                <span className="jl-text">
                  マサイ族やドゥルマ族の村でお世話になりながら、テントを張って旅した。
                </span>
                <div className="jl-photo2">
                  <img src="/manus-storage/thai_img_12_065cce94.jpg" alt="ケニアの村の踊り手たちとらんぼう" loading="lazy" />
                  <img src="/manus-storage/thai_img_13_81f4fd2a.jpg" alt="村でココナッツを飲むまいちゃん" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="jl-item">
              <span className="flag">🇨🇱</span>
              <div>
                <span className="jl-country">チリ</span>
                <span className="jl-text">
                  標高3000mの町を拠点に子連れ旅。らんぼうが砂漠レースを走る間、まいちゃんは子どもたちと陸路でペルーへ。5000mの峠を越えて、コンドルの飛ぶ小さな村にステイした。
                </span>
                <div className="jl-photo2">
                  <img src="/manus-storage/thai_img_14_f02750ce.jpg" alt="赤ちゃんをおんぶして自転車で旅するまいちゃん" loading="lazy" />
                  <img src="/manus-storage/thai_img_15_5ac9215c.jpg" alt="赤ちゃんをおんぶして馬で旅する家族" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="jl-item">
              <span className="flag">🇵🇪</span>
              <div>
                <span className="jl-country">ペルー</span>
                <span className="jl-text">
                  2日間のヒッチハイクでトラックの荷台に揺られ、標高5000m超のレインボーマウンテンへ⛰️ 「日本人が来たのは初めて」と言われた奥地の村にも行った。
                </span>
                <div className="jl-photo2">
                  <img src="/manus-storage/thai_img_16_e7ef4731.jpg" alt="ペルーの村の家族と" loading="lazy" />
                  <img src="/manus-storage/thai_img_17_750216f3.jpg" alt="レインボーマウンテンで子どもをおんぶして" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="jl-item">
              <span className="flag">🇮🇩</span>
              <div>
                <span className="jl-country">バリ島</span>
                <span className="jl-text">
                  1度目は妊娠8ヶ月、お腹にいのりを抱えて、悪路の離島を原チャリ3ケツで旅。2度目は家族みんなで渡り、バリ島出産旅に。
                </span>
                <div className="jl-photo2">
                  <img src="/manus-storage/thai_img_18_cf8f36b2.jpg" alt="バリ島の断崖の祠で祈るまいちゃんと子ども" loading="lazy" />
                  <img src="/manus-storage/thai_img_19_dd8fdc4e.jpg" alt="バリ島のビーチで、お腹の赤ちゃんと子どもたち" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="jl-item">
              <span className="flag">🇲🇳</span>
              <div>
                <span className="jl-country">モンゴル</span>
                <span className="jl-text">
                  砂漠を走り、遊牧民と暮らし、大自然のまんなかにテントを張った🏕️
                </span>
                <div className="jl-photo2">
                  <img src="/manus-storage/thai_img_20_150c1889.jpg" alt="モンゴルのゲルの前で家族写真" style={{ objectPosition: "center 62%" }} loading="lazy" />
                  <img src="/manus-storage/thai_img_21_6cf83dd6.jpg" alt="モンゴルの草原で馬に乗る息子" style={{ objectPosition: "center 40%" }} loading="lazy" />
                </div>
              </div>
            </div>

            <p className="jl-punch">
              そんな上田家と行くからこそ、<br />
              きっと、<span className="s-marker">想像を超えて面白くなる。</span>
            </p>
          </div>

          <div className="profile-card rambo reveal">
            <p className="pc-role">あーすガイド代表・旅する学校代表</p>
            <h3 className="pc-name">
              らんぼう<small>上田直樹</small>
            </h3>
            <figure className="pc-photo">
              <img src="/manus-storage/thai_img_22_e27e35c8.jpg" alt="森の石段を仲間と歩くらんぼう" loading="lazy" />
              <figcaption>旅の仲間と、森の道を歩く日常。</figcaption>
            </figure>
            <div className="pc-bio">
              <p>1982年北海道札幌生まれ。徳島県神山町在住。地球一周を皮切りに10年間の旅暮らしの中で、様々な先住民の土地を訪れ、自然とともにある生き方に感銘を受ける。</p>
              <p>2008年より「あーすガイド」の屋号で、全国各地のトークイベント・上映会など<b>500本以上</b>に出演。祝島・神山町・ケニアなど国内外で体験学習型ツアー「スタディロード」を主催し、参加者<b>40人以上が各地へ移住</b>。</p>
              <p>2016年、世界で最も過酷なアドベンチャーレースといわれる<b>アタカマ砂漠マラソン250km</b>にど素人10人で挑戦。奇跡的にチーム全員完走＆チーム優勝を飾り、<b>映画化</b>される。以降、ペルー・ニュージーランド・ゴビ砂漠と計1000km超を走破。</p>
              <p>2022年、オルタナティブスクール<b>「森の学校みっけ」</b>を仲間と立ち上げ。2023年より<b>「旅する学校」</b>を主宰し、子どもたちとの歩きお遍路旅や川旅で<b>「2023年度推奨モデル特別賞」受賞</b>。同年、瀬戸内海カヤック横断隊の隊士として約1ヶ月・300km漕破。</p>
              <p>2025年、<b>家族でバリ島出産旅。第4児誕生</b>。2026年、オルタナティブ中学校<b>「KAMIYAMA FIELD SCHOOL」を仲間と立ち上げ</b>。現在は神山町を拠点に、視察ガイド・企業研修・上映会・講演・旅する学校などを主宰。</p>
            </div>
            <a className="pc-link" href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener">
              🌏 あーすガイド公式ホームページ →
            </a>
            <a className="pc-link" href="https://www.tabigaku.party" target="_blank" rel="noopener">
              🌏 旅する学校のサイトを見る →
            </a>
          </div>

          <div className="profile-card mai reveal">
            <p className="pc-role">ecomomai代表</p>
            <h3 className="pc-name">
              まいちゃん<small>上田麻衣</small>
            </h3>
            <figure className="pc-photo">
              <img src="/manus-storage/thai_img_23_ec44cacc.jpg" alt="バリ島のヴィラで、生まれたての4人目と" loading="lazy" />
              <figcaption>バリ島のヴィラで。生まれたての4人目の子と。</figcaption>
            </figure>
            <div className="pc-bio">
              <p>神山町在住。<b>4児の母</b>。24歳でアパレルをやめて沖縄へ移住。ベジのお料理を学ぶため渡ったハワイ島でオフグリッドな暮らしに触れ、大地とともに生きる人たちに魅せられる。人生のテーマは<b>「大地とともに生きること」</b>。</p>
              <p>帰国後、自然ゆたかな神山へ移住し、こどもたちと季節の手仕事をまんなかに暮らしている。</p>
              <p>お産だって、自然の循環の一部であって、暮らしと切り離されるものじゃない。そんな想いから、2人目からは自宅出産、3人目は自宅でプライベート出産。4人目はお腹の子の強い意志を受け取って、家族みんなで<b>バリ島へ渡り、ヴィラで幸せなお産</b>をさせてもらった🤰</p>
            </div>
            <a className="pc-link mai-link" href="https://www.instagram.com/loveandjoymai?igsh=MXA0MHFqOTdqZWJrNA==" target="_blank" rel="noopener">
              🌿 まいちゃんのInstagramを見る →
            </a>
          </div>
        </div>
      </section>

      <main className="pricing">
        <h2 className="section-title">
          参加費について<small className="sp-note">＊直近の旅につき、今回は特別価格（割安）です。</small>
        </h2>

        <div className="deal-banner reveal">
          <div className="deal">
            <span className="deal-tag">🈹 早割</span>
            <p>
              <b>7/21（火）まで</b>の申込＆入金で、<br />
              参加費が <b className="deal-price">2万円引き</b>
              <small>（1家族につき）</small>
              <br />
              <small>例）A日程 14.9万円 → <b>12.9万円</b>＋実費</small>
            </p>
          </div>
          <div className="deal d-orange">
            <span className="deal-tag orange">🤝 友人紹介割</span>
            <p>
              紹介した方も、された方も、<b>双方 <b className="deal-price" style={{ fontSize: "20px" }}>5,000円引き</b></b>
              <small>（1家族につき）</small>
              <br />
              <small>申し込みフォームにご紹介者のお名前をご記入ください。</small>
            </p>
          </div>
          <div className="deal d-green">
            <span className="deal-tag green">💳 分割OK</span>
            <p>
              お支払いの<b>分割もご相談に乗ります</b>。<br />
              「一括はちょっと…」もLINEで気軽にどうぞ。
            </p>
          </div>
          <p className="deal-combo">
            ＼ 早割 × 紹介割は<b>併用OK</b>！ 最大<b>2.5万円引き</b> ／
          </p>
        </div>

        {/* ① 参加費 */}
        <div className="price-card pinkcard">
          <div className="card-head pink">
            <div className="ribbon"><span>申込時</span></div>
            <h2>参加費</h2>
            <p>申込時の必要費用はこれだけ！</p>
          </div>
          <div className="card-body">
            <div className="check-item">
              <div className="mark">✓</div>
              <div className="txt">
                <b>出発前 旅スキル講座 ＋ 参加者限定コミュニティ会費</b>
                <span className="note">（事前Zoomミーティング2回＋記事＋LINEグループでの相談など、なんでも質問OK）</span>
                <div className="hayawari">
                  <span className="hw-badge">早割</span>
                  <div className="hw-prices">
                    <s>通常 5万円</s><b>3万円</b><small>（1家族につき）</small>
                  </div>
                  <p className="hw-note">※ 7/21（火）までに入金＆お申し込み完了の方が対象です</p>
                </div>
              </div>
            </div>

            <div className="check-item">
              <div className="mark">✓</div>
              <div className="txt">
                <b>現地サポート</b>
                <span className="note">（基本はみんなで一緒に行動。ごはんも遊びも、上田家と仲間たちと毎日わいわい過ごします。自由時間＝「海外旅の練習」チャレンジタイムもあるから、家族の旅する力がぐんぐん育ちます。気になることはその場で気軽に相談OK）</span>
                <div className="plan-rows">
                  <div className="plan-row">
                    <span>A日程 8/22–27</span><span className="price">99,000円<small style={{ fontSize: "12px" }}>＋実費</small></span>
                  </div>
                  <div className="plan-row">
                    <span>B日程 8/22–30</span><span className="price">147,000円<small style={{ fontSize: "12px" }}>＋実費</small></span>
                  </div>
                </div>
                <span className="note" style={{ marginTop: "8px" }}>※中学生以下は半額。4歳児以下は無料。</span>
              </div>
            </div>

            <div className="totals">
              <div className="label">── 合 計 ──</div>
              <div className="total-row">
                <div className="name">A日程<small>8/22–27</small></div>
                <div className="t-right">
                  <s className="t-old">通常 14.9万円</s>
                  <div className="amount"><span className="hw-badge">早割</span>12.9<small>万円</small><small>＋実費</small></div>
                </div>
              </div>
              <div className="total-row">
                <div className="name">B日程<small>8/22–30</small></div>
                <div className="t-right">
                  <s className="t-old">通常 19.7万円</s>
                  <div className="amount"><span className="hw-badge">早割</span>17.7<small>万円</small><small>＋実費</small></div>
                </div>
              </div>
              <p className="caption">※大人1人の場合。<b>早割は7/21（火）までの申込＆入金</b>で適用。<b>友人紹介割（双方5,000円引き）との併用OK</b>。実費（航空券・現地での宿泊費/飲食費など）は別途。</p>

              <div className="example-box">
                <p className="ex-title">💡 料金例：B日程に早割を使って<br />家族3人で参加する場合</p>
                <p className="ex-family">大人1人＋小学生1人＋3歳のお子さん</p>
                <div className="ex-row"><span>旅スキル講座＋コミュニティ会費（1家族・早割）</span><span>30,000円</span></div>
                <div className="ex-row"><span>現地サポート：大人</span><span>147,000円</span></div>
                <div className="ex-row"><span>現地サポート：小学生 <small>（中学生以下半額）</small></span><span>73,500円</span></div>
                <div className="ex-row"><span>現地サポート：3歳 <small>（4歳以下無料）</small></span><span className="free-tag">0円</span></div>
                <div className="ex-total"><span>家族の合計</span><span>250,500円<small>＋実費</small></span></div>
                <p className="ex-family" style={{ marginTop: "10px" }}>※ 友人紹介割を併用すると、さらに −5,000円！</p>
              </div>
            </div>
          </div>
        </div>

        <div className="connector"><span>＋</span></div>

        {/* ② 航空券 */}
        <div className="price-card bluecard">
          <div className="card-head blue">
            <div className="ribbon"><span>出発までに取得</span></div>
            <h2>航空券について</h2>
          </div>
          <div className="card-body">
            <div className="check-item">
              <div className="mark">✓</div>
              <div className="txt">航空券はご自身で購入<span className="note">（じつはこれが一番おトク。安いタイミングも、好きな経路も選べます）</span></div>
            </div>
            <div className="check-item">
              <div className="mark">✓</div>
              <div className="txt">「取ったことない…」でも大丈夫<span className="note">（選び方のコツは出発前講座で共有。わからないことはLINEグループでみんなで解決できます）</span></div>
            </div>
            <div className="check-item">
              <div className="mark">✓</div>
              <div className="txt">夏の航空券は、日ごとに値上がりしがち<span className="note">（だからこそ、決断は早いほどおトク。迷っている今日が、いちばん安い日かもしれません✈️）</span></div>
            </div>
          </div>
        </div>

        <div className="connector"><span>＋</span></div>

        {/* ③ 旅費 */}
        <div className="price-card greencard">
          <div className="card-head green">
            <div className="ribbon"><span>現地で必要</span></div>
            <h2>旅費</h2>
          </div>
          <div className="card-body">
            <div className="check-item">
              <div className="mark">✓</div>
              <div className="txt">宿泊費・飲食費・交通費・観光費など<span className="note">（現地で各家族が直接お支払い。家族のペースと予算で自由に使えます）</span></div>
            </div>
            <div className="check-item">
              <div className="mark">✓</div>
              <div className="txt">予算の目安や現地の相場も共有<span className="note">（出発前講座で「いくら持っていけばいい？」の目安がつかめます）</span></div>
            </div>
          </div>
        </div>

        <p className="diy-note reveal">
          大丈夫、一人じゃない。<br />
          やり方は講座で、迷ったら仲間とLINEで。
        </p>

        <div className="legal-note reveal">
          <p>
            <b>▼ このプログラムについて</b><br />
            EarthfamilyJourneyは、「自分たちで旅をつくる力」を家族で育てる<b>教育プログラム</b>です。参加費は、出発前講座・参加者コミュニティの運営・現地での相談や学びの伴走に対するものです。航空券や宿泊などの予約・お支払いは、各ご家族がご自身で行うスタイル。旅の主役は、それぞれのご家族です。上田家と参加者みんなの知恵をシェアしながら、それぞれのペースで旅をつくっていきます。
          </p>
        </div>

        <div className="apply reveal">
          <h2 className="apply-title">お申し込み</h2>
          <p className="apply-steps">① フォームに記入 → ② 参加費をお振込 → 完了！</p>
          <a className="apply-btn" href="https://share.google/bR9LKsOJ0rsBj2DdG" target="_blank" rel="noopener">
            📝 申し込みフォームはこちら
          </a>
          <div className="bank-box">
            <p className="bank-title">── お振込先 ──</p>
            <div className="bank-row"><span>銀行</span><b>PayPay銀行</b></div>
            <div className="bank-row"><span>支店</span><b>かわせみ支店（007）</b></div>
            <div className="bank-row"><span>口座</span><b>普通　4304359</b></div>
            <div className="bank-row"><span>名義</span><b>ウエダナオキ</b></div>
            <p className="bank-note">
              ※ 早割（参加費2万円引き）は、7/21（火）までにお申し込み＆ご入金完了の方が対象です。友人紹介割（双方5,000円引き）と併用できます。<br />
              ※ お支払いの分割もご相談に乗ります。LINEでお気軽にどうぞ。
            </p>
          </div>
        </div>

        <div className="faq">
          <h2 className="faq-heading">よくある質問</h2>
          <p className="faq-sub">気になること、先に答えます。</p>

          <div className="faq-item">
            <p className="fq"><span className="q">Q.</span>タイのどこに行くの？</p>
            <p className="fa"><span className="amark">A.</span><span>行き先は、タイ子連れ旅経験者のまいちゃんと相談しながら、イメージを膨らませてみんなで決めていきます。道中はインスピレーションで決まることも！？ それがこの旅のおもしろさです。</span></p>
          </div>
          <div className="faq-item">
            <p className="fq"><span className="q">Q.</span>集合場所と解散場所は？</p>
            <p className="fa"><span className="amark">A.</span><span><b>集合</b>：8/22（土）11:00（現地時間）バンコク近郊に現地集合。<br /><b>解散</b>：現地解散です。<br />・A日程 → 8/27（木）15:00 チェンマイ近郊<br />・B日程 → 8/30（日）11:00 チェンマイ近郊<br />より細かい集合・解散場所は、出発前のZoomでみんなで決めてゆきます。</span></p>
          </div>
          <div className="faq-item">
            <p className="fq"><span className="q">Q.</span>航空券はどうやって取るの？</p>
            <p className="fa"><span className="amark">A.</span><span>各自での取得をお願いしています。「取ったことない…」という方も大丈夫。出発前の旅スキル講座で、取り方から丁寧にサポートします。</span></p>
          </div>
          <div className="faq-item">
            <p className="fq"><span className="q">Q.</span>英語もタイ語も話せないけど大丈夫？</p>
            <p className="fa"><span className="amark">A.</span><span>大丈夫。言葉が通じなくても、笑顔と身ぶりで意外と伝わります。そして「伝わった！」の瞬間こそ、子どもにとって最高の学び。困ったときはLINEグループで相談できます。</span></p>
          </div>
          <div className="faq-item">
            <p className="fq"><span className="q">Q.</span>1人でも参加できますか？</p>
            <p className="fa"><span className="amark">A.</span><span>もちろん大歓迎です。<b>大人1人での参加（お子さんなし）</b>も、<b>親1人＋お子さんでの参加</b>もOK。基本はみんなで一緒に過ごすので、1人で来てもさみしくありません。むしろ旅の仲間がどんと増えます。</span></p>
          </div>
          <div className="faq-item">
            <p className="fq"><span className="q">Q.</span>子どもが小さくても大丈夫？</p>
            <p className="fa"><span className="amark">A.</span><span>うちは0歳の赤ちゃんを連れて旅してきた家族です。小さい子のペースに合わせた旅の工夫、たっぷりお伝えします。ちなみに4歳以下は参加費が無料です。</span></p>
          </div>
        </div>

        <div className="cancel-policy reveal">
          <h2 className="cp-heading">キャンセルポリシー</h2>
          <p className="cp-intro">
            旅の準備は、お申し込みいただいた瞬間から始まっています。<br />
            みなさんの「行く！」に応えるために、一つひとつ動いています。
          </p>
          <p className="cp-intro">
            だからこそ、やむを得ずキャンセルされる場合は、<br />
            以下のキャンセル料が発生することをご了承ください。
          </p>
          <div className="cp-table">
            <div className="cp-row">
              <span className="cp-period">出発日の<b>14日前</b>まで</span>
              <span className="cp-fee">50,000円</span>
            </div>
            <div className="cp-row cp-row-full">
              <span className="cp-period">出発日の<b>13日前</b>以降</span>
              <span className="cp-fee">参加費の<b>100%</b></span>
            </div>
          </div>
          <p className="cp-note">
            ※ 体調不良やご家庭の事情など、どうしてもの場合はまずLINEでご相談ください。<br />
            一緒に最善の方法を考えます。
          </p>
        </div>

        <div className="line-card reveal">
          <p className="lc-title">不安なことは、なんでも聞いてください</p>
          <p className="lc-sub">「うちの子でも大丈夫？」「仕事の調整が…」そんな相談からでOK。</p>
          <img src="/manus-storage/thai_img_24_bd029101.png" alt="LINE友だち追加QRコード" />
          <a className="lc-btn" href="https://line.me/ti/p/HjhUktmN-m">📱 LINEで相談する（友だち追加）</a>
          <p className="lc-note">スマホの方はボタンをタップ／パソコンの方はQRコードを読み取ってください</p>
        </div>
      </main>

      <section className="final-push">
        <p className="fp-big reveal">
          ワクワクとドキドキが来たら<br />
          <span className="s-marker">GOサイン</span>
        </p>
        <p className="fp-sub reveal">この夏の思い出は、この夏しかつくれない。</p>
        <a className="fp-btn" href="https://share.google/bR9LKsOJ0rsBj2DdG" target="_blank" rel="noopener">
          🌏 この夏、タイで会おう！
        </a>
      </section>

      {/* 固定CTA */}
      <div className="cta-fixed">
        <a className="cta-btn" href="https://line.me/ti/p/HjhUktmN-m">
          まずはLINEで<span className="free">無料</span>相談する。
        </a>
      </div>
    </div>
  );
}
