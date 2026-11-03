import { useEffect, useState } from "react";
import { trackPublicAction, type MetricEvent } from "@/lib/public-metrics";
import { Check, Compass, Globe2, HeartHandshake, MessageCircle, Mic2, Mountain, Radio, Sparkles, Ticket, Users, Video } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import ShareButtons from "@/components/ShareButtons";
import JukuMiniwork from "@/components/JukuMiniwork";
import { useJukuScenes } from "@/hooks/useJukuScenes";
import "./juku.css";
import "./juku-scenes.css";

const FORM = "https://earthguide.tabigaku.party/forms/ranbou-juku";
const DAO = "https://earth-family-journey-world.runbou.chatgpt.site/earth-family-dao/";
const DAO_JOIN = "https://earth-family-journey-world.runbou.chatgpt.site/juku/join/?from=dao";
const DAO_GUIDE = "https://earth-family-journey-world.runbou.chatgpt.site/dao/guide/";
const experiences = [
  { number: "01", label: "旅 / TRAVEL", title: "世界を、広げる。", icon: Compass, text: "旅先の暮らし、自然、地域の学び。らんぼうの体験やゲストとの対話から、いつもの常識をほどき、自分らしい生き方のヒントに出会います。", tags: ["世界の暮らし", "地域・教育", "旅のリアル"] },
  { number: "02", label: "AI / CREATE", title: "想いを、形にする。", icon: Sparkles, text: "文章、画像、ホームページづくり。AIを身近な道具にして、頭の中のアイデアを形にする方法を、らんぼう自身の実例から学びます。", tags: ["AI活用", "文章・画像", "サイトづくり"] },
  { number: "03", label: "DAO / TOGETHER", title: "仲間と、育てる。", icon: HeartHandshake, text: "得意なことを持ち寄り、やってみたいことを一緒に育てる。EARTH FAMILY DAOを通じて、オンラインの学びを、地域や旅先でのつながりへ。", tags: ["DAOの使い方", "仲間との共創", "拠点とのつながり"] },
  { number: "04", label: "SNS / SHARE", title: "自分の言葉で、届ける。", icon: MessageCircle, text: "Threadsを中心に、体験や想いが伝わる発信を学ぶ。投稿を見せ合い、工夫を重ねながら、活動や企画を必要な人へ届けていきます。", tags: ["Threads攻略", "発信の実践", "活動・仕事づくり"] },
];
const contents = [
  { icon: Radio, title: "限定ラジオ", detail: "不定期配信", text: "旅のリアルや、活動の裏側。好きな時間に聴ける、らんぼうの声。" },
  { icon: Video, title: "Zoomライブ", detail: "月2回・録画あり", text: "質問や相談、ゲストとの対話。リアルタイムで会えなくても、録画で学べます。" },
  { icon: Sparkles, title: "バズ部屋", detail: "Threadsを一緒に育てる", text: "投稿を見せ合い、工夫を共有。自分の言葉が届く発信を考えます。" },
  { icon: Users, title: "LINE交流グループ", detail: "日々の気づきを分かち合う", text: "小さな一歩も、迷っていることも。普段の暮らしの中でつながれる場所。" },
  { icon: Mountain, title: "神山合宿", detail: "リアルで会う・任意参加", text: "自然と人に出会う神山で、画面越しの仲間と同じ時間を過ごします。" },
  { icon: Mic2, title: "ワクドキ祭り", detail: "塾生でつくる発表の場", text: "それぞれの「やってみたい」を持ち寄って、次の一歩につなげます。" },
];
const questions = [
  ["いつから参加できますか？", "いつでもお申し込みいただけます。受付メールにお支払いの案内と手続きを再開するリンクが届きます。入金確認後に登録案内をお送りします。新しく登録する方は、そのメールから登録すると学び場を利用できます。"],
  ["忙しくても、子育て中でも参加できますか？", "オンライン中心なので、ご自身のペースで参加できます。Zoomライブには録画があり、限定ラジオも好きな時間に聴けます。リアルでの集まりは任意参加です。"],
  ["SNSやAIの初心者でも大丈夫ですか？", "大丈夫です。らんぼう自身の実例や、仲間の工夫を共有しながら学びます。わからないことや試してみたいことは、Zoomや交流の場で気軽に相談してください。"],
  ["DAO参加券には何が含まれますか？", "初めてDAOへ参加する方に、個人ライト1年間・年間3泊までの特典がつきます。DAOの初年度年会費は0円です。すでにDAO会員の方のプラン・期限・泊数は変わりません。滞在には空き状況の確認とホストの承認が必要で、お手伝いは1日2〜3時間が目安です。食事・費用・キッチン利用や家族での滞在条件は、ホストへご相談ください。"],
  ["DAOには、どうやって参加しますか？", "新しく入塾する方は、入金確認後の本人専用メールから登録します。以前からの塾生は、届いた塾生専用の招待URLから登録すると、そのままDAOと塾の学び場を利用できます。招待が見つからない方は運営へご相談ください。すでに入塾済みでDAOにも登録済みの方は、今のアカウントでログインでき、再申し込み・追加のお支払いは不要です。"],
  ["分割払いや、入塾前の相談はできますか？", "はい。公式LINEからご相談ください。「自分に合うかな？」という段階でも大丈夫です。通常料金は39,800円、対象DAO会員・本人用のアンケート割引コードをお持ちの方は29,800円（税込・入塾時1回）です。"],
  ["申し込みにLINE URLは必要ですか？", "必要ありません。名前・メールアドレス・支払方法と条件を確認して申し込みます。電話番号は任意です。カード払いは、申し込み後に専用の決済画面へ進みます。カード番号を申込フォームに入力する必要はありません。LINE連携・通知も任意です。"],
  ["塾の参加期間や、追加費用は？", "受講料は入塾時1回で、塾の年会費・自動更新・自動課金はありません。教材の利用期間やキャンセル条件は、お申し込み前に公式LINEへご相談ください。合宿などの交通・宿泊・食事等は別途です。DAO初参加の方の無料特典は1年間で、その後の更新はご自身で選びます。"],
];

