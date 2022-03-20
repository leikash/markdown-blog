import Typography from "typography"
import githubTheme from 'typography-theme-github'

// 独自にテーマを設定する
const typography = new Typography(githubTheme)

export const { scale, rhythm, options } = typography
export default typography