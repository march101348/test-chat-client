import MailIcon from "@material-ui/icons/Mail"

export type Menu = {
  path: string;
  name: string;
  icon: React.ReactElement;
};

export const menus: Menu[] = [
  {
    path: '/',
    name: 'HOME',
    icon: <MailIcon />
  },
  {
    path: '/users',
    name: 'USERS',
    icon: <MailIcon />
  },
  {
    path: '/rooms',
    name: 'ROOMS',
    icon: <MailIcon />
  },
];
