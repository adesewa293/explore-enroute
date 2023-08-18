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
    <main className="flex justify-center">
      <div className="max-w-2xl grow">
        <h1 className="text-3xl mb-8">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </main>
  );
}
