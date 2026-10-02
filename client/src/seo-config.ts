export interface PageSEO { label: string; title: string; description: string; image?: string; noindex?: boolean; canonical?: string }
export const site = {
  "name": "旅する学校",
  "alternateName": "旅する学校（あーすガイド）",
  "origin": "https://www.tabigaku.party",
  "image": "/ogp-site.jpg"
};
export const pages: Record<string, PageSEO> = {
  "/": {
    "label": "ホーム",
    "title": "旅する学校｜旅は、最高の学校だ。",
    "description": "徳島・神山を拠点に、子どもも大人も旅を通じて学ぶ「旅する学校」。四国の歩き遍路、川旅、親子の海外体験など、人と自然に出会う旅育プログラムを紹介。企画一覧、受賞歴、参加案内はこちら。"
  },
  "/henro": {
    "label": "子どもの歩きお遍路",
    "title": "子どもの歩きお遍路ジャーニー｜旅する学校",
    "description": "2026年10月10〜15日、小学3年生〜中学3年生対象の高知・歩きお遍路ジャーニー。日程、参加費と実費の目安、持ち物、参加方法をご案内します。",
    "image": "/ogp-henro.jpg"
  },
  "/henro-shinsoku": {
    "label": "神足歩行術のお遍路旅",
    "title": "神足歩行術で歩くお遍路旅｜2026年10月27〜31日・旅する学校",
    "description": "2026年10月27〜31日、徳島・発心の道場を神足歩行術で歩く5日間。大場克則とらんぼうが案内する歩きお遍路ジャーニーの内容、対象、参加費、申し込み方法をご紹介します。",
    "image": "/ogp-henro.jpg"
  },
  "/guide": {
    "label": "神山ガイド",
    "title": "神山のガイド・体験ツアー｜旅する学校",
    "description": "徳島県神山町の暮らし、人、自然に出会うガイドツアー。旅する学校から、らんぼうが案内する神山の旅と、神山ガイド公式サイトをご紹介します。"
  },
  "/award": {
    "label": "受賞歴",
    "title": "受賞歴・活動の紹介｜旅する学校",
    "description": "旅する学校の受賞歴と活動の紹介。子どもたちの歩き遍路や自然の中での体験が評価された記録を、活動の写真とともにご案内します。"
  },
  "/sponsor": {
    "label": "スポンサー",
    "title": "旅育・子どもの冒険を支えるスポンサー募集｜旅する学校",
    "description": "旅する学校の子どもたちの冒険を、一緒に支えませんか。旅育・自然体験の活動を継続するためのスポンサーと支援のご案内、協賛についてのお問い合わせはこちら。"
  },
  "/thai": {
    "label": "タイの家族旅",
    "title": "タイの家族旅・EarthfamilyJourney｜旅する学校",
    "description": "家族で旅し、現地の暮らしと人に出会うEarthfamilyJourneyタイ編。あーすガイド・らんぼうが案内する、子連れの海外体験と旅を通じた学びをご紹介します。",
    "image": "/manus-storage/thai_img_00_2e972116.jpg"
  },
  "/saijai": {
    "label": "SaaiJai Village",
    "title": "SaaiJai Village・チェンマイの水上エコビレッジ｜旅する学校",
    "description": "タイ・チェンマイ郊外、湖に浮かぶSaaiJai Village。らんぼうも村づくりに関わる場所で、泊まる、学ぶ、一緒につくる。水上エコビレッジの紹介と公式サイトへのご案内。",
    "image": "/images/saijai-lake.jpg"
  },
  "/juku": {
    "label": "らんぼう塾",
    "title": "らんぼう塾｜仲間と学ぶ111日間・旅する学校",
    "description": "限定ラジオ、Zoomライブ、神山合宿などを通じて、世界と自分の生き方を学ぶ111日間のオンラインプログラム「らんぼう塾」。内容、参加案内、よくある質問をご紹介します。"
  },
  "/efj": {
    "label": "EarthfamilyJourney",
    "title": "EarthfamilyJourney・家族で学ぶ旅｜旅する学校",
    "description": "旅する学校のEarthfamilyJourney。家族で地球を旅し、現地の人々や暮らし、自然に出会うプログラムの内容と参加案内をご紹介します。"
  },
  "/earth-family": {
    "label": "地球家族ジャーニー2026",
    "title": "地球家族ジャーニー2026・祝島から神山へ｜旅する学校",
    "description": "2026年8月5〜14日、山口・祝島から徳島・神山へ向かう地球家族ジャーニーの紹介。地域の暮らしと人、自然に出会う10日間の旅程と企画内容をご覧いただけます。",
    "image": "/efj/banner-DC-eJZFy.webp"
  },
  "/earth-family-journey": {
    "label": "Earth Family Journey",
    "title": "Earth Family Journey｜世界を旅する家族の記録",
    "description": "家族6人で世界の暮らしを訪ねるEarth Family Journey。旅は最高の学校。最新の旅の記録と、参加・応援のご案内はこちら。"
  }
};
