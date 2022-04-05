/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    siteName: "Karashlei Lab.",
    siteSubTitle: "We wish your fruitful life.",
    siteDescription: "プロジェクト管理やWebサイト構築のやり方を書いていきます。",
    siteUrl: `https://karashlei.com`,
    siteAuthor: "Karashlei",
    siteOgpImage: "images/ElNido.jpg",
    siteCategory: ["React", "Webサイト構築"],
    siteUser: { name: "Karashlei", email: "karashlei@gmail.com" },
    siteAuthorProfile:"セブ島でオフショア開発のマネージャーをしています。"
  },
  plugins: [
    // メタデータ管理に使用する
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karashlei Lab.`,
        short_name: `Karashlei Lab.`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logo_green_mango_transparent.png`
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
          `gatsby-remark-prismjs-title`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false, //行数を出したら1行ずれてる
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
    // /* ここから mdxの運用ができるようになったら不要
    // ただ、現状、gatsby-node.js, post.jsでエラーになるため残す
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
          `gatsby-remark-prismjs-title`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true, //行数を出したい場合trueに。
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    // === ここまで */
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
    // fontawesomeを使えるようにする
    // gatsbyjs.com/plugins/gatsby-plugin-fontawesome-css/
    // `gatsby-plugin-fontawesome-css`,
    // SEO対策のため、サイトマップを作る
    // https://zenn.dev/notofu/articles/d84d217244d02a
    // このエラーが出るので導入中止。Google search consoleに登録するために使う予定。
    // Error in "/home/yukio/development/markdown-blog/node_modules/gatsby-plugin-sitemap/gatsby-node.js": Cannot find module 'gatsby/graphql'
    `gatsby-plugin-sitemap`,
    // SEO対策はここを主に参照する
    // https://monotein.com/blog/gatsby-seo-and-optimisations
    `gatsby-plugin-robots-txt`,
    // SEO対策のため、metaタグを作成する
    // https://moon-forest-design.github.io/memo/gatsbyjs-seo/
    `gatsby-plugin-react-helmet`,
  ],
}
