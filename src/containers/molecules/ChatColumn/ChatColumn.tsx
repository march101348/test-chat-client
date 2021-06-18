import { ListItem, ListItemText } from "@material-ui/core";
import { Chat } from "../../../data/Chat";

import "./ChatColumn.css";

export type ChatColumnProps = {
  myID: number;
  chat: Chat;
};

export const ChatColumn: React.VFC<ChatColumnProps> = ({
  myID,
  chat: { user_id, content },
}) => {
  const align = myID === user_id ? "align-right" : "align-left";
  return (
    <ListItem
      className="chat-column"
      alignItems="flex-start"
      divider
      ContainerComponent="div"
    >
      <ListItemText classes={{ primary: align }}>{content}</ListItemText>
    </ListItem>
  );
};
