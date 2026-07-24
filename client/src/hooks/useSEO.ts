/**
 * useSEO — ページごとの動的メタタグ・OGP・構造化データを管理するフック
 * react-helmet-async を使用
 */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: object | object[];
  canonical?: string;
}

const SITE_NAME = "旅する学校";
const BASE_URL = "https://tabigaku.party";
const DEFAULT_OG_IMAGE = `${BASE_URL}/ogp-default.jpg`;

export function buildSEOTags(props: SEOProps) {
  const {
    title,
    description,
    keywords,
    ogImage = DEFAULT_OG_IMAGE,
    ogUrl,
    ogType = "website",
    twitterCard = "summary_large_image",
    structuredData,
    canonical,
  } = props;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} ｜ ${SITE_NAME}`;
  const resolvedUrl = ogUrl ? `${BASE_URL}${ogUrl}` : BASE_URL;
  const resolvedCanonical = canonical ? `${BASE_URL}${canonical}` : resolvedUrl;

  return {
    fullTitle,
    description,
    keywords,
    ogImage,
    resolvedUrl,
    resolvedCanonical,
    ogType,
    twitterCard,
    structuredData,
  };
}

export function useSEO(props: SEOProps) {
  const seo = buildSEOTags(props);

  useEffect(() => {
    // title
    document.title = seo.fullTitle;

    // helper to set/create meta
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector.replace("meta[", "").replace("]", "").split("=");
        el.setAttribute(attrName.trim(), attrValue.replace(/"/g, "").trim());
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    // basic
    setMeta('meta[name="description"]', "content", seo.description);
    if (seo.keywords) setMeta('meta[name="keywords"]', "content", seo.keywords);

    // OGP
    setMeta('meta[property="og:title"]', "content", seo.fullTitle);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[property="og:image"]', "content", seo.ogImage);
    setMeta('meta[property="og:url"]', "content", seo.resolvedUrl);
    setMeta('meta[property="og:type"]', "content", seo.ogType);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:locale"]', "content", "ja_JP");

    // Twitter Card
    setMeta('meta[name="twitter:card"]', "content", seo.twitterCard);
    setMeta('meta[name="twitter:title"]', "content", seo.fullTitle);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
    setMeta('meta[name="twitter:image"]', "content", seo.ogImage);
    setMeta('meta[name="twitter:site"]', "content", "@earthguide_ranbow");

    // canonical
    setLink("canonical", seo.resolvedCanonical);

    // JSON-LD 構造化データ
    const existingScripts = document.querySelectorAll('script[data-seo="true"]');
    existingScripts.forEach((s) => s.remove());

    if (seo.structuredData) {
      const dataArray = Array.isArray(seo.structuredData)
        ? seo.structuredData
        : [seo.structuredData];
      dataArray.forEach((data) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "true");
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    return () => {
      // cleanup JSON-LD on unmount
      document.querySelectorAll('script[data-seo="true"]').forEach((s) => s.remove());
    };
  }, [seo.fullTitle, seo.description, seo.ogImage, seo.resolvedUrl]);
}
