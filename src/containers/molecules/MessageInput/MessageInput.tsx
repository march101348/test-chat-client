import { Button, TextField } from '@material-ui/core';

import './MessageInput.css';

export type MessageInputProps = {
  className?: string;
  onChange: (input: string) => void;
  onSubmit: () => void;
  input: string;
};

export const MessageInput: React.VFC<MessageInputProps> = ({
  className,
  onChange,
  onSubmit,
  input,
}) => (
  <div className={`message-input ${className}`}>
    <TextField
      className="message-input-text"
      value={input}
      onChange={(ev) => onChange(ev.target.value)}
      rowsMax={4}
      multiline
    />
    <Button variant="contained" onClick={onSubmit}>
      Submit
    </Button>
  </div>
);
