"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosAdd, IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="sticky top-1 z-50">
      <div className="navbar bg-base-100 px-5 md:px-10 lg:px-10 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              <li>
                <Link
                  className={`font-semibold text-xl rounded-xl ${pathName === "/" ? "text-white bg-[#244D3F]" : "text-[#64748B]"}`}
                  href="/"
                >
                  <IoMdHome></IoMdHome>Home
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold text-xl rounded-xl ${pathName === "/timeline" ? " text-white bg-[#244D3F]" : "text-[#64748B]"}`}
                  href="/timeline"
                >
                  <RiTimeLine></RiTimeLine> Time Line
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold text-xl rounded-xl ${pathName === "/stats" ? "text-white bg-[#244D3F]" : "text-[#64748B]"}`}
                  href="/stats"
                >
                  <TfiStatsUp></TfiStatsUp> Stats
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-3xl font-bold ">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </p>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <Link
                  className={`font-semibold text-xl btn border-none ${pathName === "/" ? "text-white bg-[#244D3F]" : "text-[#64748B]"}`}
                  href="/"
                >
                  <IoMdHome></IoMdHome>Home
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold text-xl btn border-none ${pathName === "/timeline" ? " text-white bg-[#244D3F]" : "text-[#64748B]"}`}
                  href="/timeline"
                >
                  <RiTimeLine></RiTimeLine> Time Line
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold text-xl btn border-none ${pathName === "/stats" ? "text-white bg-[#244D3F]" : "text-[#64748B]"}`}
                  href="/stats"
                >
                  <TfiStatsUp></TfiStatsUp> Stats
                </Link>
              </li>
            </ul>
          </div>
          <button className="md:hidden lg:hidden flex items-center gap-2 border-none bg-[#244D3F] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#244D3F]/20 btn">
            <IoIosAdd className="h-5 w-5" />
            Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
