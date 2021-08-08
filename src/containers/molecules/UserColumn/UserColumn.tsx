import { ListItem, ListItemText } from '@material-ui/core';
import { User } from '../../../data/User';

export const UserColumn: React.VFC<User> = ({ name, age }) => (
  <ListItem>
    <ListItemText>{age.toString()}</ListItemText>
    <ListItemText>{name}</ListItemText>
  </ListItem>
);
