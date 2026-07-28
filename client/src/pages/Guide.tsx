import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export default function GuidePage() {
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
              GUIDE
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-6">
              神山ガイド
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              徳島県・神山から発信する、オルタナティブな旅の案内。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto py-20 md:py-28">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-emerald-50 border border-emerald-200/60 p-3.5 rounded-full shrink-0">
                <MapPin className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight pt-1">
                神山について
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg mb-10">
              <p>
                徳島県神山町は、四国の山間部に位置する人口約5,000人の小さな町です。
                近年、クリエイターやIT企業のサテライトオフィスが集まる「創造的過疎」の地として注目を集めています。
              </p>
              <p>
                旅する学校では、この神山を拠点に、豊かな自然と地域の人々との交流を通じた体験学習を行っています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-muted/60 rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-base mb-3 text-foreground">アクセス</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  徳島駅からバスで約1時間30分。
                  自然豊かな山間の町です。
                </p>
              </div>
              <div className="bg-muted/60 rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-base mb-3 text-foreground">見どころ</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  清流・鮎喰川、棚田、古民家、
                  アーティスト・イン・レジデンスなど。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Link to full guide site */}
          <motion.a
            href="https://kamiyamag.tabigaku.party"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="group flex items-center justify-between bg-primary/8 hover:bg-primary/12 border border-primary/20 hover:border-primary/40 rounded-2xl p-7 transition-all duration-200 cursor-pointer"
          >
            <div>
              <p className="text-[0.65rem] font-bold tracking-widest uppercase text-primary/60 mb-1">
                EXTERNAL SITE
              </p>
              <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                神山ガイド 公式サイトへ
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                らんぼうによる神山の詳細ガイドはこちら
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
          </motion.a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
