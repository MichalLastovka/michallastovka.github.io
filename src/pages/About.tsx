import {Box, Grid, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {StackItem} from "../components/StackItem.tsx";
import {kotlinLogo, postgresLogo, pythonLogo, reactLogo} from "../components/svgFiles.tsx";


export const About = () => {
    const {t} = useTranslation();
    return (
        <Box overflow={"scroll"} width="100%" height={"100vh"} justifyItems={"center"} justifyContent={"start"}
             display={"flex"} alignItems={"center"} flexDirection={"column"} alignSelf={"center"}>
            <Typography sx={{mt: "1rem", mb: "2rem"}} fontSize={{xs: "1.5rem", md: "3rem"}} color="textSecondary"
                        component="div" alignSelf={"center"}>
                {t("about")}
            </Typography>
            <Typography alignSelf={"center"} sx={{m: "1.5rem"}} textAlign={"justify"}
                        fontSize={{xs: "1rem", md: "1.5rem"}}>
                {t("about_me")}
            </Typography>
            <Typography sx={{mt: "1rem", mb: "2rem"}} fontSize={{xs: "1rem", md: "2rem"}} color="textSecondary"
                        component="div" alignSelf={"center"}>Můj dev stack:</Typography>
            <Grid container spacing={4} justifyContent="center" width="80%">
                <StackItem title="Kotlin"
                           description={t("kotlin_description")}
                           icon={kotlinLogo} use={t("kotlin_use")}/>
                <StackItem title="React"
                           description={t("react_description")}
                           icon={reactLogo} use={t("react_use")}/>
                <StackItem title="Postgres"
                           description={t("postgres_description")}
                           icon={postgresLogo} use={t("postgres_use")}/>
                <StackItem title="Python"
                           description={t("python_description")}
                           icon={pythonLogo} use={t("python_use")}/>

            </Grid>
        </Box>


    )
}