import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Seo from '../components/Seo';
import { BLOG_POSTS } from '../constants';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';


// // Component to list all posts
// const BlogList = () => {
//   return (
//     <>
//       <Seo 
//         title="Engineering Blog"
//         description="Insights on algorithms, design patterns, and software architecture."
//       />
//       <div className="container mx-auto px-6 py-20">
//         <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-12">
//           TRANSMISSIONS
//         </h1>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           {BLOG_POSTS.map((post) => (
//             <Link 
//               to={`/blog/${post.slug}`} 
//               key={post.id}
//               className="group block border border-white/10 bg-white/5 hover:border-cyber-purple hover:bg-white/10 transition-all duration-300 overflow-hidden"
//             >
//               <div className="p-8">
//                 <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
//                   <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
//                   <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
//                 </div>
                
//                 <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-cyan transition-colors font-sans">
//                   {post.title}
//                 </h2>
                
//                 <p className="text-gray-400 mb-6 line-clamp-3">
//                   {post.excerpt}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2">
//                   {post.tags.map(tag => (
//                     <span key={tag} className="text-xs font-mono px-2 py-1 bg-cyber-purple/20 text-cyber-purple rounded">
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// // Component to view a single post
// const BlogPost = () => {
//   const { slug } = useParams();
//   const post = BLOG_POSTS.find(p => p.slug === slug);

//   if (!post) {
//     return (
//       <div className="container mx-auto px-6 py-20 text-center">
//         <h1 className="text-4xl text-cyber-red">404: DATA_NOT_FOUND</h1>
//         <Link to="/blog" className="text-cyber-cyan mt-4 inline-block hover:underline">Return to Index</Link>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Seo 
//         title={post.title}
//         description={post.excerpt}
//         keywords={post.tags.join(', ')}
//         url={`/blog/${post.slug}`}
//       />
      
//       <article className="container mx-auto px-6 py-20 max-w-3xl">
//         <Link to="/blog" className="inline-flex items-center gap-2 text-cyber-cyan hover:text-white mb-8 font-mono text-sm transition-colors">
//           <ArrowLeft className="w-4 h-4" /> BACK_TO_INDEX
//         </Link>
        
//         <header className="mb-12 border-b border-white/10 pb-8">
//           <div className="flex gap-4 mb-6">
//             {post.tags.map(tag => (
//               <span key={tag} className="flex items-center gap-1 text-xs font-mono text-cyber-purple border border-cyber-purple/30 px-3 py-1 rounded-full">
//                 <Tag className="w-3 h-3" /> {tag}
//               </span>
//             ))}
//           </div>
          
//           <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 leading-tight">
//             {post.title}
//           </h1>
          
//           <div className="flex items-center gap-6 text-gray-500 font-mono text-sm">
//             <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
//             <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
//           </div>
//         </header>

//         <div className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-headings:text-white prose-p:text-gray-300 prose-code:text-cyber-green prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
//           <ReactMarkdown>{post.content}</ReactMarkdown>
//         </div>
//       </article>
//     </>
//   );
// };

// // Main Blog Router
// const Blog = () => {
//   return (
//     <Routes>
//       <Route index element={<BlogList />} />
//       <Route path=":slug" element={<BlogPost />} />
//     </Routes>
//   );
// };

// export default Blog;

import matter from "gray-matter";

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
