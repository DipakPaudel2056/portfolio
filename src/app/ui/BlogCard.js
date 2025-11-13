import Image from "next/image";
import React from "react";
import "./BlogCard.css"

const BlogCard = () => {
  return (
    <div className="blog__card">
      <div >
        <Image className="blog__image"  src="/blogimage.jpg" alt="thumbnail picture of the blog" width={400} height={400} />
      </div>
      <div className="blog__tag">Health & Nutrition</div>
      <div className="blog__title">
        How i am maintaining my daily life: being a dishy boy
      </div>
      <div className="blog__description">
        It is easy to manage all, 40 hours as a dish-hands, 35 hours as a
        aspiring software developer
      </div>
    </div>
  );
};

export default BlogCard;
