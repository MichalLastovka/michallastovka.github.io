// theme.ts
import { createTheme } from "@mui/material/styles"

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#f5f5f5",
        },
        primary: {
            main: "#333333",     // dark primary for light mode
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: { height: "100%", width: "100%" },
                body: {
                    height: "100%",
                    margin: 0,
                    padding: 0,
                    backgroundColor: "#f5f5f5",
                },
                "#root": {
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
            },
        },
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#4f4e4e",
        },
        primary: {
            main: "#cecdcd",     // light primary for dark mode
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: { height: "100%", width: "100%" },
                body: {
                    height: "100%",
                    margin: 0,
                    padding: 0,
                    backgroundColor: "#000000",
                },
                "#root": {
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
            },
        },
    },
})
