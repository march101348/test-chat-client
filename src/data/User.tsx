export type User = {
  id: number;
  name: string;
  age: number;
};

const userList: User[] = [
  {
    id: 0,
    name: 'Maruyama',
    age: 25,
  },
  {
    id: 1,
    name: 'Shuhei',
    age: 28,
  },
  {
    id: 2,
    name: 'Yamada',
    age: 60,
  },
  {
    id: 3,
    name: 'Tarou',
    age: 48,
  },
];

export const getUsers = (): Promise<User[]> => {
  return new Promise<User[]>((resolve, reject) => {
    setTimeout(() => {
      if (userList.length) {
        resolve(userList);
      } else {
        reject('no users');
      }
    }, 500);
  });
}

export const searchUsers = (userName: string): Promise<User[]> => {
  return new Promise<User[]>((resolve, reject) => {
    setTimeout(() => {
      if (userList.length) {
        resolve(userList);
      } else {
        reject('no users');
      }
    }, 500);
  });
}