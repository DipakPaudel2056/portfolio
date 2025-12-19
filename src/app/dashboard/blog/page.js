"use client";

import "./page.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload blog");
      }

      // ✅ client-side redirect (reliable)
      router.push("/blogs");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input type="text" name="tag" placeholder="tag" required />
        <input type="text" name="title" placeholder="title" required />
        <input type="file" name="image" accept="image/*" />
        <textarea name="description" placeholder="description" required />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Blog"}
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
