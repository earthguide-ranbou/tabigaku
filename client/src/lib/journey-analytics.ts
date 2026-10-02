// Clicks are funnel signals, not completed applications. Never send personal data.
export function trackJourneyAction(
  action: "view_journey" | "open_application" | "consult",
  journey: string
) {
  if (typeof window === "undefined") return;
  const analytics = window as Window & {
    va?: (
      command: string,
      event: { name: string; data: Record<string, string> }
    ) => void;
    umami?: { track: (event: string, data: Record<string, string>) => void };
  };
  analytics.va?.("event", { name: action, data: { journey } });
  analytics.umami?.track(action, { journey });
}
