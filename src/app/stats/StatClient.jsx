"use client";

import { useContext } from "react";
import { Timeline } from "../context/ContextProvider";
import { Pie, PieChart } from "recharts";

const StatClient = () => {
  const { activities } = useContext(Timeline);
  console.log(activities);
  const CallData = activities.filter((item) => item.action === "Call");
  console.log(CallData, "CallData");
  const TextData = activities.filter((item) => item.action === "Text");
  console.log(TextData, "TextData");
  const VideoData = activities.filter((item) => item.action === "Video");
  console.log(VideoData, "VideoData");
  const data =[
    {name: "Text", value: TextData.length, fill: '#7E35E1'},
    {name: "Call", value: CallData.length, fill: '#244D3F'},
    {name: "Video", value: VideoData.length, fill: '#37A163'}
  ]
  return (
    <div>
      <h1>{activities.length}</h1>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        {/* <RechartsDevtool /> */}
      </PieChart>
    </div>
  );
};

export default StatClient;
