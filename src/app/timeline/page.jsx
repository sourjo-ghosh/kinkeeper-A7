"use client";

import { useContext } from "react";
import { Timeline } from "../context/ContextProvider";
import { IoCallSharp } from "react-icons/io5";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const TimeLinePage = () => {
  const { activities } = useContext(Timeline);
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Activity Timeline
        </h1>

        {activities.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
            No activity yet
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((item, i) => (
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
                    {item.action === "Call" ? <IoCallSharp /> : item.action === "Text" ? <BsChatRightTextFill /> : <FaVideo />} 
                  </span>

                  
                  <span className="text-sm text-gray-400">
                    {item.time}
                  </span>
                </div>

                
                <p className="text-gray-700">
                  <span className="font-medium">{item.action}</span> With {" "}
                  <span className="font-semibold">{item.user}</span> 
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;
