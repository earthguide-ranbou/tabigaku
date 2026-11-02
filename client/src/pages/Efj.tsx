import { useEffect } from "react";

// Load the supplied complete HTML document without React styles or shared overlays.
export default function Efj() {
  useEffect(() => {
    window.location.replace("/efj.html" + window.location.search + window.location.hash);
  }, []);
  return <main><a href="/efj.html">地球家族ジャーニー2027春のページを開く</a></main>;
}
