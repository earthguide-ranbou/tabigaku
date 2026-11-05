import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const CALENDAR_ORIGIN = "https://earthguide.tabigaku.party";

export default function EventCalendar() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  const requestHeight = () => {
    frameRef.current?.contentWindow?.postMessage(
      { type: "earthguide-calendar:measure" },
      CALENDAR_ORIGIN,
    );
  };

  useEffect(() => {
    const updateHeight = (event: MessageEvent) => {
      const frame = frameRef.current;
      if (
        !frame ||
        event.origin !== CALENDAR_ORIGIN ||
        event.source !== frame.contentWindow ||
        !event.data ||
        event.data.type !== "earthguide-calendar:resize" ||
        typeof event.data.height !== "number" ||
        !Number.isFinite(event.data.height) ||
        event.data.height < 320 ||
        event.data.height > 6000
      ) return;
      frame.style.height = `${Math.ceil(event.data.height)}px`;
    };
    window.addEventListener("message", updateHeight);
    requestHeight();
    return () => window.removeEventListener("message", updateHeight);
  }, []);

  return (
    <section
      className="school-section school-event-calendar"
      id="event-calendar"
      aria-labelledby="event-calendar-title"
    >
      <div className="school-heading school-calendar-heading">
        <div>
          <p className="school-eyebrow">旅と出会いの予定表</p>
          <h2 id="event-calendar-title">次の出会いを、<br className="school-mobile" />カレンダーから。</h2>
        </div>
        <p>子どもたちの冒険から、旅やお話し会まで。<br />気になる日を選んで、会いにきてください。</p>
      </div>
      <iframe
        ref={frameRef}
        className="school-calendar-frame"
        src={`${CALENDAR_ORIGIN}/event-calendar.html?theme=school`}
        title="らんぼうのイベントカレンダー"
        loading="lazy"
        onLoad={requestHeight}
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <p className="school-calendar-footer">
        <span>日程・開催条件・お申し込みは各イベントの案内へ。</span>
        <a className="school-text-link" href={`${CALENDAR_ORIGIN}/events`}>
          すべてのイベントの案内を読む
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </p>
    </section>
  );
}
