'use client'

import { createContext, useState } from "react";

export const Timeline = createContext()
const ContextProvider = ({children}) => {
    const [timeline, setTimeline] = useState()
    const name = 'joy'
    return (
        <Timeline.Provider value={[timeline, setTimeline, name]}>
            {children}
        </Timeline.Provider>
    );
};

export default ContextProvider;