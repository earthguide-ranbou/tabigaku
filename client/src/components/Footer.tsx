import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">旅する学校</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              徳島・神山発のオルタナティブな学びの場。
              旅こそが学校。自然の中で、仲間と共に、
              いのちが喜ぶ体験を積み重ねる。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/70 hover:text-background text-sm transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-background/70 hover:text-background text-sm transition-colors">
                  旅する学校とは
                </Link>
              </li>
              <li>
                <Link href="/#journeys" className="text-background/70 hover:text-background text-sm transition-colors">
                  ジャーニー
                </Link>
              </li>
              <li>
                <a href="https://kamiyamaguide-zeujjaf9.manus.space" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background text-sm transition-colors">
                  神山ガイド
                </a>
              </li>
              <li>
                <Link href="/award" className="text-background/70 hover:text-background text-sm transition-colors">
                  受賞歴
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-background/70 hover:text-background text-sm transition-colors">
                  スポンサーになる
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:09075188816"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  TEL: 090-7518-8816
                </a>
              </li>
              <li>
                <a
                  href="mailto:earthguide.jpn@gmail.com"
                  className="text-background/70 hover:text-background text-sm transition-colors break-all"
                >
                  earthguide.jpn@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://note.com/shiftdaigaku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Note
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/earthguide.ranbow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © 2024 旅する学校. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
