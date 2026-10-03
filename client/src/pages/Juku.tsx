import { useEffect } from "react";
import { trackPublicAction, type MetricEvent } from "@/lib/public-metrics";
import { Check, Compass, Globe2, HeartHandshake, MessageCircle, Mic2, Mountain, Radio, Sparkles, Ticket, Users, Video } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import ShareButtons from "@/components/ShareButtons";
import JukuMiniwork from "@/components/JukuMiniwork";
import "./juku.css";

const LINE = "https://lin.ee/p3CvLfQ";
const FORM = "https://earthguide.tabigaku.party/forms/ranbou-juku";
const DAO = "https://earth-family-journey-world.runbou.chatgpt.site/earth-family-dao/";
const DAO_GUIDE = "https://earth-family-journey-world.runbou.chatgpt.site/dao/guide/";
const experiences = [
  { number: "01", label: "EXPRESS", title: "想いを、届ける。", icon: MessageCircle, text: "Threadsの発信から、AIを使った文章・画像・サイトづくりまで。自分の活動を伝える力を、実例とともに育てます。", tags: ["Threads攻略", "AI活用", "発信・仕事づくり"] },
  { number: "02", label: "EXPLORE", title: "世界の見方が、変わる。", icon: Compass, text: "旅の現場、地域の暮らし、学校づくり。らんぼうの経験やゲストの話から、ニュースだけでは見えない世界に触れます。", tags: ["世界と暮らし", "オルタナティブ教育", "ゲストトーク"] },
  { number: "03", label: "CONNECT", title: "ひとりの夢を、仲間と。", icon: HeartHandshake, text: "やってみたいことを話す。誰かの挑戦に力を貸す。オンラインの交流から、神山や旅先での出会いへつながります。", tags: ["仲間との交流", "企画・実践", "EARTH FAMILY DAO"] },
];
const contents = [
  { icon: Radio, title: "限定ラジオ", detail: "火・木・土に配信", text: "旅のリアルや、活動の裏側。好きな時間に聴ける、らんぼうの声。" },
  { icon: Video, title: "Zoomライブ", detail: "月2回・録画あり", text: "質問や相談、ゲストとの対話。リアルタイムで会えなくても、録画で学べます。" },
  { icon: Sparkles, title: "バズ部屋", detail: "Threadsを一緒に育てる", text: "投稿を見せ合い、工夫を共有。自分の言葉が届く発信を考えます。" },
  { icon: Users, title: "LINE交流グループ", detail: "日々の気づきを分かち合う", text: "小さな一歩も、迷っていることも。普段の暮らしの中でつながれる場所。" },
  { icon: Mountain, title: "神山合宿", detail: "リアルで会う・任意参加", text: "自然と人に出会う神山で、画面越しの仲間と同じ時間を過ごします。" },
  { icon: Mic2, title: "ワクドキ祭り", detail: "塾生でつくる発表の場", text: "それぞれの「やってみたい」を持ち寄って、次の一歩につなげます。" },
];
const questions = [
  ["いつから参加できますか？", "いつでもお申し込みいただけます。募集期や開講日の指定はありません。お申し込みと入金の確認後、学びの場や交流グループへの参加方法をご案内します。"],
  ["忙しくても、子育て中でも参加できますか？", "オンライン中心なので、ご自身のペースで参加できます。Zoomライブには録画があり、限定ラジオも好きな時間に聴けます。リアルでの集まりは任意参加です。"],
  ["SNSやAIの初心者でも大丈夫ですか？", "大丈夫です。らんぼう自身の実例や、仲間の工夫を共有しながら学びます。わからないことや試してみたいことは、Zoomや交流の場で気軽に相談してください。"],
  ["DAO参加券には何が含まれますか？", "EARTH FAMILY DAOの一般ライト会員の初年度年会費11,000円が、受講料に含まれます。年間3泊までの拠点利用は、1日2〜3時間のお手伝いと引き換えで、食費は各自負担。滞在先の受け入れ確認が必要です。ご家族での利用やほかのコースを希望する場合は、運営へご相談ください。"],
  ["DAOには、どうやって参加しますか？", "入塾後に管理人から専用の招待リンクを受け取り、会員登録してください。登録・承認のあとに利用を始められます。一般の有料コースへ重ねて申し込む必要はありません。"],
  ["分割払いや、入塾前の相談はできますか？", "はい。公式LINEからご相談ください。「自分に合うかな？」という段階でも大丈夫です。受講料は39,800円（税込）です。"],
  ["申し込みにLINE URLは必要ですか？", "必要ありません。お名前・メールアドレスと、必須の確認事項をご入力ください。電話番号やLINEの表示名・IDなどは任意です。入力後に内容を確認してから送信でき、このフォームで決済は行われません。"],
  ["塾の参加期間や、追加費用は？", "合宿などの交通・宿泊・食事等の費用や、各企画の参加条件は事前にご確認ください。塾の参加・教材閲覧期間、更新やキャンセルの条件は、お申し込み前に公式LINEでご相談ください。DAO特典の年会費無料期間は1年間です。"],
];

