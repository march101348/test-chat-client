import {
  Decoder,
  array,
  string,
  number,
  object,
} from '@mojotech/json-type-validation';

export type User = {
  id: number;
  name: string;
  age: number;
};

export const UserListDecoder: Decoder<User[]> = array(
  object({
    id: number(),
    name: string(),
    age: number(),
  })
);

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

const getUsersOffline = (): Promise<User[]> =>
  new Promise<User[]>((resolve, reject) => {
    setTimeout(() => {
      if (userList.length) {
        resolve(userList);
      } else {
        reject(new Error('no users'));
      }
    }, 500);
  });

export const getUsers = (): Promise<User[]> =>
  fetch('http://localhost:8080/rest/user/all')
    .then((ret) => ret.json().then((json) => UserListDecoder.runPromise(json)))
    .catch(() => getUsersOffline());
