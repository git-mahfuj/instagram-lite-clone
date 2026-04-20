import Link from "next/link";
import React from "react";

type EditItemType = {
  id: number;
  item: string;
};
const EditProfile = () => {
  const editItems: EditItemType[] = [
    { id: 0, item: "name" },
    {
      id: 1,
      item: "username",
    },
    {
      id: 2,
      item: "pronoun",
    },
    {
      id: 4,
      item: "addLinks",
    },
    {
      id: 5,
      item: "banner",
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
              <p className="text-sm">Mahfujur Rahman</p>
            </div>
          </div></Link>
        </div>
      ))}
    </div>
  );
};

export default EditProfile;
