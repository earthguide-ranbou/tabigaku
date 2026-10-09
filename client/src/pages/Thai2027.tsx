import { useEffect, useState } from "react";
import "./thai.css";
import ShareButtons from "@/components/ShareButtons";
import { useSEO } from "@/hooks/useSEO";


const lakeMoments = [
  { label: "自分に戻る", title: "何もしない、を味わう。", text: "湖を眺めて、深呼吸。いつもの役割を少しおいて、自分の心が動く方へ。", image: "/images/saijai-family.webp", alt: "サージャイから眺める夕焼けの湖", number: "01" },
  { label: "人と出逢う", title: "「はじめまして」の、その先へ。", text: "どこから来たの？ どんな毎日を送っているの？ そんな会話から、知らなかった世界がひらいていく。", image: "https://saaijai-village.com/assets/join-1000010170.webp", alt: "サージャイのデッキに集まり、笑顔を見せる仲間たち", number: "02" },
  { label: "暮らしにふれる", title: "泊まる場所が、旅の目的になる。", text: "小舟でたどり着く水上の村。竹の壁、木の床、目の前の湖。いつもと違う暮らしを、少し想像してみる。", image: "https://saaijai-village.com/assets/sponsor-walkway.jpg", alt: "湖に浮かぶ竹の家と、水面を渡る木の通路", number: "03" },
] as const;

