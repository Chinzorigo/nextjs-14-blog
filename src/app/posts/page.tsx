import Post from "@/components/blog/Post";
import Pagination from "@/components/common/Pagination";
import { getPosts } from "@/lib/prisma/posts";
import { get } from "http";
import { FunctionComponent } from "react";

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = async () => {
  const { posts, error } = await getPosts({});
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
      <Pagination totalPages={2} currentPage={1} />
    </div>
  );
};

export default Posts;
