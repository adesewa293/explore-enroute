import Image from "next/image";
import Link from "next/link";
import maldives from "@/../public/maldives.jpeg";
import { getPosts } from "@/lib/posts";




export default function Home() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h2>My Posts</h2>
      <Image src={maldives} alt="travel" placeholder="blur" height={400} width={400}/>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  


    </main>
  );
}
