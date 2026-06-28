import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, FileText, ExternalLink } from "lucide-react";

export default function AwardPage() {
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
              AWARD
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-6">
              受賞歴
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              旅する学校の活動が認められた受賞・掲載の記録。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-l-2xl z-10" />

            {/* Award image */}
            <div className="w-full">
              <img
                src="/manus-storage/award_2023_687524ae.png"
                alt="2023年 推奨モデル特別賞受賞"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-5 mb-8">
                <div className="bg-amber-50 border border-amber-200/60 p-3.5 rounded-full shrink-0">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <span className="inline-block text-[0.65rem] font-bold tracking-[0.2em] uppercase text-primary/70 mb-2">
                    2023年度
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                    安藤財団 特別推奨モデル賞受賞
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg pl-0 md:pl-16 mb-8">
                <p>
                  2023年度 安藤スポーツ・食文化振興財団より、私たちの活動「子どもたちといく4泊5日の秋のお遍路巡礼の旅」が特別推奨モデル賞として表彰されました。
                </p>
                <p>
                  この受賞は、子どもたちの成長と地域文化の継承に貢献する活動として高く評価されたものです。
                  今後も旅する学校は、子どもたちの可能性を広げる体験を提供し続けます。
                </p>
              </div>

              {/* PDF link */}
              <div className="pl-0 md:pl-16">
                <a
                  href="https://share.google/1obAqzhnklMoKelRL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-xl transition-colors duration-200 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  受賞プレスリリース（PDF）
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
