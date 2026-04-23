"use client";
import React, { useEffect, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import Image from "next/image";
import { useUser } from "@/contexts/UserContext";
import { PostType, usePost } from "@/contexts/PostContext";
import PostTop from "./PostTop";
import Link from "next/link";

const PostSection = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      setSelectedImages((prevImage) => prevImage.concat(filesArray));
    }
  };
  const deleteImage = (index: number) => {
    const urlToRevoke = selectedImages[index];
    URL.revokeObjectURL(urlToRevoke);
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };
  const { user } = useUser();
  const { AddItem } = usePost();
  const [text, setText] = useState<string>("");

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: PostType = {
      authorId: user?.username || "anonymous",
      authorName: user?.name || "User",
      authorImages: user?.profileImage?.url as string,
      text: text,
      images: selectedImages,
      createdAt: Date.now(),
    };
    AddItem(newPost);
    console.log("post", newPost);
  };
  return (
    <form onSubmit={handlePostSubmit}>
      <div>
        <div className="mt-3 flex justify-between items-center">
          <Link href={"/profile"}>
            <X size={30} />
          </Link>
          <p className="text-sm">{user?.name}</p>
          <button type="submit">
            {" "}
            <Link href={"/profile"}>
              <p className="text-sm text-blue-600">Done</p>
            </Link>
          </button>
        </div>
      </div>
      <div className="bg-white max-w-sm w-full min-h-screen p-4">
        <div>
          {/* Text Input */}
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="What's on your mind ???"
            className="w-full h-32 outline-none border-none resize-none text-lg bg-transparent"
          />

          {/* Image Preview Gallery (Facebook Style) */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  height={50}
                  width={50}
                  alt="prev"
                  className="h-full w-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => deleteImage(index)}
                  className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1"
                >
                  <X />
                </button>
              </div>
            ))}
            <label className="flex items-center justify-center aspect-square border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <ImagePlus className="text-gray-400" size={32} />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostSection;
