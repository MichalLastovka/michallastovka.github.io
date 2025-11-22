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
                           description="Modern, statically typed, general-purpose programming language known for its conciseness, safety features like null safety, and interoperability with Java."
                           icon={kotlinLogo} use={"servers, Android front-end"}/>
                <StackItem title="React"
                           description="Front-end JavaScript library that aims to make user interfaces based on components in single-page, mobile, or server-rendered applications."
                           icon={reactLogo} use={"web front-end"}/>
                <StackItem title="Postgres"
                           description="Relational database management system supported on all major operating systems emphasizing extensibility and SQL compliance."
                           icon={postgresLogo} use={"back-end database"}/>
                <StackItem title="Python"
                           description="High-level, general-purpose, dynamically type-checked and garbage-collected programming language designed for readability. It supports multiple programming paradigms, including structured, object-oriented and functional programming."
                           icon={pythonLogo} use={"back-end, server"}/>

            </Grid>
        </Box>


    )
}