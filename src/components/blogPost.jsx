import React from "react";
import ShareButtons from "./ShareButton";
// This is a demo of blog post
const BlogPost = ({ title, content, postUrl }) => {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <p>{content}</p>
      <ShareButtons postUrl={postUrl} title={title} />
    </div>
  );
};

export default BlogPost;
