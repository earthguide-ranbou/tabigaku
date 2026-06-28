import { Link } from "wouter";

const socialLinks = [
  { label: "Note", href: "https://note.com/shiftdaigaku" },
  { label: "Instagram", href: "https://www.instagram.com/earthguide.ranbow" },
  { label: "Facebook", href: "https://www.facebook.com/share/1CsBs21r2B/" },
  { label: "Threads", href: "https://www.threads.com/@earthguide.ranbow" },
  { label: "Substack", href: "https://substack.com/@ranbou?utm_source=share&utm_medium=android&r=33vqvi" },
];

const navLinks = [
  { label: "ホーム", href: "/", internal: true },
  { label: "旅する学校とは", href: "/#about", internal: true },
  { label: "Journey", href: "/#journeys", internal: true },
  { label: "神山ガイド", href: "https://kamiyamaguide-zeujjaf9.manus.space" },
  { label: "ガイド紹介", href: "https://kamiyamaguide-zeujjaf9.manus.space/guide" },
  { label: "受賞歴", href: "/award", internal: true },
  { label: "スポンサーになる", href: "/sponsor", internal: true },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-serif font-black tracking-widest mb-3">旅する学校</h3>
            <p className="text-background/55 text-sm leading-relaxed mb-6 max-w-xs">
              らんぼうと行くオルタナティブな学びの場。
              旅こそが学校。自然の中で、仲間と共に、
              いのちが喜ぶ体験を積み重ねる。
            </p>
            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.7rem] font-bold tracking-widest uppercase text-background/50 hover:text-background border border-background/20 hover:border-background/50 px-3 py-1.5 rounded-full transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-background/40 mb-5">
              Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) =>
                link.internal ? (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/65 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/65 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-background/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:09075188816"
                  className="text-sm text-background/65 hover:text-background transition-colors"
                >
                  090-7518-8816
                </a>
              </li>
              <li>
                <a
                  href="mailto:earthguide.jpn@gmail.com"
                  className="text-sm text-background/65 hover:text-background transition-colors break-all"
                >
                  earthguide.jpn@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-background/35 text-xs tracking-wide">
            © 2024 旅する学校. All rights reserved.
          </p>
          <p className="text-background/25 text-xs">
            らんぼうと行くオルタナティブな学びの場
          </p>
        </div>
      </div>
    </footer>
  );
}
