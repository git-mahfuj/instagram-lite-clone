import React from "react";
import EditProfilePic from "./EditProfilePic";
import Container from "@/components/Container";
import EditProfile from "./EditProfile";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const EditProfilepage = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mt-3">
        <span className="">
        <Link href={"/profile"}>
          {" "}
          <MoveLeft size={30} />
        </Link>{" "}
      </span>
        <h1>Edit Profile</h1>
        <ModeToggle />
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <EditProfilePic />
        <EditProfile />
      </div>
    </Container>
  );
};

export default EditProfilepage;
