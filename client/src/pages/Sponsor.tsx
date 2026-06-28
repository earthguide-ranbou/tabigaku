import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Check, ArrowRight } from "lucide-react";

const plans = [
  {
    tier: "ブロンズ",
    amount: "¥5,000〜",
    benefits: ["活動報告メール"],
    featured: false,
    color: "from-amber-900/10 to-amber-800/5",
    borderColor: "border-amber-800/20",
    tierColor: "text-amber-700",
  },
  {
    tier: "シルバー",
    amount: "¥10,000〜",
    benefits: ["限定ラジオ", "活動報告メール"],
    featured: false,
    color: "from-slate-400/10 to-slate-300/5",
    borderColor: "border-slate-400/20",
    tierColor: "text-slate-600",
  },
  {
    tier: "ゴールド",
    amount: "¥50,000〜",
    benefits: ["ロゴ掲載", "限定ラジオ", "活動報告メール"],
    featured: false,
    color: "from-yellow-500/10 to-yellow-400/5",
    borderColor: "border-yellow-500/20",
    tierColor: "text-yellow-700",
  },
  {
    tier: "プラチナ",
    amount: "¥500,000〜",
    benefits: ["年間パス", "ロゴ掲載", "限定ラジオ", "活動報告メール"],
    featured: true,
    color: "from-primary/12 to-primary/5",
    borderColor: "border-primary/40",
    tierColor: "text-primary",
  },
];

export default function SponsorPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Page header */}
      <div className="pt-36 pb-16 bg-muted/40 border-b border-border/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <p className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary/70 mb-4">
              SPONSOR
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-6">
              スポンサーになる
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              子どもたちの冒険を、一緒に支えてください。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto py-20 md:py-28">
        <div className="max-w-4xl mx-auto">

          {/* Intro section */}
          <motion.div
            id="sponsor-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-50 border border-red-100 p-3.5 rounded-full">
                <Heart className="w-7 h-7 text-red-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                子どもたちの冒険を支えてください
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg pl-0 md:pl-16">
              <p>
                旅する学校は、子どもたちが自然の中で本物の体験をするための場を提供しています。
                あなたのご支援が、子どもたちの一生の思い出と成長につながります。
              </p>
              <p>
                スポンサーとして参加いただくことで、旅する学校の活動を継続・発展させることができます。
                ご支援いただいた方には、活動報告や子どもたちからのメッセージをお届けします。
              </p>
            </div>
          </motion.div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                className={`relative rounded-2xl border ${plan.borderColor} bg-gradient-to-br ${plan.color} p-7 flex flex-col gap-4 ${
                  plan.featured ? "shadow-xl" : "shadow-sm"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[0.6rem] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow">
                    おすすめ
                  </span>
                )}
                <div>
                  <h3 className={`text-sm font-bold tracking-widest uppercase mb-1 ${plan.tierColor}`}>
                    {plan.tier}
                  </h3>
                  <p className="text-3xl font-serif font-black text-foreground">{plan.amount}</p>
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <Check className={`w-4 h-4 shrink-0 ${plan.tierColor}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <a
              href="https://share.google/6VQmg2ssLUc3mu2TS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-primary/20"
            >
              スポンサーに申し込む
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-muted-foreground mt-5">
              まずはお気軽にメールにてお問い合わせください
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
