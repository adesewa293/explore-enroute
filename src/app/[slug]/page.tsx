import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1 className="text-3xl mb-8 underline">{post.title}</h1>
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
    </>
  );
}
