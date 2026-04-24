"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ellipsis,
  Heart,
  MessageCircle,
  Send,
  Repeat2,
  Bookmark,
} from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { usePost } from "@/contexts/PostContext";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Card = () => {
  const { user } = useUser();
  const { posts } = usePost();

  return (
    <div className="max-w-sm mx-auto">
      {posts.map((post, i) => (
        <div key={i} className="mt-5 border-b pb-4">
          {/* CardTop */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <Link href={"/profile"}>
                <Image
                  src={post.authorImages || "/default-avatar.png"}
                  alt="avatar"
                  height={40}
                  width={50}
                  className="aspect-square w-[48px] object-cover rounded-full border"
                />
              </Link>
              <h1 className="text-sm font-semibold">{post.authorName}</h1>
            </div>
            <Ellipsis size={25} className="cursor-pointer" />
          </div>

          {/* CardMid - Text */}
          <div className="mt-3 px-2 ">
            <p className="text-sm mb-2 wrap-break-word whitespace-pre-wrap">{post.text}</p>
          </div>
          <div className="mt-3">
            {" "}
            {post.images && post.images.length > 0 && (
              <div className="w-full relative group">
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={0}
                  slidesPerView={1}
                  draggable
                  pagination={{ clickable: true }}
                  className="rounded-lg overflow-hidden border"
                
                >
                  {post.images.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative aspect-square w-full">
                        <Image
                          src={img}
                          alt={`post-img-${imgIndex}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>

          {/* CardBottom Icons */}
          <div className="flex justify-between items-center mt-3 px-2">
            <div className="flex items-center gap-4">
              <Heart size={24} className="hover:text-red-500 cursor-pointer" />
              <MessageCircle size={24} className="cursor-pointer" />
              <Repeat2 size={24} className="cursor-pointer" />
              <Send size={24} className="cursor-pointer" />
            </div>
            <Bookmark size={24} className="cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
