import React from "react";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
const Postpage = () => {
  return (
    <Container>
      <div className="mt-3 flex items-center">
        <span className="flex items-center gap-5 pt-2">
          <Link href={"/profile"}>
            {" "}
            <MoveLeft size={30} />
          </Link>{" "}
          <h1>Posts</h1>
        </span>
      </div>
      <Card />
    </Container>
  );
};

export default Postpage;
