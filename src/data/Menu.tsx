import MailIcon from "@material-ui/icons/Mail";

export type Menu = {
  path: string;
  name: string;
  icon: React.ReactElement;
};

export const menus: Menu[] = [
  {
    path: "/home/users",
    name: "USERS",
    icon: <MailIcon />,
  },
  {
    path: "/home/rooms",
    name: "ROOMS",
    icon: <MailIcon />,
  },
];
