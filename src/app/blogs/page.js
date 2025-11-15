import React from "react";
import prisma from "../lib/prisma";
import "./style.css";
import BlogCard from "../ui/BlogCard";
const page = async () => {
  const all_Blogs = await prisma.blog.findMany();
  console.log(all_Blogs)
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
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>
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
