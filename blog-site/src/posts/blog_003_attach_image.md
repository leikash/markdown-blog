---
title: 画像の表示
date: 2022.3.19
summary: 記事画面で画像を表示する方法を書いていきます。
---

## 3. 記事に画像をつける

### 3.1. Markdownファイルに画像を埋め込む
VsCodeのプラグインで適当な場所に画像を貼り付けます。
```markdown
![picture 2](images/foldername/1647217718986.png)  
```

### 3.2. Gatsbyのプラグインをインストール
```bash
$ yarn add gatsby-remark-images gatsby-plugin-sharp gatsby-remark-relative-images
```

gatsby-config.jsを設定して表示できました。

### サイトの画像を表示する
```bash
$ yarn add gatsby-image
```
gatsby-config.jsを設定
うごかない

[gatsby-imageは非推奨とのこと](https://www.gatsbyjs.com/plugins/gatsby-image/)  
代わりに"gatsby-plugin-image"を使います。  

```bash
$ yarn add gatsby-plugin-image
```

ロゴを入れることはできた。

---
# 時間切れで作ってない。ここから再開する
---

- [ ] postページのトップ画像をindexに入れる


設定を入れます。
```javascript
// gatsby-confi.js

```
