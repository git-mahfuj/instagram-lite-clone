import Link from "next/link";
import React from "react";
import { House, Search, Play, Send } from "lucide-react";
import Image from "next/image";

const MobileBottomMenu = () => {
  return (
    <div className="bg-black  bottom-0 fixed border border-t w-full py-4 md:hidden ">
      <div className="flex justify-center items-center gap-11">
        <Link href={"/"}>
          <House />
        </Link>
        <Link href={"/"}>
          <Play />
        </Link>
        <Link href={"/"}>
          <Send />
        </Link>
        <Link href={"/"}>
          <Search />
        </Link>
        <Link href={"/profile"} className="w-12 rounded-full  ">
          <Image
            src={"/"}
            alt="Image"
            width={30}
            height={30}
            className="rounded-full px-4 py-1 bg-black dark:bg-white"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomMenu;