export default function Juku() {
  const motionRoot = useJukuScenes();
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const hero = document.querySelector(".rj-hero");
    const apply = document.getElementById("apply");
    if (!hero || !("IntersectionObserver" in window)) return;
    let heroVisible = true, applyVisible = false;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === apply) applyVisible = entry.isIntersecting;
      }
      setShowSticky(!heroVisible && !applyVisible);
    });
    observer.observe(hero);
    if (apply) observer.observe(apply);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    trackPublicAction("page_view", "juku");
    const root = document.getElementById("juku-top");
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-eg-event]") : null;
      if (link) trackPublicAction(link.dataset.egEvent as MetricEvent, "juku");
    };
    root?.addEventListener("click", onClick);
    return () => root?.removeEventListener("click", onClick);
  }, []);
  useSEO({ title: "らんぼう塾｜旅 × AI × DAO × SNSで、人生をつくる", description: "旅 × AI × DAO × SNSを実践するオンラインの学び場、らんぼう塾。通常39,800円、対象DAO会員・本人用割引コードは29,800円（税込・入塾時1回）。DAO初参加の方に1年間の個人ライト特典つき。" });
  return <div className="ran-juku" id="juku-top" ref={motionRoot}>
    <div className="rj-reading-line" aria-hidden="true" />
    <a href="#juku-main" className="rj-skip">本文へ進む</a>
    <header className="rj-header">
      <a href="#juku-top" className="rj-brand" aria-label="らんぼう塾 トップ"><Compass aria-hidden="true" /><span>らんぼう塾<small>RANBOU JUKU</small></span></a>
      <nav aria-label="らんぼう塾のメニュー"><a href="#learn">学べること</a><a href="#dao">DAO参加特典</a><a href="#price">料金</a><a href="#faq">よくある質問</a></nav>
      <a className="rj-header-cta" href={FORM} data-eg-event="service_click">入塾する</a>
    </header>
    <main id="juku-main">
      <section className="rj-hero" aria-labelledby="rj-title" data-rj-scene>
        <img className="rj-hero-image" src="/juku/desert2.jpg" width="960" height="640" alt="色鮮やかな山々を望み、広大な大地を走るらんぼうの旅の記録" fetchPriority="high" />
        <div className="rj-hero-shade" /><div className="rj-hero-flare" aria-hidden="true" />
        <div className="rj-hero-orbit" aria-hidden="true"><svg viewBox="0 0 620 620" fill="none"><circle className="rj-orbit-path" cx="310" cy="310" r="285" pathLength="1" /><ellipse cx="310" cy="310" rx="135" ry="285" /><path d="M42 216Q310 356 578 216M42 404Q310 264 578 404" /><g className="rj-orbit-satellite"><circle cx="310" cy="25" r="6" /><circle cx="310" cy="25" r="15" /></g></svg></div>
        <div className="rj-hero-inner rj-wrap"><div className="rj-hero-copy">
          <p className="rj-hero-theme"><span>旅</span><b>×</b><span>AI</span><b>×</b><span>DAO</span><b>×</b><span>SNS</span></p><p className="rj-hero-intro">ワクワクとドキドキがきたら、GOサイン。</p>
          <h1 id="rj-title"><span className="rj-title-mask"><span data-rj-reveal="line">旅するように、</span></span><span className="rj-title-mask"><em data-rj-reveal="line">人生をつくる。</em></span></h1>
          <p className="rj-hero-description">世界に触れ、つくり、届け、仲間と育てる。<br />「やってみたい」を実践する、オンラインの学び場。</p>
          <ul className="rj-hero-facts" aria-label="学び方"><li>オンライン中心</li><li>初心者歓迎</li><li>Zoom録画あり</li></ul>
          <div className="rj-actions"><a className="rj-button rj-button-lime" href={FORM} data-eg-event="service_click">らんぼう塾に参加する</a><a className="rj-text-link rj-link-light" href="#learn">この塾でできること</a></div>
        </div><aside className="rj-hero-pass" aria-label="入塾のご案内">
          <span className="rj-pass-kicker"><Ticket size={20} aria-hidden="true" /> YOUR NEXT CHAPTER</span>
          <p className="rj-pass-title">始めたい日が、<br />あなたのスタート。</p>
          <div className="rj-pass-offer"><span>通常受講料</span><strong>39,800<small>円（税込）</small></strong></div>
          <p className="rj-pass-bonus">EARTH FAMILY DAO<br /><b>参加券つき</b></p><a href="#dao">特典の内容を見る</a>
        </aside></div>
        <div className="rj-hero-foot rj-wrap"><span>LEARN. TRY. SHARE.</span><span>らんぼうの旅の記録より</span></div>
      </section>
      <div className="rj-intro-band"><div className="rj-wrap"><p>いのちが喜ぶことを、<strong>カタチにする。</strong></p><span>オンライン中心</span><span>自分のペースで学べる</span><span>仲間と実践する</span></div></div>
      <section className="rj-section rj-wrap" id="learn" aria-labelledby="learn-title">
        <div className="rj-section-head"><div><p className="rj-eyebrow">01 / TRAVEL × AI × DAO × SNS</p><h2 id="learn-title">4つの学びを、<br /><em>ひとつの実践に。</em></h2></div><p>旅で出会った「こんなことをやってみたい」。<br />AIで形にし、SNSで届け、DAOで仲間と育てる。<br />4つの学びを、あなたの暮らしと活動へ。</p></div>
        <div className="rj-learning-grid">{experiences.map(({ number, label, title, icon: Icon, text, tags }) => <article className="rj-learning" key={number} data-journey-reveal><div className="rj-learning-top"><span>{number} / {label}</span><Icon size={27} strokeWidth={1.4} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
        <div className="rj-contents-head"><h3>4つの学びを、日常に。</h3><p>聴く、話す、試してみる。あなたに合う関わり方で。</p></div>
        <div className="rj-contents-grid">{contents.map(({ icon: Icon, title, detail, text }) => <article className="rj-content" key={title}><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><div><h4>{title}</h4><span>{detail}</span><p>{text}</p></div></article>)}</div><p className="rj-note">合宿・イベントの日程や参加条件は、その都度ご案内します。</p>
        <div className="rj-community-gallery" id="moments" data-rj-scene>
          <div className="rj-gallery-heading"><p className="rj-eyebrow">REAL PEOPLE. REAL CONNECTIONS.</p><h3>話す。笑う。<em>世界が広がる。</em></h3><p>らんぼうの活動で生まれた、対話と出会いのひとこま。</p></div>
          <figure className="rj-community-photo rj-dialogue-photo"><div className="rj-photo-window" data-rj-reveal="photo"><img src="/juku/dialogue-1080.webp" srcSet="/juku/dialogue-540.webp 540w, /juku/dialogue-1080.webp 1080w" sizes="(max-width: 760px) calc(100vw - 40px), 42vw" width="1080" height="1439" loading="lazy" decoding="async" alt="小さなグループに分かれて、顔を合わせながら話す人たち" /></div><figcaption><span>01 / DIALOGUE</span><strong>話すことで、見えてくる。</strong></figcaption></figure>
          <figure className="rj-community-photo rj-gathering-photo"><div className="rj-photo-window" data-rj-reveal="photo"><img src="/juku/community-1440.webp" srcSet="/juku/community-720.webp 720w, /juku/community-1440.webp 1440w" sizes="(max-width: 760px) calc(100vw - 40px), 53vw" width="1440" height="1081" loading="lazy" decoding="async" alt="らんぼうと集まった仲間たちの、笑顔の集合写真" /></div><figcaption><span>02 / CONNECTION</span><strong>出会いが、次のきっかけに。</strong></figcaption></figure>
          <svg className="rj-photo-trail" viewBox="0 0 1000 140" fill="none" aria-hidden="true"><path d="M20 105C150 0 330 130 480 55S805 5 980 80" pathLength="1" /></svg>
        </div>
        <JukuMiniwork />
      </section>
      <section className="rj-story" id="story" aria-labelledby="story-title"><div className="rj-wrap rj-story-grid">
        <figure className="rj-forest-portrait" data-rj-scene>
          <div className="rj-photo-window" data-rj-reveal="photo"><img src="/juku/ranbou-forest-1080.webp" srcSet="/juku/ranbou-forest-540.webp 540w, /juku/ranbou-forest-1080.webp 1080w" sizes="(max-width: 760px) calc(100vw - 54px), 44vw" width="1080" height="1440" alt="木漏れ日の差す森で、岩に腰をかけて笑うらんぼう" loading="lazy" decoding="async" /></div>
          <div className="rj-photo-seal" aria-hidden="true"><Compass strokeWidth={1} /><span>STAY<br />CURIOUS.</span></div>
          <figcaption><span>自然の中で、ことばがほどける。</span><small>A MOMENT WITH RANBOU</small></figcaption>
        </figure>
        <div className="rj-story-copy"><p className="rj-eyebrow">02 / A MESSAGE FROM RANBOU</p><h2 id="story-title">すべては、<br /><em>未完成からはじまる。</em></h2><p>地球を旅して、砂漠を走って、仲間と学校をつくってきた。その始まりは、いつも「やってみたい」でした。</p><p>不安でもいい。準備ができていなくても大丈夫。ひとりでは踏み出せなかった一歩も、同じ方向を向く仲間がいたら、面白くなる。</p><p>自分の人生を、自分の手で動かす。<br />その先に、次の世代へ手渡したい未来がある。<br />一緒に、次の景色を見にいこう。</p><div className="rj-signature"><img src="/efj/profile_ranbow-bO9RdlJ2.webp" alt="らんぼう（上田直樹）" width="72" height="72" loading="lazy" /><strong>らんぼう</strong><span>上田直樹<br />あーすガイド・旅する学校 代表／4児の父</span></div><a className="rj-text-link" href="https://earthguide.tabigaku.party/#profile" target="_blank" rel="noopener noreferrer">詳しいプロフィール・活動歴を見る</a></div>
      </div><div className="rj-wrap rj-story-records"><div><strong>地球一周</strong><span>旅から学び、生き方にする</span></div><div><strong>500回以上</strong><span>各地での講演・対話の経験</span></div><div><strong>神山から</strong><span>自然と人をつなぐ学びの場へ</span></div></div></section>
      <section className="rj-dao" id="dao" aria-labelledby="dao-title">
        <div className="rj-dao-photo"><img src="/images/saijai-lake.jpg" alt="緑の山々と湖に包まれた水上エコビレッジ、SaaiJai Village" loading="lazy" width="1536" height="864" /><span>SaaiJai Village, Thailand</span></div>
        <div className="rj-wrap rj-dao-inner"><div className="rj-dao-copy"><p className="rj-eyebrow">03 / BEYOND THE CLASSROOM</p><span className="rj-bonus-label"><Ticket size={18} aria-hidden="true" /> 受講料に含まれる参加特典</span><h2 id="dao-title">学びの先に、<br /><em>「ただいま」がある。</em></h2><p className="rj-dao-name">EARTH FAMILY DAO</p><p>世界の暮らしに出会い、得意なことを持ち寄り、一緒に未来をつくるコミュニティ。<br />初めてDAOに参加する方には、個人ライト1年間の特典がついています。</p><div className="rj-actions"><a className="rj-button rj-button-lime" href={DAO} target="_blank" rel="noopener noreferrer">DAOの説明ページを見る</a><a className="rj-text-link rj-link-light" href={DAO_GUIDE} target="_blank" rel="noopener noreferrer">使い方ガイド</a></div></div>
        <div className="rj-dao-ticket" data-journey-reveal><div className="rj-ticket-heading"><Globe2 size={31} strokeWidth={1.3} aria-hidden="true" /><span>EARTH FAMILY DAO<small>らんぼう塾 参加特典</small></span></div><h3>仲間になる、<br />ひとつのきっかけ。</h3><ul className="rj-checklist"><li><Check aria-hidden="true" />DAO初参加の方：個人ライト1年間</li><li><Check aria-hidden="true" />DAO初年度年会費0円</li><li><Check aria-hidden="true" />年間3泊まで（ホスト承認制）</li></ul><div className="rj-ticket-detail"><p>すでにDAO会員の方のプラン・期限・泊数は変わりません。滞在は1日2〜3時間のお手伝いと交換。食事はホストと相談し、提供の有無・費用・キッチン利用条件を確認してください。受け入れ日程・人数・家族での利用可否は、各拠点との事前相談が必要です。</p><p>すでに入塾している方は、届いた招待URLから登録するか、今のアカウントでログインしてください。再申し込み・追加のお支払いは不要です。招待が見つからない方は運営へご相談ください。</p><a className="rj-button rj-button-dark" href={DAO_JOIN} target="_blank" rel="noopener noreferrer">入塾済みの方：DAO登録・ログイン</a></div><div className="rj-ticket-bottom"><span>LEARN HERE. CONNECT EVERYWHERE.</span><Ticket size={24} aria-hidden="true" /></div></div></div>
      </section>
      <section className="rj-voice rj-wrap" aria-labelledby="voice-title"><p className="rj-eyebrow" id="voice-title">A VOICE FROM OUR COMMUNITY / 参加者の声</p><blockquote>「やってみるといいんとちゃう。」<br />その言葉が、今回一番残っています。</blockquote><p>未完成でもいいから、やってみる。<br />やったからこそ見える景色がある。</p><cite>受講生・長崎／女性の感想より抜粋</cite></section>
      <section className="rj-price-section" id="price" aria-labelledby="price-title"><div className="rj-wrap rj-price-grid"><div className="rj-price-intro"><p className="rj-eyebrow">04 / START WHEN YOU'RE READY</p><h2 id="price-title">心が動いた、<br /><em>そのタイミングで。</em></h2><p>募集期や開講日を待つ必要はありません。<br />思い立った日から、あなたの一歩を。</p><div className="rj-price-statement"><span>いつでも入塾できます</span><p>入塾時に1回のお支払い。<br />対象の方は10,000円割引になります。</p></div></div>
        <div className="rj-price-card" data-journey-reveal><div className="rj-price-top"><span>らんぼう塾</span><span>随時受付中</span></div><p className="rj-price-label">通常受講料・入塾時1回</p><p className="rj-amount"><span>¥</span>39,800<small>税込</small></p><p className="rj-price-bonus"><Ticket size={19} aria-hidden="true" /> 対象DAO会員・本人用割引コード：29,800円（税込）</p><p className="rj-price-caption">旅・AI・DAO・SNSを、ひとつの実践に。</p><ul className="rj-checklist">{["限定ラジオ・Zoomライブ・録画", "Threads攻略50講座・AI QUEST", "バズ部屋・LINE交流グループ", "神山合宿・ワクドキ祭りの参加機会", "DAO初参加の方に個人ライト1年間"].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><a className="rj-button rj-button-dark" href={FORM} data-eg-event="service_click">申し込みへ進む</a><p className="rj-note">対象DAO会員はログイン後に29,800円を確認してください。アンケートの本人用割引コードは、回答時と同じメールアドレスで適用できます（本人の新規入塾に1回・DAO会員割引との併用不可）。銀行振込・カード払いに対応し、塾の年会費・自動課金はありません。<br />分割払いのご相談は公式LINEへ。合宿等の交通・宿泊・食事等は別途です。教材の利用期間やキャンセル条件は、お申し込み前に公式LINEへご相談ください。</p></div>
      </div></section>
      <section className="rj-section rj-wrap rj-faq" id="faq" aria-labelledby="faq-title"><div><p className="rj-eyebrow">05 / BEFORE YOUR FIRST STEP</p><h2 id="faq-title">気になること、<br /><em>聞いてください。</em></h2></div><div className="rj-faq-list">{questions.map(([question, answer], i) => <details key={question}><summary>{question}</summary><p>{answer}</p>{i === 3 && <a href={DAO} target="_blank" rel="noopener noreferrer">DAOの詳しい説明を読む</a>}{i === 4 && <a href={DAO_JOIN} target="_blank" rel="noopener noreferrer">入塾済みの方：DAO登録・ログイン</a>}</details>)}</div></section>
      <section className="rj-apply" id="apply" aria-labelledby="apply-title" data-rj-scene>
        <img className="rj-apply-forest" src="/juku/forest-light-1152.webp" srcSet="/juku/forest-light-640.webp 640w, /juku/forest-light-1152.webp 1152w" sizes="100vw" width="1152" height="1536" loading="lazy" decoding="async" alt="" />
        <div className="rj-canopy-light" aria-hidden="true" /><div className="rj-motes" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <div className="rj-wrap"><p className="rj-eyebrow">YOUR NEXT CHAPTER STARTS HERE.</p><h2 id="apply-title">次の景色を、<br /><em>一緒に見にいこう。</em></h2><p>旅で出会い、AIで形に。<br />SNSで届け、DAOで仲間と育てる。<br />あなたの「やってみたい」から、始めよう。</p><div className="rj-apply-offer"><span>通常受講料</span><strong>39,800<small>円（税込）</small></strong><span>DAO初参加特典つき</span></div><div className="rj-actions"><a className="rj-button rj-button-lime" href={FORM} data-eg-event="service_click">入塾の申し込みへ進む</a></div><p className="rj-apply-note">名前・メールアドレス・支払方法と金額を確認して申し込みます。受付メールに支払案内と手続きを再開するリンクが届き、入金確認後に登録案内をお送りします。カード・銀行振込に対応。電話番号とLINE連携は任意です。</p><ol className="rj-steps">{[["01", "申し込む", "金額と支払方法を確認。"], ["02", "受付メールを確認", "支払案内・再開リンクを受け取る。"], ["03", "入金確認後に登録", "本人専用メールから学び場へ。"]].map(([number, title, text]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol></div>
      </section>
    </main>
    <footer className="rj-footer"><div className="rj-wrap rj-footer-top"><a href="#juku-top" className="rj-brand"><Compass aria-hidden="true" /><span>らんぼう塾<small>RANBOU JUKU</small></span></a><p>いのちが喜ぶことを、カタチにする。</p><nav aria-label="関連ページ"><a href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener noreferrer">あーすガイド</a><a href="/">旅する学校</a><a href={DAO} target="_blank" rel="noopener noreferrer">EARTH FAMILY DAO</a></nav></div><ShareButtons url="https://www.tabigaku.party/juku" text="旅 × AI × DAO × SNS。旅するように、人生をつくる。らんぼう塾は、やってみたいを仲間と実践するオンラインの学び場。通常39,800円、対象DAO会員・本人用割引コードは29,800円（税込・入塾時1回）。DAO初参加の方に1年間の個人ライト特典つき。" title="この学びを、大切な人に。" /><p className="rj-copyright">閲覧・クリックなど、個人情報を含まない利用状況を集計しています。</p><p className="rj-copyright">© らんぼう塾 / あーすガイド・旅する学校</p></footer>
    <div className="rj-sticky" hidden={!showSticky} aria-label="入塾のご案内"><div><span>通常受講料・入塾時1回</span><strong>39,800<small>円（税込）</small></strong></div><a className="rj-button rj-button-lime" href={FORM} data-eg-event="service_click">入塾する</a></div>
  </div>;
}
