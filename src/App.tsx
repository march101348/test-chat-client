import { Route, Routes } from "react-router";
import "ress"
import "./App.css";

import { HomeTemplate } from "./conponents/pages/Home/Home.template";
import { RoomsTemplate } from "./conponents/pages/Rooms/Rooms.template";
import { UsersTemplate } from "./conponents/pages/Users/Users.template";
import { SideMenu } from "./containers/templates/SideMenu/SideMenu";
import { MyDataStore } from "./contexts/UserContext/MyData.store";
import { menus } from "./data/Menu";

function App() {
  return (
    <div className="App">
      <MyDataStore>
        <SideMenu menus={menus} />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomeTemplate />} />
            <Route path="/users" element={<UsersTemplate />} />
            <Route path="/rooms" element={<RoomsTemplate />} />
          </Routes>
        </main>
      </MyDataStore>
    </div>
  );
}

export default App;
