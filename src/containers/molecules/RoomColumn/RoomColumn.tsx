import { List, ListItem, ListItemText } from '@material-ui/core';
import { Room } from '../../../data/Room';

export type RoomColumnProps = {
  room: Room;
  onClick?: () => void;
};

export const RoomColumn: React.VFC<RoomColumnProps> = ({
  room: { name, member },
  onClick,
}) => (
  <ListItem alignItems="flex-start" onClick={onClick} divider>
    <ListItemText>{name}</ListItemText>
    <List>
      {member &&
        member.map((user) => (
          <ListItemText key={user.id}>{user.name}</ListItemText>
        ))}
    </List>
  </ListItem>
);
