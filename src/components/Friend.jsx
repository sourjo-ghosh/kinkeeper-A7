import Link from "next/link";
import Image from "next/image";

const Friend = ({ friend }) => {
  
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="h-full flex flex-col py-6 space-y-2 bg-white rounded-2xl shadow justify-center items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={100}
          height={100}
          className="rounded-full"
        ></Image>
        <h1 className="font-bold text-2xl">{friend.name}</h1>
        <p className="text-[#64748B]">{friend.days_since_contact}d ago</p>
        <div className="flex gap-1 flex-wrap">
          {friend.tags.map((tag, i) => (
            <p
              className="text-[14px] text-[#244D3F] bg-[#CBFADB] p-1 rounded-full whitespace-nowrap"
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
    </Link>
  );
};
export default Friend;
