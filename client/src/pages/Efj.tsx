import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  Check,
  Compass,
  Leaf,
  MapPin,
  MessageCircle,
  Plus,
  Waves,
} from "lucide-react";
import { useJourneyMotion } from "@/components/JourneyMotion";
import { JourneyStatusNotice } from "@/components/JourneyBooking";
import ShareButtons from "@/components/ShareButtons";
import { trackJourneyAction } from "@/lib/journey-analytics";
import "./efj-spring.css";

const LINE = "https://lin.ee/N9eyIcP";
const EARLY_DEADLINE = "2027-02-28T23:59:59+09:00";
const DEPARTURE = "2027-03-29T00:00:00+09:00";
const STOPS = [
  {
    id: "iwaishima",
    name: "祝島",
    en: "IWAISHIMA",
    period: "前半",
    region: "山口県・瀬戸内海",
    image: "/efj/iwaishima-BUClfDH1.webp",
    alt: "祝島で受け継がれてきた祭りの舟と、瀬戸内海の青",
    caption: "島に受け継がれる風景（過去の祭りの様子）",
    title: (
      <>
        海と生きる。
        <br />
        その豊かさに、ふれる。
      </>
    ),
    text: "船で海を渡った先に、潮の香りの路地と、海に寄り添う暮らしが待っています。石垣のある道をゆっくり歩き、島の人の話に耳をすます。山と海からいただく食べもの、手を動かして暮らす知恵、隣の人と分かち合う温かさ。映画「祝福の海」で心が動いた方には、その風景の中へ一歩入ってみる旅に。らんぼうが何度も通ってきた島で、いのちをつなぐ暮らしを一緒に感じましょう。個別の訪問先・体験内容は現地と調整してご案内します。",
    tags: ["島の暮らし", "海とともに生きる知恵", "いのちの循環"],
    link: "https://note.com/shiftdaigaku/n/na0c2592111c5",
    linkText: "らんぼうの祝島への想いを読む",
    Icon: Waves,
  },
  {
    id: "kamiyama",
    name: "神山町",
    en: "KAMIYAMA",
    period: "後半",
    region: "徳島県・山あいの町",
    image: "/efj/waterfall-DgiO-S5j.webp",
    alt: "神山町の緑深い森を流れる滝",
    caption: "森の深呼吸が聞こえてくる、神山の風景",
    title: (
      <>
        森の中で、
        <br />
        自分の声を聴く。
      </>
    ),
    text: "らんぼうが11年暮らす、徳島・神山町へ。山あいの道を進み、川の音に耳をすまし、森の中で深呼吸する。自然の豊かさと、新しい暮らしや学びをつくる人たちの挑戦が、同じ町に息づいています。「やったらええんちゃうん？」と背中を押してくれる空気の中で、子育て、仕事、これからの暮らしを語り合う。観光だけでは見えにくい町の日常を、ここで暮らす案内人と訪ねます。森の学校みっけなどの訪問先は受け入れ状況に合わせて調整し、決まり次第お知らせします。",
    tags: ["森と川", "地域の暮らし", "これからの自分"],
    link: "https://kamiyamag.tabigaku.party/",
    linkText: "神山の魅力をもっと知る",
    Icon: Compass,
  },
];

function useTravelSeason() {
  // Keep the prerender and initial client render identical.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return {
    early: now === null || now <= Date.parse(EARLY_DEADLINE),
    departed: now !== null && now >= Date.parse(DEPARTURE),
  };
}

function LineLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`efjs-button efjs-button--line ${className}`}
      href={LINE}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackJourneyAction("consult", "earth-family")}
    >
      <MessageCircle size={19} aria-hidden="true" />
      {children}
    </a>
  );
}

