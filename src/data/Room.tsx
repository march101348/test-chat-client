import { User } from './User';

export type Room = {
  id: number;
  name: string;
  member: User[];
};

const roomList: Room[] = [
  {
    id: 0,
    name: 'meeting',
    member: [
      {
        id: 0,
        name: 'maruyama',
        age: 25,
      },
      {
        id: 1,
        name: 'shuhei',
        age: 18,
      },
    ],
  },
  {
    id: 1,
    name: 'greeting',
    member: [
      {
        id: 0,
        name: 'maruyama',
        age: 25,
      },
      {
        id: 2,
        name: 'yamada',
        age: 48,
      },
      {
        id: 3,
        name: 'tarou',
        age: 60,
      },
    ],
  },
];

export const getRooms = (): Promise<Room[]> =>
  new Promise<Room[]>((resolve, reject) => {
    setTimeout(() => {
      if (roomList.length) {
        resolve(roomList);
      } else {
        reject(new Error('no users'));
      }
    }, 500);
  });
