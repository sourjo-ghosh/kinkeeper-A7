'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BsChatLeftText } from "react-icons/bs";
import { FaRegTrashAlt, FaVideo } from "react-icons/fa";
import { IoArchiveOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";

const FriendsDetails = () => {
  const { id } = useParams();
  const [ExpectedFriend, setExpectedFriend] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriend = () => {
      fetch('https://kinkeeper-sepia.vercel.app/friendsData.json')
        .then(res => res.json())
        .then(data => {
          const found = data.find(d => d.id == id);
          setExpectedFriend(found);
          setLoading(false);
        });
    };
    fetchFriend();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E9E9E9]">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!ExpectedFriend) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E9E9E9]">
        <div className="text-xl">Friend not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 md:p-20 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-[#E9E9E9]">
      <div className="p-5 space-y-3 rounded-2xl flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full"
            src={ExpectedFriend.picture}
            alt={ExpectedFriend.name}
            width={100}
            height={100}
          ></Image>
          <h1 className="font-bold text-2xl">{ExpectedFriend.name}</h1>
          <p
            className={`text-center p-1.5 rounded-full text-[14px] ${
              ExpectedFriend.status === "overdue"
                ? "bg-[#EF4444] text-white"
                : ExpectedFriend.status === "almost due"
                  ? "bg-[#EFAD44] text-white"
                  : "bg-[#244D3F] text-white"
            }`}
          >
            {ExpectedFriend.status.toUpperCase()}
          </p>
        </div>
        <div className="flex gap-3">
          {ExpectedFriend.tags.map((tag, i) => (
            <p
              className="text-[14px] text-[#244D3F] bg-[#CBFADB] p-1.5 rounded-full"
              key={i}
            >
              {tag.toUpperCase()}
            </p>
          ))}
        </div>
        <p className="text-[#64748B] text-[16px] ">{ExpectedFriend.bio}</p>
        <p>
          Preferred: <span>{ExpectedFriend.email}</span>
        </p>
        <div className="flex flex-col gap-2">
          <button className="btn">
            <RiNotificationSnoozeLine />
            Snooze 2 weeks
          </button>
          <button className="btn">
            <IoArchiveOutline />
            Archive
          </button>
          <button className="btn text-red-400">
            <FaRegTrashAlt />
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="p-5 bg-white flex flex-col justify-center items-center rounded-2xl">
          <p className="text-[#244D3F] font-semibold text-[20px]">
            {ExpectedFriend.days_since_contact}
          </p>
          <p className="text-[#64748B] text-[18px]">Days Since Contact</p>
        </div>
        <div className="p-5 bg-white flex flex-col justify-center items-center rounded-2xl">
          <p className="text-[#244D3F] font-semibold text-[20px]">
            {ExpectedFriend.goal}
          </p>
          <p className="text-[#64748B] text-[18px]">Goal (Days)</p>
        </div>
        <div className="p-5 bg-white flex flex-col justify-center items-center rounded-2xl">
          <p className="text-[#244D3F] font-semibold text-[20px]">
            {ExpectedFriend.next_due_date}
          </p>
          <p className="text-[#64748B] text-[18px]">Next Due</p>
        </div>
        <div className="col-span-3 bg-white rounded-2xl">
          <div className="px-3 mt-2 flex justify-between items-center">
            <p className="text-[#244D3F] font-semibold text-[20px]">
              Relationship Goal
            </p>
            <button className="btn">edit</button>
          </div>
          <p className="px-3 text-[#64748B] text-[18px]">
            Connect every {" "}
            <span className="text-black font-bold">
              {ExpectedFriend.goal} Days
            </span>
          </p>
        </div>
        <div className="col-span-3 bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between px-2">
            <p className="text-[#244D3F] font-semibold text-[20px]">
              Quick Check-In
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-3">
            <button className="flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-slate-200 bg-[#F8FAFC] px-5 py-6 text-[#134E32] shadow-sm transition hover:bg-[#ECFDF5]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
                <MdAddCall className="h-6 w-6" />
              </div>
              <span className="text-base font-semibold">Call</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-slate-200 bg-[#F8FAFC] px-5 py-6 text-[#134E32] shadow-sm transition hover:bg-[#ECFDF5]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
                <BsChatLeftText className="h-6 w-6" />
              </div>
              <span className="text-base font-semibold">Text</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-slate-200 bg-[#F8FAFC] px-5 py-6 text-[#134E32] shadow-sm transition hover:bg-[#ECFDF5]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
                <FaVideo className="h-6 w-6" />
              </div>
              <span className="text-base font-semibold">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;


