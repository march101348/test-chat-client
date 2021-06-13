import { createContext, useReducer } from "react";
import { MyData } from "../../data/MyData";

type Action =
  | { type: "CHANGE_NAME"; name: string }
  | { type: "CHANGE_PASS"; pass: string };

const reducer = (state: MyData, action: Action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_PASS":
      return {
        ...state,
        pass: action.pass,
      };
    default:
      return state;
  }
};

const initialState: MyData = {
  id: Math.random(),
  password: "",
  name: "",
  age: 0,
};

export const MyDataContext = createContext(
  {} as {
    state: MyData;
    dispatch: React.Dispatch<Action>;
  }
);

export const MyDataStore: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyDataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MyDataContext.Provider>
  );
};
