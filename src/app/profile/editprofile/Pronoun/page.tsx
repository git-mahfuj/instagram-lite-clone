"use client";
import { useParams } from "next/navigation";
import React from "react";
import { X, Check } from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";

type ItemDestype = {
    slug : string;
    des : string
}
const EditItemspage = () => {
  const { slug } = useParams();
  const handleEdit = () => {
    window.alert("Submitted")
  }
  const {user , setUser} = useUser()
  return (
    <Container>
      <form action="">
        <div className="flex justify-between pt-2">
          <Link href={"/profile/editprofile"}><X size={30} /></Link>
          <p>{user?.name}</p>
          <Check size={30} onClick={handleEdit} />
        </div>
        <div className="mt-9">
          <div className="border px-3 py-2 rounded-lg flex flex-col justify-start gap-1">
            <label htmlFor="" className="text-xs">
              {user?.name}
            </label>
            <input type="text" className="outline-0 text-sm" value={user?.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value
              })
            }} />
          </div>
          <div>
            <p className="text-[11px] text-gray-500 mt-3">
             Add up to 4 pronouns to your profile so that people know how to refer to you. You can edit or remove them at any time. Learn more Show to followers only
            </p>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default EditItemspage;
