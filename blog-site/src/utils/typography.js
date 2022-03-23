// google-fontsを使うため、ここを参考にする
// https://bear-fruit.online/how-to-set-japanesefont/

import Typography from "typography"

const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.666,
    googleFonts:[
        {
            name: "Montserrat",
            styles: ["100", "100i", "200", "200i", "300", "300i", "400", "400i", "500", "500i", "600", "600i", "700", "700i","800", "800i", "900", "900i"],
        },
        {
            name: "Roboto",
            styles: ["100", "100i", "300", "300i", "400", "400i", "500", "500i", "700", "700i", "900", "900i"],
        },
        {
            name: "Noto Sans JP",
            styles: ["400", "400i", "700", "700i"],
        },
    ],
    headerFontFamily: ["Roboto", "Noto Sans JP", "sans-serif"],
    bodyFontFamily: ["Roboto", "Noto Sans JP", "sans-serif"],
})

export const { scale, rhythm, options } = typography
export default typography