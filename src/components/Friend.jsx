import Image from "next/image";
import React from "react";

const Friend = ({ friend }) => {
  console.log(friend);
  return (
    <div className="flex flex-col p-3 space-y-2 bg-white rounded-2xl shadow justify-center items-center">
      <Image
        src={friend.picture}
        alt={friend.name}
        width={100}
        height={100}
        className="rounded-full"
      ></Image>
      <h1 className="font-bold text-2xl">{friend.name}</h1>
      <p className="text-[#64748B]">{friend.days_since_contact}d ago</p>
      <div className="flex gap-3">
        {friend.tags.map((tag, i) => (
          <p
            className="text-[14px] text-[#244D3F] bg-[#CBFADB] p-1.5 rounded-full"
            key={i}
          >
            {tag.toUpperCase()}
          </p>
        ))}
      </div>

      <p
        className={`p-1.5 rounded-full text-[14px] ${
          friend.status === "overdue"
            ? "bg-[#EF4444] text-white"
            : friend.status === "almost due"
              ? "bg-[#EFAD44] text-white"
              : "bg-[#244D3F] text-white"
        }`}
      >
        {friend.status.toUpperCase()}
      </p>
    </div>
  );
};

export default Friend;
