"use client";

import { useContext, useMemo, useState } from "react";
import { Timeline } from "../context/ContextProvider";
import { IoCallSharp } from "react-icons/io5";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const TimelineClient = () => {
  const { activities, time } = useContext(Timeline);
  const [filteringType, setFilteringType] = useState("");
  const [sortingType, setSortingType] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const FilteredData = useMemo(() => {
    // search by name
    if (inputValue) {
      return activities.filter((item) =>
        item.user.toLowerCase().includes(inputValue.toLowerCase()),
      );
    }
    // filter
    if (filteringType && filteringType !== "All") {
      return activities.filter((item) => item.action === filteringType);
    } 

    // sort
    if (sortingType === "Oldest To Newest") {
      return [...activities].sort(
        (a, b) => Number(a.time) - Number(b.time)
      );
    }

    if (sortingType === "Newest To Oldest") {
      return [...activities].sort(
        (a, b) => Number(b.time) - Number(a.time)
      );
    }

    return activities;
  }, [filteringType, activities, sortingType, inputValue]);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Activity Timeline
          </h1>
          <div className="flex-row md:flex lg:flex gap-2 my-3 justify-between items-center">
            <div className="dropdown dropdown-start my-3">
              <div tabIndex={0} role="button" className="btn m-1">
                Filter By ⬇️ {filteringType}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a
                    onClick={() => {
                      setFilteringType("Call");
                    }}
                  >
                    Call
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setFilteringType("Text");
                    }}
                  >
                    Text
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setFilteringType("Video");
                    }}
                  >
                    Video
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setFilteringType("All");
                    }}
                  >
                    All
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort ⬇️ {sortingType}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a
                    onClick={() => {
                      setSortingType("Oldest To Newest");
                    }}
                  >
                    Oldest To Newest
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setSortingType("Newest To Oldest");
                    }}
                  >
                    Newest To Oldest
                  </a>
                </li>
              </ul>
            </div>
            <form>
              <input
                value={inputValue}
                onChange={handleChange}
                type="text"
                placeholder="Type Name Here"
                className="input focus:outline-none"
              />
            </form>
          </div>
          {FilteredData.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
              No activity yet
            </div>
          ) : (
            <div className="space-y-4">
              {FilteredData.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`px-3 py-1 text-3xl rounded-full font-medium ${
                        item.action === "Call"
                          ? "bg-green-100 text-green-600"
                          : item.action === "Text"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {item.action === "Call" ? (
                        <IoCallSharp />
                      ) : item.action === "Text" ? (
                        <BsChatRightTextFill />
                      ) : (
                        <FaVideo />
                      )}
                    </span>

                    <span className="text-sm text-gray-400">{item.Date}</span>
                  </div>

                  <p className="text-gray-700">
                    <span className="font-medium">{item.action}</span> With{" "}
                    <span className="font-semibold">{item.user}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineClient;
