import {
  array,
  Decoder,
  number,
  object,
  string,
} from '@mojotech/json-type-validation';

export type Chat = {
  id: number;
  // eslint-disable-next-line camelcase
  user_id: number;
  // eslint-disable-next-line camelcase
  room_id: number;
  content: string; // TODO: string | Image | Video
};

export const ChatDecoder: Decoder<Chat> = object({
  id: number(),
  user_id: number(),
  room_id: number(),
  content: string(),
});

export const ChatListDecoder: Decoder<Chat[]> = array(ChatDecoder);

const chatListOne: Chat[] = [
  {
    id: 0,
    user_id: 0,
    room_id: 0,
    content: 'hello from maruyama',
  },
  {
    id: 1,
    user_id: 1,
    room_id: 0,
    content: 'hello from shuhei haha',
  },
  {
    id: 2,
    user_id: 0,
    room_id: 0,
    content: 'hi shuhei how are you',
  },
];

const chatListTwo: Chat[] = [
  {
    id: 4,
    user_id: 0,
    room_id: 1,
    content: 'hello!!!!!!',
  },
  {
    id: 5,
    user_id: 3,
    room_id: 1,
    content: 'hello hello',
  },
  {
    id: 6,
    user_id: 1,
    room_id: 1,
    content: 'aaaaaaaa',
  },
  {
    id: 7,
    user_id: 2,
    room_id: 1,
    content: 'iiiiiiiiiiiiii',
  },
];

const getChatsOffline = (roomId: number): Promise<Chat[]> =>
  new Promise<Chat[]>((resolve, reject) => {
    setTimeout(() => {
      if (chatListOne.length) {
        if (roomId === 0) {
          resolve(chatListOne);
        } else {
          resolve(chatListTwo);
        }
      } else {
        reject(new Error('no users'));
      }
    }, 500);
  });

export const getChats = (roomId: number): Promise<Chat[]> =>
  fetch(`http://localhost:8080/rest/chat/all/${roomId}`)
    .then((ret) => ret.json().then((json) => ChatListDecoder.runPromise(json)))
    .catch(() => getChatsOffline(roomId));
