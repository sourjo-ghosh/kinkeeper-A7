"use client";

import { createContext, useState } from "react";

export const Timeline = createContext();
const ContextProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const updateActivity = (user, action) => {
    const newActivity = {
      user,
      action,
      Date: new Date().toDateString(),
      time: new Date()
    };

    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <Timeline.Provider value={{ activities, updateActivity }}>
      {children}
    </Timeline.Provider>
  );
};

export default ContextProvider;
