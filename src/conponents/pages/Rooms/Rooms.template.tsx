import { useEffect, useState } from "react";
import { getRooms, Room } from "../../../data/Room";
import { ChatPane } from "../../organisms/ChatPane/ChatPane.template";
import { RoomPane } from "../../organisms/RoomPane/RoomPane.template";

import "./Rooms.template.css";

export const RoomsTemplate: React.VFC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [viewChatId, setViewChatId] = useState<number>();

  useEffect(() => {
    getRooms().then((result) => setRooms(result));
  }, []);

  const handleOnClickRoom = (id: number) => {
    setViewChatId(id);
  };

  return (
    <div className="rooms">
      <RoomPane rooms={rooms} onClick={handleOnClickRoom} />
      {viewChatId && <ChatPane
        viewChatId={viewChatId}
        roomName={viewChatId !== undefined ? rooms[viewChatId].name : ""}
      />}
    </div>
  );
};
