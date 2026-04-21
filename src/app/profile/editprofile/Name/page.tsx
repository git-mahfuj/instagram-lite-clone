"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { X, Check } from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";

type ItemDestype = {
  slug: string;
  des: string;
};
const EditItemspage = () => {
  const itemDescription: ItemDestype[] = [
    {
      slug: "Name",
      des: "Help people discover your account by using the name that you&apos;reknown by: either your full name, nickname or business name. You can only change your name twice within 14 days. Your name isvisible to everyone on and off Instagram. Learn more",
    },
    {
      slug: "Username",
      des: "In most cases, you'll be able to change your username back to unemployed.mahfuj for another 14 days.Learn more",
    },
    {
      slug: "Pronoun",
      des: "Add up to 4 pronouns to your profile so that people know how to refer to you. You can edit or remove them at any time. Learn more Show to followers only",
    },
    {
      slug: "AddLinks",
      des: "Your links are visible to everyone on and off Instagram. Learn more",
    },
  ];
  const [name, setName] = useState<string>("");
  const { user, setUser } = useUser();
  const router = useRouter();
  const handleEdit = (e: any) => {
    e.preventDefault();
    if (name.length < 4) {
      window.alert("Name Must Within 4 Charecter");
      return;
    }
    setUser({
      ...user,
      name: name,
    });
    console.log("pushed");

    router.push("/profile/editprofile");
  };
  console.log("User", user);
  return (
    <Container>
      <form action="">
        <div className="flex justify-between pt-2 mt-3">
          {/* <X size={30} onClick={noinputError} /> */}
          <Link href={"/profile/editprofile"}>
            <X size={30} />
          </Link>
          <p>Name</p>

          <Check size={30} onClick={handleEdit} />
        </div>
        <div className="mt-9">
          <div className="border px-3 py-2 rounded-lg flex flex-col justify-start gap-1">
            <label htmlFor="" className="text-xs">
              Name
            </label>
            <input
              type="text"
              className="outline-0 text-sm"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="text-[11px] text-gray-500 mt-3">
              Help people discover your account by using the name that
              you&apos;reknown by: either your full name, nickname or business
              name. You can only change your name twice within 14 days. Your
              name isvisible to everyone on and off Instagram. Learn more
            </p>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default EditItemspage;
