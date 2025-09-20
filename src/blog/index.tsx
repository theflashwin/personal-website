import posts from "./posts/posts.json";
import { Link } from "react-router-dom";

export default function BlogList() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Ashwin's Blog</h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-white/60 mt-1">
                {post.date} · {post.author}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block mt-4 text-teal-400 hover:text-teal-300 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
