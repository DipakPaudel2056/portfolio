import { redirect } from "next/navigation";
import prisma from "../../lib/prisma";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
export async function POST(req) {
  // get the form fields
  const formData = await req.formData();
  // handle s3 image upload here
  const image = formData.get("image");
  const command = new PutObjectCommand({
    Bucket: process.env.PORTFOLIO_BUCKET_NAME,
    Key: image.name,
    ContentType: image.type,
  });
  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 });
  try {
    await fetch(signedUrl, {
      method: "PUT",
      body: image,
      headers: { "Content-Type": image.type },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Problem uploading a blog image" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const rawFormData = {
    tag: formData.get("tag")?.toString() || "",
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    imageurl:`https://${process.env.PORTFOLIO_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${image.name}`
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
