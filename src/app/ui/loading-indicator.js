"use client";

import { useLinkStatus } from "next/link";

export default function LoadingIndicator() {
  const { pending } = useLinkStatus();

  return (
    <span className={`link-hint ${pending ? "is-pending" : ""}`} />
  );
}
