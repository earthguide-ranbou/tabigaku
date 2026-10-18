import { useEffect, useRef, useState } from "react";
import { ArrowRight, Footprints, Pause, Play, Sparkles, Tent, Waves } from "lucide-react";
import { type Journey } from "@/data/journeys";
import { trackJourneyAction } from "@/lib/journey-analytics";
import { useJourneyMotion } from "./JourneyMotion";
import "./golden-plan-spotlight.css";

const chapters = [
  {
    label: "海へ",
    dates: "4/27 — 4/30",
    title: "海で遊んだ、その先へ。",
    copy: "柏島近海の海で、釣りや海あそび、生き物さがし。夜は仲間とキャンプ。",
    image: "/manus-storage/04c0f8f6-e273-48d3-862b-c02e41546226-1_all_2087_16d1a6ff.jpg",
    alt: "青く澄んだ海を群れで泳ぐ魚たち",
    width: 960,
    height: 720,
    position: "50% 50%",
    icon: Waves,
    days: [1, 2, 3, 4],
  },
  {
    label: "旅がつながる",
    dates: "4/30",
    title: "「また明日」が、つづく。",
    copy: "海旅から、そのままお遍路へ。4月30日の夜は、親御さんも一緒にキャンプできます。",
    image: "https://earthguide.tabigaku.party/henro-2027/photo-4.webp",
    alt: "夕暮れの小石の浜で、くつろぐ子どもたちと大人",
    width: 760,
    height: 942,
    position: "50% 64%",
    icon: Tent,
    days: [4],
  },
  {
    label: "歩き出す",
    dates: "4/30 — 5/5",
    title: "次の一歩は、自分たちで。",
    copy: "毎朝みんなで行き先を相談。キャンプや自炊をしながら、自然や文化、その土地の暮らしに触れていきます。",
    image: "/manus-storage/img4_yamashiro_2bd8a3b4.jpg",
    alt: "山々を眺めながら、仲間とお遍路道を歩く子どもたち",
    width: 1568,
    height: 882,
    position: "50% 50%",
    icon: Footprints,
    days: [4, 5, 6, 7, 8, 9],
  },
] as const;

export default function GoldenPlanSpotlight({
  journey,
  earlyBirdActive,
}: {
  journey: Journey;
  earlyBirdActive: boolean;
}) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [glowPaused, setGlowPaused] = useState(false);
  const section = useRef<HTMLElement>(null);
  const { enabled: motionAllowed } = useJourneyMotion();
  const glow = motionAllowed && inView && !glowPaused;
  const chapter = chapters[active];

  useEffect(() => {
    if (!section.current) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !glow) return;
    const timer = window.setInterval(
      () => setActive(index => (index + 1) % chapters.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [playing, glow]);

  const chooseChapter = (index: number) => {
    setActive(index);
    setPlaying(false);
  };

  return (
    <aside
      ref={section}
      className="golden-spotlight"
      id="golden-plan"
      aria-labelledby="golden-title"
      data-glow={glow}
      data-playing={playing && glow}
      data-journey-reveal
    >
      <div className="golden-spotlight__light" aria-hidden="true" />
      <div className="golden-spotlight__stars" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map(star => <i key={star} />)}
      </div>
      <header className="golden-spotlight__header">
        <div>
          <p className="golden-spotlight__eyebrow">海旅キャンプ × 歩きお遍路ジャーニー</p>
          <h3 id="golden-title">ゴールデンプラン</h3>
          <p className="golden-spotlight__dates">2027.4.27（火）— 5.5（水・祝）</p>
        </div>
        <div className="golden-spotlight__seal" aria-label="つながる9日間">
          <span>つながる</span><strong>9</strong><span>日間の冒険</span>
        </div>
      </header>

      <div className="golden-spotlight__layout">
        <div className="golden-spotlight__journey">
          <figure className="golden-spotlight__scene" id="golden-story">
            {chapters.map((scene, index) => (
              <img
                key={scene.image}
                src={scene.image}
                width={scene.width}
                height={scene.height}
                alt={scene.alt}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: scene.position }}
                data-active={index === active}
                aria-hidden={index !== active}
              />
            ))}
            <figcaption aria-live={playing ? "off" : "polite"} aria-atomic="true">
              <span className="golden-spotlight__chapter">0{active + 1} / {chapter.label}</span>
              <h4>{chapter.title}</h4>
              <p>{chapter.copy}</p>
            </figcaption>
          </figure>
          <div className="golden-spotlight__chapters" role="group" aria-label="ゴールデンプランの旅をめくる">
            {chapters.map((scene, index) => {
              const Icon = scene.icon;
              return (
                <button
                  key={scene.label}
                  type="button"
                  aria-pressed={active === index}
                  aria-controls="golden-story"
                  onClick={() => chooseChapter(index)}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{scene.label}<small>{scene.dates}</small></span>
                </button>
              );
            })}
          </div>
          <div className="golden-spotlight__timeline" aria-hidden="true">
            <span>DAY</span>
            {Array.from({ length: 9 }, (_, index) => (
              <span key={index} data-active={(chapter.days as readonly number[]).includes(index + 1)}>{index + 1}</span>
            ))}
          </div>
          <div className="golden-spotlight__controls">
            <p>写真は過去の旅から。過ごし方は、みんなで相談。</p>
            <button
              type="button"
              disabled={!motionAllowed || glowPaused}
              aria-pressed={playing && glow}
              onClick={() => setPlaying(value => !value)}
            >
              {playing && glow ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}
              {playing && glow ? "旅の再生を止める" : "9日間を再生"}
            </button>
          </div>
        </div>

        <div className="golden-spotlight__booking">
          <p className="golden-spotlight__invitation">ひとつの旅の、その先へ。</p>
          <p className="golden-spotlight__intro">海で過ごす4日間と、自分の足で旅をつくる6日間。4月30日にふたつの旅がつながる、9日間のプランです。</p>
          <p className="golden-spotlight__age">参加時に小学3年生〜中学3年生</p>
          <div className="golden-spotlight__price">
            {earlyBirdActive ? <p className="golden-spotlight__offer"><Sparkles size={15} aria-hidden="true" />早割で10,000円引き</p> : null}
            <p className="golden-spotlight__amount"><strong>{earlyBirdActive ? "99,800" : "109,800"}</strong><span>円</span></p>
            <p className="golden-spotlight__tax">税込・1名／実費別</p>
            {earlyBirdActive ? (
              <p className="golden-spotlight__regular">通常109,800円<br /><span>{journey.earlyBird?.deadlineLabel}</span></p>
            ) : null}
          </div>
          <a
            className="golden-spotlight__cta"
            href={`${journey.href}#price`}
            onClick={() => trackJourneyAction("view_journey", "golden-2027")}
          >
            <span>ゴールデンプランの詳細・お申し込み</span>
            <ArrowRight size={19} aria-hidden="true" />
          </a>
          <p className="golden-spotlight__note">実費：海旅20,000円前後＋お遍路20,000〜30,000円前後。4/30の保護者キャンプは別途ご案内します。</p>
        </div>
      </div>
      <footer className="golden-spotlight__footer">
        <span>海から、お遍路へ。つづけて旅する、ゴールデンウィーク。</span>
        <button
          type="button"
          disabled={!motionAllowed}
          aria-pressed={!glowPaused && motionAllowed}
          onClick={() => {
            setGlowPaused(value => !value);
            setPlaying(false);
          }}
        >
          <Sparkles size={13} aria-hidden="true" />
          {!motionAllowed ? "静かな表示" : glowPaused ? "輝きを再開" : "輝きを止める"}
        </button>
      </footer>
    </aside>
  );
}
