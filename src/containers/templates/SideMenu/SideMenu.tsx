import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { Menu } from '../../../data/Menu';

import './SideMenu.css';

export type SideMenuProps = {
  menus: Menu[];
};

export const SideMenu: React.VFC<SideMenuProps> = ({ menus }) => {
  const navigate = useNavigate();

  const handleOnClick = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer
      className="side-menu"
      classes={{ paper: 'side-menu-paper' }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {menus.map((menu) => (
          <ListItem
            key={menu.path}
            button
            onClick={() => handleOnClick(menu.path)}
          >
            {menu.icon}
            <ListItemText>{menu.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
