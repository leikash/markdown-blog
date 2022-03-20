import Typography from "typography"
// import githubTheme from 'typography-theme-github'

// 独自にテーマを設定する
//const typography = new Typography(githubTheme)
const typography = new Typography({
    title: 'Leikash blog theme',
        baseFontSize: '16px',
        baseLineHeight: 1.70,
        scaleRatio: 2.10,
    googleFonts: [
        {
            name: 'M+PLUS+Rounded+1c',
            styles: ['400'],
        },
        {
            name: 'Noto+Sans+JP',
            styles: ['400'],
        },
    ],
    headerFontFamily: [
        "M PLUS Rounded 1c",
        "sans-serif",
    ],
    bodyFontFamily: [
        "Noto Sans JP",
        "sans-serif",
    ],
    headerColor: "hsl(210,50%,20%)",
    bodyColor: "hsl(210,50%,25%)",
    headerWeight: `bold`,
    bodyWeight: `normal`,
    boldWeight: `bold`,
    blockMarginBottom: 1,
    includeNormalize: true,
})

export const { scale, rhythm, options } = typography
export default typography