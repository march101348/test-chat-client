import { Fab, List } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useEffect, useState } from "react";
import { UserColumn } from "../../../containers/molecules/UserColumn/UserColumn";
import { getUsers, User } from "../../../data/User";

import "./Users.template.css";

export const UsersTemplate: React.VFC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [viewAddUserModal, setViewAddUserModal] = useState(false);

  useEffect(() => {
    getUsers().then((result) => setUsers(result));
  }, []);

  const handleOnClickAddUser = (user: User) => {
    setUsers((prev) => [
      ...prev,
      user,
    ]);
    setViewAddUserModal(false);
  }

  return (
    <div className="users">
      <h1>hello from users page!</h1>
      <List>
        {users && users.map((user) => <UserColumn key={user.id} {...user} />)}
      </List>
      <Fab
        onClick={() => setViewAddUserModal(true)}
        className="users-fab"
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>

      <AddUserModal open={viewAddUserModal} onClickAdd={handleOnClickAddUser} />
    </div>
  );
};
