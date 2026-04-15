'use client'

import { useContext } from "react";
import { Timeline } from "../context/ContextProvider";

const TimeLinePage = () => {
  const {friendName, setFriendName, action, setAction, currentDate, setCurrentDate} = useContext(Timeline)
  console.log(friendName, action, currentDate)
  return <div>hello world</div>;
};

export default TimeLinePage;
