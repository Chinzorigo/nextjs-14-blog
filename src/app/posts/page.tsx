import Post from "@/components/blog/Post";
import Pagination from "@/components/common/Pagination";
import { getPosts } from "@/lib/prisma/posts";
import { FunctionComponent } from "react";

interface PostsProps {
  searchParams: {
    page?: string;
  };
}
export const POSTS_PER_PAGE = 2;

const Posts: FunctionComponent<PostsProps> = async ({ searchParams }) => {
  const page = parseInt(searchParams.page || "1");
  const skip = (page - 1) * POSTS_PER_PAGE;
  const {
    posts,
    totalPosts = 0,
    error,
  } = await getPosts({ take: POSTS_PER_PAGE, skip });

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (error) {
    throw error;
  }
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray -700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Posts
        </h1>
      </div>
      <ul>
        {posts?.length === 0 && "No posts found"}
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={page} />
    </div>
  );
};

export default Posts;
