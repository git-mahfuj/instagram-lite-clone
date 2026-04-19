import Link from "next/link";
import React from "react";
import { Grid3x2, Play, Repeat2, UserRoundSearch } from "lucide-react";
import ProfileFeedItems from "./ProfileFeedItems";
const ProfileFeed = () => {
  return (
    <div className="mt-4 border w-full h-auto">
      <div className="flex justify-around">
        <Link href={"/"}>
          <Grid3x2 size={30} />
        </Link>
        <Link href={"/"}>
          <Play size={30} />
        </Link>
        <Link href={"/"}>
          <Repeat2 size={30} />
        </Link>
        <Link href={"/"}>
          <UserRoundSearch size={30} />
        </Link>
      </div>
       <ProfileFeedItems/>
    </div>
  );
};

export default ProfileFeed;
