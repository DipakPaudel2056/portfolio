import prisma from "../../../../lib/prisma";
import UpdateForm from "../UpdateForm"
import "../../page.css"
const Page = async ({ params }) => {
  const { id } = await params;
  const blogdata = await prisma.blog.findUnique({
    where: { id: Number(id) },
  });
  return (
   <UpdateForm blogdata={blogdata} />
  );
};

export default Page;
