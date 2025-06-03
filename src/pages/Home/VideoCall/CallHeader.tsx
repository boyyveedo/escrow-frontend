import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { useStream } from "../../../context/StreamProvider";
import { useEffect, useState } from "react";
import { useWebsiteSettings } from "../../../store/api/useWebsiteSettings";
import { socketInstance } from "../../../socket/socket";
import { usePeer } from "../../../hooks/usePeer";

export default function CallHeader() {
  const { userStreams } = useStream();
  let { data: websiteSettings } = useWebsiteSettings();

  const currentStream = Object.values(userStreams).find(
    (user) => user.currentVideo,
  );
  const ConnectedUser = useAppSelector((state) => state.ConnectedUser);
  const userData = useAppSelector((state) => state.userData);
  const socket = socketInstance();
  const { room_id } = useAppSelector((state) => state.PeerJsSlice);
  const { myPeer } = usePeer();

  function endCall() {
    socket.emit("leave-call", {
      room_id: room_id,
      peer_id: myPeer?.current?.id,
      call_type: "video_call",
    });
    sessionStorage.removeItem("callStartTime");
    window.location.replace("/chat");
  }

  return (
    <div className="flex h-16 w-full items-center justify-between bg-gradient-to-l from-[#FCC60480] to-[#FFEDAB80] px-8">
      <img
        src={`/CallIcons/whoxa_logo.png`}
        className="h-16 w-40 object-contain"
        alt=""
      />

      <div
        onClick={endCall}
        className="rounded-full cursor-pointer bg-[#FA4343] px-4 py-1 text-white"
      >
        End Call
      </div>
    </div>
  );
}
