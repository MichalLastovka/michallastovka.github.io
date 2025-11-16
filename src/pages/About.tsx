import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";


export const About = () => {
    const { t } = useTranslation();
    return (
        <Box width="100%" height={"100vh"} justifyItems={"start"} justifyContent={"start"} display={"flex"} alignItems={"start"} flexDirection={"column"}>
            <Typography sx={{mt:"1rem", mb:"2rem"}} fontSize={{xs:"1.5rem", md:"3rem"}} color="textSecondary" component="div" alignSelf={"center"}>
                {t("about")}
            </Typography>
            <Typography alignSelf={"center"} sx={{m:"1.5rem"}} textAlign={"justify"}>
                {t("about_me")}
            </Typography>
        </Box>


    )
}