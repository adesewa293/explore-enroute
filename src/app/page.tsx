import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li
            className="border border-fuchsia-500 mb-6 p-8 shadow-outline"
            key={post.slug}
          >
            <Link
              className="block mb-4 hover:underline hover:decoration-dotted underline-offset-[12px]"
              href={post.slug}
            >
              <h2 className="text-xl">{post.title}</h2>
            </Link>
            <div>{post.content.slice(0, 199) + "..."}</div>
          </li>
        );
      })}
    </ul>
  );
}
