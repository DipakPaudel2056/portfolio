"use client";
import * as Ably from "ably";
import { AblyProvider, useAbly, useConnectionStateListener } from "ably/react";
import React, { StrictMode, useState } from "react";

const client = new Ably.Realtime({
    authUrl:'../api/ablyauth'
})

const RealtimeCounter = () => {
 

  return (
    <StrictMode>
      <AblyProvider client={client}>
        <p>connection</p>
      </AblyProvider>
    </StrictMode>
  );
};

export default RealtimeCounter;
