import React from "react";
import EditProfilePic from "./EditProfilePic";
import Container from "@/components/Container";
import EditProfile from "./EditProfile";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const EditProfilepage = () => {
  return (
    <Container>
      <span className="flex items-center gap-5 pt-2">
        <Link href={"/profile"}>
          {" "}
          <MoveLeft size={30} />
        </Link>{" "}
        <h1>Edit Profile</h1>
      </span>

      <div className="mt-6 flex flex-col gap-6">
        <EditProfilePic />
        <EditProfile />
      </div>
    </Container>
  );
};

export default EditProfilepage;
