import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { kv } from "@vercel/kv"

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const pageViews = await kv.incr(`${post.slug}:mypageviews`);

  return (
    <>
      <h1 className="text-3xl mb-4 underline">{post.title}</h1>
      <p className="mb-8">Views: {pageViews}</p>
      <p className="text-justify mb-4">{post.content}</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Budget:</h2>
        <p>{post.budget.toLocaleString()} GBP</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Tourist Attractions:</h2>
        <ul className="list-disc pl-6">
          {post.touristAttractions.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>
      </div>
      <div className="text-sm underline decoration-dotted">
        <Link className="text-fuchsia-300" href={`#${post.category}`}>
          #{post.category}
        </Link>
      </div>
      <form action={`/api/comments`} method="POST">
        <label htmlFor="username">Name</label>
        <br />
        <input name="username" />
        <br />
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea name="comment" cols={30} rows={10} />
        <br />
        <br />
        <button type="submit">Send Comment</button>
      </form>
    </>
  );
}
