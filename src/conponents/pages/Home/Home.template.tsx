import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { SideMenu } from "../../../containers/templates/SideMenu/SideMenu";
import { MyDataContext } from "../../../contexts/UserContext/MyData.store";
import { menus } from "../../../data/Menu";

import "./Home.template.css";

export const HomeTemplate: React.VFC = () => {
  const { state } = useContext(MyDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.id === -1) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  return (
    <div className="home">
      <SideMenu menus={menus} />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
