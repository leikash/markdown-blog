---
title: 記事画面のレイアウトを整える
date: 2022.3.19
summary: 記事画面のレイアウトを整えるやり方を書いていきます。
---

# 記事画面のレイアウトを整える

## Prismを利用してみる

Markdownに対応しているということでPrismを使ってみることにします。  
ここを参照しながら進めます。
[Gatsby（GatsbyJS）× Contentful RichText Markdownそれぞれのcodeシンタックスハイライトの適用方法](https://o-alquimista.com/blogs/gatsby-contentful/)

```bash
$ yarn add gatsby-remark-prismjs prismjs
$ yarn add gatsby-remark-prismjs-title
$ yarn add gatsby-remark-code-titles
```

設定を入れます。


---

## Tailwind CSSを導入

### HTMLタグが効いていない問題が発生
Websiteを見ながら適当にパッケージを入れていったら、HTMLタグが効かなくなった。

issueはgithubに書いていくことにする