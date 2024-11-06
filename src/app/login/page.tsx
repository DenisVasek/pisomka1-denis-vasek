"use client";

import { signIn } from "next-auth/react";
import { Button, Typography, Box } from "@mui/material";
import React from "react";

export default function LoginPage() {
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
      <Typography variant="h4" gutterBottom>
        Welcome! Please sign in to continue.
      </Typography>
      <Button
        onClick={() => signIn("google")}
        variant="contained"
        color="primary"
      >
        Sign in with Google
      </Button>
    </Box>
  );
}
