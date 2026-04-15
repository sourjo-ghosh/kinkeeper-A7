import Friend from "@/components/Friend";
import Image from "next/image";
import { IoIosAdd } from "react-icons/io";

export default async function Home () {
  const data = await fetch('http://localhost:3000/friendsData.json') 
  const friends = await data.json() 
  console.log(friends)
  return (
    <div className="bg-[#F8FAFC] p-10 md:p-20 lg:p-20 ">
      <div className="flex flex-col gap-3 justify-center items-center">
        <p className="font-bold text-[40px]">
          Friends to keep close in your life
        </p>
        <p className="text-[#64748B] text-[16px] mt-5">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="my-5 hidden md:flex lg:flex justify-center items-center text-white bg-[#244D3F] btn text-[20px]">
          <IoIosAdd />
          Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-7">
        <div className="flex flex-col justify-center items-center bg-white p-5 rounded-2xl shadow">
          <span className="text-[#244D3F] text-2xl font-semibold">10</span>
          <p className="text-[18px] text-[#64748B]">Total Friends</p>
        </div>
         <div className="flex flex-col justify-center items-center bg-white p-5 rounded-2xl shadow">
          <span className="text-[#244D3F] text-2xl font-semibold">10</span>
          <p className="text-[18px] text-[#64748B]">Total Friends</p>
        </div>
         <div className="flex flex-col justify-center items-center bg-white p-5 rounded-2xl shadow">
          <span className="text-[#244D3F] text-2xl font-semibold">10</span>
          <p className="text-[18px] text-[#64748B]">Total Friends</p>
        </div>
         <div className="flex flex-col justify-center items-center bg-white p-5 rounded-2xl shadow">
          <span className="text-[#244D3F] text-2xl font-semibold">10</span>
          <p className="text-[18px] text-[#64748B]">Total Friends</p>
        </div>
      </div>
      <h1 className="my-8 font-bold text-2xl">
        Your Friends
      </h1>
      <div>
        {
          friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
        }
      </div>
    </div>
  );
}
