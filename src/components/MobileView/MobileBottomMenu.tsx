"use client";
import Link from "next/link";
import React from "react";
import { House, Search, Play, Send } from "lucide-react";
import Image from "next/image";
import { useUser } from "@/contexts/UserContext";

const MobileBottomMenu = () => {
  const { user } = useUser();
  return (
    <div className="bg-white dark:bg-black bottom-0 z-99 fixed border border-t w-full py-4 md:hidden ">
      <div className="flex justify-around items-center gap-11 px-5">
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
        <Link href={"/profile"}>
          <Image
            src={user?.profileImage?.url as string}
            alt=""
            height={20}
            width={40}
            className="aspect-square w-[30px] object-cover rounded-full bg-black dark:bg-white"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomMenu;
