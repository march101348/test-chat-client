import { Decoder, number, object, string } from "@mojotech/json-type-validation";

export type Chat = {
  id: number;
  userId: number;
  content: string; // TODO: string | Image | Video
};

export const ChatDecoder: Decoder<Chat> = object({
  id: number(),
  userId: number(),
  content: string(),
});

const chatListOne: Chat[] = [
  {
    id: 0,
    userId: 0,
    content: 'hello from maruyama',
  },
  {
    id: 1,
    userId: 1,
    content: 'hello from shuhei haha',
  },
  {
    id: 2,
    userId: 0,
    content: 'hi shuhei how are you',
  },
];

const chatListTwo: Chat[] = [
  {
    id: 4,
    userId: 0,
    content: 'hello!!!!!!',
  },
  {
    id: 5,
    userId: 3,
    content: 'hello hello',
  },
  {
    id: 6,
    userId: 1,
    content: 'aaaaaaaa',
  },
  {
    id: 7,
    userId: 2,
    content: 'iiiiiiiiiiiiii',
  },
];

export const getChats = (roomId: number): Promise<Chat[]> => {
  return new Promise<Chat[]>((resolve, reject) => {
    setTimeout(() => {
      if (chatListOne.length) {
        if (roomId === 0) {
          resolve(chatListOne);
        } else {
          resolve(chatListTwo);
        }
      } else {
        reject('no users');
      }
    }, 500);
  });
}