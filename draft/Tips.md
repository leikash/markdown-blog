---
title: Tips
date: 2022.3.15
topImage: images/blog_test/1647299997194.png
summary: Tips
---

# Tips

## 日付フォーマット
yyyy.m.d

## 記事ヘッダ
ブログ一覧に表示される内容のフォーマット
```markdown
---
title: Tips
date: 2022.3.15
---
```

## Markdown Imageの設定
${mdname}/${timestamp}

## unique "key" propのwarning解消
- [x] warningの解消をする
```console
react_devtools_backend.js:3973 Warning: Each child in a list should have a unique "key" prop.
```
[React公式](https://ja.reactjs.org/docs/lists-and-keys.html)を見ながら修正。
コードにはkeyがあるもののそこに入れるidをglaphqlで取って来てなかったのが問題だった。  