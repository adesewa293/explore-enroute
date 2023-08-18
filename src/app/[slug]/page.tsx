import { getPostBySlug } from "@/lib/posts";
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
      <p className="text-justify">{post.content}</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Budget:</h2>
        <p>{post.budget.toLocaleString()} GBP</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Tourist Attractions:</h2>
        <ul className="list-disc pl-6">
          {post.touristAttractions.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
