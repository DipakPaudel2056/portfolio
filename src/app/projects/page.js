import React from "react";
import BlogCard from "../ui/BlogCard";

const page = () => {
  return (
    <div className="main">
      <h1>&apos;Not just a project&apos; Project</h1>
      <h2>Here are the tiles of the projects i am currently working</h2>
      <BlogCard title={'Six Pack'} description={'in this project i will take you to my journey of being fit'} />
      <BlogCard title={'Books'} description={'in this project i will take you to my journey of being fit'} />
      <BlogCard title={'Data analyst'} description={'in this project i will take you to my journey of being fit'} />
      <BlogCard title={'Software developer'} description={'in this project i will take you to my journey of being fit'} />
    </div>
  );
};

export default page;
