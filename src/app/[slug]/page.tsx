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
    </>
  );
}
