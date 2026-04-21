"use client";
import Container from "@/components/Container";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
const ProfieImageEditpage = () => {
  const router = useRouter();
  const { user, setUser } = useUser();
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    setUser({
      ...user,
      profileImage: {
        file: file,
        url: fileUrl,
      },
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if ((user?.profileImage?.url.length as number) > 0) {
      router.push("/profile/editprofile");
    } else {
      window.alert("Profile Picture Not uploaded");
      return;
    }
  };
  return (
    <Container>
      <form action="">
        <div className="flex justify-between items-center pt-2 mt-3">
          <Link href={"/profile/editprofile"}>
            <X size={33} />
          </Link>
          <p>Profile</p>
          <p onClick={handleSubmit} className="text-blue-700 text-sm">
            finished
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <Image
            src={user?.profileImage?.url as string}
            alt="profile image"
            height={360}
            width={360}
            className="aspect-square object-cover rounded-full bg-black dark:bg-white"
          />
        </div>
        <div className="border px-3 py-2 rounded-lg flex flex-col justify-start gap-1 mt-10">
          <label htmlFor="" className="text-xs">
            Image
          </label>
          <input
            type="file"
            className="outline-0 text-sm"
            onChange={handleFileInput}
          />
        </div>
      </form>
    </Container>
  );
};

export default ProfieImageEditpage;
