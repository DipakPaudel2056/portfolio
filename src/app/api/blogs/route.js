import { redirect } from "next/navigation";
import prisma from "../../lib/prisma";

export async function POST(req) {
  // get the form fields
  const formData = await req.formData();
  // post them in database from prisma
  const rawFormData = {
    tag: formData.get("tag")?.toString() || "",
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
  };
  // get prisma to post this
  const newBlog = await prisma.blog.create({
    data: rawFormData,
  });
  newBlog.id && redirect("/dashboard/blog");
  return new Response(
    JSON.stringify({ message: "created new blog", newBlog }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
