/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { X, Check } from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";

type ItemDestype = {
  slug: string;
  des: string;
};
const EditItemspage = () => {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [username, setUserName] = useState<string>("");
  const handleEdit = (e: any) => {
    if(username.length < 4) {
      window.alert("Bio must be within 4 charecters")
      return
    }
    e.preventDefault();
    setUser({
      ...user,
      username: username,
    });
    router.push("/profile/editprofile");
  };
  return (
    <Container>
      <form action="">
        <div className="flex justify-between pt-2 mt-3">
          <Link href={"/profile/editprofile"}>
            <X size={30} />
          </Link>
          <p>Username</p>
          <Check size={30} onClick={handleEdit} />
        </div>
        <div className="mt-9">
          <div className="border px-3 py-2 rounded-lg flex flex-col justify-start gap-1">
            <label htmlFor="" className="text-xs">
              Username
            </label>
            <input
              type="text"
              className="outline-0 text-sm"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="text-[11px] text-gray-500 mt-3">
              In most cases, you'll be able to change your username back to
              unemployed.mahfuj for another 14 days.Learn more
            </p>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default EditItemspage;
