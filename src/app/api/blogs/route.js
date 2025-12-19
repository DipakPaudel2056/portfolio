export const runtime = "nodejs";

import { redirect } from "next/navigation";
import prisma from "../../lib/prisma";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(req) {
  const formData = await req.formData();
  const image = formData.get("image");

  let imageurl = null;

  if (image && image.size > 0) {
    const buffer = Buffer.from(await image.arrayBuffer());

    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.PORTFOLIO_BUCKET_NAME,
        Key: image.name,
        Body: buffer,
        ContentType: image.type,
      })
    );

    imageurl = `https://${process.env.PORTFOLIO_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${image.name}`;
  }

  const newBlog = await prisma.blog.create({
    data: {
      tag: formData.get("tag")?.toString() || "",
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      imageurl,
    },
  });
  redirect("/blogs")

  return new Response(JSON.stringify(newBlog), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
