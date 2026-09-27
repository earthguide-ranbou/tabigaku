import { ArrowRight, CalendarDays, Expand, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "./journey-cards.css";

type Journey = {
  id: number;
  image: string;
  alt: string;
  tags: { label: string }[];
  date: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
};

// Give the long English name a natural break without changing its spelling.
function JourneyTitle({ title }: { title: string }) {
  return title.split(/(?=Journey)/).map((part, index) => (
    <span key={index}>
      {index > 0 ? <wbr /> : null}
      {part}
    </span>
  ));
}

export default function JourneyCards({ journeys }: { journeys: Journey[] }) {
  return (
    <div className="school-journey-grid">
      {journeys.map(journey => {
        const titleId = `journey-${journey.id}-title`;
        const linkProps = journey.href.startsWith("/")
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" };

        return (
          <article
            className="school-journey-card"
            key={journey.id}
            aria-labelledby={titleId}
          >
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="school-journey-card__visual"
                  aria-label={`${journey.title}の写真を大きく見る`}
                >
                  <span className="school-journey-card__image-frame">
                    <img
                      src={journey.image}
                      alt={journey.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="school-journey-card__zoom">
                    <Expand aria-hidden="true" />
                    写真を大きく見る
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent
                className="school-journey-preview"
                overlayClassName="school-journey-preview-overlay"
                showCloseButton={false}
              >
                <div className="school-journey-preview__header">
                  <DialogTitle className="school-journey-preview__title">
                    <JourneyTitle title={journey.title} />
                  </DialogTitle>
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="school-journey-preview__close"
                      aria-label="写真を閉じる"
                    >
                      <X aria-hidden="true" />
                    </button>
                  </DialogClose>
                </div>
                <div className="school-journey-preview__body">
                  <img
                    src={journey.image}
                    alt={journey.alt}
                    className="school-journey-preview__image"
                  />
                  <DialogDescription className="school-journey-preview__description">
                    {journey.description}
                  </DialogDescription>
                </div>
                <div className="school-journey-preview__footer">
                  <a
                    href={journey.href}
                    {...linkProps}
                    className="school-journey-card__link"
                  >
                    旅の詳細・お申し込み
                    <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </DialogContent>
            </Dialog>

            <div className="school-journey-card__content">
              <ul
                className="school-journey-card__tags"
                aria-label="募集状況・期間・対象"
              >
                {journey.tags.map(tag => (
                  <li
                    key={tag.label}
                    className={
                      tag.label === "募集中"
                        ? "school-journey-card__status"
                        : undefined
                    }
                  >
                    {tag.label}
                  </li>
                ))}
              </ul>
              <p className="school-journey-card__date">
                <CalendarDays aria-hidden="true" />
                <span>{journey.date}</span>
              </p>
              <div>
                <h3 id={titleId} className="school-journey-card__title">
                  <a href={journey.href} {...linkProps}>
                    <JourneyTitle title={journey.title} />
                  </a>
                </h3>
                <p className="school-journey-card__subtitle">
                  {journey.subtitle}
                </p>
              </div>
              <p className="school-journey-card__description">
                {journey.description}
              </p>
              <a
                href={journey.href}
                {...linkProps}
                className="school-journey-card__link"
                aria-label={`${journey.title}の詳細・お申し込み`}
              >
                詳細・お申し込み
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
