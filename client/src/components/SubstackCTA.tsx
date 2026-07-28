/**
 * SubstackCTA — メルマガ登録導線（軍配 KPI宣言: Substack登録者数）
 * 写真＋ベネフィット箇条書きで登録動機を強化
 */
export default function SubstackCTA() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#1d5c4d" }}>
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <img
            src="/manus-storage/kids_kasa_f5b7d7f3.jpg"
            alt="旅のようす"
            loading="lazy"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-2xl shadow-xl flex-shrink-0"
            style={{ transform: "rotate(-2deg)" }}
          />
          <div className="text-center md:text-left">
            <p className="text-xs font-bold tracking-[0.3em] text-white/60 mb-2">NEWSLETTER</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">旅は、メルマガからはじまる。</h2>
            <ul className="text-sm md:text-base text-white/90 leading-loose mb-3 inline-block text-left">
              <li>✓ 新しいJourneyの先行案内</li>
              <li>✓ 早割・限定募集のお知らせ</li>
              <li>✓ 旅の裏側レポート</li>
            </ul>
            <p className="text-xs text-white/60 mb-6">月1〜2回・登録無料・いつでも解除できます</p>
            <div className="bg-white rounded-2xl px-4 py-4 shadow-xl w-full max-w-[440px] mx-auto md:mx-0">
              <iframe
                src="https://ranbou.substack.com/embed?no_posts=true"
                width="100%"
                height="110"
                style={{ border: "none", background: "white" }}
                frameBorder="0"
                scrolling="no"
                title="Substackメルマガ登録"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
