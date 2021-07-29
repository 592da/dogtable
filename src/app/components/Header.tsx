import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

function Header() {
  const theme = useTheme();

  // can use down instead of only
  const isTablet = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <AppBar position={isTablet ? "sticky" : "static"}>
      <Toolbar>
        <Typography variant="h6">Dog Image Gallery App</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
