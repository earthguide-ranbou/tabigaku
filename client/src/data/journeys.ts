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
  capacity: number;
  fee: string;
  estimate: string;
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
    estimate: "98,000〜108,000",
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
    estimate: "120,000〜130,000",
    image: "/manus-storage/kids_reading_11616371.jpg",
    alt: "緑に包まれたお寺で、お経を読む旅の参加者",
    place: "徳島・神山から太龍寺へ",
    description: "古の身体技法にふれながら、心とからだで味わうお遍路旅。",
    audiences: ["family", "adults"],
    form: "https://1lejend.com/stepmail/kd.php?no=fkdlxy",
    line: "https://lin.ee/p3CvLfQ",
  },
  {
    id: "earth-family",
    title: "地球家族ジャーニー",
    href: "/efj",
    start: "2026-08-05T00:00:00+09:00",
    end: "2026-08-14T23:59:59+09:00",
    dateLabel: "2026.8.5 — 8.14",
    duration: "10日間",
    age: "家族向け",
    capacity: 10,
    fee: "",
    estimate: "",
    image: "/efj/tawara_people.jpg",
    alt: "旅先で出会った人たちと家族",
    place: "祝島から神山へ",
    description: "地域の暮らしと人、自然に出会う旅。",
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
    estimate: "",
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
