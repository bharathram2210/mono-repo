import * as React from "react";
import { styled, useTheme, type Theme, type CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { adminSidebarItems } from "./sidebar-items";
import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const Sidebar: React.FC<HeaderProps> = ({
  open,
  handleDrawerClose,
  drawerWidth,
}) => {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const { pathname } = useLocation();

  return (
    <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon fontSize="large" sx={{ color: "white" }} />
          ) : (
            <ChevronLeftIcon fontSize="large" sx={{ color: "grey" }} />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {adminSidebarItems.map((item, index) => {
          return (
            <Tooltip key={index} title={item.name} placement="right" arrow>
              <ListItem
                onClick={() => navigateTo(item.path)}
                key={index}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  selected={pathname === item.path}
                  sx={{
                    px: 2.5,
                    py: 2,
                    justifyContent: open ? "initial" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      mr: open ? 3 : "auto",
                    }}
                  >
                    <item.icon
                      fontSize="large"
                      color={pathname === item.path ? "primary" : "secondary"}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: "grey",
                      fontWeight: "900",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  // background: 'linear-gradient( 189.6deg, #230488 31.2%, #008A94 71.1% )',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
  boxShadow: "0px 0px 10px 0px rgba(59, 59, 59, 0.1)",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface DrawerProps extends MuiDrawerProps {
  open?: boolean;
  drawerWidth?: number;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<DrawerProps>(({ theme, open, drawerWidth }) => ({
  ...(open
    ? {
        ...openedMixin(theme, drawerWidth as number),
        "& .MuiDrawer-paper": openedMixin(theme, drawerWidth as number),
        width: drawerWidth, // Apply width when drawer is open
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
        // width: `calc(${drawerWidth}px + 72px)`, // Adjust width for closed state (optional)
      }),
}));

interface HeaderProps {
  open: boolean;
  handleDrawerClose: () => void;
  drawerWidth?: number;
}
