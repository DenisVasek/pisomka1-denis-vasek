"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button, Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
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
      <Typography variant="h6" gutterBottom>
        {session ? "You are logged in." : "You are not logged in."}
      </Typography>

      <Button onClick={handleMenuClick} variant="contained">
        Menu
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {!session ? (
          <MenuItem
            onClick={() => {
              handleMenuClose();
              signIn("google");
            }}
          >
            Log In
          </MenuItem>
        ) : (
          <>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                router.push("/profile");
              }}
            >
              My Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                signOut();
              }}
            >
              Log Out
            </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
}
