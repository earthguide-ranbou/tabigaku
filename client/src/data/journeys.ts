export const SCHOOL_LINE = "https://lin.ee/odygMT3";
export type Audience = "children" | "family" | "adults";
export type Journey = {
  id: string;
  title: string;
  href: string;
  start: string;
  end: string;
  dateLabel: string;
  duration: string;
  age: string;
  capacity?: number;
  fee: string;
  expenses: string;
  image: string;
  alt: string;
  place: string;
  description: string;
  audiences: Audience[];
  form?: string;
  line?: string;
};
export const journeys: Journey[] = [
  {
    id: "kochi",
    title: "子どもたちの、歩きお遍路。",
    href: "/henro",
    start: "2026-10-10T16:00:00+09:00",
    end: "2026-10-15T23:59:59+09:00",
    dateLabel: "2026.10.10（土）— 10.15（木）",
    duration: "6日間",
    age: "小学3年生〜中学3年生",
    capacity: 10,
    fee: "78,000",
    expenses: "20,000〜30,000",
    image: "/manus-storage/img1_ashizuri_b29ac393.jpg",
    alt: "足摺岬の海辺に集まった歩きお遍路の仲間たち",
    place: "高知・足摺岬から",
    description: "行き先を決めるのは、自分たち。仲間と歩き、暮らす6日間。",
    audiences: ["children"],
    form: "https://1lejend.com/stepmail/kd.php?no=fncikq",
    line: SCHOOL_LINE,
  },
  {
    id: "shinsoku",
    title: "神足歩行術で、祈りの道へ。",
    href: "/henro-shinsoku",
    start: "2026-10-27T12:00:00+09:00",
    end: "2026-10-31T23:59:59+09:00",
    dateLabel: "2026.10.27（火）— 10.31（土）",
    duration: "5日間",
    age: "2026年度に満10歳〜65歳",
    capacity: 10,
    fee: "100,000",
    expenses: "20,000〜30,000",
    image: "/manus-storage/kids_reading_11616371.jpg",
    alt: "緑に包まれたお寺で、お経を読む旅の参加者",
    place: "徳島・神山から太龍寺へ",
    description: "古の身体技法にふれながら、心とからだで味わうお遍路旅。",
    audiences: ["family", "adults"],
    form: "https://1lejend.com/stepmail/kd.php?no=fkdlxy",
    line: "https://lin.ee/p3CvLfQ",
  },
  {
    id: "thailand-2027",
    title: "EarthfamilyJourney in Thailand",
    href: "/thai-2027",
    start: "2027-01-05T00:00:00+07:00",
    end: "2027-01-17T23:59:59+07:00",
    dateLabel: "2027.1.5〜11（A）／1.12〜17（B）／1.5〜17（SPECIAL）",
    duration: "7日間・6日間・13日間",
    age: "おひとり・友人・親子歓迎",
    fee: "110,000〜",
    expenses: "",
    image: "/images/saijai-lake.jpg",
    alt: "山々と湖に囲まれたサージャイ・ヴィレッジ",
    place: "タイ・チェンマイ、サージャイ／パパイヤビレッジ／ラオスの少数民族の村",
    description: "A：1/5〜11・110,000円／B：1/12〜17・110,000円／SPECIAL：1/5〜17・188,000円。現地サポート費に加え、JOURNEY LABは1家族30,000円（10/31まで・通常50,000円）、実費別途。湖のオフグリッドな暮らしへ。B・SPECIALはパパイヤビレッジと、国境を越えてラオスの少数民族の村へ。",
    audiences: ["family", "adults"],
    line: "https://lin.ee/p3CvLfQ",
  },
  {
    id: "earth-family",
    title: "地球家族ジャーニー",
    href: "/efj",
    start: "2027-03-29T00:00:00+09:00",
    end: "2027-04-04T23:59:59+09:00",
    dateLabel: "2027.3.29（月）— 4.4（日）",
    duration: "7日間",
    age: "おひとり・友人・親子歓迎",
    capacity: 10,
    fee: "88,000",
    expenses: "",
    image: "/efj/iwaishima-BUClfDH1.webp",
    alt: "祝島の青い海と島に受け継がれてきた祭りの舟",
    place: "祝島 → 神山町",
    description: "いのちがよろこぶ、春の7日間。2/28までの早割80,000円。",
    line: "https://lin.ee/N9eyIcP",
    audiences: ["family", "adults"],
  },
  {
    id: "thailand",
    title: "EarthfamilyJourney in Thailand",
    href: "/thai",
    start: "2026-08-22T00:00:00+09:00",
    end: "2026-08-30T23:59:59+09:00",
    dateLabel: "2026.8.22 — 8.30",
    duration: "6〜9日間",
    age: "家族向け",
    capacity: 10,
    fee: "",
    expenses: "",
    image: "/manus-storage/thai_img_00_2e972116.jpg",
    alt: "タイの家族旅",
    place: "タイ",
    description: "家族で、世界の暮らしに出会う。",
    audiences: ["family", "adults"],
  },
];
export function journeyStatus(
  journey: Pick<Journey, "start" | "end">,
  now = Date.now()
): "upcoming" | "ongoing" | "ended" {
  if (now > Date.parse(journey.end)) return "ended";
  return now >= Date.parse(journey.start) ? "ongoing" : "upcoming";
}
