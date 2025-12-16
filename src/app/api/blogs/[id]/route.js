import prisma from "../../../lib/prisma";

export async function DELETE(req, context) {
    const {params} = context
    const {id} = await params
  await prisma.blog.delete({
    where: { id: parseInt(id) },
  });

  return Response.json({ success: true });
}
export async function PUT(req,context){
  const {params} = context
  const {id} = await params
  // update the data here in prisma
 const body = await req.json()
 console.log(body)
  console.log(id)
  const updatedBlog = await prisma.blog.update({
    where: {id: Number(id)},
    data:{
      tag: body.tag,
      title: body.title,
      description: body.description
    }
  })
  return Response.json({success: true})
}