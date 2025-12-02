import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";

export default function BlogPost({ post }) {
  const html = marked(post.content);


  return (
    <article>
      <h1>{post.title}</h1>
      <p><i>{post.date} • {post.readTime}</i></p>

      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
