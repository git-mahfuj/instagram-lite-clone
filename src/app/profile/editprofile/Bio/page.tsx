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
  const [bio, setBio] = useState("");
  const handleEdit = (e: any) => {
    if (bio.length < 4) {
      window.alert("Bio must be within 4 charecters");
      return;
    }
    e.preventDefault();
    setUser({
      ...user,
      bio: bio,
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
          <p>Bio</p>
          <Check size={30} onClick={handleEdit} />
        </div>
        <div className="mt-9">
          <div className="border px-3 py-2 rounded-lg flex flex-col justify-start gap-1">
            <label htmlFor="" className="text-xs">
              Bio
            </label>
            <input
              type="text"
              className="outline-0 text-sm"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="text-[11px] text-gray-500 mt-3"></p>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default EditItemspage;