export default function Thai2027() {
  const [momentIndex, setMomentIndex] = useState(0);
  const moment = lakeMoments[momentIndex];
  useSEO({
    title: "2027年1月・タイ旅｜チェンマイと湖の暮らしへ｜EarthfamilyJourney",
    description: "ひとりでも、友人同士でも、家族でも。多様な仲間と出会い、暮らしにふれ、地球家族のつながりを育むEarthfamilyJourney。2027年1月5〜11日・現地サポート117,000円、1月5〜15日・188,000円。事前会費30,000円／1家族、航空券などの実費は別途。チェンマイとサージャイを中心に、長いコースは民族の方々の暮らしへ。",
    keywords: "ひとり参加, 大人の旅, チェンマイ, 家族旅, タイ 旅, EarthfamilyJourney, 旅育, 子連れ 海外旅行, あーすガイド, らんぼう, 神山町, 徳島, 先住民 体験, バリ島, 家族 海外体験, 子ども 海外",
    ogImage: "https://www.tabigaku.party/images/saijai-lake.jpg",
    ogUrl: "/thai-2027",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://tabigaku.party" },
          { "@type": "ListItem", "position": 2, "name": "EarthfamilyJourney タイ編", "item": "https://tabigaku.party/thai-2027" }
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
    <div className="thai-page thai-2027-page">

      <header className="brandbar">
        <div className="logo">
          Earthfamily<span>Journey</span>
        </div>
      </header>

      <section className="thai-next-hero">
        <img src="/images/saijai-lake.jpg" alt="緑の山と湖に抱かれたサージャイ・ヴィレッジ" fetchPriority="high" />
        <div className="thai-next-hero-copy">
          <p className="thai-next-kicker">EARTH FAMILY JOURNEY · THAILAND</p>
          <p className="thai-next-badge">2027年1月5日出発・選べる7日間と11日間</p>
          <h1>旅で出会えば、<br /><span className="thai-earthfamily-title">地球家族。</span></h1>
          <p>ひとりでも、友人同士でも、家族でも。<br />いろんな仲間が集まるから、旅はもっと面白い。</p>
          <p className="thai-hero-invitation">同じ食卓を囲み、湖に浮かぶ村で過ごす。<br />チェンマイから、景色と人に会いにいこう。</p>
          <p className="thai-solo-badge">あなたの「行ってみたい」から、EarthfamilyJourneyへ</p>
          <a href="#thai-courses">2つのコース・参加費を見る</a>
          <small>現地サポート：7日間117,000円／11日間188,000円<br />＋事前の旅スキル講座・コミュニティ会費30,000円／1家族<br />航空券・宿泊・食事などの実費は別途</small>
        </div>
      </section>
      <nav className="thai-next-nav" aria-label="タイ旅ページ内の案内"><a href="#journey-scenes">旅のイメージ</a><a href="#thai-courses">2つのコース</a><a href="#thai-fees">費用・お支払い</a><a href="#solo-welcome">地球家族の旅って？</a><a href="#lake-moments">過ごしたい時間</a><a href="#saijai-story">サージャイとの出逢い</a><a href="#saijai-film">動画を見る</a><a href="#next-journey">旅の流れ</a><a href="#family-story">旅の原点とストーリー</a></nav>

      <section className="thai-next-wrap thai-photo-story" id="journey-scenes" aria-labelledby="thai-scenes-title">
        <div className="thai-photo-story-copy"><p className="thai-next-kicker">LET’S GO TO THAILAND</p><h2 id="thai-scenes-title">「おいしい！」も、<br />「はじめまして」も、<br /><em>旅の宝ものになる。</em></h2><p>市場で気になるごはんを選んでみる。<br />湖の上で、何もしない時間を楽しむ。<br />同じ食卓を囲んで、気づけば一緒に笑っている。</p><p>予定を埋めるより、心が動く方へ。<br />大人も子どもも、自分の「やってみたい」を<br />持ち寄ってつくる、地球家族の旅です。</p><a href="#next-journey">まちから湖、村へ。旅の流れを見る</a></div>
        <div className="thai-photo-collage">
          <figure className="thai-photo-wide"><img src="/images/saijai-family.webp" alt="サージャイの湖とカヤック、空いっぱいに広がる夕焼け" width="1000" height="667" loading="lazy" decoding="async" /><figcaption>空の色が変わるまで、湖のほとりで。</figcaption></figure>
          <figure><img src="/manus-storage/thai_img_05_1f27ba11.jpg" alt="バナナの葉に盛られた、ライムと野菜を添えたパッタイ" width="500" height="500" loading="lazy" decoding="async" /><figcaption>「これ、食べてみたい！」</figcaption></figure>
          <figure><img src="/manus-storage/thai_img_07_1ea2f736.jpg" alt="あかりの灯る屋外の食卓に集まった、大人と子どもの笑顔" width="500" height="500" loading="lazy" decoding="async" /><figcaption>ひとりで来ても、旅仲間がいる。</figcaption></figure>
        </div>
        <p className="thai-photo-note">サージャイの風景と、これまでの旅の写真から。</p>
      </section>
      <section className="thai-next-wrap thai-courses" id="thai-courses" aria-labelledby="thai-courses-title">
        <p className="thai-next-kicker">TWO WAYS TO JOURNEY / 2027.01</p>
        <h2 id="thai-courses-title">湖でほどける7日間。<br />暮らしの奥へ進む11日間。</h2>
        <p className="thai-course-intro">どちらも、チェンマイとサージャイから。<br />あなたの「行ってみたい」に合う旅を選んでください。</p>
        <div className="thai-course-grid">
          <article className="thai-course-card" aria-labelledby="thai-course-a">
            <figure className="thai-course-photo"><img src="/images/saijai-lake.jpg" alt="山に抱かれた湖の上に浮かぶサージャイの家々" width="1000" height="667" loading="lazy" decoding="async" /><figcaption>チェンマイから、湖に浮かぶ村へ。</figcaption></figure>
            <p className="thai-course-label">A COURSE · 7 DAYS</p>
            <h3 id="thai-course-a">チェンマイと<br />湖の暮らしを楽しむコース</h3>
            <p className="thai-course-date">2027年1月5日（火）〜11日（月）<span>7日間</span></p>
            <p className="thai-course-price-label">現地サポート費</p><p className="thai-course-price">117,000<small>円／大人1人</small></p>
            <p className="thai-course-extra">＋事前会費30,000円／1家族<br />＋航空券・宿泊・食事・移動などの実費</p>
            <p>チェンマイのまちを歩き、市場のごはんを味わう。そして、湖に浮かぶサージャイへ。水辺で遊び、同じ食卓を囲み、何もしない時間も楽しむ旅です。</p>
            <ul><li>チェンマイのまち・市場・人との出会い</li><li>サージャイで過ごす、湖と自然のある毎日</li><li>旅仲間と語り合い、それぞれのペースで過ごす時間</li></ul>
            <p className="thai-course-for">こんな方に：1週間で北タイのまちと自然を味わいたい方。初めての海外旅や子ども連れの方も。</p>
            <a className="thai-course-button" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener noreferrer">AコースをLINEで相談・参加希望</a>
          </article>
          <article className="thai-course-card thai-course-long" aria-labelledby="thai-course-b">
            <figure className="thai-course-photo"><img src="/images/saijai-life.webp" alt="水上の建物のデッキで過ごす、サージャイの滞在風景" width="1000" height="667" loading="lazy" decoding="async" /><figcaption>サージャイから、その先の出会いへ。</figcaption></figure>
            <p className="thai-course-label">B COURSE · 11 DAYS</p>
            <h3 id="thai-course-b">湖の暮らしから、<br />民族の方々の暮らしへ</h3>
            <p className="thai-course-date">2027年1月5日（火）〜15日（金）<span>11日間</span></p>
            <p className="thai-course-price-label">現地サポート費</p><p className="thai-course-price">188,000<small>円／大人1人</small></p>
            <p className="thai-course-extra">＋事前会費30,000円／1家族<br />＋航空券・宿泊・食事・移動などの実費</p>
            <p>チェンマイとサージャイでの時間に、もう一歩深い出会いを。村を訪ね、一緒にごはんを囲み、手仕事や日々の営みにふれる。「その土地で生きる」を、少し分けてもらう旅です。</p>
            <ul><li>Aコースと共通の、チェンマイ・サージャイでの時間</li><li>さらに4日間、民族の方々の暮らしを訪ねる旅へ</li><li>食卓・手仕事・日々のお手伝いを通した交流を予定</li></ul>
            <p className="thai-course-for">こんな方に：その土地の人とじっくり出会いたい方。文化や暮らしを、日常の中で感じてみたい方。</p>
            <a className="thai-course-button" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener noreferrer">BコースをLINEで相談・参加希望</a>
          </article>
        </div>
        <p className="thai-course-intro">旅の準備から、一緒に。<a className="thai-solo-text-link" href="#thai-fees">事前の3万円・現地サポート・実費の内訳を見る</a></p>
      </section>
      <section className="thai-next-wrap thai-fees" id="thai-fees" aria-labelledby="thai-fees-title">
        <p className="thai-next-kicker">BEFORE DEPARTURE / 旅の準備は、ここから</p>
        <h2 id="thai-fees-title">まずは事前に、3万円。<br />不安を、楽しみに変えていこう。</h2>
        <p className="thai-course-intro">費用は「出発前の準備」「現地でのサポート」「旅の実費」の3つ。<br />何に、いくら必要なのかを分けてご案内します。</p>
        <div className="thai-payment-step thai-payment-prep">
          <div className="thai-payment-number">01<span>お申し込み時・事前のお支払い</span></div>
          <div><h3>出発前 旅スキル講座<br />＋参加者限定コミュニティ会費</h3><p className="thai-prep-price">30,000<small>円／1家族につき</small></p><p>航空券はどう選ぶ？ 荷物は？ 子どものごはんは？<br />出発前から顔を合わせ、気になることを相談しながら、旅の準備を進めます。</p><ul><li>事前Zoomミーティング2回</li><li>旅の準備に役立つ記事</li><li>参加者限定LINEグループでの相談</li></ul><p className="thai-payment-note">ひとり参加は1人で30,000円。家族で参加する場合は、人数にかかわらず1家族で30,000円です。現地サポート費とは別の費用で、内金ではありません。</p></div>
        </div>
        <div className="thai-payment-step">
          <div className="thai-payment-number">02<span>コースと人数で決まる費用</span></div>
          <div><h3>現地サポート費</h3><p>基本は仲間と一緒に行動しながら、食事も遊びも、出会いも楽しむ。自分で選んで動く時間も大切にしながら、現地での相談や学びをサポートします。</p>
          <dl className="thai-fee-rows"><div><dt>Aコース · 1/5〜11</dt><dd>117,000円／大人1人</dd></div><div><dt>Bコース · 1/5〜15</dt><dd>188,000円／大人1人</dd></div></dl>
          <p><strong>中学生以下は半額・4歳以下は無料</strong>（現地サポート費のみ）。<br />5歳〜中学生：Aコース58,500円／Bコース94,000円。</p><p className="thai-payment-note">現地サポート費のお支払い時期・方法は、お申し込み時にご案内します。</p></div>
        </div>
        <div className="thai-fee-totals"><h3>大人1人で参加する場合</h3><div><span>Aコース</span><p>事前30,000円 ＋ 現地サポート117,000円</p><strong>合計147,000円<small>＋実費</small></strong></div><div><span>Bコース</span><p>事前30,000円 ＋ 現地サポート188,000円</p><strong>合計218,000円<small>＋実費</small></strong></div></div>
        <details className="thai-family-example"><summary>家族3人の料金例を見る（大人1人＋小学生1人＋3歳のお子さん）</summary><p>事前会費は1家族で30,000円。小学生の現地サポート費は半額、3歳のお子さんは無料です。</p><dl className="thai-fee-rows"><div><dt>Aコース</dt><dd>30,000 ＋ 117,000 ＋ 58,500 ＋ 0<br /><strong>合計205,500円＋実費</strong></dd></div><div><dt>Bコース</dt><dd>30,000 ＋ 188,000 ＋ 94,000 ＋ 0<br /><strong>合計312,000円＋実費</strong></dd></div></dl></details>
        <div className="thai-payment-step">
          <div className="thai-payment-number">03<span>各自で手配・お支払い</span></div>
          <div><h3>航空券 ＋ 現地での旅費</h3><p>航空券・宿泊費・飲食費・現地交通費・体験料などは、上記の費用には含まれません。予約・お支払いは各自で行うスタイルです。</p><p>「航空券を取ったことがない」という方も、出発前からご相談ください。お子さんも、航空券・宿泊・食事などの実費は別途必要です。</p></div>
        </div>
        <div className="thai-fee-note"><h3>旅の一歩目は、LINEから。</h3><p>「タイ旅・Aコース希望」または「タイ旅・Bコース希望」と、参加人数・お子さんの年齢をお知らせください。詳しい条件とお支払いをご確認いただき、お申し込みへ進みます。</p><a className="thai-next-line" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener noreferrer">旅の準備・参加についてLINEで相談する</a></div>
      </section>
      <section className="thai-next-wrap thai-solo-welcome" id="solo-welcome" aria-labelledby="solo-title">
        <div data-journey-reveal><p className="thai-next-kicker">COME AS YOU ARE / 地球家族</p><h2 id="solo-title">違う毎日を生きる仲間と、<br />同じ旅をする面白さ。</h2></div>
        <div className="thai-next-prose" data-journey-reveal><p>子どもが見つけた小さな生きものに、大人も夢中になる。初めて会った人の話から、新しい「やってみたい」が生まれる。年齢も、暮らしも、ものの見方も違う仲間と旅すると、同じ景色にもいろんな発見がある。</p><p>ごはんを分け合い、現地の人と出会い、一緒に笑う。そんな時間を重ねながら、「はじめまして」が家族のようなつながりになっていく。</p><p><strong>EarthfamilyJourneyは、旅を通して「地球家族」のつながりを育む旅。</strong>ひとりの参加も、大切な人との参加も、その輪のはじまりです。</p><a className="thai-solo-text-link" href="#solo-questions">参加について気になることを見る</a></div>
        <div className="thai-journey-ways" aria-label="いろいろな旅の参加スタイル">
          <article><span>01 / SOLO</span><h3>ひとりで、新しい出会いへ。</h3><p>自分の「行きたい」をきっかけに。旅先で出会う仲間と、まだ知らない世界をひらく。</p></article>
          <article><span>02 / FRIENDS</span><h3>友人と、思い出のその先へ。</h3><p>いつもの仲間と、いつもと違う暮らしへ。新しい出会いが、帰ってからの楽しみも広げてくれる。</p></article>
          <article><span>03 / FAMILY</span><h3>家族で、みんなで育つ旅。</h3><p>子どもの発見に、大人も心が動く。ほかの旅仲間や現地の人と過ごす時間が、家族の世界を広げる。</p></article>
        </div>
      </section>
      <section className="thai-moments" id="lake-moments" aria-labelledby="moments-title"><div className="thai-next-wrap">
        <div className="thai-moments-heading"><div><p className="thai-next-kicker">FIND YOUR OWN MOMENT</p><h2 id="moments-title">いま、心が向くのは<br />どんな時間？</h2></div><p>気になる言葉を選んで、<br />湖のほとりの時間をのぞいてみてください。</p></div>
        <div className="thai-moment-buttons" role="group" aria-label="過ごしてみたい時間を選ぶ">{lakeMoments.map((item, index) => <button key={item.label} type="button" aria-pressed={index === momentIndex} aria-controls="thai-moment-panel" onClick={() => setMomentIndex(index)}><small>{item.number}</small>{item.label}<span aria-hidden="true">↗</span></button>)}</div>
        <div className="thai-moment-panel" id="thai-moment-panel"><img key={moment.image} src={moment.image} alt={moment.alt} width="1000" height="700" loading="lazy" /><div className="thai-moment-copy" aria-live="polite" aria-atomic="true"><span>{moment.number} / SAAIJAI</span><h3>{moment.title}</h3><p>{moment.text}</p><a href="#saijai-film">湖の暮らしを動画で見る ↗</a></div></div>
        <p className="thai-moments-caption">サージャイで出逢った風景から。1月の両コースで、この湖の暮らしを訪ねます。</p>
      </div></section>
      <section className="thai-next-wrap thai-next-story" id="saijai-story">
        <div><p className="thai-next-kicker">OUR ENCOUNTER / SAAIJAI VILLAGE</p><h2>旅先に、<br />帰りたい場所ができた。</h2></div>
        <div className="thai-next-prose"><p>2026年、家族でタイを旅する中で出逢ったのが、サージャイ・ヴィレッジ（SaaiJai Village）。チェンマイ郊外、山々に囲まれた湖の上にあるエコビレッジです。</p><p>小舟でたどり着いて、湖で遊び、ごはんを食べ、人と話す。特別な予定を詰め込まなくても、目の前の暮らしが、子どもにも大人にも新しい発見をくれる。</p><p>そこで過ごした数日間から、僕たちの旅に、もうひとつのつながりが生まれました。今は僕も、建物を直しながら、この場所のこれからを一緒につくる仲間として関わっています。</p><p className="thai-next-sign">また訪ねたい人がいる。<br />今度は、あなたにも会ってほしい。<br /><small>らんぼう / 旅する学校</small></p></div>
      </section>
      <section className="thai-next-gallery thai-next-wrap" aria-label="サージャイの暮らしの写真">
        <figure><img src="https://saaijai-village.com/assets/nature-sup.jpg" alt="山に囲まれた湖で、SUPの上に立って両手を広げる人" width="1536" height="1152" loading="lazy" decoding="async" /><figcaption>湖の上で、思いきり深呼吸。</figcaption></figure>
        <figure><img src="https://saaijai-village.com/assets/join-1000010170.webp" alt="サージャイのデッキに集まった、笑顔の旅仲間たち" width="1500" height="1125" loading="lazy" decoding="async" /><figcaption>出会った仲間と、一緒に笑う。</figcaption></figure>
        <figure><img src="https://saaijai-village.com/assets/village-1000010270.jpg" alt="木のテーブルに並ぶ、野菜たっぷりの料理とごはん" width="1536" height="1536" loading="lazy" decoding="async" /><figcaption>同じ食卓を囲む、しあわせ。</figcaption></figure>
      </section>
      <section className="thai-next-film" id="saijai-film"><div className="thai-next-wrap">
        <p className="thai-next-kicker">30 SECONDS BY THE LAKE</p><h2>まずは、30秒。<br />湖の上の暮らしへ。</h2><p>家族で訪れたサージャイの風景を、映像で。</p>
        <video width="720" height="1280" controls playsInline preload="none" poster="https://saaijai-village.com/assets/saijai-journey.webp" aria-label="家族で訪れたサージャイ・ヴィレッジの水上生活、30秒の動画"><source src="https://saaijai-village.com/assets/saijai-journey.mp4" type="video/mp4" /></video>
        <div className="thai-next-links"><a href="https://saaijai-village.com/assets/saijai-journey.mp4" target="_blank" rel="noopener noreferrer">動画を別の画面で見る ↗</a><a href="/saijai">サージャイの紹介ページへ →</a><a href="https://saaijai-village.com/" target="_blank" rel="noopener noreferrer">SaaiJai Village 公式サイト ↗</a></div>
      </div></section>
      <section className="thai-next-wrap thai-next-announcement" id="next-journey">
        <p className="thai-next-kicker">THE JOURNEY / 旅の流れ</p><h2>まちから湖へ。<br />そして、誰かの日常へ。</h2>
        <p className="thai-next-lead">観光地を巡るだけでは出会えない、<br />その場所の人と、暮らしの時間を。</p>
        <ol className="thai-itinerary">
          <li><span>1/5 · はじまり</span><div><figure className="thai-route-photo"><img src="/manus-storage/thai_img_05_1f27ba11.jpg" alt="旅の楽しみのひとつ、タイのパッタイ" loading="lazy" decoding="async" width="600" height="400" /><figcaption>気になる味を、ひとくち。食のイメージ。</figcaption></figure><h3>チェンマイで「はじめまして」。</h3><p>旅仲間と顔を合わせ、北タイのまちへ。市場を歩いてごはんを選び、これからの旅をみんなで話すところから始めます。</p></div></li>
          <li><span>両コース共通</span><div><figure className="thai-route-photo"><img src="/images/saijai-life.webp" alt="湖に開かれたサージャイのデッキと茅葺きの家" loading="lazy" decoding="async" width="900" height="600" /><figcaption>ここで起きて、食べて、遊んで。湖の暮らしへ。</figcaption></figure><h3>チェンマイとサージャイで、暮らすように。</h3><p>まちのにぎわいから、山々に囲まれた湖へ。サージャイで水辺の時間を楽しみ、食卓を囲み、人と話す。予定を詰め込みすぎず、自分や仲間の「やってみたい」に耳を傾けます。</p></div></li>
          <li><span>1/11 · Aコース最終日</span><div><h3>7日間の出会いを、日常へ持ち帰る。</h3><p>Aコースはここで旅を振り返って解散。Bコースは、さらに4日間の旅へ進みます。</p></div></li>
          <li><span>後半 · Bコースのみ</span><div><figure className="thai-route-photo"><img src="/manus-storage/thai_img_07_1ea2f736.jpg" alt="これまでの旅で出会った大人と子どもたち" loading="lazy" decoding="async" width="600" height="400" /><figcaption>これまでの旅での交流風景。今回の訪問先は調整中です。</figcaption></figure><h3>民族の方々の暮らしに、おじゃまする。</h3><p>村の方々と相談しながら、その土地の食事や手仕事、日々の営みにふれる時間をつくります。一緒に食べる、教わる、手伝う。暮らしを分かち合う出会いを大切にします。</p></div></li>
          <li><span>1/15 · Bコース最終日</span><div><h3>「また会おう」のある旅に。</h3><p>11日間で心に残ったことを分かち合って解散。旅で生まれたつながりを、それぞれの暮らしへ持ち帰ります。</p></div></li>
        </ol>
        <p className="thai-itinerary-note">上記は旅のイメージです。訪問する村・民族、滞在日数、体験内容は受け入れ先と調整し、決まり次第ご案内します。天候や現地の暮らし、参加者の状況に合わせて順序や内容が変わる場合があります。</p>
        <dl><div><dt>集合</dt><dd>1月5日・タイのチェンマイ（場所・時刻は別途ご案内）</dd></div><div><dt>解散</dt><dd>A：1月11日／B：1月15日（場所・時刻は別途ご案内）</dd></div><div><dt>参加スタイル</dt><dd>ひとりでも、友人同士でも、家族でも</dd></div></dl>
        <p>航空券は、集合・解散の詳細をご確認いただいてからお手配ください。希望の過ごし方や、お子さんのペースについてもLINEでご相談いただけます。</p>
        <a className="thai-next-line" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener noreferrer">日程・参加についてLINEで相談する</a>
      </section>
      <section className="thai-next-wrap thai-solo-faq" id="solo-questions" aria-labelledby="solo-faq-title"><p className="thai-next-kicker">BEFORE YOUR FIRST STEP</p><h2 id="solo-faq-title">気がかりも、一緒に持ってきて。</h2>
        <details><summary>ひとりでも参加できますか？</summary><p>はい。ひとりでも、友人同士でも、家族でも歓迎です。それぞれの暮らしや経験を持つ仲間が出会うことも、この旅の楽しみ。どんな旅をしてみたいか、LINEで聞かせてください。</p></details>
        <details><summary>友人同士や、子ども連れで参加したいです。</summary><p>ぜひご相談ください。参加を考えている人数やお子さんの年齢、気になっていることをLINEでお伝えください。子どもの現地サポート費は中学生以下半額、4歳以下無料です。事前会費30,000円は1家族につき必要です。滞在先や部屋のタイプなど、詳しい条件は個別にご案内します。</p></details>
        <details><summary>海外が初めて。言葉や移動が心配です。</summary><p>航空券、現地での移動、言葉のこと。気になっていることを、まずはらんぼうに聞かせてください。出発前から相談しながら準備を進め、現地でも旅づくりをサポートします。集合・解散の場所と時刻は別途ご案内します。</p></details>
        <details><summary>部屋や、ひとり参加の場合の料金は？</summary><p>現地サポート費はAコース117,000円、Bコース188,000円。別途、事前会費30,000円／1家族が必要です。大人1人なら合計A147,000円／B218,000円＋実費。宿泊費は部屋のタイプによって変わります。個室の希望などはLINEでご相談ください。</p></details>
        <details><summary>どの村・民族の方々を訪ねますか？</summary><p>Bコースの訪問先は、現地の方々の都合を伺いながら調整しています。村や民族の名前、宿泊・体験の詳細は、確定次第ご案内します。</p></details>
        <details><summary>参加希望は、どこへ連絡すればいいですか？</summary><p>公式LINEに「タイ旅・Aコース希望」または「タイ旅・Bコース希望」と、参加人数・お子さんの年齢をお送りください。詳しい条件・お支払い・キャンセルについて確認いただいたうえで、お申し込みをご案内します。</p></details>
        <a className="thai-next-line" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener noreferrer">あなたの旅について、LINEで相談する</a>
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
          次に出会う旅仲間は、<br />
          <span className="s-marker">あなたかもしれない。</span>
        </p>
        <p className="fp-sub reveal">ひとりでも、友人同士でも、家族でも。<br />2027年1月、チェンマイから、地球家族の輪を広げよう。<br />1/5〜11の7日間、または1/5〜15の11日間。</p>
        <a className="fp-btn" href="https://lin.ee/p3CvLfQ" target="_blank" rel="noopener">
          地球家族の旅を、LINEで相談する
        </a>
      </section>

      <ShareButtons
        url="https://www.tabigaku.party/thai-2027"
        text="旅で出会えば、地球家族。ひとりでも、友人同士でも、家族でも。多様な仲間と出会うEarthfamilyJourney、2027年1月5〜11日・現地サポート117,000円／1月5〜15日・188,000円。事前会費30,000円／1家族と実費が別途必要です。チェンマイ・サージャイ、長いコースは民族の方々の暮らしへ。"
        title="＼ タイ旅をシェア ／"
      />

      {/* 固定CTA */}
      <div className="cta-fixed">
        <a className="cta-btn" href="#thai-courses">
          2つのコース・参加費を見る
        </a>
      </div>
    </div>
  );
}
