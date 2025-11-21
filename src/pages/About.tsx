import {Box, Grid, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {StackItem} from "../components/StackItem.tsx";
import {kotlinLogo} from "../components/svgFiles.tsx";


export const About = () => {
    const {t} = useTranslation();
    return (
        <Box width="80%" height={"100vh"} display={"flex"} flexDirection={"column"} alignItems={"center"}
             alignSelf={"center"}>
            <Typography sx={{mt: "1rem", mb: "2rem"}} fontSize={{xs: "1.5rem", md: "3rem"}} color="textSecondary"
                        component="div" alignSelf={"center"}>
                {t("about")}
            </Typography>
            <Typography alignSelf={"center"} sx={{m: "1.5rem"}} textAlign={"justify"}
                        fontSize={{xs: "1rem", md: "1.5rem"}}>
                {t("about_me")}
            </Typography>
            <Grid container spacing={2}>

                <StackItem title={"Kotlin"}
                           description={"Lorem ipsum dolor sit amet quis Lorem reprehenderit exercitation officia eu sunt anim elit non deserunt id in Lorem laborum irure esse. Cillum do laborum culpa commodo tempor aliquip voluptate laborum incididunt adipisicing id tempor."}
                           icon={kotlinLogo}>

                </StackItem><StackItem title={"Kotlin"}
                           description={"Lorem ipsum dolor sit amet quis Lorem reprehenderit exercitation officia eu sunt anim elit non deserunt id in Lorem laborum irure esse. Cillum do laborum culpa commodo tempor aliquip voluptate laborum incididunt adipisicing id tempor."}
                           icon={kotlinLogo}>

                </StackItem><StackItem title={"Kotlin"}
                           description={"Lorem ipsum dolor sit amet quis Lorem reprehenderit exercitation officia eu sunt anim elit non deserunt id in Lorem laborum irure esse. Cillum do laborum culpa commodo tempor aliquip voluptate laborum incididunt adipisicing id tempor."}
                           icon={kotlinLogo}>

                </StackItem><StackItem title={"Kotlin"}
                           description={"Lorem ipsum dolor sit amet quis Lorem reprehenderit exercitation officia eu sunt anim elit non deserunt id in Lorem laborum irure esse. Cillum do laborum culpa commodo tempor aliquip voluptate laborum incididunt adipisicing id tempor."}
                           icon={kotlinLogo}>

                </StackItem>
            </Grid>

        </Box>


    )
}