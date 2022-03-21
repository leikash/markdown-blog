import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

// 独自にテーマを設定する
const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography