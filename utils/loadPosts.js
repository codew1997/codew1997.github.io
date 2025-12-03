import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

marked.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value;
  }
});

export async function loadPosts() {
  // request markdown files as raw text so the browser doesn't try to execute
  // them as JavaScript modules (avoids SyntaxError: Invalid left-hand side)
  const markdownFiles = import.meta.glob("../posts/*.md", { eager: true, as: "raw" });

  const posts = [];

  console.debug("loadPosts: found files ->", Object.keys(markdownFiles));

  function parseFrontmatter(raw) {
    if (!raw || typeof raw !== "string") return { data: {}, content: "" };

    // look for YAML frontmatter between `---` markers
    const fmMatch = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
    if (!fmMatch) return { data: {}, content: raw };

    const fm = fmMatch[1];
    const content = raw.slice(fmMatch[0].length);

    const data = {};
    fm.split(/\n+/).forEach((line) => {
      const m = line.match(/^([A-Za-z0-9_\-]+):\s*(.*)$/);
      if (!m) return;
      const key = m[1];
      let val = m[2].trim();

      // try to parse arrays/objects and quoted strings via JSON
      if (/^[\[{]/.test(val) || (/^["']/.test(val) && /["']$/.test(val))) {
        try {
          val = JSON.parse(val);
        } catch (e) {
          // fallback to stripping quotes
          val = val.replace(/^['"]|['"]$/g, "");
        }
      } else {
        // strip surrounding quotes if present
        val = val.replace(/^['"]|['"]$/g, "");
      }

      data[key] = val;
    });

    return { data, content };
  }

  for (const path in markdownFiles) {
    const file = markdownFiles[path];
    const raw = file && (file.default ?? file);

    try {
      const { data, content } = parseFrontmatter(raw || "");

      // derive slug from filename
      const slug = path.replace(/^.*\//, "").replace(/\.md$/, "");

      posts.push({
        ...data,
        content,
        contentHtml: marked.parse(content || ""),
        slug,
        id: data.id ?? slug
      });
    } catch (err) {
      console.error(`loadPosts: failed to parse ${path}:`, err);
    }
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
