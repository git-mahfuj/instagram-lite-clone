"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type PostType = {
  id?: string;
  authorId: string;
  authorName: string;
  authorImages: string;
  text: string;
  images: string[];
  createdAt: number;
};

type PostContextType = {
  posts: PostType[];
  AddItem: (newPost: PostType) => void;
  DeleteItem: (postId: string) => void;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<PostType[]>(() => {
    if (typeof window !== "undefined") {
      const userPost = localStorage.getItem("user_post");
      if (userPost) {
        return JSON.parse(userPost);
      }
    }
    return [];
  });

  useEffect(() => {
    if (posts !== undefined) {
      localStorage.setItem("user_post", JSON.stringify(posts));
    }
  }, [posts]);

  const AddItem = (newPost: PostType) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const DeleteItem = (postId: string) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <PostContext.Provider value={{ posts, AddItem, DeleteItem }}>
      {children}
    </PostContext.Provider>
  );
};

export function usePost() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
}

export default PostProvider;
