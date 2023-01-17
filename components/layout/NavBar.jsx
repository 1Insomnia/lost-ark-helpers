import { useState } from "react";
import { useWindow } from "@/hooks/useWindow";

import PropTypes from "prop-types";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Toolbar,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const container = useWindow();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} textAlign="center">
      <Typography variant="h6" sx={{ my: 2 }}>
        LOAH
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box display="flex">
      <AppBar
        component="nav"
        enableColorOnDark
        sx={{
          color: "accents.100",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(4px)",
          boxShadow: "0 20px 13px rgb(0 0 0 / 0.03)",
        }}
        position="fixed"
      >
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOAH
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "accents.100" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              display: { xs: "block", sm: "none" },
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};
