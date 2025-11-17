import {Grid, Typography} from "@mui/material";
import {ContactsContainer} from "./ContactsContainer.tsx";


export const Footer: React.FC = () => (
    <Grid container direction="row" display={"flex"} alignItems="center" justifyContent={"space-evenly"}>
        <ContactsContainer/>
        <Typography variant="body2">
            &copy; {new Date().getFullYear()} Michal Lastovka (lasTech). All rights reserved.
        </Typography>
    </Grid>
);