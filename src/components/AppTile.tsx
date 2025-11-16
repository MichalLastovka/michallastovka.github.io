import {Box, Button, Divider, Paper, Typography} from "@mui/material";
import {CustomSVG} from "./CustomSVG.tsx";
import {playLogo, respiratingLogo} from "./svgFiles.tsx";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";


interface AppTileProps {
    name: string;  // 'name' is required and should be of type string
    description: string;
    linkToDetail: string;
}

export const AppTile = (props: AppTileProps) => {
    const [t] = useTranslation();
    return (
        <Paper sx={{width: "30%", maxWidth: "400px", minWidth: "300px", height: "200px", borderRadius: 8}} elevation={5} variant="outlined">
            <Box display={"flex"} flexDirection={"row"} gap={2} sx={{mt:"1rem", mx:"1rem"}} alignItems={"center"} justifyContent={"space-between"}>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"1rem"}>
                    <CustomSVG svgRef={respiratingLogo} width={50} height={50}/>
                    <Typography variant={"h5"} >
                        {props.name}
                    </Typography>
                </Box>
                <CustomSVG svgRef={playLogo} width={40} height={40} tooltip={t("google_play_get")}/>

            </Box>
            <Box display={"flex"} flexDirection={"row"}>
                <Typography width={"50%"} variant={"caption"} sx={{m:"1rem"}}>{props.description}</Typography>
                <Divider orientation={"vertical"} flexItem></Divider>
                <Box width={"50%"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Button variant="outlined" component={Link} to={`/portfolio/${props.linkToDetail}`}>Detail</Button>

                </Box>

            </Box>

        </Paper>
    )
}