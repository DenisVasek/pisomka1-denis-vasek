"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button, Typography, Box, Avatar } from "@mui/material";
import React from "react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
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
            You are not logged in. Please log in using the button below.
          </Typography>
          <Button onClick={() => signIn("google")} variant="contained">
            Sign in with Google
          </Button>
        </>
      ) : (
        <>
          <Avatar
            src={session.user?.image || ""}
            alt={session.user?.name || "User"}
            sx={{ width: 80, height: 80, marginBottom: 2 }}
          />
          <Typography variant="h5" gutterBottom>
            Welcome, {session.user?.name}!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {session.user?.email}
          </Typography>
          <Button onClick={() => signOut()} variant="contained" color="secondary">
            Log Out
          </Button>
        </>
      )}
    </Box>
  );
}
