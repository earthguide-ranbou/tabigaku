import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ArrowRight, Award } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Section, SectionHeader } from "@/components/ui/section";

// Image URLs (uploaded to webdev storage)
const HERO_IMAGE = "/manus-storage/hero_main_5a5ffa43.jpg";
const GROUP_PHOTO = "/manus-storage/group_photo_road_24eb956b.jpg";
const TOKUSHIMA_SHIMBUN = "/manus-storage/tokushima_shimbun_e14fdcec.jpg";
const BG_TEXTURE = "/manus-storage/bg_texture_paper_6f447ab3.png";

// New journey images
const SHIMA_JOURNEY = "/manus-storage/shima_journey_2ebfd8b8.jpg";
const CHIKYU_KAZOKU = "/manus-storage/chikyu_kazoku_bb8481e1.jpg";
const OHENRO_JOURNEY = "/manus-storage/ohenro_journey_147ce8dd.jpg";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScrollY, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScrollY, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src={HERO_IMAGE}
            alt="旅する学校 Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container relative z-10 text-center text-white px-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl font-medium mb-4 tracking-widest"
          >
            わくわくとドキドキがきたらGOサイン
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-9xl font-serif font-black mb-8 leading-tight"
          >
            旅する学校
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              新たな旅に出発しよう！
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/80">
          <span className="text-sm tracking-widest">SCROLL</span>
        </div>
      </div>

      {/* About Section */}
      <Section id="about" className="py-24 md:py-32 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeader title="旅こそが学校" subtitle="ABOUT US" />
            <div className="prose prose-xl text-muted-foreground space-y-8 text-left">
              <p className="leading-loose">
                未知なる世界に飛び出し、
                <br className="hidden md:block" />
                自然の中でめーいっぱい身体を動かす。
              </p>
              <p className="leading-loose pt-4">
                自分はどこから来て、今どこにいて、どこへ向かうのか？
              </p>
              <p className="leading-loose">
                先人から受け継がれてきたスピリットを感じながら、
                <br className="hidden md:block" />
                その物語を、体感として学んでゆく。
              </p>
              <p className="leading-loose pt-4">「あ〜生きてて良かったなぁ〜！」という</p>
              <p className="leading-loose">いのちが喜ぶ瞬間を、積み重ねながら。</p>
              <p className="leading-loose pt-4">歩きお遍路、川旅、海旅など</p>
              <p className="leading-loose">
                旅する学校では、自然の中で
                <br className="hidden md:block" />
                子どもたちと可能性の枠をひろげ、
                <br className="hidden md:block" />
                地球と共にあるよりよい未来を創造してゆきます。
              </p>
            </div>

            <div className="mt-10 bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">安藤財団 特別推奨モデル賞受賞</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    2023年度 安藤スポーツ・食文化振興財団より、私たちの活動「子どもたちといく4泊5日の秋のお遍路巡礼の旅」が表彰されました。
                  </p>
                  <Link
                    href="/award"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4 text-sm cursor-pointer"
                  >
                    詳細を見る <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={GROUP_PHOTO}
                alt="Group Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
          </div>
        </div>
      </Section>

      {/* Media Section */}
      <Section background="muted" className="py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50"
          >
            <div className="flex flex-col md:flex-row gap-0">
              <div className="w-full md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <img
                    src={TOKUSHIMA_SHIMBUN}
                    alt="徳島新聞掲載記事"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 p-8">
                <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">
                  新聞掲載
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                  徳島新聞に
                  <br className="md:hidden" />
                  掲載されました
                </h3>
                <p className="text-muted-foreground leading-relaxed text-left">
                  私たちの活動「歩き遍路ジャーニー」が徳島新聞に取り上げられました。
                  子どもたちが60kmの道のりを踏破し、地域の方々と触れ合いながら成長していく様子が紹介されています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Journeys Section - 現在募集中の旅 */}
      <Section id="journeys" background="muted" className="py-24">
        <SectionHeader title="現在募集中の旅" subtitle="UPCOMING JOURNEYS" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* Journey 1: 島旅ジャーニー in 祝島 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group bg-background rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={SHIMA_JOURNEY}
                alt="島旅ジャーニー in 祝島"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">募集中</span>
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">4日間</span>
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">小中高生向け</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>2026年7月17日(金)〜20日(月祝)</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                🎣 島旅ジャーニー in 祝島
                <span className="text-base font-normal block mt-1">
                  〜釣って、泳いで、冒険して。海が大好きな子どもたち集まれ！〜
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 flex-1 text-sm text-left leading-relaxed">
                釣って、泳いで、冒険して。海が大好きな子どもたちよ、祝島で夏の思い出を作ろう！
              </p>
              <a
                href="https://note.com/shiftdaigaku/n/n0101bea42a11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                詳細・お申し込み
              </a>
            </div>
          </motion.div>

          {/* Journey 2: 地球家族ジャーニー */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group bg-background rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={CHIKYU_KAZOKU}
                alt="地球家族ジャーニー"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">募集中</span>
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">10日間</span>
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">家族向け</span>
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">途中参加OK</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>8月5日(水)〜8月14日(金)（途中参加OK）</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                🌊 地球家族ジャーニー
                <span className="text-base font-normal block mt-1">
                  〜祝島から神山へ 魂が震え、命が喜ぶ旅〜
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 flex-1 text-sm text-left leading-relaxed">
                祝島から神山へ。魂が震え、命が喜ぶ旅。家族で参加できる特別な夏の体験。途中参加も歓迎。
              </p>
              <a
                href="https://note.com/shiftdaigaku/n/nf42ffcc4f0a9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                詳細・お申し込み
              </a>
            </div>
          </motion.div>

          {/* Journey 3: 歩きお遍路ジャーニー */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group bg-background rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col"
          >
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={OHENRO_JOURNEY}
                alt="歩きお遍路ジャーニー"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">募集中</span>
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">5日間</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>10月23日(金)〜10月27日(火)</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                歩きお遍路ジャーニー
                <span className="text-base font-normal block mt-1">
                  ―神足歩行術で行く、発心の道場5日間の巻―
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 flex-1 text-sm text-left leading-relaxed">
                神足歩行術で行く、発心の道場5日間。古の身体技法を学び、疲れ知らずの体で聖地を巡る特別な旅。
              </p>
              <a
                href="https://note.com/shiftdaigaku/n/n634f9c0f4663"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                詳細・お申し込み
              </a>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* CTA Section */}
      <Section
        background="image"
        backgroundImage={BG_TEXTURE}
        className="py-32 text-center"
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-foreground inline-block">
            さあ、冒険の始まりだ。
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed px-4">
            自然の中で、仲間と共に、
            <br className="hidden md:block" />
            一生忘れられない思い出を作りませんか？
          </p>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col gap-4 max-w-md w-full text-foreground">
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold mb-1">TEL</span>
                <a
                  href="tel:09075188816"
                  className="text-3xl font-bold hover:text-primary transition-colors tracking-wider"
                >
                  090-7518-8816
                </a>
              </div>
              <a
                href="mailto:earthguide.jpn@gmail.com"
                className="text-xl font-medium hover:text-primary transition-colors break-all text-center"
              >
                earthguide.jpn@gmail.com
              </a>
            </div>
            <a
              href="https://note.com/shiftdaigaku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-xl w-full max-w-xs md:max-w-none"
            >
              Noteでブログを読む <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
