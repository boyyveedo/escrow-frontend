import React from "react";
import MessageBody from "../MessageList/MessageBody";
import SendMessage from "../MessageList/SendMessage/SendMessage";

export default function ChatInCall() {
  return (
    <div className=" ">
      <div className="max-h-[80dvh]">
        <MessageBody />
      </div>
      <SendMessage />
    </div>
  );
}