export default function Efj() {
  const { enabled } = useJourneyMotion();
  const root = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [activeStop, setActiveStop] = useState("iwaishima");
  const { early, departed } = useTravelSeason();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.target === hero.current)
            setHeroVisible(entry.isIntersecting);
          if (
            entry.isIntersecting &&
            entry.target.hasAttribute("data-efj-stop")
          )
            setActiveStop(entry.target.id);
        }),
      { threshold: 0.18 }
    );
    if (hero.current) observer.observe(hero.current);
    root.current
      ?.querySelectorAll("[data-efj-stop]")
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="efjs" ref={root} data-motion={enabled ? "on" : "off"}>
      <a href="#efj-content" className="efjs-skip">
        本文へ
      </a>
      <JourneyStatusNotice id="earth-family" />
      <header className="efjs-nav">
        <a className="efjs-brand" href="/" aria-label="旅する学校のホームへ">
          <Compass size={28} strokeWidth={1.3} aria-hidden="true" />
          <span>
            旅する学校<small>EARTH FAMILY JOURNEY</small>
          </span>
        </a>
        <nav aria-label="地球家族ジャーニーのページ内メニュー">
          <a href="#route">旅の舞台</a>
          <a href="#price">日程・参加費</a>
          <a href="#guide">案内人</a>
        </nav>
        <a className="efjs-nav-join" href="#apply">
          参加のご案内
        </a>
      </header>

      <main id="efj-content">
        <section
          className="efjs-hero"
          ref={hero}
          data-visible={heroVisible}
          aria-labelledby="efj-title"
        >
          <div className="efjs-hero-inner">
            <div className="efjs-hero-copy">
              <p className="efjs-eyebrow">
                <span /> EARTH FAMILY JOURNEY · SPRING 2027
              </p>
              <p className="efjs-hero-name">地球家族ジャーニー</p>
              <h1 id="efj-title">
                <span>この春、</span>
                <span>いのちが</span>
                <span>
                  <em>よろこぶ</em>旅へ。
                </span>
              </h1>
              <p className="efjs-hero-lead">
                海と暮らす島。学びが生まれる場所。
                <br />
                そして、森に抱かれた町へ。
                <br />
                大切なものを、からだで思い出す7日間。
              </p>
              <div className="efjs-date">
                <span>2027</span>
                <strong>
                  3.29<small>月</small>
                  <i>—</i>4.4<small>日</small>
                </strong>
              </div>
              <div className="efjs-hero-actions">
                <a className="efjs-button efjs-button--sun" href="#route">
                  旅の舞台を見てみる <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="efjs-quiet-link" href="#price">
                  日程・参加費を見る
                </a>
              </div>
              <p className="efjs-hero-note">
                おひとりでも、家族でも。少人数で、深く出会う旅。
              </p>
            </div>
            <div className="efjs-hero-art" aria-label="祝島の海から神山の森へ">
              <span className="efjs-vertical" aria-hidden="true">
                FOLLOW YOUR WONDER
              </span>
              <figure className="efjs-hero-sea">
                <img
                  src="/efj/iwaishima-BUClfDH1.webp"
                  alt="祝島の青い海と、島の祭りで漕ぎ出す舟（過去の風景）"
                  width="860"
                  height="1144"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>01</span> 祝島の海へ
                </figcaption>
              </figure>
              <figure className="efjs-hero-forest">
                <img
                  src="/efj/waterfall-DgiO-S5j.webp"
                  alt="神山の森を流れる清らかな滝"
                  width="620"
                  height="825"
                />
                <figcaption>
                  <span>03</span> 神山の森へ
                </figcaption>
              </figure>
              <div className="efjs-seal" aria-hidden="true">
                <span>旅は、最高の学校。</span>
                <b>7</b>
                <small>DAYS OF WONDER</small>
              </div>
              <svg
                className="efjs-hero-line"
                viewBox="0 0 550 600"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M18 458C-5 357 201 312 211 215S319 22 431 71 555 245 473 305 282 421 354 523"
                  pathLength="1"
                />
              </svg>
            </div>
          </div>
          <div className="efjs-hero-bottom">
            <span>
              祝島 <i>／</i> 神山町
            </span>
            <span>
              2027.03.29 — 04.04 <small>6泊7日</small>
            </span>
            <a href="#route" aria-label="旅の舞台へスクロール">
              <ArrowDown size={20} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="efjs-route-section efjs-wrap"
          id="route"
          aria-labelledby="route-title"
        >
          <div className="efjs-intro" data-journey-reveal>
            <div>
              <p className="efjs-eyebrow">THE JOURNEY</p>
              <h2 id="route-title">
                知らない景色が、
                <br />
                これからの自分になる。
              </h2>
            </div>
            <p>
              ただ通り過ぎるだけでは出会えない、
              <br className="efjs-desktop-break" />
              土地の暮らしと、そこに生きる人たち。
              <br />
              らんぼうが大好きな場所を、一緒に訪ねます。
              <br />
              心が動く方へ、少しだけ日常を飛び出して。
            </p>
          </div>
          <div
            className="efjs-route"
            aria-label="祝島から神山町へ。おうちえんへの訪問は調整中です"
          >
            <svg
              viewBox="0 0 1000 110"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="efjs-route-base"
                d="M80 55C245-25 285 130 500 55S765-15 920 55"
              />
              <path
                className="efjs-route-flow"
                d="M80 55C245-25 285 130 500 55S765-15 920 55"
                pathLength="1"
              />
            </svg>
            {STOPS.map((stop, i) => (
              <a
                key={stop.id}
                href={`#${stop.id}`}
                className={activeStop === stop.id ? "is-active" : ""}
              >
                <span className="efjs-route-number">0{i + 1}</span>
                <span className="efjs-route-period">
                  {stop.period} · {stop.region}
                </span>
                <strong>{stop.name}</strong>
                <span className="efjs-route-en">{stop.en}</span>
              </a>
            ))}
          </div>
          <p className="efjs-route-note">
            前半は祝島、後半は神山町へ。こびとのおうちえんへの訪問は調整中で、現時点では確定していません。各地の滞在日・集合場所と時刻は、決まり次第ご案内します。
          </p>
        </section>

        <section
          className="efjs-stops efjs-wrap"
          aria-label="祝島と神山の魅力"
        >
          {STOPS.map((stop, i) => (
            <article
              className={`efjs-stop efjs-stop--${i + 1}`}
              id={stop.id}
              key={stop.id}
              data-efj-stop
            >
              <figure className="efjs-stop-photo" data-journey-reveal>
                <img
                  src={stop.image}
                  alt={stop.alt}
                  width={i === 1 ? 1100 : i === 0 ? 860 : 620}
                  height={i === 1 ? 618 : i === 0 ? 1144 : 825}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{stop.caption}</figcaption>
                <span className="efjs-photo-index" aria-hidden="true">
                  0{i + 1}
                </span>
              </figure>
              <div className="efjs-stop-copy" data-journey-reveal>
                <p className="efjs-eyebrow">
                  <stop.Icon size={18} aria-hidden="true" /> {stop.en}{" "}
                  <span className="efjs-stop-period">{stop.period}</span>
                </p>
                <p className="efjs-stop-place">
                  <MapPin size={14} aria-hidden="true" />
                  {stop.region} · {stop.name}
                </p>
                <h2>{stop.title}</h2>
                <p className="efjs-body">{stop.text}</p>
                <ul className="efjs-tags">
                  {stop.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a
                  className="efjs-text-link"
                  href={stop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {stop.linkText}
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="efjs-wrap efjs-gallery" aria-labelledby="gallery-title">
          <p className="efjs-eyebrow">SEA · FOREST · PEOPLE</p>
          <h2 id="gallery-title">この景色の中へ、会いに行こう。</h2>
          <p>海を渡る時間、森で息をつく時間、火を囲んで話す時間。祝島と神山の、忘れられない風景。</p>
          <div className="efjs-gallery-grid">
            <figure><img src="/efj/iwaishima-life.jpg" alt="瀬戸内海から望む祝島の山並みと集落" loading="lazy" width="1200" height="628" /><figcaption>祝島｜海の向こうに、暮らしがある。<a href="https://note.com/shiftdaigaku/n/na0c2592111c5" target="_blank" rel="noopener noreferrer">らんぼうの島の記録 →</a></figcaption></figure>
            <figure><img src="/efj/waterfall-DgiO-S5j.webp" alt="神山の森と滝" loading="lazy" width="620" height="825" /><figcaption>神山｜水の音に、心がほどける。</figcaption></figure>
            <figure><img src="/efj/kamiyama_fire-DUPc2W-8.webp" alt="神山で焚き火を囲む旅の仲間" loading="lazy" width="1100" height="618" /><figcaption>神山｜火を囲めば、話したくなる。</figcaption></figure>
          </div>
          <small>写真は過去の風景です。季節や天候により景色は変わり、掲載した体験の実施を保証するものではありません。</small>
          <details><summary>こびとのおうちえんについて（訪問調整中）</summary><p>山口県の森のようちえん「こびとのおうちえん」への訪問も検討しています。まだ確定していないため、今回の行程に含まれない可能性があります。決まり次第、このページとお申し込みいただいた方へのご案内でお知らせします。</p></details>
        </section>
        <section className="efjs-night" aria-labelledby="night-title">
          <img
            src="/efj/kamiyama_fire-DUPc2W-8.webp"
            alt="神山の夜、焚き火を囲んで語り合う仲間たち"
            width="1100"
            height="618"
            loading="lazy"
          />
          <div data-journey-reveal>
            <p className="efjs-eyebrow">MORE THAN A TRIP</p>
            <h2 id="night-title">
              帰るころには、
              <br />
              誰かの「ただいま」が
              <br />
              待つ場所になる。
            </h2>
            <p>
              大人も、子どもも。初めましての人も。
              <br />
              同じ景色を見て、話して、笑って。
              <br />
              旅の思い出に、人のぬくもりが残っていく。
            </p>
          </div>
          <span className="efjs-night-caption">過去の神山でのひととき</span>
        </section>

        <section
          className="efjs-guide efjs-wrap"
          id="guide"
          aria-labelledby="guide-title"
          data-journey-reveal
        >
          <div className="efjs-guide-portrait">
            <img
              src="/efj/profile_ranbow-bO9RdlJ2.webp"
              alt="旅の案内人、らんぼう（上田直樹）"
              width="400"
              height="400"
              loading="lazy"
            />
            <span>YOUR NAVIGATOR</span>
          </div>
          <div>
            <p className="efjs-eyebrow">この旅の案内人</p>
            <h2 id="guide-title">どうも、らんぼうです。</h2>
            <p className="efjs-body">
              僕が心を動かされた人と場所に、みんなを案内したい。そんな想いから生まれた旅です。地球一周、10年の旅暮らしを経て、今は神山町で4人の子どもの父として暮らしています。自然の中で、いつもと違う毎日を一緒に楽しみましょう。
            </p>
            <p className="efjs-guide-role">
              上田直樹｜あーすガイド代表・旅する学校主宰
              <br />
              「森の学校みっけ」共同創設／全国で500本以上の講演・上映会
            </p>
            <a
              className="efjs-text-link"
              href="https://earthguide.tabigaku.party/"
              target="_blank"
              rel="noopener noreferrer"
            >
              らんぼうの詳しいプロフィール
            </a>
          </div>
        </section>

        <section
          className="efjs-price-section"
          id="price"
          aria-labelledby="price-title"
        >
          <div className="efjs-wrap">
            <div className="efjs-price-heading">
              <p className="efjs-eyebrow">YOUR NEXT JOURNEY</p>
              <h2 id="price-title">
                この春の7日間を、
                <br />
                一生ものの出会いに。
              </h2>
              <p>
                2027年3月29日（月）〜4月4日（日）
                <br />
                祝島 → 神山町（おうちえん訪問は調整中）
              </p>
            </div>
            <div className="efjs-ticket" data-journey-reveal>
              <div className="efjs-ticket-main">
                <span className="efjs-ticket-label">
                  地球家族ジャーニー · 6泊7日
                </span>
                <h3>春の、まるごと7日間。</h3>
                <p>ガイド料・コーディネート料（税込／1名）</p>
                <div className="efjs-price-row">
                  <div>
                    <span>通常参加費</span>
                    <strong>
                      88,000<small>円</small>
                    </strong>
                  </div>
                  <div className="efjs-early-price">
                    <span>
                      {early ? "1か月前までの早期割引" : "早期割引（受付終了）"}
                    </span>
                    <strong>
                      80,000<small>円</small>
                    </strong>
                  </div>
                </div>
                <p className="efjs-early-note">
                  <Check size={17} aria-hidden="true" />
                  早割は2027年2月28日（日）までのお申し込み
                </p>
                <p className="efjs-cost-note">
                  <b>実費は別途</b>
                  宿泊・食事・移動（船賃など）・施設利用等の費用は、各自でのお支払いです。参加費には含まれません。
                </p>
              </div>
              <div className="efjs-ticket-side">
                <span className="efjs-ticket-season">SPRING 2027</span>
                <span className="efjs-ticket-days">
                  7<small>DAYS</small>
                </span>
                <ul>
                  <li>
                    <Check size={16} aria-hidden="true" />
                    10名ほどの少人数
                  </li>
                  <li>
                    <Check size={16} aria-hidden="true" />
                    おひとり・友人・親子歓迎
                  </li>
                  <li>
                    <Check size={16} aria-hidden="true" />
                    途中合流も相談できます
                  </li>
                </ul>
                <a href="#apply" className="efjs-button efjs-button--dark">
                  参加について相談する
                </a>
              </div>
            </div>
            <div className="efjs-practical" aria-label="参加前に確認したいこと">
              <details>
                <summary>
                  家族での参加・割引について
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <div>
                  <p>
                    小学生未満のお子さまはドネーション制。ご家族で参加する場合、小学生以上の2人目以降のご家族は、参加費の半額以上のドネーション制です。
                  </p>
                  <p>
                    らんぼう塾の方は10,000円割引（お一人様、または一家族全体で）。家族割とらんぼう塾割は併用できます。早割との組み合わせや、ご家族全体の参加費はお申し込み時にご案内します。宿泊・食事・交通などの実費は、それぞれ別途必要です。
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  集合・移動・宿泊・途中参加について
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <div>
                  <p>
                    3月29日から前半は祝島、後半は神山町を訪ね、4月4日に旅を終える予定です。こびとのおうちえんへの訪問は調整中で、訪問できない場合もあります。各地の滞在日、集合・解散の具体的な場所や時刻は、決まり次第ご案内します。
                  </p>
                  <p>
                    移動は基本的に各自のお車でお願いしています。難しい方は事前にご相談ください。宿泊・交通の手配は各自で行うかたちですが、おすすめの宿や移動方法をご相談いただけます。途中合流・途中お別れの参加費も、同行する区間に合わせて個別にご案内します。
                  </p>
                  <p>
                    天候や受け入れ先の都合により、行程・体験内容を変更する場合があります。
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  春の旅の持ち物
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <div>
                  <p>
                    動きやすい服、長袖・長ズボン、防寒着、雨具、歩きやすく汚れてもよい靴、帽子、タオル、水筒、洗面用具、常備薬、健康保険の資格確認ができるもの。春でも海辺や山あいの朝晩は冷えるので、重ね着できる準備を。
                  </p>
                  <p>
                    寝袋・マットなど、宿泊方法に応じて必要なものは、行程のご案内とあわせてお知らせします。アレルギーや体調面で気になることは、事前にご相談ください。
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  お申し込み・お支払い・キャンセル
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <div>
                  <p>
                    公式LINEへ「2027年春の地球家族ジャーニー参加希望」とお送りください。参加人数・お子さまの年齢・参加希望区間などを伺い、費用と参加方法をご案内します。お振り込みの確認をもって参加確定となります。
                  </p>
                  <p>
                    お振込先：PAYPAY銀行 かわせみ支店（007）／普通
                    4304359／ウエダ ナオキ。金額のご案内後にお手続きください。
                  </p>
                  <p>
                    キャンセル料：開催7日前まで20,000円／6日前以降〜当日は参加費の全額。現地との調整・準備があるため、あらかじめご了承ください。
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section
          className="efjs-apply efjs-wrap"
          id="apply"
          aria-labelledby="apply-title"
          data-journey-reveal
        >
          <p className="efjs-eyebrow">LET’S GO TOGETHER</p>
          <h2 id="apply-title">
            心が動いたら、
            <br />
            それが、旅のはじまり。
          </h2>
          <p>
            「家族で行ける？」「途中からでも大丈夫？」
            <br />
            そんな話からで大丈夫。気軽に声をかけてください。
          </p>
          {!departed && <>
            <p>下のフォームで参加希望を受け付けます。送信後、人数・参加区間・費用などを確認してご連絡します。送信時点では参加確定・決済は完了しません。</p>
            <iframe className="efjs-application-frame" src="https://earthguide.tabigaku.party/forms/efj-spring-2027" title="地球家族ジャーニー2027春 申し込みフォーム" loading="lazy" referrerPolicy="no-referrer" />
            <a className="efjs-button efjs-button--dark" href="https://earthguide.tabigaku.party/forms/efj-spring-2027" target="_blank" rel="noopener noreferrer">申し込みフォームを別画面で開く</a>
          </>}
          <LineLink>{departed ? "次の旅をLINEで相談する" : "申し込み前にLINEで相談する"}</LineLink>
          <p className="efjs-apply-message">
            「2027年春の地球家族ジャーニー参加希望」とお送りください。
          </p>
          <div className="efjs-contact">
            <a href="tel:09075188816">電話 090-7518-8816</a>
            <a href="mailto:earthguide.jpn@gmail.com?subject=2027年春の地球家族ジャーニー">
              メールで問い合わせる
            </a>
          </div>
        </section>
      </main>

      <footer className="efjs-footer">
        <a className="efjs-brand" href="/">
          <Compass size={26} aria-hidden="true" />
          <span>
            旅する学校<small>EARTH FAMILY JOURNEY</small>
          </span>
        </a>
        <p>企画・運営｜あーすガイド（らんぼう）／旅する学校</p>
        <div>
          <a
            href="https://earthguide.tabigaku.party/"
            target="_blank"
            rel="noopener noreferrer"
          >
            あーすガイド
          </a>
          <a
            href="https://www.instagram.com/earthguide.ranbow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://note.com/shiftdaigaku"
            target="_blank"
            rel="noopener noreferrer"
          >
            note
          </a>
        </div>
        <ShareButtons
          url="https://www.tabigaku.party/efj"
          text="地球家族ジャーニー2027春｜3/29〜4/4、祝島→神山町（おうちえん訪問は調整中）。いのちがよろこぶ7日間。参加費88,000円、2/28までの早割80,000円（宿泊・食事・交通等の実費別途）。"
          title="この旅を、大切な人に。"
        />
      </footer>
      <aside className="efjs-fixed" aria-label="参加費と参加のご案内">
        <div>
          <span>
            3/29 — 4/4 <small>2027</small>
          </span>
          <strong>
            {early ? "早割 80,000" : "通常 88,000"}
            <small>円 / 実費別途</small>
          </strong>
        </div>
        <a className="efjs-button efjs-button--dark" href="#apply">
          {departed ? "次の旅を相談" : "参加のご案内"}
        </a>
      </aside>
    </div>
  );
}
