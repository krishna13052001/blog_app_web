import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { title } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`/api/blog/${title}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{blogData.title.replace(/-/g, " ")}</h1>
      <p>{blogData.date}</p>
      <div>{blogData.content}</div>
    </div>
  );
}

export default BlogPost;
