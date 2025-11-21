import {Box, Grid, Typography} from "@mui/material";
import {useLocation, useParams} from "react-router-dom";
import {appsData} from "../data/appsData.ts";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {CustomSVG} from "../components/CustomSVG.tsx";


export const AppDetail = () => {
    const { appName } = useParams();
    const {t} = useTranslation();
    const location = useLocation();

    useEffect(() => {
        // If there's a hash in the URL (e.g., #privacy_policy), try to scroll to it
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]); // Only run the effect when the hash changes

    const appDetail = appsData.find((app) => app.appName.toLowerCase() === appName!.toLowerCase());

    return (
        <Box overflow={"auto"}  width="100%" height={"100vh"} justifyItems={"center"} justifyContent={"start"} display={"flex"} alignItems={"center"} flexDirection={"column"}>

            <Grid container width="75%" minWidth={"350px"} spacing={2} alignItems={"center"} justifyContent={"center"}>
                <Grid size={12} display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"1rem"} justifyContent={"center"}>
                        <CustomSVG svgRef={appDetail!.logo} width={70} height={70}/>
                        <Typography sx={{mt:"1rem", mb:"2rem"}} fontSize={{xs:"1.5rem", md:"3rem"}} component="div" alignSelf={"center"}>
                            {appDetail!.appName}
                        </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}  display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"1rem"}>
                    <Typography fontWeight={"bold"} textAlign={"center"} variant={"h4"}>{t(appDetail!.slogan)}</Typography>
                    <Typography textAlign={"center"} variant={"h6"}>{t(appDetail!.description)}</Typography>

                </Grid>
                <Grid size={{xs:12, sm:6}}  maxWidth={"600px"}>
                    <img src={appDetail!.pathToImage} alt={appDetail!.appName} width="100%" height="100%"/>
                </Grid>

                <Grid size={{xs:12, sm:6}} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"1rem"} alignSelf={"start"}>
                    <Typography id="key_features"  sx={{m:"1rem", textDecoration:"none", color:"inherit" }} alignSelf={"start"} fontWeight={"bold"} variant={"h4"}>{t("key_features")}</Typography>
                    {
                        appDetail!.keyFeatures.map((feature) => (
                            <Box display={"flex"} flexDirection={"row"} alignItems={"start"} justifyContent={"center"} gap={"1rem"} sx={{m:".5rem"}}>
                                <CustomSVG svgRef={feature.icon} width={50} height={50}></CustomSVG>
                                <Typography variant={"h6"}>{t(feature.feature)}</Typography>
                            </Box>
                        ))
                    }
                </Grid>
                <Grid size={{xs:12, sm:6}} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={".3rem"}>
                    <Typography id="privacy_policy"  sx={{m:"1rem", textDecoration:"none", color:"inherit" }} alignSelf={"start"} fontWeight={"bold"} variant={"h4"}>{t("privacy_policy")}</Typography>
                    <Typography fontWeight={"bold"}  sx={{mx:"1rem", mt:".5rem"}} alignSelf={"start"} variant={"subtitle1"}>{t("privacy_policy_what_collect")}</Typography>
                    <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"body1"}>{t(appDetail!.whatCollect)}</Typography>
                    <Typography fontWeight={"bold"}  sx={{mx:"1rem", mt:".5rem"}} alignSelf={"start"} variant={"subtitle1"}>{t("privacy_policy_how_use")}</Typography>
                    <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"body1"}>{t(appDetail!.howUse)}</Typography>
                    <Typography fontWeight={"bold"}  sx={{mx:"1rem", mt:".5rem"}} alignSelf={"start"} variant={"subtitle1"}>{t("privacy_policy_store")}</Typography>
                    <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"body1"}>{t(appDetail!.store)}</Typography>
                    <Typography fontWeight={"bold"}  sx={{mx:"1rem", mt:".5rem"}} alignSelf={"start"} variant={"subtitle1"}>{t("privacy_policy_sharing")}</Typography>
                    <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"body1"}>{t(appDetail!.sharing)}</Typography>
                    <Typography fontWeight={"bold"}  sx={{mx:"1rem", mt:".5rem"}} alignSelf={"start"} variant={"subtitle1"}>{t("privacy_policy_changes_title")}</Typography>
                    <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"body1"}>{t("privacy_policy_changes")}</Typography>
                    <Typography fontWeight={"bold"}  sx={{mx:"1rem", mt:".5rem"}} alignSelf={"start"} variant={"subtitle1"}>{t("privacy_policy_contact_title")}</Typography>
                    <Typography sx={{mx:"1rem"}} alignSelf={"start"} variant={"body1"}>{t("privacy_policy_contact_us")}</Typography>
                </Grid>
            </Grid>


        </Box>


    )
}