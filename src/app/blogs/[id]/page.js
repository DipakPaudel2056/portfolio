import prisma from "../../lib/prisma";

const Page = async ({ params }) => {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({
    where: { id: Number(id) },
  });
  // update the blog read count
  await prisma.blog.update({
    where: { id: Number(id) },
    data: {
      readcount: blog.readcount + 1,
    },
  });
  if (!blog) return <p>Blog not found</p>;
  return (
    <div className="main">
      <h1>{blog.title}</h1>
      <p>{blog.tag}</p>
      <h1>{blog.description}</h1>
      <p>{blog.readcount}</p>
    </div>
  );
};

export default Page;
