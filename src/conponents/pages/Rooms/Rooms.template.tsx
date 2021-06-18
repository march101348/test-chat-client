import { useEffect, useState } from "react";
import { getRooms, Room } from "../../../data/Room";
import { ChatPane } from "../../organisms/ChatPane/ChatPane.template";
import { RoomPane } from "../../organisms/RoomPane/RoomPane.template";

import "./Rooms.template.css";

export const RoomsTemplate: React.VFC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [viewRoom, setViewRoom] = useState<Room>();

  useEffect(() => {
    getRooms().then((result) => setRooms(result));
  }, []);

  const handleOnClickRoom = (id: number) => {
    const room = rooms.find((room) => room.id === id);
    setViewRoom(room);
  };

  return (
    <div className="rooms">
      <RoomPane rooms={rooms} onClick={handleOnClickRoom} />
      {viewRoom && <ChatPane {...viewRoom} />}
    </div>
  );
};
