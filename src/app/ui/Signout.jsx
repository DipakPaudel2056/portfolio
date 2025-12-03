"use client";
import { SessionProvider, signOut } from "next-auth/react";
import React from "react";

const Signout = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/login" })}>Logout</button>
  );
};

export default Signout;
