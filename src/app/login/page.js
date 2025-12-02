"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // handle submit
  async function handleSubmit(event) {
    event.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <div className="main">
      welcome to login page
      {error === "CredentialsSignin" && (
        <p className="text-red-500">Invalid email or password.</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Page;
