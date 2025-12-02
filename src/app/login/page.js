"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Page = () => {
  const Loginform = () => {
    "use client";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const params = useSearchParams();
    const error = params.get("error");
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
          <p className="error">Invalid email or password.</p>
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

  return (
    <Suspense fallback={<>loading search params...</>}>
      <Loginform />
    </Suspense>
  );
};

export default Page;
