"use client";

import { FunctionComponent } from "react";
import Giscus from "@giscus/react";

interface CommentProps {}

const Comment: FunctionComponent<CommentProps> = () => {
  return (
    <Giscus
      id="comments"
      repo="Chinzorigo/nextjs-14-blog"
      repoId="R_kgDOKxDJIA"
      category="General"
      categoryId="DIC_kwDOKxDJIM4CbkOb"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
};

export default Comment;
