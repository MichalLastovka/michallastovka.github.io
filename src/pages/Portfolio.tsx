import {Box, Typography} from "@mui/material";


export const Portolio = () => {
    // const { t } = useTranslation();
    return (
        <Box width="100%" height={"100vh"} justifyItems={"start"} justifyContent={"start"} display={"flex"} alignItems={"start"} flexDirection={"column"}>
            <Typography sx={{mt:"1rem"}} fontSize={{xs:"1.5rem", md:"3rem"}} color="textSecondary" component="div" alignSelf={"center"}>
                Portfolio
            </Typography>

        </Box>


    )
}