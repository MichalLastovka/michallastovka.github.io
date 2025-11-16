import {Box, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {appsData} from "../data/appsData.ts";
import {useTranslation} from "react-i18next";


export const AppDetail = () => {
    const { appName } = useParams();
    const {t} = useTranslation();
    const appDetail = appsData.find((app) => app.appName.toLowerCase() === appName!.toLowerCase());
    return (
        <Box overflow={"auto"}  width="100%" height={"100vh"} justifyItems={"center"} justifyContent={"start"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <Typography sx={{mt:"1rem"}} fontSize={{xs:"1.5rem", md:"3rem"}} color="textSecondary" component="div" alignSelf={"center"}>
                {appDetail!.appName}
            </Typography>

            <Typography sx={{m:"1rem"}} variant={"caption"}>{t(appDetail!.description)}</Typography>
            <Box width={"100%"} maxWidth={"600px"}>
                <img src={appDetail!.pathToImage} alt={appDetail!.appName} width="100%" height="100%"/>
            </Box>
            <Typography id="privacy_policy"  sx={{m:"1rem", textDecoration:"none", color:"inherit" }} alignSelf={"start"} variant={"h5"}>{t("privacy_policy")}</Typography>
            <Typography fontWeight={"bold"}  sx={{mx:"1rem"}} alignSelf={"start"} variant={"subtitle2"}>{t("privacy_policy_what_collect")}</Typography>
            <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"caption"}>{t(appDetail!.whatCollect)}</Typography>
            <Typography fontWeight={"bold"}  sx={{mx:"1rem"}} alignSelf={"start"} variant={"subtitle2"}>{t("privacy_policy_how_use")}</Typography>
            <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"caption"}>{t(appDetail!.howUse)}</Typography>
            <Typography fontWeight={"bold"}  sx={{mx:"1rem"}} alignSelf={"start"} variant={"subtitle2"}>{t("privacy_policy_store")}</Typography>
            <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"caption"}>{t(appDetail!.store)}</Typography>
            <Typography fontWeight={"bold"}  sx={{mx:"1rem"}} alignSelf={"start"} variant={"subtitle2"}>{t("privacy_policy_sharing")}</Typography>
            <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"caption"}>{t(appDetail!.sharing)}</Typography>
            <Typography fontWeight={"bold"}  sx={{mx:"1rem"}} alignSelf={"start"} variant={"subtitle2"}>{t("privacy_policy_changes_title")}</Typography>
            <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"caption"}>{t("privacy_policy_changes")}</Typography>
            <Typography fontWeight={"bold"}  sx={{mx:"1rem"}} alignSelf={"start"} variant={"subtitle2"}>{t("privacy_policy_contact_title")}</Typography>
            <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"caption"}>{t("privacy_policy_contact_us")}<Link to="mailto:lastechdev@protonmail.com"><Typography sx={{textDecoration:"none"}} variant={"caption"}> lastechdev@protonmail.com</Typography>
            </Link></Typography>




        </Box>


    )
}