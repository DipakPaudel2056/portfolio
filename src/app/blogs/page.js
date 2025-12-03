export const dynamic = "force-dynamic";
import prisma from "../lib/prisma";
import "./style.css";
import BlogCard from "../ui/BlogCard";
import Pagination from "../ui/Pagination";
import Redis from "ioredis";
import { createClient } from "redis";

const PAGE_SIZE = 5;
const page = async ({ searchParams }) => {
  // let's implement cloud redis server
const client = createClient({
    username:process.env.REDIS_USERNAME ,
    password:process.env.REDIS_PASSWORD ,
    socket: {
        host: process.env.REDIS_HOST,
        port: 10947
    }
});
client.on('error',err=>console.log('Redis client error',err))
await client.connect()
  let { page } = await searchParams;
  page = Number(page) || 0;
  // try to get the data from the cache
  let all_Blogs;
  const cachedData = await client.get("blogs");
  if (cachedData) {
    all_Blogs = JSON.parse(cachedData);
  } else {
    all_Blogs = await prisma.blog.findMany();
    await client.set("blogs", JSON.stringify(all_Blogs));
  }
  let displayingBlogs = all_Blogs.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const totalBlogs = await prisma.blog.count();
  const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);
  return (
    <div className="main">
      <div className="blog__header">
        <h1>Learn more about me</h1>
        <p>
          In this blog i would express what i am trying to build and how i think
          while working in a project.
        </p>
        <span className="search__bar">
          <input
            type="text"
            name="search__blog"
            id="search__blog"
            placeholder="find blogs"
          />
          <button className="find__now__btn">Find Now</button>
        </span>
      </div>
      <div className="blog__main">
        <div className="blogs__all">
          <h2>My blogs are remarkable.</h2>
          <div className="blogs__section">
            {displayingBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                tag={blog.tag}
                title={blog.title}
                description={blog.description}
                link={blog.id}
              />
            ))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
        <div className="blog__categorical">
          <h2>Featured.</h2>
          <div className="featured__blogs">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
