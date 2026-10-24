import { Fragment, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JourneyHero from "@/components/JourneyHero";
import {
  journeys,
  journeyStatus,
  type Audience,
} from "@/data/journeys";
import { trackJourneyAction } from "@/lib/journey-analytics";
import "./home.css";
import homeCopy from "@/data/home-copy.json";

const audiences: { value: Audience | "all"; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "children", label: "子ども" },
  { value: "family", label: "親子・家族" },
  { value: "adults", label: "大人" },
];

export default function Home() {
  const [audience, setAudience] = useState<Audience | "all">("all");
  const now = Date.now();
  const current = journeys.filter(j => journeyStatus(j, now) !== "ended");
  const visible = current.filter(
    j => audience === "all" || j.audiences.includes(audience)
  );
  const past = journeys.filter(j => journeyStatus(j, now) === "ended");
  const goldenJourney = visible.find(j => j.id === "umitabi-2027");
  const goldenEarlyBird =
    goldenJourney?.earlyBird &&
    now <= Date.parse(goldenJourney.earlyBird.deadline);
  return (
    <div className="school-home">
      <Navigation />
      <main id="main-content">
        <JourneyHero />
        <nav className="school-tags" aria-label="見たい項目へ移動">
          <a href="#journeys">
            <span>#</span> 旅を選ぶ
          </a>
          <a href="#about">
            <span>#</span> 旅する学校
          </a>
          <a href="#guide">
            <span>#</span> ガイド
          </a>
          <a href="#first">
            <span>#</span> はじめての方
          </a>
          <a href="#contact">
            <span>#</span> 相談する
          </a>
        </nav>
        <section
          className="school-section school-journeys"
          id="journeys"
          aria-labelledby="journeys-title"
        >
          <div className="school-heading">
            <div>
              <p className="school-eyebrow">{homeCopy.journeys.label}</p>
              <h2 id="journeys-title">{homeCopy.journeys.heading}</h2>
            </div>
            <div
              className="school-filters"
              role="group"
              aria-label="参加する方から旅を選ぶ"
            >
              {audiences.map(option => (
                <button
                  type="button"
                  key={option.value}
                  aria-pressed={audience === option.value}
                  onClick={() => setAudience(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div className="school-trip-grid" aria-live="polite">
            {visible.map(journey => (
              <article className="school-trip" key={journey.id}>
                <a
                  className="school-trip__photo"
                  href={journey.href}
                  aria-label={`${journey.title}の詳細`}
                  onClick={() => trackJourneyAction("view_journey", journey.id)}
                >
                  <img
                    src={journey.image}
                    alt={journey.alt}
                    width="1080"
                    height="810"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="school-trip__status">
                    {journeyStatus(journey, now) === "upcoming"
                      ? "募集中"
                      : "開催中"}
                  </span>
                  <span className="school-trip__place">
                    <small>
                      {journey.audiences.includes("children")
                        ? "子どもたちの冒険"
                        : "親子・大人の旅"}
                    </small>
                    {journey.place}
                  </span>
                </a>
                <div className="school-trip__body">
                  <p className="school-trip__date">
                    <CalendarDays size={15} aria-hidden="true" />
                    {journey.dateLabel}
                    <span>{journey.duration}</span>
                  </p>
                  <h3>
                    <a href={journey.href}>{journey.title}</a>
                  </h3>
                  <p className="school-trip__description">
                    {journey.description}
                  </p>
                  <p className="school-trip__audience">
                    <Users size={15} aria-hidden="true" />
                    {journey.age} {journey.capacity != null && <span>定員{journey.capacity}名</span>}
                  </p>
                  <div className="school-trip__bottom">
                    <dl className="school-trip__costs">
                      <div>
                        <dt>
                          {journey.feeLabel ??
                            (journey.id === "thailand-2027"
                              ? "現地サポート／大人1人"
                              : "ガイド料")}
                          {journey.earlyBird && "〈通常〉"}
                        </dt>
                        <dd>
                          <strong>{journey.fee}</strong> 円
                          <small>（税込 / 1名）</small>
                        </dd>
                      </div>
                      <div>
                        <dt>実費〈別途〉</dt>
                        <dd>
                          {journey.expenses ? (
                            <>
                              {journey.expenses} 円前後<small> / 1名</small>
                            </>
                          ) : (
                            <>
                              宿泊・食事・交通など<small>各自でお支払い</small>
                            </>
                          )}
                        </dd>
                      </div>
                    </dl>
                    {journey.earlyBird &&
                      now <= Date.parse(journey.earlyBird.deadline) && (
                        <p className="school-trip__early-bird">
                          <span>
                            早割 <strong>{journey.earlyBird.fee}円</strong>
                            <small>（{journey.earlyBird.discount}円引き）</small>
                          </span>
                          <span>{journey.earlyBird.deadlineLabel}</span>
                        </p>
                      )}
                    <a
                      href={journey.href}
                      aria-label={`${journey.title}の日程・費用を見る`}
                      onClick={() =>
                        trackJourneyAction("view_journey", journey.id)
                      }
                    >
                      この旅の日程・詳細を見る{" "}
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
            {visible.length === 0 && (
              <div className="school-empty">
                <p>この対象の次の旅は、準備中です。</p>

              </div>
            )}
          </div>
          {goldenJourney && (
            <aside className="school-golden" aria-labelledby="golden-title">
              <div>
                <p className="school-eyebrow">海から、お遍路へ。</p>
                <h3 id="golden-title">9日間のゴールデンプラン</h3>
                <p>
                  2027年4月27日（火）〜5月5日（水・祝）。海旅キャンプから歩きお遍路ジャーニーへ、続けて参加できます。
                </p>
              </div>
              <div className="school-golden__booking">
                <p>通常109,800円（税込・1名／実費別）</p>
                {goldenEarlyBird && (
                  <p className="school-golden__early-bird">
                    <strong>早割99,800円</strong>（10,000円引き）
                    <small>{goldenJourney.earlyBird!.deadlineLabel}</small>
                  </p>
                )}
                <a
                  className="school-text-link"
                  href={`${goldenJourney.href}#price`}
                  onClick={() => trackJourneyAction("view_journey", "golden-2027")}
                >
                  ゴールデンプランの詳細・お申し込み
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </aside>
          )}
          <p className="school-price-note">
            参加費・ガイド料などに含まれる内容と、別途必要な実費は旅によって異なります。実費は食費・宿泊費などの目安です。集合・解散地までの交通費や装備、割引の条件は、各旅の案内をご確認ください。
          </p>
          {past.length > 0 && (
            <details className="school-archive">
              <summary>
                これまでの旅を見る <span>{past.length}件</span>
              </summary>
              <div>
                {past.map(j => (
                  <a key={j.id} href={j.href}>
                    <span>{j.dateLabel} · 開催終了</span>
                    {j.title}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </details>
          )}
        </section>
        <section
          className="school-about"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="school-about__photo">
            <img
              src="/manus-storage/1000004115_06c74ce0.jpg"
              alt="水しぶきを浴びながら、川旅を楽しむ子どもたち"
              width="1474"
              height="1110"
              loading="lazy"
            />
            <span>
              <small>OUR CLASSROOM</small>教室は、世界じゅうにある。
            </span>
          </div>
          <div className="school-about__copy">
            <p className="school-eyebrow">{homeCopy.about.label}</p>
            <h2 id="about-title">
              {homeCopy.about.titleLines.map((line, index) => <Fragment key={index}>{index > 0 && <br />}{line}</Fragment>)}
            </h2>
            {homeCopy.about.paragraphs.map((text, index) => <p key={index}>{text}</p>)}
            <div className="school-guide" id="guide">
              <img
                src="/manus-storage/guide_torii_3a17f72b.jpg"
                alt="案内人らんぼう"
                width="60"
                height="60"
                loading="lazy"
              />
              <div>
                <small>旅の案内人</small>
                <p>
                  らんぼう <span>上田 直樹</span>
                </p>
              </div>
              <a
                href="https://earthguide.tabigaku.party/#profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="らんぼうの紹介を読む"
              >
                <ArrowUpRight size={22} />
              </a>
            </div>
            <div className="school-evidence">
              <a href="/award">
                受賞歴・活動の紹介 <ArrowUpRight size={14} />
              </a>
              <a
                href="/manus-storage/tokushima_shimbun_e14fdcec.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                徳島新聞での紹介 <ArrowUpRight size={14} />
              </a>
              <a
                href="https://note.com/shiftdaigaku"
                target="_blank"
                rel="noopener noreferrer"
              >
                旅の記録を読む <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
        <section
          className="school-section school-first"
          id="first"
          aria-labelledby="first-title"
        >
          <div>
            <p className="school-eyebrow">BEFORE YOU GO</p>
            <h2 id="first-title">
              {homeCopy.first.titleLines.map((line, index) => <Fragment key={index}>{index > 0 && <br />}{line}</Fragment>)}
            </h2>
            <p>{homeCopy.first.introLines.map((line, index) => <Fragment key={index}>{index > 0 && <br />}{line}</Fragment>)}</p>
          </div>
          <div className="school-faq">
            <details>
              <summary>{homeCopy.tabiikuFaq.question}</summary>
              <p>{homeCopy.tabiikuFaq.answer}</p>
            </details>
            <details>
              <summary>{homeCopy.learningFaq.question}</summary>
              <p>{homeCopy.learningFaq.answer}</p>
              <p><a className="school-text-link" href="#journeys">{homeCopy.learningFaq.linkLabel}</a></p>
            </details>
            {homeCopy.faqs.map((faq, index) => (
              <details key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="school-contact" id="contact">
          <div>
            <p className="school-eyebrow">LET’S TAKE THE FIRST STEP</p>
            <h2>
              {homeCopy.contact.titleLines.map((line, index) => <Fragment key={index}>{index > 0 && <br className="school-mobile" />}{line}</Fragment>)}
            </h2>
            <p>{homeCopy.contact.intro}</p>
          </div>
          <div className="school-contact__links">

            <a
              className="school-newsletter"
              href="https://ranbou.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              旅のお便りを受け取る <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>
      <Footer compact />
    </div>
  );
}

