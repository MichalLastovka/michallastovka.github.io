import {createContext} from "react";

export type ThemeMode = "light" | "dark"

export const AppThemeContext = createContext<{
    mode: ThemeMode
    toggleTheme: () => void
}>({
    mode: "light",
    toggleTheme: () => {},
})