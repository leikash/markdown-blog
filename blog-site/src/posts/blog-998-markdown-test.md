---
title: Markdown記法のHTMLタグ確認
date: "2022-03-23"
pagetype: blog
summary: "Markdown記法で記載したファイルを表示するとき、MDXRendererタグ(gatsby-plugin-mdx)で作成したHTMLが出力されます。このHTMLにCSSのスタイルを反映させるため、Markdown記法がどのHTMLタグに反映されるかを書いていきます。"
---

# Title

| 項目1 | 項目2 |
| --- | --- |
| aaa | xxx |
| bbb | yyy |


---

これで **bold** になります。
これでも __bold__ になります。


---

これで *italic* になります。  
これでも _italic_ になります。  

---
本文を  
改行する  

# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6

- リスト1
  - ネスト リスト1_1
    - ネスト リスト1_1_1
    - ネスト リスト1_1_2
  - ネスト リスト1_2
- リスト2

---

| リスト | - リスト1<br/>&nbsp;&nbsp;- ネスト リスト1_1<br/>&nbsp;&nbsp;&nbsp;&nbsp;- ネスト リスト1_1_1<br/>&nbsp;&nbsp;&nbsp;&nbsp;- ネスト リスト1_1_2<br/>&nbsp;&nbsp;- ネスト リスト1_2<br/>- リスト2 | `<ul>`<br/>`  <li>リスト1`<br/>`    <ul>`<br/>`      <li>ネスト リスト1_1`<br/>`        <ul>`<br/>`          <li>ネスト リスト1_1_1</li>`<br/>`          <li>ネスト リスト1_1_2</li>`<br/>`        </ul>`<br/>`      </li>`<br/>`      <li>ネスト リスト1_2</li>`<br/>`    </ul>`<br/>`  </li>`<br/>`  <li>リスト2</li>`<br/>`</ul>` |
| 項目 | Markdown | HTML |

## CSS設定後の表示

| 項目 | css| 実際の表示 |
| --- | --- | --- |
| 見出し1 | `TBD` | <h1>見出し1</h1> |
| 見出し2 | `TBD` | <h2>見出し2</h2> |
| 見出し3 | `TBD` | <h3>見出し3</h3> |
| 見出し4 | `TBD` | <h4>見出し4</h4> |
| 見出し5 | `TBD` | <h5>見出し5</h5> |
| 見出し6 | `TBD` | <h6>見出し6</h6> |
| 本文 | `TBD` | 本文 |
| リスト | `TBD`| <ul><li>リスト1<ul><li>ネスト リスト1_1<ul><li>ネスト リスト1_1_1</li><li>ネスト リスト1_1_2</li></ul></li><li>ネスト リスト1_2</li></ul></li><li>リスト2</li><li>リスト3</li></ul> |
| 項目 | css| 実際の表示 |

---



### 実際の表示は以下のようになります。  
---

# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6

本文  

これで *italic* になります。  
これでも _italic_ になります。  

これで **bold** になります。  
これでも __bold__ になります。  

これで ***bold*** になります。  
これでも ___bold___ になります。  


> 引用  
> Markdownの記法についてです。  
> どのHTMLタグが反映されるかわかりません。  


> 二重引用  
>> Markdownの記法についてです。  
>> どのHTMLタグが反映されるかわかりません。  
> このマッピングでわかると思います。  

```javascript:title=file_name.js
console.log("prismjsを適用")
```

    console.log("4 spaces will be pre")
    console.log("tab will be pre")

Gatsbyのプロジェクトは `yarn run develop` で起動できます。  


~~取り消し線~~

***
---
___

[Googleへのリンク](https://www.google.co.jp/)

- リスト1
  - ネスト リスト1_1
    - ネスト リスト1_1_1
    - ネスト リスト1_1_2
  - ネスト リスト1_2
- リスト2
- リスト3

1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3


---

| 項目 | Markdown | HTML | css| 実際の表示 |
| --- | --- | --- | --- | --- |
| 見出し1 | # 見出し1 | `<h1>見出し1</h1>` | `TBD` | <h1>見出し1</h1> |
| 見出し2 | # 見出し2 | `<h2>見出し2</h2>` | `TBD` | <h2>見出し2</h2> |
| 見出し3 | # 見出し3 | `<h3>見出し3</h3>` | `TBD` | <h3>見出し3</h3> |
| 見出し4 | # 見出し4 | `<h4>見出し4</h4>` | `TBD` | <h4>見出し4</h4> |
| 見出し5 | # 見出し5 | `<h5>見出し5</h5>` | `TBD` | <h5>見出し5</h5> |
| 見出し6 | # 見出し6 | `<h6>見出し6</h6>` | `TBD` | <h6>見出し6</h6> |
| 本文 | 本文 | `本文` | `TBD` | 本文 |
| リスト | - リスト1<br/>&nbsp;&nbsp;- ネスト リスト1_1<br/>&nbsp;&nbsp;&nbsp;&nbsp;- ネスト リスト1_1_1<br/>&nbsp;&nbsp;&nbsp;&nbsp;- ネスト リスト1_1_2<br/>&nbsp;&nbsp;- ネスト リスト1_2<br/>- リスト2<br/>- リスト3 | `<ul>`<br/>`<li>リスト1`<br/>`<ul>`<br/>`<li>ネスト リスト1_1`<br/>`<ul>`<br/>`<li>ネスト リスト1_1_1</li>`<br/>`<li>ネスト リスト1_1_2</li>`<br/>`</ul>`<br/>`</li>`<br/>`<li>ネスト リスト1_2</li>`<br/>`</ul>`<br/>`</li>`<br/>`<li>リスト2</li>`<br/>`<li>リスト3</li>`<br/>`</ul>` | `TBD` | <ul><li>リスト1<ul><li>ネスト リスト1_1<ul><li>ネスト リスト1_1_1</li><li>ネスト リスト1_1_2</li></ul></li><li>ネスト リスト1_2</li></ul></li><li>リスト2</li><li>リスト3</li></ul> |
| 項目 | Markdown | HTML | css| 実際の表示 |