export default function Juku() {
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
  useSEO({ title: "らんぼう塾｜いつでも入塾・39,800円・EARTH FAMILY DAO参加券つき", description: "ワクワクとドキドキがきたらGOサイン。Threads・AI・世界の暮らしを学び、仲間とやってみたいを形にする、らんぼう塾。いつでも入塾、受講料39,800円（税込）。EARTH FAMILY DAO参加券つき。" });
  return <div className="ran-juku" id="juku-top">
    <a href="#juku-main" className="rj-skip">本文へ進む</a>
    <header className="rj-header">
      <a href="#juku-top" className="rj-brand" aria-label="らんぼう塾 トップ"><Compass aria-hidden="true" /><span>らんぼう塾<small>RANBOU JUKU</small></span></a>
      <nav aria-label="らんぼう塾のメニュー"><a href="#learn">学べること</a><a href="#dao">DAO参加特典</a><a href="#price">料金</a><a href="#faq">よくある質問</a></nav>
      <a className="rj-header-cta" href={FORM} data-eg-event="service_click">入塾する</a>
    </header>
    <main id="juku-main">
      <section className="rj-hero" aria-labelledby="rj-title">
        <img className="rj-hero-image" src="/juku/desert2.jpg" width="960" height="640" alt="色鮮やかな山々を望み、広大な大地を走るらんぼうの旅の記録" fetchPriority="high" />
        <div className="rj-hero-shade" /><div className="rj-hero-orbit" aria-hidden="true" />
        <div className="rj-hero-inner rj-wrap"><div className="rj-hero-copy">
          <p className="rj-eyebrow">YOUR LIFE. YOUR ADVENTURE.</p><p className="rj-hero-intro">ワクワクとドキドキがきたら、GOサイン。</p>
          <h1 id="rj-title">人生は、<br /><em>もっと面白く</em><br />なる。</h1>
          <p className="rj-hero-description">Threads・AI・旅の学びを、仲間と実践。<br />「やってみたい」をカタチにする、オンラインの学び場。</p>
          <ul className="rj-hero-facts" aria-label="学び方"><li>オンライン中心</li><li>初心者歓迎</li><li>Zoom録画あり</li></ul>
          <div className="rj-actions"><a className="rj-button rj-button-lime" href={FORM} data-eg-event="service_click">らんぼう塾に参加する</a><a className="rj-text-link rj-link-light" href="#learn">この塾でできること</a></div>
        </div><aside className="rj-hero-pass" aria-label="入塾のご案内">
          <span className="rj-pass-kicker"><Ticket size={20} aria-hidden="true" /> YOUR NEXT CHAPTER</span>
          <p className="rj-pass-title">始めたい日が、<br />あなたのスタート。</p>
          <div className="rj-pass-offer"><span>いつでも入塾</span><strong>39,800<small>円（税込）</small></strong></div>
          <p className="rj-pass-bonus">EARTH FAMILY DAO<br /><b>参加券つき</b></p><a href="#dao">特典の内容を見る</a>
        </aside></div>
        <div className="rj-hero-foot rj-wrap"><span>LEARN. TRY. SHARE.</span><span>らんぼうの旅の記録より</span></div>
      </section>
      <div className="rj-intro-band"><div className="rj-wrap"><p>いのちが喜ぶことを、<strong>カタチにする。</strong></p><span>オンライン中心</span><span>自分のペースで学べる</span><span>仲間と実践する</span></div></div>
      <section className="rj-section rj-wrap" id="learn" aria-labelledby="learn-title">
        <div className="rj-section-head"><div><p className="rj-eyebrow">01 / OPEN YOUR POSSIBILITIES</p><h2 id="learn-title">学ぶだけでは、<br /><em>終わらない。</em></h2></div><p>「何か始めたい。でも、ひとりだと動けない。」<br />そんな想いを持ち寄って、聴いて、話して、やってみる。<br />発信も、生き方も。ここから少しずつ。</p></div>
        <div className="rj-learning-grid">{experiences.map(({ number, label, title, icon: Icon, text, tags }) => <article className="rj-learning" key={number} data-journey-reveal><div className="rj-learning-top"><span>{number} / {label}</span><Icon size={27} strokeWidth={1.4} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
        <div className="rj-contents-head"><h3>日々の学びと、会える楽しみ。</h3><p>忙しい日にも、あなたに合う関わり方で。</p></div>
        <div className="rj-contents-grid">{contents.map(({ icon: Icon, title, detail, text }) => <article className="rj-content" key={title}><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><div><h4>{title}</h4><span>{detail}</span><p>{text}</p></div></article>)}</div><p className="rj-note">合宿・イベントの日程や参加条件は、その都度ご案内します。</p>
        <JukuMiniwork />
      </section>
      <section className="rj-story" id="story" aria-labelledby="story-title"><div className="rj-wrap rj-story-grid">
        <div><p className="rj-eyebrow">02 / A MESSAGE FROM RANBOU</p><h2 id="story-title">すべては、<br /><em>未完成からはじまる。</em></h2></div>
        <div className="rj-story-copy"><p>地球を旅して、砂漠を走って、仲間と学校をつくってきた。その始まりは、いつも「やってみたい」でした。</p><p>不安でもいい。準備ができていなくても大丈夫。ひとりでは踏み出せなかった一歩も、同じ方向を向く仲間がいたら、面白くなる。</p><p>自分の人生を、自分の手で動かす。<br />その先に、次の世代へ手渡したい未来がある。<br />一緒に、次の景色を見にいこう。</p><div className="rj-signature"><img src="/efj/profile_ranbow-bO9RdlJ2.webp" alt="らんぼう（上田直樹）" width="72" height="72" loading="lazy" /><strong>らんぼう</strong><span>上田直樹<br />あーすガイド・旅する学校 代表／4児の父</span></div><a className="rj-text-link" href="https://earthguide.tabigaku.party/#profile" target="_blank" rel="noopener noreferrer">詳しいプロフィール・活動歴を見る</a></div>
      </div><div className="rj-wrap rj-story-records"><div><strong>地球一周</strong><span>旅から学び、生き方にする</span></div><div><strong>500回以上</strong><span>各地での講演・対話の経験</span></div><div><strong>神山から</strong><span>自然と人をつなぐ学びの場へ</span></div></div></section>
      <section className="rj-dao" id="dao" aria-labelledby="dao-title">
        <div className="rj-dao-photo"><img src="/images/saijai-lake.jpg" alt="緑の山々と湖に包まれた水上エコビレッジ、SaaiJai Village" loading="lazy" width="1536" height="864" /><span>SaaiJai Village, Thailand</span></div>
        <div className="rj-wrap rj-dao-inner"><div className="rj-dao-copy"><p className="rj-eyebrow">03 / BEYOND THE CLASSROOM</p><span className="rj-bonus-label"><Ticket size={18} aria-hidden="true" /> 受講料に含まれる参加特典</span><h2 id="dao-title">学びの先に、<br /><em>「ただいま」がある。</em></h2><p className="rj-dao-name">EARTH FAMILY DAO</p><p>世界の暮らしに出会い、得意なことを持ち寄り、一緒に未来をつくるコミュニティ。<br />らんぼう塾には、その仲間になる参加券がついています。</p><div className="rj-actions"><a className="rj-button rj-button-lime" href={DAO} target="_blank" rel="noopener noreferrer">DAOの説明ページを見る</a><a className="rj-text-link rj-link-light" href={DAO_GUIDE} target="_blank" rel="noopener noreferrer">使い方ガイド</a></div></div>
        <div className="rj-dao-ticket" data-journey-reveal><div className="rj-ticket-heading"><Globe2 size={31} strokeWidth={1.3} aria-hidden="true" /><span>EARTH FAMILY DAO<small>らんぼう塾 参加特典</small></span></div><h3>仲間になる、<br />ひとつのきっかけ。</h3><ul className="rj-checklist"><li><Check aria-hidden="true" />一般ライト会員と同じ条件で参加</li><li><Check aria-hidden="true" />初年度年会費11,000円を含む</li><li><Check aria-hidden="true" />年間3泊までの拠点利用</li></ul><div className="rj-ticket-detail"><p>滞在は1日2〜3時間のお手伝いと交換。食費は各自負担です。受け入れ日程・人数・家族での利用可否は、各拠点との事前相談が必要です。</p><p>入塾後、管理人から専用の招待リンクをご案内します。会員登録と承認後に利用できます。</p></div><div className="rj-ticket-bottom"><span>LEARN HERE. CONNECT EVERYWHERE.</span><Ticket size={24} aria-hidden="true" /></div></div></div>
      </section>
      <section className="rj-voice rj-wrap" aria-labelledby="voice-title"><p className="rj-eyebrow" id="voice-title">A VOICE FROM OUR COMMUNITY / 参加者の声</p><blockquote>「やってみるといいんとちゃう。」<br />その言葉が、今回一番残っています。</blockquote><p>未完成でもいいから、やってみる。<br />やったからこそ見える景色がある。</p><cite>受講生・長崎／女性の感想より抜粋</cite></section>
      <section className="rj-price-section" id="price" aria-labelledby="price-title"><div className="rj-wrap rj-price-grid"><div className="rj-price-intro"><p className="rj-eyebrow">04 / START WHEN YOU'RE READY</p><h2 id="price-title">心が動いた、<br /><em>そのタイミングで。</em></h2><p>募集期や開講日を待つ必要はありません。<br />思い立った日から、あなたの一歩を。</p><div className="rj-price-statement"><span>いつでも入塾できます</span><p>受講料は一律。<br />EARTH FAMILY DAO参加券も含まれます。</p></div></div>
        <div className="rj-price-card" data-journey-reveal><div className="rj-price-top"><span>らんぼう塾</span><span>随時受付中</span></div><p className="rj-price-label">受講料</p><p className="rj-amount"><span>¥</span>39,800<small>税込</small></p><p className="rj-price-bonus"><Ticket size={19} aria-hidden="true" /> EARTH FAMILY DAO参加券つき</p><p className="rj-price-caption">学びと交流に、世界の仲間とのつながりを。</p><ul className="rj-checklist">{["限定ラジオ・Zoomライブ・録画", "Threads攻略・AI活用の学び", "バズ部屋・LINE交流グループ", "神山合宿・ワクドキ祭りの参加機会", "DAO一般ライト会員・初年度年会費11,000円を含む"].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><a className="rj-button rj-button-dark" href={FORM} data-eg-event="service_click">申し込みへ進む</a><p className="rj-note">分割払いのご相談は<a href={LINE} data-eg-event="line_click" target="_blank" rel="noopener noreferrer">公式LINE</a>へ。<br />合宿などの交通・宿泊・食事等の費用や、各企画の参加条件は事前にご確認ください。塾の参加・教材閲覧期間、更新やキャンセルの条件も、お申し込み前にご相談いただけます。</p></div>
      </div></section>
      <section className="rj-section rj-wrap rj-faq" id="faq" aria-labelledby="faq-title"><div><p className="rj-eyebrow">05 / BEFORE YOUR FIRST STEP</p><h2 id="faq-title">気になること、<br /><em>聞いてください。</em></h2><a className="rj-line-link" href={LINE} data-eg-event="line_click" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} aria-hidden="true" /> LINEで相談する</a></div><div className="rj-faq-list">{questions.map(([question, answer], i) => <details key={question}><summary>{question}</summary><p>{answer}</p>{i === 3 && <a href={DAO} target="_blank" rel="noopener noreferrer">DAOの詳しい説明を読む</a>}</details>)}</div></section>
      <section className="rj-apply" id="apply" aria-labelledby="apply-title"><div className="rj-wrap"><p className="rj-eyebrow">YOUR NEXT CHAPTER STARTS HERE.</p><h2 id="apply-title">次の景色を、<br /><em>一緒に見にいこう。</em></h2><p>準備ができていなくても、大丈夫。<br />あなたの「やってみたい」を、聞かせてください。</p><div className="rj-apply-offer"><span>いつでも入塾</span><strong>39,800<small>円（税込）</small></strong><span>EARTH FAMILY DAO参加券つき</span></div><div className="rj-actions"><a className="rj-button rj-button-lime" href={FORM} data-eg-event="service_click">入塾の申し込みへ進む</a><a className="rj-button rj-button-line" href={LINE} data-eg-event="line_click" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} aria-hidden="true" />まずはLINEで相談する</a></div><p className="rj-apply-note">お名前・メールアドレス・LINEと確認事項を入力し、内容を確認して送信できます。お支払い方法は受付後に、参加方法とDAO招待リンクは入金確認後にご案内します。</p><ol className="rj-steps">{[["01", "申し込む", "フォームに必要事項を入力。"], ["02", "案内を受け取る", "お支払いと参加の流れを確認。"], ["03", "仲間と、はじめる", "交流グループとDAOへ。"]].map(([number, title, text]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol></div></section>
    </main>
    <footer className="rj-footer"><div className="rj-wrap rj-footer-top"><a href="#juku-top" className="rj-brand"><Compass aria-hidden="true" /><span>らんぼう塾<small>RANBOU JUKU</small></span></a><p>いのちが喜ぶことを、カタチにする。</p><nav aria-label="関連ページ"><a href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener noreferrer">あーすガイド</a><a href="/">旅する学校</a><a href={DAO} target="_blank" rel="noopener noreferrer">EARTH FAMILY DAO</a></nav></div><ShareButtons url="https://www.tabigaku.party/juku" text="いのちが喜ぶことを、カタチにする。らんぼう塾はいつでも入塾、39,800円（税込）。Threads・AI・世界の暮らしを学び、仲間と実践。EARTH FAMILY DAO参加券つき。" title="この学びを、大切な人に。" /><p className="rj-copyright">閲覧・クリックなど、個人情報を含まない利用状況を集計しています。</p><p className="rj-copyright">© らんぼう塾 / あーすガイド・旅する学校</p></footer>
    <div className="rj-sticky" aria-label="入塾のご案内"><div><span>いつでも入塾・DAO参加券つき</span><strong>39,800<small>円（税込）</small></strong></div><a className="rj-button rj-button-lime" href={FORM} data-eg-event="service_click">入塾する</a></div>
  </div>;
}
