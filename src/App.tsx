import { Route, Routes } from "react-router";
import "ress";
import "./App.css";

import { HomeTemplate } from "./conponents/pages/Home/Home.template";
import { LoginTemplate } from "./conponents/pages/Login/Login.template";
import { RoomsTemplate } from "./conponents/pages/Rooms/Rooms.template";
import { UsersTemplate } from "./conponents/pages/Users/Users.template";
import { MyDataStore } from "./contexts/UserContext/MyData.store";

function App() {
  return (
    <div className="App">
      <MyDataStore>
        <Routes>
          <Route path="/" element={<LoginTemplate />} />
          <Route path="home" element={<HomeTemplate />}>
            <Route path="/users" element={<UsersTemplate />} />
            <Route path="/rooms" element={<RoomsTemplate />} />
          </Route>
        </Routes>
      </MyDataStore>
    </div>
  );
}

export default App;
