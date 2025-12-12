"use client";
import { signOut } from "next-auth/react";

const Signout = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
  );
};

export default Signout;
