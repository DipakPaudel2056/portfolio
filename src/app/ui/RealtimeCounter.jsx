"use client";
import * as Ably from "ably";
import {
  AblyProvider,
  ChannelProvider,
  useChannel,
  useConnectionStateListener,
} from "ably/react";
import React, { StrictMode, useEffect, useState } from "react";

const client = new Ably.Realtime({
  authUrl: "./api/ablyauth",
});

const ConnectionStatus = () => {
  const [connectionState, setConnectionState] = useState("initialized");

  useConnectionStateListener((statechange) => {
    setConnectionState(statechange.current);
  });
  return connectionState;
};
const LiveUpdate = ({ totalvisit }) => {
  const [currentVisit, setCurrentVisit] = useState(totalvisit);

 useChannel("site-visit",(message)=>{
  if(message.name === "update"){
    setCurrentVisit(message.data.count)
  }
 })
   return <span>This site is visited by {currentVisit} users.</span>;
};
const RealtimeCounter = ({totalvisit}) => {
  useEffect(() => {
    fetch("./api/ablyincreament", { method: "POST" });
  }, []);
  return (
    <StrictMode>
      <AblyProvider client={client}>
        <p>
          connection: <ConnectionStatus />
        </p>

        <ChannelProvider channelName="site-visit">
          <p>
            <LiveUpdate totalvisit={totalvisit}  />
          </p>
        </ChannelProvider>
      </AblyProvider>
    </StrictMode>
  );
};

export default RealtimeCounter;
