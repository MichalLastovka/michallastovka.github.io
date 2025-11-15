import {useAppTheme} from "../context/hooks/ThemeContextHook.tsx";
import {Box, Button, Tooltip} from "@mui/material";
import {ThemeSwitcher} from "./ThemeSwitcher.tsx";
import {LanguageSwitcher} from "./LanguageSwitcher.tsx";
import MyDrawer from "./MyDrawer.tsx";
import {Mylogo} from "./MyLogo.tsx";
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';



export const TopBar = () => {
    const {mode, toggleTheme} = useAppTheme()
    const { t } = useTranslation();

    return (
        <Box sx={(theme) => ({
            backgroundColor: theme.palette.background.paper, justifyContent: 'space-between', display: 'flex',
            alignItems: 'center', gap: "1rem",
        })} width={"100%"} height={"15%"} minHeight={"75px"} maxHeight={"200px"} alignSelf={"start"}
             justifySelf={"start"}>

            <Box sx={{ml: "10px"}} flexDirection={"row"} display={"flex"} alignItems={"center"} gap={"1rem"}>
                <MyDrawer></MyDrawer>
                <Mylogo></Mylogo>
            </Box>
            <Box
                sx={{
                    display: {xs: 'none', sm: 'flex'},
                    flexDirection: 'row',
                    justifyContent: 'space-around', // distributes buttons evenly across container
                    flexGrow: 1,
                    gap: 2, // optional: spacing between buttons
                }}
            >
                    <Button
                        size={"large"}
                        key="menu-about"
                        variant="outlined"
                        component={Link}       // render Button as a Link
                        to="/"
                    >
                        {t("about")}
                    </Button>
                <Button
                    size={"large"}
                    key="menu-portfolio"
                    variant="outlined"
                    component={Link}       // render Button as a Link
                    to="/portfolio"
                >
                    {t("portfolio")}
                </Button>
                <Button
                    size={"large"}
                    key="menu-contacts"
                    variant="outlined"
                >
                    {t("contacts")}
                </Button>
            </Box>

            <Box>
                <Tooltip title={`Switch to ${mode === "dark" ? "light" : "dark"}`}>
                    <ThemeSwitcher onChange={toggleTheme} sx={{m: 1}} defaultChecked/>
                </Tooltip>
                <Tooltip title={`Switch language}`}>
                <span>
                    <LanguageSwitcher></LanguageSwitcher>
                </span>
                </Tooltip>
            </Box>
        </Box>
    )
}