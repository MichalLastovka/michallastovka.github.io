import {Box, Typography} from "@mui/material";
import {AppTile} from "../components/AppTile.tsx";
import {useTranslation} from "react-i18next";


export const Portolio = () => {
    const { t } = useTranslation();
    return (
        <Box width="100%" height={"100vh"} justifyItems={"center"} justifyContent={"start"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <Typography sx={{mt:"1rem"}} fontSize={{xs:"1.5rem", md:"3rem"}} color="textSecondary" component="div" alignSelf={"center"}>
                Portfolio
            </Typography>
            <AppTile name="Respirating" description={t("respirating_description")} linkToDetail={"respirating"} />
        </Box>


    )
}