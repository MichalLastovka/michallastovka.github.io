// components/Layout.tsx
import React from 'react';
import {TopBar} from "./TopBar.tsx";
import {Outlet} from 'react-router-dom';
import {Box} from "@mui/material";
import {Footer} from "./Footer.tsx";


const Layout: React.FC = () => (
    <Box display="flex" flexDirection="column" width={"100%"} height={"100%"}>
        <TopBar/>
        <Outlet />
        <Footer/>
    </Box>
);

export default Layout;