import Image from "next/image";
import { IoIosAdd } from "react-icons/io";

export default function Home() {
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
        <button className="flex justify-center items-center text-white bg-[#244D3F] btn text-[20px]">
          <IoIosAdd />
          Add Button
        </button>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col justify-center items-center bg bg-white p-5 rounded-2xl">
          <span>10</span>
          <p>Total Friends</p>
        </div>
         <div className="flex flex-col justify-center items-center bg bg-white p-5 rounded-2xl">
          <span>10</span>
          <p>Total Friends</p>
        </div>
         <div className="flex flex-col justify-center items-center bg bg-white p-5 rounded-2xl">
          <span>10</span>
          <p>Total Friends</p>
        </div>
         <div className="flex flex-col justify-center items-center bg bg-white p-5 rounded-2xl">
          <span>10</span>
          <p>Total Friends</p>
        </div>
      </div>
    </div>
  );
}
