import React, { useEffect, useState } from "react";
import { loadPosts } from "../utils/loadPosts";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts().then(setPosts);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: "2rem" }}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}
