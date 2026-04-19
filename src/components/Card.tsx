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
const Card = () => {
  return (
    <div className="mt-3">
      {/* CardTop */}
      <div className="flex items-center justify-between">
        {" "}
        <div className="flex items-center">
          <Link href={"/profile"} className="w-12 rounded-full  ">
            <Image
              src={"/"}
              alt="Image"
              width={30}
              height={30}
              className="rounded-full px-5 py-1.5 bg-black dark:bg-white"
            ></Image>
          </Link>
          <h1 className="text-sm -translate-y-0.5">Mahfujur Rahman</h1>
        </div>
        <Ellipsis size={25} />
      </div>
      {/* CardMid */}
      <div className="border w-full h-70 mt-3 ">Post Content</div>
      {/* CardBottom */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Heart size={25} /> <p className="text-sm">0</p>
          </span>
          <span className="flex items-center gap-1">
            <Repeat2 size={25} /> <p className="text-sm">0</p>
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={25} /> <p className="text-sm">0</p>
          </span>
          <span className="flex items-center gap-1">
            <Send size={25} /> <p className="text-sm">0</p>
          </span>
        </div>
        <Bookmark />
      </div>
    </div>
  );
};

export default Card;
