/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Leikash blog",
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
        icon: `src/images/icon_book_772201_2.png`
      },
    },
    // Tailwind CSSを使う
    `gatsby-plugin-postcss`,
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
    // Markdownファイルを表示するため
    `gatsby-transformer-remark`,
    // 画像を埋め込む
    // 参照: https://reffect.co.jp/react/gatsby-basic-tutorial-for-beginners-4
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    // 画像表示のため。gatsby-imageは非推奨のため、gatsby-plugin-imageを使用する
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    `gatsby-plugin-image`,
    // スタイルを整えるために追加
    // 参照 https://npmja.com/tuto3.php
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
