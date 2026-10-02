import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";

const scenes = [
  {
    src: "/manus-storage/1000004115_06c74ce0.jpg",
    alt: "水しぶきを浴びて、川旅を楽しむ子どもたち",
    label: "川で笑う。",
    width: 1474,
    height: 1110,
  },
  {
    src: "/manus-storage/img4_yamashiro_2bd8a3b4.jpg",
    alt: "山の景色を眺めながら、仲間と遍路道を歩く子どもたち",
    label: "山を歩く。",
    width: 1568,
    height: 882,
  },
  {
    src: "/manus-storage/04c0f8f6-e273-48d3-862b-c02e41546226-1_all_2087_16d1a6ff.jpg",
    alt: "青く透き通った海を泳ぐ、たくさんの魚たち",
    label: "世界に出会う。",
    width: 960,
    height: 720,
  },
];

export default function JourneyHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!motionAllowed || paused || hovered) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActive(index => (index + 1) % scenes.length);
      }
    }, 7500);
    return () => window.clearInterval(timer);
  }, [motionAllowed, paused, hovered]);

  return (
    <section
      className="school-hero"
      aria-labelledby="home-title"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-playing={motionAllowed && !paused && !hovered}
    >
      <div className="school-hero__copy">
        <p className="school-eyebrow">自然と、人と、自分に出会う。</p>
        <h1 id="home-title">
          <span>旅は、</span>
          <span>最高の</span>
          <span>学校だ。</span>
        </h1>
        <p className="school-hero__lead">
          山を歩く。川で笑う。仲間と暮らす。
          <br />
          子どもも大人も、心が動く冒険へ。
        </p>
        <div className="school-hero__actions">
          <a
            className="school-button school-button--forest"
            href="#journeys"
            onFocus={() => setPaused(true)}
          >
            次の旅を見つける <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a
            className="school-hero__first"
            href="#first"
            onFocus={() => setPaused(true)}
          >
            はじめての方へ <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="school-hero__visual">
        <div className="school-hero__scenes">
          {scenes.map((scene, index) => (
            <img
              className={`school-hero__image school-hero__image--${index + 1}`}
              key={scene.src}
              src={scene.src}
              alt={scene.alt}
              width={scene.width}
              height={scene.height}
              fetchPriority={index === 0 ? "high" : "low"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "auto" : "async"}
              data-active={active === index}
              aria-hidden={active !== index}
            />
          ))}
        </div>
        <div className="school-hero__shade" />
        <p className="school-hero__signature">
          TABIGAKU JOURNEYS<span>徳島・神山から、その先へ。</span>
        </p>
        <div className="school-hero__footer">
          <div className="school-hero__scene-label">
            <small>これまでの旅から</small>
            <p>{scenes[active].label}</p>
          </div>
          <div
            className="school-hero__controls"
            role="group"
            aria-label="旅の写真を選ぶ"
          >
            {scenes.map((scene, index) => (
              <button
                key={scene.src}
                type="button"
                aria-label={`${index + 1}枚目：${scene.label}`}
                aria-pressed={active === index}
                onFocus={() => setPaused(true)}
                onClick={() => {
                  setActive(index);
                  setPaused(true);
                }}
              >
                <img
                  src={scene.src}
                  alt=""
                  width="66"
                  height="46"
                  loading="lazy"
                />
                <span>0{index + 1}</span>
              </button>
            ))}
            {motionAllowed && (
              <button
                type="button"
                className="school-hero__pause"
                aria-label={
                  paused
                    ? "写真の自動切り替えを再開"
                    : "写真の自動切り替えを停止"
                }
                onClick={() => setPaused(value => !value)}
              >
                {paused ? (
                  <Play size={14} aria-hidden="true" />
                ) : (
                  <Pause size={14} aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
