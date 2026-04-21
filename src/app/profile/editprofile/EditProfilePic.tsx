"use client";
import { useUser } from "@/contexts/UserContext";
import { Camera, Images, Minus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EditProfilePic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isdeleteModal, setIsDeleteModal] = useState(false);
  const { user, setUser } = useUser();
  const deleteImage = () => {
    setUser({
      ...user,
      profileImage: {
        url: "",
      },
    });
    window.location.reload();
  };
  return (
    <div className="mx-auto flex flex-col justify-center items-center gap-3">
      <div onClick={(e) => setIsModalOpen((prev) => !prev)}>
        <Image
          src={user?.profileImage?.url as string}
          alt="profile image"
          height={60}
          width={90}
          className="aspect-square object-cover rounded-full bg-black dark:bg-white"
        />
        {isModalOpen ? (
          <div
            className={` rounded-t-lg
  fixed left-0 bottom-0 w-full h-80 bg-[#12181C] z-50 border-t shadow-2xl
  transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
  ${isModalOpen ? "translate-y-0" : "translate-y-full"}
`}
          >
            <div className="flex flex-col justify-center items-center">
              <Minus size={50} />
              <div className="border-b-3 w-20 grid items-center justify-center pb-2 border-white ">
                <Image
                  src={user?.profileImage?.url as string}
                  alt="profile image"
                  height={60}
                  width={70}
                  className="aspect-square object-cover rounded-full bg-black dark:bg-white"
                />
              </div>
            </div>
            <div className="mt-5 px-6 grid gap-5">
              <Link href={"/profile/editprofile/profileimage"}>
                {" "}
                <span className="flex items-center gap-2">
                  <Images size={35} /> <p>Choose From library</p>
                </span>
              </Link>

              <span className="flex items-center gap-2">
                <Camera size={35} /> <p>Take Photo</p>
              </span>
              <div onClick={() => setIsDeleteModal(false)}>
                <span className="flex items-center gap-2 text-red-600">
                  <Trash size={35} /> <p>Remove current picture</p>
                </span>
                {isdeleteModal && (
                  <div className="absolute w-32 left-26 bg-[#12181C] shadow-xl rounded-lg border p-2 flex flex-col gap-2 z-50">
                    <span>Remove Photo fron Instagram?</span>
                    <span>
                      Deleting this profile picture will delete the picture from
                      profile
                    </span>
                    <div>
                      <span>Remove</span>
                      <span>Cancle</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <h1 className="text-xs text-blue-600"> Edit Profile Picture</h1>
    </div>
  );
};

export default EditProfilePic;
