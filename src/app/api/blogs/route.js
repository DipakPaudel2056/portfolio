import { redirect } from "next/dist/server/api-utils";
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
  // get the form fields
  const formData = await req.formData();
  const image = formData.get("image");
  const buffer = Buffer.from(await image.arrayBuffer());
  // handle s3 image upload here
  await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.PORTFOLIO_BUCKET_NAME,
      Key: image.name,
      Body: buffer,
      ContentType: image.type,
    })
  );
  const rawFormData = {
    tag: formData.get("tag")?.toString() || "",
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    imageurl: `https://${process.env.PORTFOLIO_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${image.name}`,
  };
  // get prisma to post this
  const newBlog = await prisma.blog.create({
    data: rawFormData,
  });

  return new Response(
    JSON.stringify({ message: "created new blog", newBlog }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
