import React from "react";
import { cn } from "@/lib/utils";
import Card from "./Card";
const Feed = ({ className }: { className?: string }) => {
  return <div className={cn("", className)}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>;
};

export default Feed;
