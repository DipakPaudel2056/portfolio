import prisma from "../../../lib/prisma";

export async function DELETE(req, context) {
    const {params} = context
    const {id} = await params
  await prisma.blog.delete({
    where: { id: parseInt(id) },
  });

  return Response.json({ success: true });
}
