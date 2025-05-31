# じゃんけんゲーム with チートモード

プレイヤーが「グー・チョキ・パー」の手を選んでCPUと勝負する、シンプルなじゃんけんゲームです。

特別な「チートモード」を搭載しており、ONにするとプレイヤーが必ず勝つ仕様になっています。

---

## ✊ ゲームの概要

- 「グー / チョキ / パー」のボタンを押すと、CPUが手を出して勝敗を判定
- チェックボックスで「チートモード」をONにすると、CPUが必ず負ける手を出す
- 勝敗の結果に応じて画面上にネオンカラーで表示
- チートモード時は背景アニメーションがONになる

---

## 📁 ファイル構成
```
janken_game/
├── janken-game.html # HTMLとスタイルの記述（提供済みテンプレート）
├── main.js # メインロジック
├── get-player-choice.js # プレイヤーの手を取得する処理
├── get-computer-choice.js # CPUの手を生成する処理
├── judge-result.js # 勝敗判定処理
├── show-result.js # 結果表示処理
├── cheat-mode-manager.js # チートモード切り替えとアニメ制御処理
├── .gitignore # Git除外ファイル設定
├── package.json # 使用ライブラリ情報
├── package-lock.json # 依存関係の固定
├── node_modules/ # npmパッケージ（Git管理対象外）
├── .prettierrc.cjs # Prettier設定（CommonJS形式）
├── eslint.config.mjs # ESLint設定（ES Modules形式）
└── README.md # このファイル
```


---

## 🛠 使用ツール

- **JavaScript (ES6+)**
- **HTML / CSS（埋め込みスタイル）**
- **ESLint**（静的解析）
- **Prettier**（コード整形）

---

## 🚀 実行方法

このアプリはローカルのWebブラウザで動作しますが、セキュリティ制限（CORS）を避けるため、ローカルサーバを経由して実行することを推奨します。

### 1. Live Server を使う（VS Code 推奨）

VS Codeの拡張機能「Live Server」を使用すると簡単に動作確認できます。

1. VS Codeでこのフォルダを開く
2. `janken-game.html` を開く
3. 右下の「Go Live」ボタンをクリック

### 2. Node.js を使ってHTTPサーバを立ち上げる

```bash
# グローバルインストールされていない場合は以下を実行
npm install -g http-server

# サーバ起動（例: ポート8080）
http-server . -p 8080

# ブラウザでアクセス
http://localhost:8080/janken-game.html
```

### チェック方法
```bash
# Lintチェック
npx eslint .

# フォーマット整形チェック
npx prettier . --check

# フォーマット整形の実行
npx prettier . --write
```
