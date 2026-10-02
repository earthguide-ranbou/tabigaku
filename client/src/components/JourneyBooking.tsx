import { ArrowRight, ArrowUpRight } from "lucide-react";
import { journeys, journeyStatus, SCHOOL_LINE } from "@/data/journeys";
import { trackJourneyAction } from "@/lib/journey-analytics";
import "./journey-booking.css";

export function JourneyStatusNotice({ id }: { id: string }) {
  const journey = journeys.find(j => j.id === id)!;
  const status = journeyStatus(journey);
  if (status === "upcoming") return null;
  return (
    <aside className="booking-status">
      <strong>
        {status === "ended"
          ? "この日程の開催は終了しました。"
          : "この旅は、ただいま開催中です。"}
      </strong>
      <span>以下は開催時のご案内です。</span>
      <a href="/#journeys">次の旅を見る →</a>
    </aside>
  );
}

export function JourneyQuickInfo({ id }: { id: string }) {
  const journey = journeys.find(j => j.id === id)!;
  return (
    <section className="booking-quick" aria-label="日程・ガイド料・実費の概要">
      <div>
        <small>日程・対象</small>
        <strong>{journey.dateLabel}</strong>
        <span>
          {journey.age} · 定員{journey.capacity}名
        </span>
      </div>
      <div>
        <small>ガイド料（参加費）/ 1名</small>
        <strong>{journey.fee}円（税込）</strong>
        <span>通常料金</span>
      </div>
      <div>
        <small>実費〈別途〉/ 1名</small>
        <strong>{journey.expenses}円前後</strong>
        <span>食費・宿泊費などの目安</span>
      </div>
      <a href="#apply">
        参加の案内を見る <ArrowRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}

export function ApplicationPanel({ id }: { id: string }) {
  const journey = journeys.find(j => j.id === id)!;
  const open = journeyStatus(journey) === "upcoming";
  return (
    <section
      className="booking-panel"
      id="apply"
      aria-labelledby="booking-title"
    >
      <div className="booking-panel__inner">
        <p className="booking-eyebrow">JOIN THE JOURNEY</p>
        <h2 id="booking-title">
          {open ? "旅の準備は、ここから。" : "次の旅で、お会いしましょう。"}
        </h2>
        {open ? (
          <>
            <p className="booking-lead">
              日程と費用を確認して、お申し込みへ。気になることは先に相談できます。
            </p>
            <dl className="booking-summary">
              <div>
                <dt>日程</dt>
                <dd>
                  {journey.dateLabel}（{journey.duration}）
                </dd>
              </div>
              <div>
                <dt>対象</dt>
                <dd>{journey.age}</dd>
              </div>
              <div>
                <dt>
                  ガイド料
                  <br />
                  （参加費）
                </dt>
                <dd>
                  <strong>{journey.fee}円</strong>（税込 / 1名）
                  <span>
                    {id === "kochi"
                      ? "通常料金。保険料・通信費を含みます。"
                      : "通常料金。家族での参加については下記をご覧ください。"}
                  </span>
                </dd>
              </div>
              <div>
                <dt>実費〈別途〉</dt>
                <dd>
                  <strong>{journey.expenses}円前後</strong> / 1名
                  <span>
                    {id === "kochi"
                      ? "旅の中で必要な食費・宿泊費・移動費など。現地でのお支払いです。"
                      : "ケータリング・温泉・キャンプ場・行動食・宿・御朱印など。"}
                  </span>
                </dd>
              </div>
            </dl>
            <p className="booking-note">
              実費は行程や宿泊・食事により変わります。集合・解散地までの交通費、装備の購入などは別途ご確認ください。早期割引の受付は2026年9月10日で終了しました。
            </p>
            <details>
              <summary>家族で参加する場合の費用</summary>
              <p>
                {id === "kochi"
                  ? "兄弟2人で参加する場合、2人目のガイド料（参加費）は5,000円引きです。"
                  : "家族の2人目以降（対象年齢に該当する方）は、ガイド料（参加費）66,000円以上のドネーション制です。"}
              </p>
              <dl className="booking-family-costs">
                <div>
                  <dt>ガイド料・2人分</dt>
                  <dd>
                    {id === "kochi"
                      ? "151,000円（税込）"
                      : "166,000円（税込）〜"}
                  </dd>
                </div>
                <div>
                  <dt>実費・2人分〈別途〉</dt>
                  <dd>40,000〜60,000円前後</dd>
                </div>
              </dl>
              <p>集合・解散地までの交通費や装備などは別途ご確認ください。</p>
            </details>
            <details>
              <summary>フォーム入力・参加までの流れ</summary>
              <p>
                参加者の氏名・生年月日など、保険に必要な情報をご準備ください。お子さまの参加は、保護者の連絡先も分かるようにご記入ください。入力欄の指定が分かりにくい場合は、送信前にご相談ください。
              </p>
              <ol>
                <li>外部の申し込みフォームに入力・送信</li>
                <li>フォームの案内に沿って参加費のお支払い</li>
                <li>連絡内容を確認し、持ち物・集合の準備へ</li>
              </ol>
              <p>
                メールが届かない場合は迷惑メールフォルダを確認し、案内人へご連絡ください。
              </p>
            </details>
            <details>
              <summary>参加前に確認したいこと</summary>
              <p>
                {id === "kochi"
                  ? "高知編はスマホ・ゲーム機の持ち込みができません。最終日のゴール地点は旅の中で決まるため、お迎え方法を事前にご相談ください。キャンセル条件は申し込み前に案内人へご確認ください。"
                  : "基本はテント泊です（各自で宿の手配も可能）。キャンセル料は開催8日前まで参加費の50％、7日前〜当日は100％です。"}{" "}
                天候で行程を変更する場合があります。アレルギー・持病・服薬、旅の写真のSNS掲載についてご希望がある場合は、参加前にご相談ください。
              </p>
            </details>
            <div className="booking-actions">
              <a
                className="booking-primary"
                href={journey.form}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackJourneyAction("open_application", id)}
              >
                申し込みフォームへ <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                className="booking-secondary line-action"
                href={journey.line}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackJourneyAction("consult", id)}
              >
                まずLINEで相談する <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="booking-note">
              フォームは別のタブで開きます。このボタンだけでは申し込みは送信されません。
            </p>
          </>
        ) : (
          <>
            <p className="booking-lead">
              {journey.dateLabel}
              の新規参加受付は終了しました。次回の開催については、LINEからお問い合わせください。
            </p>
            <div className="booking-actions">
              <a className="booking-primary" href="/#journeys">
                次の旅を見る <ArrowRight size={17} />
              </a>
              <a
                className="booking-secondary line-action"
                href={SCHOOL_LINE}
                target="_blank"
                rel="noopener noreferrer"
              >
                次回の案内を相談する <ArrowUpRight size={17} />
              </a>
            </div>
          </>
        )}
        <p className="booking-contact">
          <a href="tel:09075188816">090-7518-8816</a>
          <a href="mailto:earthguide.jpn@gmail.com">earthguide.jpn@gmail.com</a>
          <a href="/">旅する学校 ホームへ</a>
        </p>
      </div>
    </section>
  );
}
