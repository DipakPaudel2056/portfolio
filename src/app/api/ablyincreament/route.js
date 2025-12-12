import prisma from "../../lib/prisma"
import Ably from "ably";
import { NextResponse } from "next/server";

const ably = new Ably.Rest({
  key: process.env.NEXT_PUBLIC_ABLY_APIKEY,
});
export async function GET() {
  const updated = await prisma.sitevisit.update({
    where: { id: 1 },
    data: { count: { increment: 1 } },
  });
  await ably.channels.get("site-visit").publish("update", {
    count: updated.count,
  });
  return NextResponse.json({ count: updated.count });
}
