import { useParams, Link } from "react-router-dom";
import posts from "./posts/posts.json";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (post) {
      fetch(`/posts/${post.file}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-white/60 mb-8">
          {post.date} · {post.author}
        </p>

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        <Link
          to="/blog"
          className="inline-block mt-8 text-teal-400 hover:text-teal-300 font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
