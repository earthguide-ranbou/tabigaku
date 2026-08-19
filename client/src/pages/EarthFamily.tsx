import { useEffect } from "react";

const IMG = "/efj/";
const FORM = "https://1lejend.com/stepmail/kd.php?no=flieylTa";
const TEL = "tel:09075188816";

export default function EarthFamily() {
  useEffect(() => {
    const TITLE = "地球家族ジャーニー 2026｜祝島から神山へ 10日間の旅｜旅する学校";
    const DESC = "2026年8月5日(水)出発。山口・祝島から徳島・神山へ、魂が震え、命が喜ぶ10日間の旅。百姓庵・俵山ビレッジ・地球子舎・阿波おどり。少人数制（10名ほど）・親子歓迎・小学生未満ドネーション制。3つの同行プランから選べます。";
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
    setMeta("property", "og:image", "https://tabigaku.party/efj/banner-DC-eJZFy.webp");
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "Event",
      name: "地球家族ジャーニー 2026",
      description: DESC,
      startDate: "2026-08-05T11:30:00+09:00",
      endDate: "2026-08-14T15:00:00+09:00",
      location: { "@type": "Place", name: "山口・祝島 → 徳島・神山町" },
      organizer: { "@type": "Organization", name: "旅する学校（あーすガイド）", url: "https://tabigaku.party" },
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
      {/* ── HERO ── */}
      <header className="relative">
        <img src={IMG + "banner-DC-eJZFy.webp"} alt="祝島の海と伝統の舟" className="w-full object-cover" style={{ height: "clamp(300px, 60vh, 560px)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,40,34,.25), rgba(20,40,34,.55) 70%, #f7f3ea)" }} />
        <div className="absolute inset-x-0 bottom-0 pb-10 text-center text-white px-4">
          <p className="text-xs tracking-[.3em] mb-3 opacity-90">2026.8.5(水) → 8.14(金)　山口・祝島 → 徳島・神山</p>
          <h1 style={serif} className="text-4xl md:text-6xl font-black leading-tight drop-shadow">地球家族<br className="md:hidden" />ジャーニー</h1>
          <p style={serif} className="mt-3 text-lg md:text-2xl font-bold">祝島から神山へ　魂が震え、命が喜ぶ旅</p>
        </div>
      </header>

      {/* ── 導入 ── */}
      <section className="max-w-2xl mx-auto px-5 py-14 text-center">
        <p className="leading-loose text-[15px] md:text-base">
          山とともに、海とともに生きる。どこか懐かしくて、魂がふるえて、大切なものをおもいだす。<br />
          1人で、家族と、友人と——笑い楽しみながら、人生観が変わってしまうかもしれない。<br />
          そんなプレミアムな旅路へ、出発しませんか？
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["少人数制（10名ほど）", "親子・ご家族歓迎", "小学生未満はドネーション制"].map((t) => (
            <span key={t} className="text-xs md:text-sm font-bold px-4 py-2 rounded-full" style={{ background: "#1d5c4d", color: "#fff" }}>{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href={FORM} target="_blank" rel="noopener" className="inline-block px-10 py-4 rounded-full text-white font-bold text-lg shadow-lg" style={{ background: "#d65a3a" }}>同行を申し込む</a>
          <a href="#places" className="inline-block px-10 py-4 rounded-full font-bold text-lg border-2" style={{ borderColor: "#1d5c4d", color: "#1d5c4d" }}>旅先を見る</a>
        </div>
      </section>

      {/* ── らんぼうメッセージ ── */}
      <section className="py-14" style={{ background: "#1d5c4d", color: "#f7f3ea" }}>
        <div className="max-w-2xl mx-auto px-5">
          <h2 style={serif} className="text-2xl md:text-3xl font-bold text-center mb-8">いのちが喜び、<br />脳みそがスパークしちゃう旅へ</h2>
          <div className="flex items-start gap-5">
            <img src={IMG + "profile_ranbow-bO9RdlJ2.webp"} alt="らんぼう" className="w-20 h-20 rounded-full object-cover border-4 flex-shrink-0" style={{ borderColor: "#d65a3a" }} />
            <p className="leading-loose text-sm md:text-[15px]">
              どうも、らんぼうです。僕は山口県の祝島や徳島県の神山町を拠点に、国内外をガイドしてきました。そこに生きる人たちの自然と共にある暮らしや想い、自然の美しさに心を打たれ、この感動を一人でも多くの人と共有したいと思うようになったからです。<br /><br />
              そんなわけでこの夏、いのちが喜び、脳みそがスパークしちゃうような旅へご案内します。家族と共に。大切な友人と一緒に。もちろんおひとりでも、ウェルカムです。
            </p>
          </div>
        </div>
      </section>

      {/* ── 旅の道すじ ── */}
      <section id="places" className="max-w-3xl mx-auto px-5 py-16">
        <p className="text-center text-xs tracking-[.3em] font-bold" style={{ color: "#d65a3a" }}>JOURNEY</p>
        <h2 style={serif} className="text-2xl md:text-3xl font-bold text-center mt-2 mb-3">10日間の旅の道すじ</h2>
        <p className="text-center text-sm leading-relaxed mb-10">山口県でアイデンティティーを呼び覚まし、徳島の聖地で未来に触れる。<br />魂が震え、いのちが喜ぶ、忘れられない日々が待っています。</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: "hyakushoan-iWecpAcu.webp", tag: "いのちの循環", name: "株式会社 百姓庵", text: "自然と共にある暮らしを体現する場所。ここから旅は始まります。" },
            { img: "tawarayama_dusk-ekNy0sqh.webp", tag: "まなまな", name: "俵山ビレッジ", text: "山口の山里に生まれた、人と人がつながる村。ピザ窯を囲む夜は格別です。" },
            { img: "terakoya-DlVpWx4L.webp", tag: "オルタナティブスクール", name: "地球子舎＆こびとのおうちえん", text: "「話すと人生が変わる」と評判の大下さんに会える場所。" },
            { img: "iwaishima-BUClfDH1.webp", tag: "島の暮らし", name: "祝島", text: "瀬戸内に浮かぶ小さな島。島の人の暮らしに、そっと触れる時間。" },
            { img: "waterfall-DgiO-S5j.webp", tag: "地域再生の聖地", name: "神山町（徳島）", text: "森のようちえん・移住の聖地。滝と新緑、焚き火と星空。" },
            { img: "kamiyama_fire-DUPc2W-8.webp", tag: "焚き火と星空", name: "神山の夜", text: "焚き火を囲んで語らう夜。星空の下で、心がほどけていきます。" },
          ].map((p) => (
            <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-md">
              <img src={IMG + p.img} alt={p.name} className="w-full h-52 object-cover" />
              <div className="p-5">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: "#e8f0ec", color: "#1d5c4d" }}>{p.tag}</span>
                <h3 style={serif} className="font-bold text-lg mt-2">{p.name}</h3>
                <p className="text-sm mt-1 leading-relaxed text-neutral-600">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── フィナーレ ── */}
      <section className="py-14 text-center" style={{ background: "#8f2f1d", color: "#fff" }}>
        <h2 style={serif} className="text-2xl md:text-3xl font-bold px-5">感動のフィナーレは、<br />徳島の大祭・阿波おどり！</h2>
        <p style={serif} className="mt-5 text-lg opacity-90">「踊る阿呆に観る阿呆、<br />同じ阿呆なら踊らなソンソン！」</p>
        <p className="mt-5 text-sm leading-loose max-w-xl mx-auto px-5 opacity-90">魂が震え、いのちが喜ぶ。人生観がガラッと変わってしまうかもしれない。そんな忘れられない時間を、共に過ごしてみませんか？</p>
      </section>

      {/* ── 旅の風景 ── */}
      <section className="max-w-3xl mx-auto px-5 py-14">
        <h2 style={serif} className="text-xl md:text-2xl font-bold text-center mb-8">旅の風景</h2>
        <div className="grid grid-cols-3 gap-3">
          <img src={IMG + "tawarayama_people-CQqBUI8C.webp"} alt="俵山の街で笑顔の集合写真" className="rounded-xl object-cover w-full h-40 md:h-56" />
          <img src={IMG + "tawarayama_pizza-y6giHqDr.webp"} alt="ピザ窯を囲む仲間" className="rounded-xl object-cover w-full h-40 md:h-56" />
          <img src={IMG + "tawarayama_night-XN3npe2Y.webp"} alt="俵山ビレッジの夜のイベント" className="rounded-xl object-cover w-full h-40 md:h-56" />
        </div>
      </section>

      {/* ── プラン ── */}
      <section className="py-16" style={{ background: "#efe9db" }}>
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-center text-xs tracking-[.3em] font-bold" style={{ color: "#d65a3a" }}>PLANS</p>
          <h2 style={serif} className="text-2xl md:text-3xl font-bold text-center mt-2 mb-4">あなたに合った<br />3つの同行スタイル</h2>
          <p className="text-center text-sm leading-relaxed mb-10">道中の案内とコーディネートへのガイド料だけをお預かりする、仲間の旅への同行というかたち。<br />基本は移動や食事、宿泊などが実費になります。</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { plan: "Aプラン", name: "全部まるごと10日間", date: "8月5日(水) 〜 8月14日(金)", price: "100,000", meet: "8/5(水) 11:30 山口県の駅にて", bye: "8/14(金) 15:00 神山町 道の駅にて", cost: "実費（宿泊代・食事代・船賃・温泉代ほか）", best: true },
              { plan: "Bプラン", name: "山口じっくり7日間", date: "8月5日(水) 〜 8月11日(火)", price: "78,000", meet: "8/5(水) 11:30 山口県の駅にて", bye: "8/11(火) 山口にて解散", cost: "実費（宿泊代・食事代・温泉代ほか）", best: false },
              { plan: "Cプラン", name: "神山＆阿波おどり3日間", date: "8月12日(水) 〜 8月14日(金)", price: "39,000", meet: "8/12(水) 12:00 神山町 道の駅にて", bye: "8/14(金) 15:00 神山町 道の駅にて", cost: "実費（宿泊代・食事代・温泉代ほか）", best: false },
            ].map((p) => (
              <div key={p.plan} className="bg-white rounded-2xl p-6 shadow-md relative" style={p.best ? { outline: "3px solid #d65a3a" } : {}}>
                {p.best && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white px-4 py-1 rounded-full" style={{ background: "#d65a3a" }}>いちばんおすすめ</span>}
                <p className="text-xs font-bold" style={{ color: "#1d5c4d" }}>{p.plan}</p>
                <h3 style={serif} className="font-bold text-lg mt-1">{p.name}</h3>
                <p className="text-xs mt-1 text-neutral-500">{p.date}</p>
                <p className="mt-4"><span className="text-3xl font-black" style={{ color: "#1d5c4d" }}>{p.price}</span><span className="text-sm font-bold">円(税込)</span></p>
                <p className="text-xs text-neutral-500">同行のガイド料（案内・コーディネート）＋{p.cost}</p>
                <div className="text-xs mt-4 space-y-1 leading-relaxed">
                  <p><b>待ち合わせ｜</b>{p.meet}</p>
                  <p><b>お別れ｜</b>{p.bye}</p>
                </div>
                <a href={FORM} target="_blank" rel="noopener" className="block text-center mt-5 px-4 py-3 rounded-full text-white font-bold text-sm" style={{ background: "#1d5c4d" }}>このスタイルで申し込む</a>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-6 text-neutral-500">行き先は時にインスピレーションでみんなで決めたり、フレキシブルに行きます。</p>
        </div>
      </section>

      {/* ── 旅のかたち・割引・注意 ── */}
      <section className="max-w-2xl mx-auto px-5 py-14 space-y-10">
        <div>
          <h2 style={serif} className="text-xl md:text-2xl font-bold mb-4">この旅のかたち</h2>
          <p className="text-sm leading-loose">これは、らんぼうが大好きな人と場所を訪ねてまわる夏の旅。そこに、ご家族や仲間が「一緒に行きたい！」と同行してくれるかたちです。現地で落ち合って、同じ時間を過ごして、またそれぞれの暮らしへ帰っていく。おすすめの宿や便は、いくらでも相談に乗ります。<br /><br />ガイド料は、道中の案内とコーディネートへのお気持ちとしてお預かりしています。行き先は、時にはインスピレーションでみんなで決めたり、フレキシブルに。その柔らかさも、この旅ならではのおもしろさとして一緒に楽しんでください。</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 style={serif} className="text-xl font-bold mb-4">うれしい割引</h2>
          <ul className="text-sm leading-loose space-y-3">
            <li><b style={{ color: "#d65a3a" }}>らんぼう塾割引</b>｜10,000円割引（お一人様＆一家族全体で）</li>
            <li><b style={{ color: "#d65a3a" }}>家族割引</b>｜ご家族でご参加の場合、小学生以上の2人目以降のお子さまやご家族分のガイド料は、そのスタイルのガイド料の半額以上のドネーション制。「この旅の価値に期待してこれだけ応援したい！」そんな感覚に合わせて金額をお選びください。</li>
          </ul>
          <p className="text-xs mt-3 text-neutral-500">※小学生未満のお子様はドネーション制　※割引は併用可能です</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 style={serif} className="text-xl font-bold mb-4">ご参加にあたって</h2>
          <ul className="text-sm leading-loose list-disc pl-5 space-y-2">
            <li>10名ほどの少人数でじっくり巡ります（先着順）。</li>
            <li>移動は基本的に各自のお車でお願いしています。どうしても難しい方はご相談ください。</li>
            <li>みなさんの"お気持ち"が、次の未来を育てていきます。ご家族でのご参加も大歓迎です。</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 style={serif} className="text-xl font-bold mb-4">持ち物</h2>
          <div className="flex flex-wrap gap-2">
            {["カッパ上下", "半袖・短パン", "長袖・長ズボン", "汚れてもいい靴・サンダル", "ヘッドライト", "海セット（水中メガネ・水着など）", "洗面用具", "お米8合", "寝袋・マット", "虫除け・常備薬", "愛と勇気 ❤️"].map((t) => (
              <span key={t} className="text-xs px-3 py-2 rounded-full" style={{ background: "#e8f0ec", color: "#1d5c4d" }}>{t}</span>
            ))}
          </div>
          <p className="text-xs mt-4 text-neutral-500">大自然の中で過ごす時間が多い旅です。動きやすく、汚れても気にならない服装でお越しください。</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 style={serif} className="text-xl font-bold mb-4">キャンセルについて</h2>
          <ul className="text-sm leading-loose list-disc pl-5 space-y-2">
            <li>7日前まで：20,000円（ガイド料より）</li>
            <li>6日前以降〜当日：ガイド料全額をお預かりします（現地の方々との調整や準備があるため、ご了承ください）</li>
          </ul>
        </div>
      </section>

      {/* ── ガイド紹介 ── */}
      <section className="py-14" style={{ background: "#1d5c4d", color: "#f7f3ea" }}>
        <div className="max-w-2xl mx-auto px-5">
          <p className="text-center text-xs tracking-[.3em] font-bold opacity-80">GUIDE</p>
          <h2 style={serif} className="text-2xl md:text-3xl font-bold text-center mt-2 mb-8">ガイドは、<br />あーすガイド・らんぼう</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={IMG + "profile_ranbow-bO9RdlJ2.webp"} alt="あーすガイド・らんぼう" className="w-32 h-32 rounded-full object-cover border-4 flex-shrink-0" style={{ borderColor: "#d65a3a" }} />
            <div>
              <p className="font-bold mb-2">あーすガイド代表・旅する学校主宰</p>
              <p className="text-sm leading-loose opacity-90">地球一周を皮切りに10年の旅暮らしを経て、マサイ族の村やアマゾン、モンゴルなど世界各地で"自然と共に生きる叡智"を学ぶ。帰国後は全国で500本以上のトーク・上映会・ガイドツアーを実施し、案内した40人以上が各地に移住。2022年、徳島・神山町でオルタナティブスクール「森の学校みっけ」を仲間と設立。地域再生の聖地・神山町を拠点に、企業研修や視察ガイドも行う。</p>
            </div>
          </div>
          <ul className="text-sm leading-loose mt-6 space-y-1 opacity-90">
            <li>🗣 全国で500本以上の講演・上映会</li>
            <li>🏜 アタカマ砂漠250km チーム優勝（映画化）</li>
            <li>🏫 森の学校みっけ 創設（移住60人以上）</li>
            <li>🥾 旅する学校 主宰｜安藤財団 推奨モデル特別賞(2023)</li>
            <li>🎓 KAMIYAMA FIELD SCHOOL 設立(2026)</li>
          </ul>
          <p style={serif} className="mt-8 text-center leading-loose">「心が喜ぶ方へ、身体ごと飛び込んでみませんか？ 自然の中に帰ることで、見えてくる"ほんとの自分"。気がつけば、笑って、泣いて、語って、地球を丸ごと感じる旅になると思います」<br />— らんぼう</p>
          <p className="text-center mt-6"><a href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener" className="underline text-sm">あーすガイド公式サイトを見る</a></p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 text-center px-5">
        <h2 style={serif} className="text-2xl md:text-3xl font-bold leading-relaxed">心が喜ぶ方へ、<br />身体ごと飛び込んでみませんか？</h2>
        <p className="mt-4 text-sm leading-loose">家族と共に。大切な友人と一緒に。もちろんおひとりでも、ウェルカムです。<br />お会いできるのを、心から楽しみにしています。</p>
        <a href={FORM} target="_blank" rel="noopener" className="inline-block mt-8 px-14 py-5 rounded-full text-white font-bold text-xl shadow-xl" style={{ background: "#d65a3a" }}>申込フォームへ進む</a>
        <p className="mt-5 text-sm">📞 <a href={TEL} className="underline font-bold">電話で相談する（090-7518-8816）</a></p>
        <p className="mt-3 text-xs text-neutral-500">少人数制（10名ほど・先着順）｜2026年8月5日集合予定</p>
        <p className="mt-6 text-xs text-neutral-500">お問い合わせ｜メール <a href="mailto:earthguide.jpn@gmail.com" className="underline">earthguide.jpn@gmail.com</a>（件名は「地球家族ジャーニー」としてお送りください）</p>
      </section>


      {/* ── 参加の入口 ── */}
      <section className="py-16" style={{ background: "#efe9db" }}>
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-center text-xs tracking-[.3em] font-bold mb-4" style={{ color: "#d65a3a" }}>HOW TO JOIN</p>
          <h2 style={serif} className="text-2xl md:text-3xl font-bold text-center mb-3">あなたに合った、参加のかたち</h2>
          <p className="text-center text-sm leading-relaxed mb-10 max-w-xl mx-auto">一つに絞らなくていい。あなたの今の気持ちや状況に合わせて、関わり方を選んでください。</p>

          <div className="grid md:grid-cols-2 gap-5">
            {/* ① 旅へ参加 */}
            <a href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-white px-3 py-1 rounded-full" style={{ background: "#1d5c4d" }}>旅へ参加</span>
                <span className="text-xs text-neutral-400">学生・子育て世代</span>
              </div>
              <h3 style={serif} className="text-lg font-bold mb-2 group-hover:underline">一緒に旅に出る</h3>
              <p className="text-sm leading-relaxed text-neutral-600 mb-3">家族や友人と、あるいはひとりで、海や山、島や里山を巡る旅へ。現地で生きる人たちと向き合い、自然の中で体を動かし、対話を重ねる。参加費（案内・コーディネート代）と実費（宿泊・食事・移動など各自）のかたち。</p>
              <p className="text-sm font-bold" style={{ color: "#d65a3a" }}>詳しく見る →</p>
            </a>

            {/* ② らんぼう塾 */}
            <a href="https://www.tabigaku.party/juku" target="_blank" rel="noopener" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-white px-3 py-1 rounded-full" style={{ background: "#1d5c4d" }}>学びの場</span>
                <span className="text-xs text-neutral-400">学びたい人</span>
              </div>
              <h3 style={serif} className="text-lg font-bold mb-2 group-hover:underline">らんぼう塾で学ぶ</h3>
              <p className="text-sm leading-relaxed text-neutral-600 mb-3">旅の仕方、対話の仕方、地域との関わり方、子育てのヒント。らんぼうが実践してきたことを、オンラインや対面で学ぶコミュニティ。自分の足で歩き始めるための、最初の一歩。</p>
              <p className="text-sm font-bold" style={{ color: "#d65a3a" }}>詳しく見る →</p>
            </a>

            {/* ③ 教育スポンサー */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-white px-3 py-1 rounded-full" style={{ background: "#d65a3a" }}>子どもを応援</span>
                <span className="text-xs text-neutral-400">子どもを応援したい人</span>
              </div>
              <h3 style={serif} className="text-lg font-bold mb-2">教育スポンサーになる</h3>
              <p className="text-sm leading-relaxed text-neutral-600 mb-3">神山の学校や、旅する学校の活動を、金銭的に応援するかたち。子どもたちが自然の中で学び、大人たちが共に育つ場を、あなたの力で支えてください。毎月の支援や、一回きりのご支援が可能です。</p>
              <a href="https://lin.ee/odygMT3" target="_blank" rel="noopener" className="inline-block text-sm font-bold px-4 py-2 rounded-full text-white" style={{ background: "#d65a3a" }}>相談する（LINE）</a>
            </div>

            {/* ④ ビジョン共有パートナーシップ */}
            <div className="bg-white rounded-2xl p-6 shadow-md" style={{ outline: "2px solid #1d5c4d" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-white px-3 py-1 rounded-full" style={{ background: "#1d5c4d" }}>ビジョン共有</span>
                <span className="text-xs text-neutral-400">大口支援者・企業</span>
              </div>
              <h3 style={serif} className="text-lg font-bold mb-2">パートナーシップを組む</h3>
              <p className="text-sm leading-relaxed text-neutral-600 mb-3">年間100万円〜200万円規模で、Earth Family Journey のビジョンを共に実現するパートナー。定期的な対話の場への参加、活動レポートの共有、戦略的な協働を通じて、一緒に未来をつくります。</p>
              <a href="https://lin.ee/odygMT3" target="_blank" rel="noopener" className="inline-block text-sm font-bold px-4 py-2 rounded-full text-white" style={{ background: "#1d5c4d" }}>詳細を相談する（LINE）</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 締めくくり ── */}
      <section className="py-16 text-center" style={{ background: "#1d5c4d", color: "#f7f3ea" }}>
        <div className="max-w-2xl mx-auto px-5">
          <p className="text-xs tracking-[.3em] mb-4 opacity-80">EARTH FAMILY JOURNEY</p>
          <h2 style={serif} className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">あなたは、<br/>どんな形で未来へ参加しますか？</h2>
          <p className="text-sm leading-loose opacity-95 mb-8">寄付をお願いするのではなく、一緒に未来をつくる仲間になってほしい。旅に出るもよし、学ぶもよし、応援するもよし、ビジョンを共に実現するもよし。あなたの「参加」のかたちを、教えてください。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={FORM} target="_blank" rel="noopener" className="inline-block px-8 py-4 rounded-full text-white font-bold text-base shadow-lg" style={{ background: "#d65a3a" }}>申込フォームへ進む</a>
            <a href="https://lin.ee/odygMT3" target="_blank" rel="noopener" className="inline-block px-8 py-4 rounded-full font-bold text-base border-2" style={{ borderColor: "#f7f3ea", color: "#f7f3ea" }}>まず話を聞いてみる（LINE）</a>
          </div>
        </div>
      </section>
      <footer className="text-center text-xs text-neutral-500 pb-10 px-5 leading-loose">
        企画・運営｜あーすガイド（らんぼう）／ 旅する学校<br />
        <a href="https://earthguide.tabigaku.party/" target="_blank" rel="noopener" className="underline">あーすガイド公式サイト</a>　<a href="https://note.com/shiftdaigaku" target="_blank" rel="noopener" className="underline">元になったnote記事</a><br />
        © 2026 Earth Guide / Tabisuru Gakko.
      </footer>
    </div>
  );
}
