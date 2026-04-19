"use client";
import React, { useState } from "react";
import { Plus, Heart } from "lucide-react";
import Link from "next/link";
const MobileTopView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-3">
      <Plus size={30} />
      <div onClick={() => setIsModalOpen((prev) => !prev)}>
        <h1 className="text-2xl font-medium">
          Instagram lite
          <div className="">
            {isModalOpen && (
          <div className="absolute w-32 left-26 bg-gray-500 shadow-xl rounded-lg border p-2 flex flex-col gap-2 z-50">
            <Link 
              href="/following" 
              className="text-lg hover:bg-gray-100 p-1 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Following
            </Link>
            <Link 
              href="/favourite" 
              className="text-lg hover:bg-gray-100 p-1 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Favourite
            </Link>
          </div>
        )}
          </div>
        </h1>
      </div>
      <Heart size={30} />
    </div>
  );
};

export default MobileTopView;
