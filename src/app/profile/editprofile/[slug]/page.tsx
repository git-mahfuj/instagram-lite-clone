"use client";
import { useParams } from "next/navigation";
import React from "react";
import { X, Check } from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";

type ItemDestype = {
    slug : string;
    des : string
}
const EditItemspage = () => {
  const { slug } = useParams();
  const handleEdit = () => {
    window.alert("Submitted")
  }
  const itemDescription:ItemDestype[] = [
    {
        slug : "Name",
        des : "Help people discover your account by using the name that you&apos;reknown by: either your full name, nickname or business name. You can only change your name twice within 14 days. Your name isvisible to everyone on and off Instagram. Learn more"
    },
    {
        slug : "Username",
        des : "In most cases, you'll be able to change your username back to unemployed.mahfuj for another 14 days.Learn more"
    },
    {
        slug : "Pronoun",
        des:"Add up to 4 pronouns to your profile so that people know how to refer to you. You can edit or remove them at any time. Learn more Show to followers only"
    },
    {
        slug : "AddLinks",
        des : "Your links are visible to everyone on and off Instagram. Learn more"
    }

  ]
  return (
    <Container>
      <form action="">
        <div className="flex justify-between pt-2">
          <Link href={"/profile/editprofile"}><X size={30} /></Link>
          <p>{slug}</p>
          <Check size={30} onClick={handleEdit} />
        </div>
        <div className="mt-9">
          <div className="border px-3 py-2 rounded-lg flex flex-col justify-start gap-1">
            <label htmlFor="" className="text-xs">
              {slug}
            </label>
            <input type="text" className="outline-0 text-sm" />
          </div>
          <div>
            <p className="text-[11px] text-gray-500 mt-3">
             {
                itemDescription.map((i) => (
                    <span key={i.slug} className="text-[12px]">
                        {i.slug === slug ? `${i.des}` : ""}
                    </span>
                ))
             }
            </p>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default EditItemspage;
