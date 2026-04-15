'use client'

import { createContext, useState } from "react";

export const Timeline = createContext()
const ContextProvider = ({children}) => {
    const [friendName, setFriendName] = useState({})
    const [action, setAction] = useState([])
    const [currentDate, setCurrentDate] = useState([]) 
    const [call, setCall] = useState([]) 
    const [text, setText] = useState([]) 
    const [video, setVideo] = useState([]) 

    return (
        <Timeline.Provider value={{friendName, setFriendName, action, setAction, currentDate, setCurrentDate, call, setCall, text, setText, video, setVideo}}>
            {children}
        </Timeline.Provider>
    );
};

export default ContextProvider;