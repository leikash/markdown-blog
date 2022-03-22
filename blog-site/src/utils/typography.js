// google-fontsを使うため、ここを参考にする
// https://bear-fruit.online/how-to-set-japanesefont/

import Typography from "typography"

const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.666,
    googleFonts:[
        {
            name: "Noto Sans JP",
            styles: ["400", "400i", "700", "700i"],
        }
    ],
    headerFontFamily: ["Noto Sans JP", "sans-serif"],
    bodyFontFamily: ["Noto Sans JP", "sans-serif"],
})

export const { scale, rhythm, options } = typography
export default typography