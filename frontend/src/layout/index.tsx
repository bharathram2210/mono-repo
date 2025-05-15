import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Header from './header';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Layout = () => {
    const drawerWidth = 240;
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header open={open} handleDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth} />
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
