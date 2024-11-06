"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, MenuItem, Button, Typography } from "@mui/material";
import React from "react";

export default function HomePage() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {!session ? (
        <>
          <Typography variant="h6" gutterBottom>
            You are not logged in. Please log in using the menu.
          </Typography>
          <Button onClick={handleClick} variant="contained">
            Open Menu
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={() => { handleClose(); signIn("google"); }}>Log In</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Typography variant="h6" gutterBottom>
            Welcome, {session.user?.name}!
          </Typography>
          <Button onClick={handleClick} variant="contained">
            Open Menu
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={() => { handleClose(); signOut(); }}>Log Out</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}
