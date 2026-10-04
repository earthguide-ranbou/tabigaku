import { useEffect, useState } from "react";
import "./thai.css";
import ShareButtons from "@/components/ShareButtons";
import { useSEO } from "@/hooks/useSEO";


const lakeMoments = [
  { label: "自分に戻る", title: "何もしない、を味わう。", text: "湖を眺めて、深呼吸。いつもの役割を少しおいて、自分の心が動く方へ。", image: "/images/saijai-family.webp", alt: "サージャイから眺める夕焼けの湖", number: "01" },
  { label: "人と出逢う", title: "「はじめまして」の、その先へ。", text: "どこから来たの？ どんな毎日を送っているの？ そんな会話から、知らなかった世界がひらいていく。", image: "/images/saijai-life.webp", alt: "サージャイの湖のそばの風景", number: "02" },
  { label: "暮らしにふれる", title: "泊まる場所が、旅の目的になる。", text: "小舟でたどり着く水上の村。竹の壁、木の床、目の前の湖。いつもと違う暮らしを、少し想像してみる。", image: "/images/saijai-stay.jpg", alt: "竹と木に囲まれたサージャイの客室", number: "03" },
] as const;

export default function Thai() {
  const [momentIndex, setMomentIndex] = useState(0);
  const moment = lakeMoments[momentIndex];
  useSEO({
    title: "2027年1月・チェンマイから｜EarthfamilyJourney タイ編｜詳細近日公開",
    description: "2027年1月、チェンマイから始まるEarthfamilyJourney。おひとり・友人同士・親子歓迎。湖上のサージャイとの出逢いを写真と動画で紹介。日程・料金・参加方法は近日公開。",
    keywords: "ひとり参加, 大人の旅, チェンマイ, 家族旅, タイ 旅, EarthfamilyJourney, 旅育, 子連れ 海外旅行, あーすガイド, らんぼう, 神山町, 徳島, 先住民 体験, バリ島, 家族 海外体験, 子ども 海外",
    ogImage: "https://www.tabigaku.party/images/saijai-lake.jpg",
    ogUrl: "/thai",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://tabigaku.party" },
          { "@type": "ListItem", "position": 2, "name": "EarthfamilyJourney タイ編", "item": "https://tabigaku.party/thai" }
        ]
      }
    ]
  });

  useEffect(() => {
    // IntersectionObserver for reveal animations
    if (!("IntersectionObserver" in window)) return;
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

    // Hide the main site's nav/footer if present
    document.body.style.overflow = "auto";

    return () => io.disconnect();
  }, []);

  return (
    <div className="thai-page">

      <header className="brandbar">
        <div className="logo">
          Earthfamily<span>Journey</span>
        </div>
      </header>

      <section className="thai-next-hero">
        <img src="/images/saijai-lake.jpg" alt="緑の山と湖に抱かれたサージャイ・ヴィレッジ" fetchPriority="high" />
        <div className="thai-next-hero-copy">
          <p className="thai-next-kicker">EARTH FAMILY JOURNEY · THAILAND</p>
          <p className="thai-next-badge">2027年1月・チェンマイスタート予定</p>
          <h1>ひとりの「行きたい」から、<br />旅は、はじまる。</h1>
          <p>ひとりでも、友人とでも、家族でも。<br />チェンマイから、まだ知らない景色と人に会いに。</p><p className="thai-solo-badge">おひとり・友人同士・親子、どなたも歓迎</p>
          <a href="#solo-welcome">ひとり参加の入口へ ↓</a>
          <small>日程・料金・参加方法は近日公開</small>
        </div>
      </section>
      <nav className="thai-next-nav" aria-label="タイ旅ページ内の案内"><a href="#solo-welcome">ひとり参加も歓迎</a><a href="#lake-moments">過ごしたい時間</a><a href="#saijai-story">サージャイとの出逢い</a><a href="#saijai-film">動画を見る</a><a href="#next-journey">1月の旅について</a><a href="#family-story">家族旅のストーリー</a></nav>

      <section className="thai-next-wrap thai-solo-welcome" id="solo-welcome" aria-labelledby="solo-title">
        <div data-journey-reveal><p className="thai-next-kicker">COME AS YOU ARE</p><h2 id="solo-title">「一緒に行く人がいない」も、<br />旅のはじまりになる。</h2></div>
        <div className="thai-next-prose" data-journey-reveal><p>誰かと予定が合うのを待つ前に、自分の「行ってみたい」を大切に。大人おひとりでの参加も、歓迎しています。</p><p>旅先で誰かと話す時間も、景色を眺める時間も。あなたがどんな旅をしてみたいか、まずは聞かせてください。</p><a className="thai-solo-text-link" href="#solo-questions">ひとり参加の気がかりを見てみる ↓</a></div>
      </section>
      <section className="thai-moments" id="lake-moments" aria-labelledby="moments-title"><div className="thai-next-wrap">
        <div className="thai-moments-heading"><div><p className="thai-next-kicker">FIND YOUR OWN MOMENT</p><h2 id="moments-title">いま、心が向くのは<br />どんな時間？</h2></div><p>気になる言葉を選んで、<br />湖のほとりの時間をのぞいてみてください。</p></div>
        <div className="thai-moment-buttons" role="group" aria-label="過ごしてみたい時間を選ぶ">{lakeMoments.map((item, index) => <button key={item.label} type="button" aria-pressed={index === momentIndex} aria-controls="thai-moment-panel" onClick={() => setMomentIndex(index)}><small>{item.number}</small>{item.label}<span aria-hidden="true">↗</span></button>)}</div>
        <div className="thai-moment-panel" id="thai-moment-panel"><img key={moment.image} src={moment.image} alt={moment.alt} width="1000" height="700" loading="lazy" /><div className="thai-moment-copy" aria-live="polite" aria-atomic="true"><span>{moment.number} / SAAIJAI</span><h3>{moment.title}</h3><p>{moment.text}</p><a href="#saijai-film">湖の暮らしを動画で見る ↗</a></div></div>
        <p className="thai-moments-caption">サージャイで出逢った風景から。1月の詳しい行程は近日公開。</p>
      </div></section>
      <section className="thai-next-wrap thai-next-story" id="saijai-story">
        <div><p className="thai-next-kicker">OUR ENCOUNTER / SAAIJAI VILLAGE</p><h2>旅先に、<br />帰りたい場所ができた。</h2></div>
        <div className="thai-next-prose"><p>2026年、家族でタイを旅する中で出逢ったのが、サージャイ・ヴィレッジ（SaaiJai Village）。チェンマイ郊外、山々に囲まれた湖の上にあるエコビレッジです。</p><p>小舟でたどり着いて、湖で遊び、ごはんを食べ、人と話す。特別な予定を詰め込まなくても、目の前の暮らしが、子どもにも大人にも新しい発見をくれる。</p><p>そこで過ごした数日間から、僕たちの旅に、もうひとつのつながりが生まれました。今は僕も、建物を直しながら、この場所のこれからを一緒につくる仲間として関わっています。</p><p className="thai-next-sign">また訪ねたい人がいる。<br />今度は、あなたにも会ってほしい。<br /><small>らんぼう / 旅する学校</small></p></div>
      </section>
      <section className="thai-next-gallery thai-next-wrap" aria-label="サージャイの暮らしの写真">
        <figure><img src="/images/saijai-stay.jpg" alt="竹の壁と木の床に囲まれたサージャイの客室" loading="lazy" /><figcaption>目覚めたら、すぐそばに湖。</figcaption></figure>
        <figure><img src="/images/saijai-life.webp" alt="サージャイの湖のそばで過ごす時間" loading="lazy" /><figcaption>ゆっくり過ごす時間も、旅の宝物。</figcaption></figure>
        <figure><img src="/images/saijai-family.webp" alt="サージャイから眺める夕焼けの湖" loading="lazy" /><figcaption>一日の終わりを、同じ景色の中で。</figcaption></figure>
      </section>
      <section className="thai-next-film" id="saijai-film"><div className="thai-next-wrap">
        <p className="thai-next-kicker">30 SECONDS BY THE LAKE</p><h2>まずは、30秒。<br />湖の上の暮らしへ。</h2><p>家族で訪れたサージャイの風景を、映像で。</p>
        <video controls playsInline preload="none" poster="https://saaijai-village.com/assets/saijai-journey.webp" aria-label="家族で訪れたサージャイ・ヴィレッジの水上生活、30秒の動画"><source src="https://saaijai-village.com/assets/saijai-journey.mp4" type="video/mp4" /></video>
        <div className="thai-next-links"><a href="https://saaijai-village.com/assets/saijai-journey.mp4" target="_blank" rel="noopener noreferrer">動画を別の画面で見る ↗</a><a href="/saijai">サージャイの紹介ページへ →</a><a href="https://saaijai-village.com/" target="_blank" rel="noopener noreferrer">SaaiJai Village 公式サイト ↗</a></div>
      </div></section>
      <section className="thai-next-wrap thai-next-announcement" id="next-journey">
        <p className="thai-next-kicker">NEXT JOURNEY / COMING SOON</p><h2>2027年1月。<br />チェンマイから、はじまる。</h2><p className="thai-next-lead">知らない場所が、なつかしい場所になる。<br />そんな出逢いを重ねる旅を、準備しています。</p>
        <dl><div><dt>スタート</dt><dd>タイ・チェンマイ</dd></div><div><dt>時期</dt><dd>2027年1月予定</dd></div><div><dt>参加</dt><dd>おひとり・友人同士・親子歓迎</dd></div><div><dt>詳細</dt><dd>日程・行程・料金・参加方法は近日公開</dd></div></dl>
        <p>サージャイとの出逢いから広がった、次の旅。訪問先や滞在日数など、詳しい内容はこのページでお知らせします。</p>
        <a className="thai-next-line" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener noreferrer">1月のタイ旅についてLINEで相談する ↗</a><small>「ひとり参加を考えています」など、気になることを送ってください。</small>
      </section>
      <section className="thai-next-wrap thai-solo-faq" id="solo-questions" aria-labelledby="solo-faq-title"><p className="thai-next-kicker">BEFORE YOUR FIRST STEP</p><h2 id="solo-faq-title">気がかりも、一緒に持ってきて。</h2>
        <details><summary>ひとりでも参加できますか？</summary><p>はい。大人おひとりでの参加も歓迎です。友人同士や親子での参加も含め、それぞれの「行ってみたい」を入口にする旅です。日程や旅のスタイルなど、公開前からLINEで相談できます。</p></details>
        <details><summary>海外が初めて。言葉や移動が心配です。</summary><p>航空券、現地での移動、言葉のこと。気になっていることを、まずはらんぼうに聞かせてください。集合場所の詳細や旅の進め方は、日程・参加方法とあわせてご案内します。</p></details>
        <details><summary>部屋や、ひとり参加の場合の料金は？</summary><p>部屋のタイプや費用は、詳しい募集案内でお知らせします。個室の希望など、相談したいことがあればLINEでお伝えください。</p></details>
        <a className="thai-next-line" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener noreferrer">ひとり参加について、LINEで相談する ↗</a>
      </section>
      <details className="thai-next-details" id="family-story"><summary>家族で世界を旅する理由。これまでの写真とストーリーを読む <span>＋</span></summary>
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
              次の行き先は<span className="accent">タイ</span>。
            </p>
          </div>

          <div className="thai-grid">
            <figure className="wide tilt-l reveal">
              <img
                src="/manus-storage/thai_img_03_dff322a9.jpg"
                alt="エメラルドの海に浮かぶロングテールボートと石灰岩の島"
                loading="lazy"
              />
              <figcaption>エメラルドの海と、そびえる石灰岩。タイに広がる景色。</figcaption>
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
              次の旅は、<br />
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

      </details>

      <section className="final-push">
        <p className="fp-big reveal">
          ワクワクとドキドキが来たら<br />
          <span className="s-marker">GOサイン</span>
        </p>
        <p className="fp-sub reveal">2027年1月、チェンマイから。詳しい旅の案内は近日公開。</p>
        <a className="fp-btn" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener">
          ひとりでも、仲間とでも。タイの旅を相談する
        </a>
      </section>

      <ShareButtons
        url="https://www.tabigaku.party/thai"
        text="2027年1月、チェンマイから始まるEarthfamilyJourney。おひとり・友人同士・親子歓迎。サージャイとの出逢い、その先の旅へ。詳細近日公開。"
        title="＼ タイ旅をシェア ／"
      />

      {/* 固定CTA */}
      <div className="cta-fixed">
        <a className="cta-btn" href="https://lin.ee/p3CvLfQ">
          ひとり参加も、LINEで相談する。
        </a>
      </div>
    </div>
  );
}

