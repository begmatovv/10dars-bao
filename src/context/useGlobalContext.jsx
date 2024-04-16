import { createContext, useReducer } from "react";
export const GlobalContext = createContext();
const changeState = (state, action) => {
  switch (action) {
    case "CHANGE_COLOR":
      return { ...state, navbarColor: action.payload };
    case "CHANGE_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    navbarColor: "red",
  });
  dispatch({ type: "CHANGE_COLOR", payload: "green" });
  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
}
