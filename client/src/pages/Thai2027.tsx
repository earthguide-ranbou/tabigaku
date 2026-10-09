import { useEffect } from "react";

// This supplied standalone page owns its styles and interactive calculator.
// Native loading keeps it isolated from the rest of the school's app.
export default function Thai2027() {
  useEffect(() => {
    window.location.replace("/thai-2027.html" + window.location.search + window.location.hash);
  }, []);
  return <main><a href="/thai-2027.html">2027年1月・タイ旅のページを開く</a></main>;
}
