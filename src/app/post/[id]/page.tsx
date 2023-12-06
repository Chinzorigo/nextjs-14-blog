import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { getPostById, getPosts } from "@/lib/prisma/posts";
import ReactMarkdown from "react-markdown";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { post } = await getPostById(id);
  return {
    title: post?.title,
    description: post?.body,
  };
}

export async function generateStaticParams() {
  const { posts = [] } = await getPosts({ take: 100 });

  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

// console.log(posts: 'posts')

const Page: FunctionComponent<PageProps> = async ({ params: { id } }) => {
  const { post, error } = await getPostById(id);

  if (error) {
    throw new Error(error.message);
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1 className="text-3xl uppercase pb-2">{post.title}</h1>
      <article>
        <p>{post.body}</p>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </article>
    </>
  );
};

export default Page;
