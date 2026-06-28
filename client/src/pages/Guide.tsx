import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GuidePage() {
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
            <div className="bg-green-100 p-4 rounded-full">
              <MapPin className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-primary font-bold tracking-widest uppercase mb-1">GUIDE</p>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">神山ガイド</h1>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-serif font-bold mb-6">神山について</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              徳島県神山町は、四国の山間部に位置する人口約5,000人の小さな町です。
              近年、クリエイターやIT企業のサテライトオフィスが集まる「創造的過疎」の地として注目を集めています。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              旅する学校では、この神山を拠点に、豊かな自然と地域の人々との交流を通じた体験学習を行っています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-bold mb-3">アクセス</h3>
                <p className="text-sm text-muted-foreground">
                  徳島駅からバスで約1時間30分。
                  自然豊かな山間の町です。
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-bold mb-3">見どころ</h3>
                <p className="text-sm text-muted-foreground">
                  清流・鮎喰川、棚田、古民家、
                  アーティスト・イン・レジデンスなど。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
