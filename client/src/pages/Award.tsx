import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function AwardPage() {
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
            <div className="bg-yellow-100 p-4 rounded-full">
              <Award className="w-10 h-10 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-primary font-bold tracking-widest uppercase mb-1">AWARD</p>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">受賞歴</h1>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-serif font-bold mb-4">
              安藤財団 特別推奨モデル賞受賞
            </h2>
            <p className="text-sm text-muted-foreground mb-6">2023年度</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              2023年度 安藤スポーツ・食文化振興財団より、私たちの活動「子どもたちといく4泊5日の秋のお遍路巡礼の旅」が特別推奨モデル賞として表彰されました。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              この受賞は、子どもたちの成長と地域文化の継承に貢献する活動として高く評価されたものです。
              今後も旅する学校は、子どもたちの可能性を広げる体験を提供し続けます。
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
