/**
 * SubstackCTA — メルマガ登録導線（軍配 KPI宣言: Substack登録者数）
 * Journeyの募集開始・先行案内をメルマガへ繋ぐバンド
 */
export default function SubstackCTA() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#1d5c4d" }}>
      <div className="container max-w-3xl text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-white/60 mb-3">NEWSLETTER</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          旅は、メルマガからはじまる。
        </h2>
        <p className="text-sm md:text-base text-white/85 leading-relaxed mb-8">
          Journeyの募集開始・先行割引・旅の裏側レポートをいち早くお届けします。
          <br className="hidden md:block" />
          登録無料・いつでも解除できます。
        </p>
        <div className="bg-white rounded-2xl px-4 py-5 md:px-6 shadow-xl w-full max-w-[480px] mx-auto">
          <iframe
            src="https://ranbou.substack.com/embed?no_posts=true"
            width="100%"
            height="130"
            style={{ border: "none", background: "white" }}
            frameBorder="0"
            scrolling="no"
            title="Substackメルマガ登録"
          />
        </div>
        <p className="mt-5">
          <a
            href="https://ranbou.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 text-xs underline underline-offset-4 hover:text-white transition-colors"
          >
            Substackでこれまでの記事を読む →
          </a>
        </p>
      </div>
    </section>
  );
}
