export type MetricEvent = "page_view" | "service_click" | "form_view" | "form_start" | "line_click";
export type MetricService = "home" | "journeys" | "family" | "village" | "school" | "kamiyama" | "juku" | "talk" | "web-studio" | "events" | "general";
const sent = new Set<string>();
export function trackPublicAction(event: MetricEvent, service: MetricService) {
  if (/^\/(admin|analytics|api)(\/|$)/.test(location.pathname) ||
    navigator.doNotTrack === "1" || (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) return;
  // Per-tab counts, with no visitor ID, query string, referrer or form content.
  const key = `eg-count:${new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date())}:${event}:${service}`;
  if (sent.has(key)) return;
  try { if (sessionStorage.getItem(key)) return; } catch { /* optional storage */ }
  sent.add(key);
  void fetch("https://earthguide.tabigaku.party/api/public-metrics", {
    method: "POST", credentials: "omit", keepalive: true,
    headers: { "Content-Type": "application/json" }, body: JSON.stringify({ event, service }),
  }).then(response => {
    if (response.ok) { try { sessionStorage.setItem(key, "1"); } catch { /* optional storage */ } }
    else sent.delete(key);
  }).catch(() => { sent.delete(key); });
}
