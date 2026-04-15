"use client";

import { createContext, useState } from "react";

export const Timeline = createContext();
const ContextProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const updateActivity = (user, action) => {
    const newActivity = {
      user,
      action,
      time: new Date().toDateString(),
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
