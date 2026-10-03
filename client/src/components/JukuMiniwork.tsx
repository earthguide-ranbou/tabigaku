import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy, PenLine } from "lucide-react";

const prompts = [
  { key: "audience", label: "誰に届けたい？", example: "子育てしながら、新しいことを始めたい人", limit: 120 },
  { key: "message", label: "いちばん伝えたいことは？", example: "暮らしの中の小さな挑戦も、立派な一歩。", limit: 400 },
  { key: "action", label: "どんな一歩を呼びかける？", example: "今日やってみたいことを、一つ教えてください。", limit: 200 },
] as const;
type PromptKey = (typeof prompts)[number]["key"];

export default function JukuMiniwork() {
  const [values, setValues] = useState<Record<PromptKey, string>>({ audience: "", message: "", action: "" });
  const [draft, setDraft] = useState("");
  const [notice, setNotice] = useState("");
  const [copied, setCopied] = useState(false);
  const result = useRef<HTMLDivElement>(null);
  const fields = useRef<Partial<Record<PromptKey, HTMLTextAreaElement | null>>>({});

  useEffect(() => { if (draft) result.current?.focus(); }, [draft]);

  const makeDraft = () => {
    const missing = prompts.find(prompt => !values[prompt.key].trim());
    if (missing) {
      setNotice(`「${missing.label}」に、短い言葉で書いてみてください。`);
      fields.current[missing.key]?.focus();
      return;
    }
    setDraft(`${values.audience.trim()}へ。\n\n${values.message.trim()}\n\n${values.action.trim()}`);
    setNotice("");
    setCopied(false);
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setNotice("下書きをコピーしました。");
    } catch {
      setNotice("コピーできませんでした。下書きの文章を選択してコピーしてください。");
    }
  };

  return <details className="rj-miniwork" id="try">
    <summary>
      <span className="rj-miniwork-icon"><PenLine aria-hidden="true" size={23} /></span>
      <span><small>登録なしで試せる、発信のミニワーク</small><strong>3つの問いから、あなたの言葉を。</strong></span>
      <span className="rj-miniwork-open" aria-hidden="true">＋</span>
    </summary>
    <div className="rj-miniwork-body">
      <p>立派な文章でなくても大丈夫。「誰に・何を・どんな一歩を」の順番で、投稿の種を見つけてみよう。</p>
      <div className="rj-miniwork-fields">
        {prompts.map((prompt, index) => <label key={prompt.key} htmlFor={`rj-work-${prompt.key}`}>
          <span><b>0{index + 1}</b>{prompt.label}</span>
          <textarea
            id={`rj-work-${prompt.key}`}
            ref={element => { fields.current[prompt.key] = element; }}
            rows={2}
            maxLength={prompt.limit}
            placeholder={`例：${prompt.example}`}
            value={values[prompt.key]}
            onChange={event => {
              setValues(previous => ({ ...previous, [prompt.key]: event.target.value }));
              setDraft(""); setCopied(false); setNotice("");
            }}
          />
        </label>)}
      </div>
      <p className="rj-note">入力はこの画面だけで使います。保存・送信はしません。</p>
      <button className="rj-button rj-button-dark" type="button" onClick={makeDraft}>投稿の下書きを見る<ArrowRight size={18} aria-hidden="true" /></button>
      <p className="rj-miniwork-notice" role="status">{notice}</p>
      {draft && <div className="rj-miniwork-result" ref={result} tabIndex={-1} aria-label="投稿の下書き">
        <h4>あなたの言葉で、最初の下書きができました。</h4>
        <p className="rj-miniwork-draft">{draft}</p>
        <p>声に出して読んで、自分らしい言葉に整えてみよう。塾では、仲間と工夫を共有しながら発信を考えます。</p>
        <button type="button" className="rj-miniwork-copy" onClick={copyDraft}>{copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}{copied ? "コピーしました" : "下書きをコピー"}</button>
      </div>}
    </div>
  </details>;
}
