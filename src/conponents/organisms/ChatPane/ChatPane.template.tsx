import { AppBar, List } from '@material-ui/core';
import { useContext, useEffect, useMemo, useState } from 'react';
import { ChatColumn } from '../../../containers/molecules/ChatColumn/ChatColumn';
import { MessageInput } from '../../../containers/molecules/MessageInput/MessageInput';
import { MyDataContext } from '../../../contexts/UserContext/MyData.store';
import { Chat, ChatDecoder, getChats } from '../../../data/Chat';
import { Room } from '../../../data/Room';

import './ChatPane.template.css';

export const ChatPane: React.FC<Room> = ({ id, name }) => {
  const { state: myData } = useContext(MyDataContext);
  const [chats, setChats] = useState<Chat[]>([]);
  const [input, setInput] = useState<string>('');

  // TODO: WS関係の処理をAPI層へ移譲
  const socket = useMemo(() => new WebSocket('ws://127.0.0.1:8080/ws/'), []);
  socket.onopen = () => {
    // socket.send("hello from client!!!");
  };
  socket.onmessage = (event) => {
    ChatDecoder.runPromise(JSON.parse(event.data))
      .then((chat) => {
        setChats((prev) => [...prev, chat]);
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('parse error!!!');
      });
  };

  useEffect(() => () => socket.close(), [socket]);

  useEffect(() => {
    getChats(id).then((result) => setChats(result));
  }, [id]);

  const handleOnInputChange = (text: string) => {
    setInput(text);
  };

  const handleOnInputSubmit = () => {
    const chat = {
      user_id: myData.id,
      room_id: id,
      content: input,
    };
    socket.send(JSON.stringify(chat));
    setInput('');
  };

  return (
    <div className="rooms-chat">
      <AppBar className="rooms-chat-root">{name}</AppBar>
      <List className="rooms-chat-list">
        {chats &&
          chats.map((chat) => (
            <ChatColumn key={chat.id} myID={myData.id} chat={chat} />
          ))}
      </List>
      <MessageInput
        className="fix-bottom"
        onChange={handleOnInputChange}
        onSubmit={handleOnInputSubmit}
        input={input}
      />
    </div>
  );
};
