import { AppBar, List } from "@material-ui/core";
import { RoomColumn } from "../../../containers/molecules/RoomColumn/RoomColumn";
import { Room } from "../../../data/Room";

export type RoomPaneProps = {
  rooms: Room[];
  onClick?: (id: number) => void;
};

export const RoomPane: React.FC<RoomPaneProps> = ({ rooms, onClick }) => {
  return (
    <div className="rooms-pane">
      <AppBar className="rooms-pane-root">ROOMS</AppBar>
      <List className="rooms-list">
        {rooms &&
          rooms.map((room) => (
            <>
              <RoomColumn
                key={room.id}
                room={room}
                onClick={onClick && (() => onClick(room.id))}
              />
            </>
          ))}
      </List>
    </div>
  );
};
