import React from "react";
export const dynamic = "force-dynamic";
import prisma from "../lib/prisma";
import "./style.css";
import BlogCard from "../ui/BlogCard";
import Pagination from "../ui/Pagination"
const PAGE_SIZE = 5;
const page = async ({ searchParams }) => {
  let { page } = await searchParams;
  page = Number(page) || 0;
  const all_Blogs = await prisma.blog.findMany({
    take: PAGE_SIZE,
    skip: page < 1 ? 0 :(page + 1) * PAGE_SIZE ,
    orderBy: {
      id: "asc",
    },
  });
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
            {all_Blogs.map((blog) => (
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
