import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function SponsorPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <div className="pt-32 pb-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-100 p-4 rounded-full">
              <Heart className="w-10 h-10 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-primary font-bold tracking-widest uppercase mb-1">SPONSOR</p>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">スポンサーになる</h1>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-8">
            <h2 className="text-2xl font-serif font-bold mb-6">子どもたちの冒険を支えてください</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              旅する学校は、子どもたちが自然の中で本物の体験をするための場を提供しています。
              あなたのご支援が、子どもたちの一生の思い出と成長につながります。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              スポンサーとして参加いただくことで、旅する学校の活動を継続・発展させることができます。
              ご支援いただいた方には、活動報告や子どもたちからのメッセージをお届けします。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { tier: "ブロンズ", amount: "¥3,000/月", benefits: "活動報告メール" },
                { tier: "シルバー", amount: "¥10,000/月", benefits: "活動報告 + お礼状" },
                { tier: "ゴールド", amount: "¥30,000/月", benefits: "活動報告 + お礼状 + ロゴ掲載" },
              ].map((plan) => (
                <div key={plan.tier} className="bg-muted rounded-xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{plan.tier}</h3>
                  <p className="text-2xl font-bold text-primary mb-3">{plan.amount}</p>
                  <p className="text-sm text-muted-foreground">{plan.benefits}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="mailto:earthguide.jpn@gmail.com?subject=スポンサーについて"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
              >
                スポンサーに申し込む
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                まずはお気軽にメールにてお問い合わせください
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
