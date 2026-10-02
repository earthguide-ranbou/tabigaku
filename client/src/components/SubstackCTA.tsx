import { ArrowUpRight } from "lucide-react";
export default function SubstackCTA() {
  return (
    <section className="bg-[#193d32] px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xs tracking-widest mb-3">
            LETTER FROM THE JOURNEY
          </p>
          <h2 className="font-serif text-2xl mb-2">旅のつづきを、お便りで。</h2>
          <p className="text-sm text-white/80">
            新しい旅のご案内と、旅先で出会った物語。
          </p>
        </div>
        <a
          href="https://ranbou.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-6 border border-white/60 px-6 py-4 text-sm font-bold"
        >
          お便りを受け取る <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
