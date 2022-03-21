/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Leikash Labo.",
    author: "Leikash",
    category: ["React", "Webサイト構築"],
    user: { name: "Leikash", email: "kashbellie@gmail.com" },
  },
  plugins: [
    // メタデータ管理に使用する
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leikash blog`,
        short_name: `Leikash blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon_book_772201_sq.png`
      },
    },
    // Tailwind CSSを使う
    // `gatsby-plugin-postcss`,
    // サイトのファイルを参照する
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    // サイト内の画像を表示する
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // mdxブログを作れるようにする
    // https://www.gatsbyjs.com/docs/tutorial/part-4/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-code-titles`, //ファイルのタイトルを表示
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false, //行数を出したい場合trueに。
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: 'noopener',
            },
          },
        ],
      },
    },
    // 画像を埋め込む
    // 参照: https://reffect.co.jp/react/gatsby-basic-tutorial-for-beginners-4
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Markdownファイルを表示するため
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Markdownファイルの中の画像を表示する
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          // Prismの導入 gatsby-transformer-remarkが競合するため、入れ子で記載する
          // https://o-alquimista.com/blogs/gatsby-contentful/
          `gatsby-remark-code-titles`, //ファイルのタイトルを表示
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false, //行数を出したい場合trueに。
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: 'noopener',
          },
        },
        ],
      },
    },
    // 画像表示のため。gatsby-imageは非推奨のため、gatsby-plugin-imageを使用する
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    `gatsby-plugin-image`,
    // スタイルを整えるために追加
    // google fontsもここで追加
    // 参照 https://npmja.com/tuto3.php
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    
  ],
}
