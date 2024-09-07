import React from "react";
import BlogPost from "./components/blogPost";

function App() {
  const title = "My Awesome Blog Post";
  const content = "This is the content of the blog post...";
  const url = "https://example.com/my-awesome-blog-post";

  return (
    <div className="App">
      <h1>Welcome to My Blog</h1>
      <BlogPost title={title} content={content} postUrl={url} />
    </div>
  );
}

export default App;
