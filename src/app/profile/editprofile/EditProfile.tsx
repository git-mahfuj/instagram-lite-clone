"use client"
import { useUser } from "@/contexts/UserContext";
import Link from "next/link";
import React from "react";

type EditItemType = {
  id: number;
  item: string;
  des : string
};
const EditProfile = () => {
  const {user} = useUser()
  console.log(typeof user)
  const editItems: EditItemType[] = [
    { id: 0, item: "Name", des : `${user?.name}` },
    {
      id: 1,
      item: "Username",
      des : `${user?.username}`
    },
    {
      id: 2,
      item: "Pronoun",
      des : ""
    },
    {
        id : 3,
        item : "Bio",
        des : `${user?.bio}`
    },
    {
      id: 4,
      item: "AddLinks",
      des : ""
    },
    {
      id: 5,
      item: "Banner",
      des : ""
    },
  ];
  
  return (
    <div>
      {editItems.map((i) => (
        <div key={i.id} className="">
          <Link href={`/profile/editprofile/${i.item}`}><div className="border px-2 py-1  rounded-lg mb-2 ">
            <div className="-translate-y-1">
              {" "}
              <label htmlFor="" className="text-xs text-gray-500">
                {i.item}
              </label>
              <p className="text-sm">{i.des}        
              </p>
            </div>
          </div></Link>
        </div>
      ))}
    </div>
  );
};

export default EditProfile;
