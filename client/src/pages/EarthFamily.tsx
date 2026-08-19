import { useEffect } from "react";

const IMG = "/efj/";

export default function EarthFamily() {
  useEffect(() => {
    const TITLE = "Earth Family Journey｜未来の子どもたちに手渡したい地球を、ともにつくる";
    const DESC = "世界中に「おかえり」と言い合えるつながりを増やす。旅、教育、家族、地域をつなぐ活動。地球1周、対話の場づくり500回以上、神山での学校づくり。あなたはどんな形で未来へ参加しますか？";
    document.title = TITLE;
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", DESC);
    setMeta("property", "og:title", TITLE);
    setMeta("property", "og:description", DESC);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", "https://tabigaku.party/earth-family");
    setMeta("property", "og:image", "https://tabigaku.party/efj/earth-family-journey.jpg");
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "Organization",
      name: "Earth Family Journey",
      description: DESC,
      url: "https://tabigaku.party/earth-family",
      founder: { "@type": "Person", name: "らんぼう" },
    });
    document.head.appendChild(ld);
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;600;700;900&family=Zen+Maru+Gothic:wght@400;500;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { document.head.removeChild(ld); document.head.removeChild(link); };
  }, []);

  const serif = { fontFamily: "'Noto Serif JP', serif" } as const;
  const maru = { fontFamily: "'Zen Maru Gothic', sans-serif" } as const;

  return (
    <div style={{ background: "#f7f3ea", color: "#2b2b2b", ...maru }}>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <header className="relative">
        <img
          src={IMG + "earth-family-journey.jpg"}
          alt="地球家族ジャーニー"
          className="w-full object-cover"
          style={{ height: "clamp(360px, 70vh, 640px)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(20,40,34,.35), rgba(20,40,34,.6) 60%, #f7f3ea)" }}
        />
        <div className="absolute inset-x-0 bottom-0 pb-12 md:pb-16 text-center text-white px-5">
          <p className="text-xs tracking-[.35em] mb-4 opacity-90">
            EARTH FAMILY JOURNEY
          </p>
          <h1
            style={serif}
            className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg"
          >
            未来の子どもたちに
            <br />
            手渡したい地球を、
            <br className="md:hidden" />
            ともにつくる
          </h1>
          <p
            style={serif}
            className="mt-5 text-base md:text-xl font-bold opacity-95"
          >
            世界中に「おかえり」と言い合えるつながりを増やす
          </p>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          ストーリー：なぜこの活動を始めたのか
      ═══════════════════════════════════════ */}
      <section className="max-w-2xl mx-auto px-5 py-20 md:py-28">
        <p
          className="text-center text-xs tracking-[.3em] font-bold mb-6"
          style={{ color: "#d65a3a" }}
        >
          WHY WE STARTED
        </p>
        <h2
          style={serif}
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          子どものころ、遊んでいた川が
          <br />
          枯れてしまった
        </h2>
        <div className="space-y-6 text-[15px] md:text-base leading-[2.2]">
          <p>
            子どものころ、僕は毎日のように近所の川で遊んでいた。水に足をつけて、魚を追いかけて、夏はずっとそこにいた。でもある日、あの川は枯れてしまった。海に行っても、かつてのように魚が跳ねる姿は少なくなっていた。
          </p>
          <p>
            生き物が減り、人と人が分断されていく。SNSでは誰かを責めることばかりが増えて、本当の「対話」が少なくなっている。そんな世界を、未来の子どもたちに手渡していいのだろうか。
          </p>
          <p>
            だから僕は動き出した。旅をして、学校をつくって、人と人が「おかえり」と言い合える場所を、一つずつ増やしていく。
          </p>
        </div>
        <div className="mt-12 text-center">
          <img
            src={IMG + "waterfall.jpg"}
            alt="神山の滝と新緑"
            className="w-full rounded-2xl shadow-lg object-cover"
            style={{ height: "clamp(200px, 40vw, 360px)" }}
          />
          <p className="text-xs text-neutral-500 mt-3">
            徳島・神山町。森のようちえんや移住者が集まる、再生の聖地。
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ビジョン：地球再生が目的
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#1d5c4d", color: "#f7f3ea" }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p className="text-xs tracking-[.3em] font-bold mb-6 opacity-80">
            OUR VISION
          </p>
          <h2
            style={serif}
            className="text-2xl md:text-4xl font-bold mb-10 leading-relaxed"
          >
            旅そのものが目的ではない。
            <br />
            地球再生が、目的だ。
          </h2>
          <div className="space-y-6 text-[15px] md:text-base leading-[2.2] text-left opacity-95">
            <p>
              Earth Family Journey が目指すのは、もっと大きなことです。世界中の海や山、里山や島々を巡りながら、そこで生きる人たちと向き合い、子どもたちが自然の中で遊び、学び、大人たちが対話を重ねる。
            </p>
            <p>
              旅を通じて「つながり」を再生し、教育を通じて「未来」を育み、地域を通じて「場」をつくる。そうして、未来の子どもたちが「おかえり」と言い合える地球を、一緒に手渡していく。それが、僕たちの目的です。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: "1", label: "周", desc: "地球を旅した" },
              { num: "500+", label: "回", desc: "講演・上映・対話" },
              { num: "∞", label: "", desc: "神山での学校づくり" },
              { num: "多数", label: "", desc: "移住者が集まる街" },
            ].map((s) => (
              <div key={s.desc} className="py-4">
                <p className="text-3xl md:text-4xl font-black" style={{ color: "#d65a3a" }}>
                  {s.num}
                  <span className="text-lg">{s.label}</span>
                </p>
                <p className="text-xs mt-2 opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          実績・信頼の根拠
      ═══════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-5 py-20 md:py-28">
        <p
          className="text-center text-xs tracking-[.3em] font-bold mb-6"
          style={{ color: "#d65a3a" }}
        >
          TRACK RECORD
        </p>
        <h2
          style={serif}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          これまでの歩み
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              img: "tawara_people.jpg",
              title: "地球1周の旅",
              text: "世界中を旅し、各地で生きる人たちと向き合ってきた。旅は、対話の場を生み出す最良の方法のひとつ。",
            },
            {
              img: "terakoya.jpg",
              title: "講演・映画上映・対話の場づくり 500回以上",
              text: "学校、企業、地域で「話すと人生が変わる」対話の場をつくり続けてきた。",
            },
            {
              img: "hyakushoan.jpg",
              title: "神山での学校づくり",
              text: "徳島・神山町で、子どもたちが自然の中で学び、大人たちが共に育つ場をつくっている。",
            },
            {
              img: "iwaishima.jpg",
              title: "移住者が集まる街づくり",
              text: "山口・祝島や神山町など、多くの人が「おかえり」と言いたくなる場所を、一緒に育てている。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-md">
              <img
                src={IMG + item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 style={serif} className="font-bold text-lg">
                  {item.title}
                </h3>
                <p className="text-sm mt-2 leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          らんぼうメッセージ
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#efe9db" }}>
        <div className="max-w-2xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <img
              src={IMG + "profile_ranbow-bO9RdlJ2.webp"}
              alt="らんぼう"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 flex-shrink-0"
              style={{ borderColor: "#d65a3a" }}
            />
            <div>
              <h2
                style={serif}
                className="text-xl md:text-2xl font-bold mb-4"
              >
                らんぼうからのことば
              </h2>
              <p className="text-[15px] md:text-base leading-[2.2]">
                僕はガイドでもあり、父親でもあり、ただの旅好きな人間です。地球を1周して、神山で学校をつくって、毎日のように人と話しています。
                <br />
                <br />
                でも、何より大切にしているのは「おかえり」って言える場所を、もっと増やすこと。未来の子どもたちが、安心して「ただいま」って言える地球を残したい。それが、僕の本当の目的です。
                <br />
                <br />
                一緒に、未来へ参加してくれませんか。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          参加の入口：4つのかたち
      ═══════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-5 py-20 md:py-28">
        <p
          className="text-center text-xs tracking-[.3em] font-bold mb-6"
          style={{ color: "#d65a3a" }}
        >
          HOW TO JOIN
        </p>
        <h2
          style={serif}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          あなたに合った、参加のかたち
        </h2>
        <p className="text-center text-sm leading-relaxed mb-14 max-w-xl mx-auto">
          一つに絞らなくていい。あなたの今の気持ちや状況に合わせて、関わり方を選んでください。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* ① 旅へ参加 */}
          <a
            href="https://earthguide.tabigaku.party/"
            target="_blank"
            rel="noopener"
            className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full"
                style={{ background: "#1d5c4d" }}
              >
                旅へ参加
              </span>
              <span className="text-xs text-neutral-400">学生・子育て世代</span>
            </div>
            <h3 style={serif} className="text-xl font-bold mb-3 group-hover:underline">
              一緒に旅に出る
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 mb-4">
              家族や友人と、あるいはひとりで、海や山、島や里山を巡る旅へ。現地で生きる人たちと向き合い、自然の中で体を動かし、対話を重ねる。参加費（案内・コーディネート代）と実費（宿泊・食事・移動など各自）のかたち。
            </p>
            <p className="text-sm font-bold" style={{ color: "#d65a3a" }}>
              詳しく見る →
            </p>
          </a>

          {/* ② らんぼう塾 */}
          <a
            href="https://www.tabigaku.party/juku"
            target="_blank"
            rel="noopener"
            className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full"
                style={{ background: "#1d5c4d" }}
              >
                学びの場
              </span>
              <span className="text-xs text-neutral-400">学びたい人</span>
            </div>
            <h3 style={serif} className="text-xl font-bold mb-3 group-hover:underline">
              らんぼう塾で学ぶ
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 mb-4">
              旅の仕方、対話の仕方、地域との関わり方、子育てのヒント。らんぼうが実践してきことを、オンラインや対面で学ぶコミュニティ。自分の足で歩き始めるための、最初の一歩。
            </p>
            <p className="text-sm font-bold" style={{ color: "#d65a3a" }}>
              詳しく見る →
            </p>
          </a>

          {/* ③ 教育スポンサー */}
          <div className="bg-white rounded-2xl p-7 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full"
                style={{ background: "#d65a3a" }}
              >
                子どもを応援
              </span>
              <span className="text-xs text-neutral-400">子どもを応援したい人</span>
            </div>
            <h3 style={serif} className="text-xl font-bold mb-3">
              教育スポンサーになる
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 mb-4">
              神山の学校や、旅する学校の活動を、金銭的に応援するかたち。子どもたちが自然の中で学び、大人たちが共に育つ場を、あなたの力で支えてください。毎月の支援や、一回きりのご支援が可能です。
            </p>
            <a
              href="https://lin.ee/odygMT3"
              target="_blank"
              rel="noopener"
              className="inline-block text-sm font-bold px-5 py-2 rounded-full text-white"
              style={{ background: "#d65a3a" }}
            >
              相談する（LINE）
            </a>
          </div>

          {/* ④ ビジョン共有パートナーシップ */}
          <div className="bg-white rounded-2xl p-7 shadow-md" style={{ outline: "2px solid #1d5c4d" }}>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full"
                style={{ background: "#1d5c4d" }}
              >
                ビジョン共有
              </span>
              <span className="text-xs text-neutral-400">大口支援者・企業</span>
            </div>
            <h3 style={serif} className="text-xl font-bold mb-3">
              パートナーシップを組む
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 mb-4">
              年間100万円〜200万円規模で、Earth Family Journey のビジョンを共に実現するパートナー。定期的な対話の場への参加、活動レポートの共有、戦略的な協働を通じて、一緒に未来をつくります。
            </p>
            <a
              href="https://lin.ee/odygMT3"
              target="_blank"
              rel="noopener"
              className="inline-block text-sm font-bold px-5 py-2 rounded-full text-white"
              style={{ background: "#1d5c4d" }}
            >
              詳細を相談する（LINE）
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ギャラリー
      ═══════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-5 pb-20 md:pb-28">
        <h2
          style={serif}
          className="text-xl md:text-2xl font-bold text-center mb-8"
        >
          旅と、対話と、つながりの記録
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <img
            src={IMG + "tawarayama_people-CQqBUI8C.webp"}
            alt="旅の仲間たち"
            className="rounded-xl object-cover w-full h-40 md:h-52"
          />
          <img
            src={IMG + "tawarayama_pizza-y6giHqDr.webp"}
            alt="ピザ窯を囲む夜"
            className="rounded-xl object-cover w-full h-40 md:h-52"
          />
          <img
            src={IMG + "kamiyama_fire-DUPc2W-8.webp"}
            alt="神山の焚き火"
            className="rounded-xl object-cover w-full h-40 md:h-52"
          />
          <img
            src={IMG + "fire.jpg"}
            alt="焚き火と星空"
            className="rounded-xl object-cover w-full h-40 md:h-52"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          締めくくり
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 text-center" style={{ background: "#1d5c4d", color: "#f7f3ea" }}>
        <div className="max-w-2xl mx-auto px-5">
          <p className="text-xs tracking-[.3em] mb-6 opacity-80">
            EARTH FAMILY JOURNEY
          </p>
          <h2
            style={serif}
            className="text-2xl md:text-4xl font-bold mb-8 leading-relaxed"
          >
            あなたは、
            <br />
            どんな形で未来へ参加しますか？
          </h2>
          <p className="text-[15px] md:text-base leading-[2.2] opacity-95 mb-10">
            寄付をお願いするのではなく、一緒に未来をつくる仲間になってほしい。
            旅に出るもよし、学ぶもよし、応援するもよし、ビジョンを共に実現するもよし。
            あなたの「参加」のかたちを、教えてください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://earthguide.tabigaku.party/"
              target="_blank"
              rel="noopener"
              className="inline-block px-8 py-4 rounded-full text-white font-bold text-base shadow-lg"
              style={{ background: "#d65a3a" }}
            >
              旅に参加する
            </a>
            <a
              href="https://lin.ee/odygMT3"
              target="_blank"
              rel="noopener"
              className="inline-block px-8 py-4 rounded-full font-bold text-base border-2"
              style={{ borderColor: "#f7f3ea", color: "#f7f3ea" }}
            >
              まず話を聞いてみる（LINE）
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          フッター
      ═══════════════════════════════════════ */}
      <footer className="py-10 text-center text-xs" style={{ background: "#f7f3ea", color: "#888" }}>
        <p>© Earth Family Journey / 旅する学校</p>
        <p className="mt-2">
          お問い合わせ：
          <a href="https://lin.ee/odygMT3" target="_blank" rel="noopener" className="underline">
            LINE
          </a>
        </p>
      </footer>
    </div>
  );
}
