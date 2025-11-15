import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useTranslation} from "react-i18next";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function MyDrawer() {
    const [open, setOpen] = React.useState(false);
    const {t} = useTranslation();
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: 200}} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key={"about-drawer"} disablePadding sx={{height: 60}}>
                    <ListItemButton>
                        <ListItemText primary={t("about")} slotProps={{
                            primary: {
                                sx: {fontSize: 20},  // style goes here
                            },
                        }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={"portfolio-drawer"} disablePadding sx={{height: 60}}>
                    <ListItemButton>
                        <ListItemText primary={t("portfolio")} slotProps={{
                            primary: {
                                sx: {fontSize: 20},  // style goes here
                            },
                        }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={"contacts-drawer"} disablePadding sx={{height: 60}}>
                    <ListItemButton>
                        <ListItemText primary={t("contacts")} slotProps={{
                            primary: {
                                sx: {fontSize: 20},  // style goes here
                            },
                        }}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon sx={{fontSize: "3rem"}}></MenuIcon>
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} sx={{
                '& .MuiDrawer-paper': {
                    display: 'flex',
                    alignItems: 'center',   // horizontal centering
                    justifyContent: 'center', // vertical centering
                }
            }}>
                {DrawerList}
            </Drawer>
        </Box>
    );
}