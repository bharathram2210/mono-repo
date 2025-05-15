import { styled } from "@mui/material/styles";
import MuiAppBar, {
    type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { Grid, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

interface IsOpenProps {
    open: boolean;
    handleDrawerOpen: () => void;
    drawerWidth: number;
}

const Header: React.FC<IsOpenProps> = ({
    open,

    drawerWidth,
}) => {
    const navigateTo = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar
            position="fixed"
            elevation={0}
            color="primary"
            sx={{
                background:
                    "linear-gradient( 99.6deg,  rgba(112,128,152,1) 10.6%, rgba(185,205,227,1) 81.1%, rgba(154,180,212,1) 102.4% );",
            }}
            open={open}
            drawerWidth={drawerWidth}
        >
            <Toolbar>
                <Typography
                    variant="h5"
                    sx={{ flexGrow: 1 }}
                    noWrap
                    component="div"
                    fontWeight={"bold"}
                >
                    product name
                </Typography>
                <Tooltip title={"Click to open profile"} placement="right-start">
                    <IconButton
                        size="small"
                        onClick={handleClick}
                        sx={{ ml: 2, boxShadow: 3 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Toolbar>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMenu}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            width: 250,
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                                width: 82,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        columnGap: 1,
                        width: "100%",
                    }}
                >
                    <PersonIcon color="info" sx={{ fontSize: "40px" }} fontSize="large" />
                    <Grid
                        display={"grid"}
                        flex={1}
                        columnGap={0}
                        alignContent={"flex-start"}
                    >
                        <span style={{ fontSize: "18px" }}>My name </span>
                        <span style={{ fontSize: "14px" }}>my access </span>
                    </Grid>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add admin
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        setTimeout(() => {
                            localStorage.removeItem("token");
                            navigateTo("/login");
                        }, 1000);
                    }}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Header;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    drawerWidth?: number;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
