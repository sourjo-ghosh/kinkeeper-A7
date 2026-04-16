"use client";

import { useContext } from "react";
import { Timeline } from "../context/ContextProvider";
import { Cell, Pie, PieChart } from "recharts";

const StatClient = () => {
  const { activities } = useContext(Timeline);

  const safeActivities = Array.isArray(activities) ? activities : [];
  const callCount = safeActivities.filter((item) => item.action === "Call").length;
  const textCount = safeActivities.filter((item) => item.action === "Text").length;
  const videoCount = safeActivities.filter((item) => item.action === "Video").length;

  // Legend labels in the Figma screenshot use "Chat" rather than "Text".
  const data = [
    { name: "Chat", value: textCount, fill: "#7E35E1" },
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Video", value: videoCount, fill: "#37A163" },
  ];

  return (
    <div className="flex-1 bg-[#F8FAFC]">
      <div className="mx-auto max-w-4xl px-6 py-10 md:px-10">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-8 py-10 md:px-16">
            <h1 className="font-bold text-[20px] md:text-[24px] text-[#0F172A]">
              Friendship Analytics
            </h1>

            <p className="mt-3 text-[12px] font-medium text-[#64748B]">
              By Interaction Type
            </p>

            <div className="mt-6 rounded-lg bg-[#F8FAFC] px-6 py-8 md:px-10 md:py-10">
              <div className="mx-auto flex w-[190px] items-center justify-center md:w-[220px]">
                <PieChart width={220} height={220}>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="72%"
                    outerRadius="96%"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={4}
                    isAnimationActive
                    cornerRadius={14}
                  >
                    {data.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {data.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.fill }}
                      
                    />
                    <p className="text-[11px] font-medium text-[#64748B]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatClient;
