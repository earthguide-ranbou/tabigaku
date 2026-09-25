import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import "./saijai.css";

const official = "https://saaijai-village.com";
const ways = [
  {
    number: "01",
    title: "湖の上に、泊まる。",
    image: "saijai-stay.jpg",
    alt: "竹の壁と木の床に囲まれたサイジャイの客室",
    text: "朝、目の前に湖がある。泳いだり、本を読んだり、何もせずに過ごしたり。ひとりでも、家族でも、仲間と一緒でも。",
    href: "/stay/",
    link: "宿泊の案内を見る",
  },
  {
    number: "02",
    title: "村づくりに、加わる。",
    image: "saijai-life.webp",
    alt: "サイジャイで過ごす湖のそばの時間",
    text: "SaaiJai familyは、みんなで相談しながら、この場所を育てていく仲間。現地で手を動かすことも、離れた場所から関わることも。",
    href: "/murabito/",
    link: "SaaiJai familyを知る",
  },
  {
    number: "03",
    title: "暮らしの中で、学ぶ。",
    image: "saijai-family.webp",
    alt: "サイジャイから眺める夕焼けの湖",
    text: "湖で遊び、初めて会う人とごはんを食べる。水や電気をどう使うか考える。子どもも大人も、一緒に学ぶ時間をつくっていきます。",
    href: "/worldschooling/",
    link: "ワールドスクーリングを見る",
  },
];

export default function Saijai() {
  useSEO({
    title: "SaaiJai Village｜湖にエコビレッジをつくろう",
    description:
      "タイ・チェンマイ郊外、湖に浮かぶサーイジャイヴィレッジ。らんぼうも村づくりに関わるこの場所で、泊まる、学ぶ、一緒につくる。",
    ogUrl: "/saijai",
    canonical: "/saijai",
    ogImage: "https://www.tabigaku.party/images/saijai-lake.jpg",
  });
  return (
    <div className="saijai-page">
      <Navigation />
      <main>
        <section className="sj-hero" aria-labelledby="saijai-title">
          <img
            className="sj-hero-image"
            src="/images/saijai-lake.jpg"
            alt="緑の山々に囲まれた湖に浮かぶサイジャイヴィレッジ"
            fetchPriority="high"
          />
          <div className="sj-hero-shade" />
          <div className="sj-wrap sj-hero-content">
            <p className="sj-eyebrow">THAILAND · CHIANG MAI</p>
            <p className="sj-name">SaaiJai Village</p>
            <h1 id="saijai-title">
              湖にエコビレッジを
              <br />
              つくろう。
            </h1>
            <p className="sj-hero-copy">
              小舟でたどり着く、湖の上の暮らし。
              <br />
              ここから、一緒にはじめませんか。
            </p>
            <a className="sj-button sj-button-light" href="#saijai-about">
              サイジャイって、どんな場所？{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <span className="sj-hero-caption">
            サーイジャイヴィレッジ · タイ北部
          </span>
        </section>

        <section className="sj-wrap sj-intro" id="saijai-about">
          <div>
            <p className="sj-eyebrow">A PLACE TO COME BACK TO</p>
            <h2>
              旅先に、
              <br />
              また帰りたい場所ができた。
            </h2>
          </div>
          <div className="sj-prose">
            <p>
              タイ・チェンマイ郊外のシーランナー国立公園（Sri Lanna National
              Park）。山に囲まれた湖の上に、サイジャイはあります。
            </p>
            <p>
              僕たち家族も、ここで数日間を過ごしました。湖で遊んで、ごはんを食べて、人と話す。そんな毎日の中に、子どもも大人も楽しめる時間がありました。
            </p>
            <p>
              以前は「OmWaters
              Thailand」と呼ばれていたこの場所。今はサイジャイヴィレッジとして、建物を直しながら、これからの暮らしをみんなでつくろうとしています。僕も、その仲間として関わっています。
            </p>
            <p className="sj-signature">旅する学校 / らんぼう</p>
          </div>
        </section>

        <section className="sj-ways" aria-labelledby="saijai-ways">
          <div className="sj-wrap">
            <p className="sj-eyebrow">STAY · CONNECT · LEARN</p>
            <h2 id="saijai-ways">あなたに合う関わり方で。</h2>
            <div className="sj-grid">
              {ways.map(way => (
                <article className="sj-card" key={way.number}>
                  <img
                    src={`/images/${way.image}`}
                    alt={way.alt}
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="sj-card-body">
                    <span className="sj-number">{way.number}</span>
                    <h3>{way.title}</h3>
                    <p>{way.text}</p>
                    <a
                      href={`${official}${way.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {way.link}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sj-wrap sj-support">
          <div>
            <p className="sj-eyebrow">GROW THIS VILLAGE TOGETHER</p>
            <h2>
              「また来てね」が、
              <br />
              続いていくように。
            </h2>
          </div>
          <div className="sj-prose">
            <p>
              傷んだ建物の修繕など、この場所を受け継いでいくために、少しずつ手を入れています。現地へ行くのはまだ先でも、村づくりを応援する形でつながってもらえたらうれしいです。
            </p>
            <a
              className="sj-text-link"
              href={`${official}/support/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              応援・スポンサーについて{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="sj-visit">
          <div className="sj-wrap">
            <p className="sj-eyebrow">SEE YOU BY THE LAKE</p>
            <h2>
              まずは、湖の暮らしを
              <br className="sj-mobile-break" />
              のぞいてみてください。
            </h2>
            <p>
              宿泊プランや料金、空き状況は公式サイトでご案内しています。
              <br />
              食事はケータリングの相談や自炊もできます。
            </p>
            <div className="sj-actions">
              <a
                className="sj-button sj-button-light"
                href={official}
                target="_blank"
                rel="noopener noreferrer"
              >
                サイジャイ公式サイトへ{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="sj-button sj-button-outline"
                href={`${official}/contact/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                滞在・関わり方を相談する{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <a
              className="sj-instagram"
              href="https://www.instagram.com/saaijai.village/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram · @saaijai.village ↗
            </a>
          </div>
        </section>
        <div className="sj-wrap sj-back">
          <Link href="/">← 旅する学校のホームへ</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
