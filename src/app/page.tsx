import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { kv } from "@vercel/kv";

export default async function Home() {
  const posts = getPosts();

  const pageViews = await kv.incr("mypageviews");

  return (
    <div>
      <p className="mb-2">This blog has been viewed {pageViews} times.</p>
      <ul>
        {posts.map((post) => {
          return (
            <li
              className="border border-fuchsia-500 mb-6 p-8 shadow-outline shadow-fuchsia-500"
              key={post.slug}
            >
              <Link
                className="block mb-4 hover:underline hover:decoration-dotted underline-offset-[12px]"
                href={post.slug}
              >
                <h2 className="text-xl">{post.title}</h2>
              </Link>
              <div>{post.content.slice(0, 199) + "..."}</div>
              <div className="mt-4 text-sm underline decoration-dotted">
                <Link className="text-fuchsia-300" href={`#${post.category}`}>
                  #{post.category}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
