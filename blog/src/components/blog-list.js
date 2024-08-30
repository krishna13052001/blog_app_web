import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.title}>
            <Link to={`/blog/${blog.title}`}>{blog.title}</Link>
            <span> Batch- {blog.batch}</span>
            <span></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
