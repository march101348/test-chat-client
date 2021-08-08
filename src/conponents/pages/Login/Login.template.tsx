import { AppBar, Typography, TextField, Button } from '@material-ui/core';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { MyDataContext } from '../../../contexts/UserContext/MyData.store';
import { postMyData } from '../../../data/MyData';

import './Login.template.css';

export const LoginTemplate: React.VFC = () => {
  const { dispatch } = useContext(MyDataContext);
  const [myId, setMyId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    // TODO: POST中は画面操作を無効にする
    postMyData(myId, password, name).then((myData) => {
      dispatch({ type: 'SET_MY_DATA', data: myData });
      navigate('home', { replace: true });
    });
  };

  return (
    <div className="login-content">
      <AppBar className="app-bar" position="static">
        <Typography variant="h6">SIGN IN or SIGN UP</Typography>
      </AppBar>
      <TextField
        id="standard-basic"
        label="user name"
        onChange={(ev) => setMyId(ev.target.value)}
      />
      <TextField
        id="standard-basic"
        type="password"
        label="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <TextField
        id="standard-basic"
        label="name"
        onChange={(ev) => setName(ev.target.value)}
      />
      <Button variant="contained" onClick={handleOnSubmit}>
        SUBMIT
      </Button>
    </div>
  );
};
