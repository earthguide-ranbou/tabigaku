// Keep the existing optional analytics integration, without requesting a broken
// placeholder URL when deployment credentials are not configured.
const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT?.trim();
const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID?.trim();
if (endpoint && websiteId) {
  try {
    const url = new URL(`${endpoint.replace(/\/$/, "")}/umami`, window.location.origin);
    if (url.protocol === "https:" || (url.protocol === "http:" && url.origin === window.location.origin)) {
      const script = document.createElement("script");
      script.defer = true;
      script.src = url.href;
      script.dataset.websiteId = websiteId;
      document.head.appendChild(script);
    }
  } catch { /* Optional metrics must never prevent a visit or application. */ }
}
