export const runtime = "nodejs";

import prisma from "../../lib/prisma";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import crypto from "crypto";

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
    const ext = image.name.split(".").pop();
    const key = `${crypto.randomUUID()}.${ext}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.PORTFOLIO_BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: image.type,
      })
    );

    imageurl = `https://${process.env.PORTFOLIO_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  }

  await prisma.blog.create({
    data: {
      tag: formData.get("tag")?.toString() || "",
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      imageurl,
    },
  });

  return new Response(
  JSON.stringify({ success: true }),
  { status: 200 }
);

}
