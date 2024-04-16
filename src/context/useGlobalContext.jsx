import { createContext, useEffect, useReducer } from "react";
export const GlobalContext = createContext();

function changeState(state, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, navbarBgColor: action.payload };
    case "CHANGE_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    navbarBgColor: "base-300",
  });
  useEffect(() => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: "base-300",
    });
  }, []);
  return (
    <GlobalContext.Provider value={{ ...state ,dispatch}}>
      {" "}
      {children}
    </GlobalContext.Provider>
  );
}
