// components/Layout.tsx
import React from 'react';
import {TopBar} from "./TopBar.tsx";
import {Outlet} from 'react-router-dom';
import {Box} from "@mui/material";


const Layout: React.FC = () => (
    <Box display="flex" flexDirection="column" width={"100%"} height={"100%"}>
        <TopBar/>
        <Outlet />
    </Box>
);

export default Layout;