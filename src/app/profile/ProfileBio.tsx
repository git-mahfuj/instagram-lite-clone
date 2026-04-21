"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";
const ProfileBio = () => {
  const { user , setUser } = useUser();
  return (
    <div className="mt-6">
      <div className="flex items-center gap-7">
        <Image
          src={user?.profileImage?.url as string}
          alt="image"
          height={80}
          width={80}
          className="aspect-square object-cover rounded-full bg-black dark:bg-white"
        />
        <div className="">
          <h1>{user?.name}</h1>
          <div className="flex items-center gap-3">
            <div>
              <p>0</p>
              <p>post</p>
            </div>
            <div>
              <p>0</p>
              <p>followers</p>
            </div>
            <div>
              <p>0</p>
              <p>following</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-1 mt-7">
        <h1>{user?.bio}</h1>
        <h1>threads.link</h1>
      </div>
      <div className="flex items-center justify-center mt-4 gap-2">
        <Link href={"/profile/editprofile"}>
          <Button className="w-40">Edit Profile</Button>
        </Link>
        <Button className="w-40">Share Profile</Button>
      </div>
    </div>
  );
};

export default ProfileBio;
