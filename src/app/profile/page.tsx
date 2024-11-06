"use client";

import { useSession } from "next-auth/react";
import { Button, Typography, Box, Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/"); // Redirect to home if not logged in
    return null;
  }

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
      <Avatar
        src={session.user?.image || ""}
        alt={session.user?.name || "User"}
        sx={{ width: 80, height: 80, marginBottom: 2 }}
      />
      <Typography variant="h5" gutterBottom>
        {session.user?.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: {session.user?.email}
      </Typography>
      <Button onClick={() => router.push("/")} variant="contained" color="primary">
        Go to Main Page
      </Button>
    </Box>
  );
}
