import { useEffect } from "react";
import { useLocation } from "wouter";
import { applySeo, seoForPath } from "@/seo";

// Page metadata lives in seo-config.ts so direct visits and navigation agree.
interface SEOProps { title: string; description: string; keywords?: string; ogImage?: string; ogUrl?: string; ogType?: string; twitterCard?: string; structuredData?: object | object[]; canonical?: string }
export function buildSEOTags(props: SEOProps) {
  const s = seoForPath(props.canonical ?? props.ogUrl ?? "/");
  return { ...s, fullTitle: s.title, ogImage: s.image, resolvedUrl: s.url, resolvedCanonical: s.url };
}
export function useSEO(_props: SEOProps) {
  const [path] = useLocation();
  useEffect(() => { applySeo(path); }, [path]);
}
