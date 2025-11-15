// context/theme-context.tsx
import { useContext } from "react"
import {AppThemeContext} from "../AppThemeContext.tsx";



export const useAppTheme = () => {
    const ctx = useContext(AppThemeContext)
    if (!ctx) throw new Error("useAppTheme must be used inside <AppThemeContextProvider>")
    return ctx
}
