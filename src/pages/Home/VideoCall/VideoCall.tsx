import { usePeer } from "../../../hooks/usePeer";
import CallHeader from "./CallHeader";
import ChatAndParticipents from "./ChatAndParticipents";
import VideoListComponent from "./VideoListComponent";

export default function VideoCall() {
  usePeer(); // Initialize PeerJS and handle connections

  return (
    <>
      <div className="h-screen overflow-hidden">
        <CallHeader />
        <div className="mx-auto flex h-full w-full gap-8 py-4 2xl:max-w-[90vw]">
          <VideoListComponent />
          <ChatAndParticipents />
        </div>
      </div>
    </>
  );
}
