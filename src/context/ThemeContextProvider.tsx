import { useState} from "react";
import {ThemeProvider as MuiThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {darkTheme, lightTheme} from "../styling/theme.ts";
import {AppThemeContext, type ThemeMode} from "./AppThemeContext.tsx";




export const AppThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    // Lazy initialization to set the initial theme based on localStorage or system preferences
    const [mode, setMode] = useState<ThemeMode>(() => {
        const stored = localStorage.getItem("theme") as ThemeMode | null;
        if (stored) {
            return stored;  // Return stored theme if it exists
        }
        // Otherwise, check system preference for dark mode
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";  // Default to system preference
    });

    const toggleTheme = () => {
        const next = mode === "light" ? "dark" : "light";
        setMode(next);  // Update state
        localStorage.setItem("theme", next);  // Persist the change in localStorage
    };

    const theme = mode === "light" ? lightTheme : darkTheme;

    return (
        <AppThemeContext.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </AppThemeContext.Provider>
    );
};