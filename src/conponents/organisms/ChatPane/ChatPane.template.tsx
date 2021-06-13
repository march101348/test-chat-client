import { AppBar, List } from "@material-ui/core";
import { useContext, useEffect, useMemo, useState } from "react";
import { ChatColumn } from "../../../containers/molecules/ChatColumn/ChatColumn";
import { MessageInput } from "../../../containers/molecules/MessageInput/MessageInput";
import { MyDataContext } from "../../../contexts/UserContext/MyData.store";
import { Chat, getChats } from "../../../data/Chat";

import "./ChatPane.template.css";

export type ChatPaneProps = {
  viewChatId: number;
  roomName: string;
};

export const ChatPane: React.FC<ChatPaneProps> = ({ viewChatId, roomName }) => {
  const { state: myData } = useContext(MyDataContext);
  const [chats, setChats] = useState<Chat[]>([]);
  const [input, setInput] = useState<string>("");

  const socket = useMemo(() => new WebSocket("ws://127.0.0.1:8080/ws/"), []);
  socket.onopen = (_) => {
    socket.send("hello from client!!!");
  };

  useEffect(() => {
    return () => socket.close();
  }, [socket]);


  useEffect(() => {
    getChats(viewChatId).then((result) => setChats(result));
  }, [viewChatId]);

  const handleOnInputChange = (input: string) => {
    setInput(input);
  };

  const handleOnInputSubmit = () => {
    setChats((prev) => {
      const chat = {
        id: 0,
        userId: myData.id,
        content: input,
      };
      setInput("");
      socket.send(input);
      return [...prev, chat];
    });
  };

  return (
    <div className="rooms-chat">
      <AppBar className="rooms-chat-root">{roomName}</AppBar>
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
      ></MessageInput>
    </div>
  );
};