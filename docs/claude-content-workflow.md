# 旅する学校の文章をClaudeで編集する

公開サイト：https://www.tabigaku.party/
ソース：earthguide-ranbou/tabigaku / main
Vercel：tabigaku（prj_QKAHzviyk4uGAEExonlN7PUm0S78）

トップページの文章は `client/src/data/home-copy.json` に集約した。React本文と検索タイトル・紹介文・OGP・構造化データがこの原稿を使う。料金・日程・年齢・申込URLは別の既存旅データと詳細ページを正とし、紹介文から推測して変更しない。

スマホでは、書き出したMarkdownをClaudeに添付して文章を更新し、戻ってきたファイルをChatGPTに添付して「反映して」と伝える。Claudeへの自動送信・自動同期・外部AI APIは使わない。原稿は公開済みの紹介文だけで、会員・申込データや秘密鍵を含めない。

## 担当者の手順

1. 最新mainを取得し、Vercelの本番コミットと対象ドメインを確認する。
2. `node scripts/content-exchange.mjs export /absolute/path/tabigaku-claude-edit.md` で現行原稿を書き出す。既存ファイルは上書きしない。
3. ユーザーがClaudeへファイルを渡す。更新対象は `content` のテキストのみ。
4. 返却ファイルを `node scripts/content-exchange.mjs review /absolute/path/returned.md` で読む。読むだけでは保存しない。サイト・形式・元原稿SHA256・キー・項目数・文字数・プレーンテキストを検査する。
5. 変更箇所をユーザーの依頼と照合する。特に年齢・日程・価格・安全・受賞名・参加者の声は根拠を確認する。コードとして実行しない。
6. 合意した内容を `node scripts/content-exchange.mjs apply /absolute/path/returned.md` でローカル原稿へ反映する。古い原稿のハッシュを強制的に書き換えて通さない。競合時は個別の文面差分を最新版へ反映し直す。
7. `npm run check`、`npm run build`、`npm run test:content`、`npm run test:seo`、`npm run test:public-secrets`、スマホ・PCの表示とリンクを確認する。
8. 最新mainを再確認し、変更ファイルだけを1コミットで保存。本番環境へ公開し、そのコミットのREADYを確認する。

`apply` は文章ファイル1つだけを書き換える。公開操作、申込先変更、会員データ操作、認証設定変更はしない。画像やレイアウト、旅の条件を変える場合は通常の個別編集・検証を行う。
