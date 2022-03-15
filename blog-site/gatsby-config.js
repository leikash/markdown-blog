/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

/* Eslint config
const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);
*/

module.exports = {
  siteMetadata: {
    title: "Leikash blog",
    author: "Leikash",
    category: ["React", "Webサイト構築"],
    user: { name: "Leikash", email: "kashbellie@gmail.com" },
  },
  plugins: [
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
    /* ESLintでエラーになるのでコメントアウトしておく
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    */
  ],
}
