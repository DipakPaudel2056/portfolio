import prisma from "../../lib/prisma";
import Image from "next/image";
import styles from "./blog.module.css";
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
      <article className={styles.article}>
        <div className={styles.hero}>
          <Image
            src={blog.imageurl || "/blogimage.jpg"}
            alt="thumbnail picture of the blog"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.tag}>{blog.tag}</p>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.reads}>{blog.readcount} reads</p>
          <p className={styles.description}>{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default Page;
