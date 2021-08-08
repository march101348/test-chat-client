import { Fab, List } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from 'react';
import { UserColumn } from '../../../containers/molecules/UserColumn/UserColumn';
import { getUsers, User } from '../../../data/User';

import './Users.template.css';

export const UsersTemplate: React.VFC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((result) => setUsers(result));
  }, []);

  return (
    <div className="users">
      <h1>hello from users page!</h1>
      <List>
        {users &&
          users.map((user) => (
            <UserColumn
              key={user.id}
              id={user.id}
              name={user.name}
              age={user.age}
            />
          ))}
      </List>
      <Fab className="users-fab" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};
