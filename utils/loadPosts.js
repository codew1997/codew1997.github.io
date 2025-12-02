import matter from "gray-matter";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

marked.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value;
  }
});

export async function loadPosts() {
  // import all MD files inside /posts
  const markdownFiles = import.meta.glob("../posts/*.md", { eager: true });

  const posts = [];

  for (const path in markdownFiles) {
    const file = markdownFiles[path];
    const { data, content } = matter(file.default);

    posts.push({
      ...data,
      content
    });
  }

  // sort by date
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
