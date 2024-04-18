const colors = ["#0E46A3", "#FFF5E0", "#77B0AA"];

import { useContext, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { GlobalContext } from "../context/useGlobalContext";

const themes = {
  winter: "winter",
  dracula: "dracula",
};
function LocalStorageTheme() {
  return localStorage.getItem("mode") || themes.winter;
}
const ThemeContainer = () => {
  const [theme, setTheme] = useState(LocalStorageTheme());
  function handleClick() {
    const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mode", theme);
  }, [theme]);
  const { dispatch } = useContext(GlobalContext);
  const changeColor = (color) => {
    dispatch({
      type: "CHANGE_NAVBAR_BG",
      payload: color,
    });
  };
  return (
    <div className="mb-10 py-3 ">
      <div className="align-element  flex justify-between items-center">
        <div className="flex flex-row gap-2">
          {colors.map((color) => {
            return (
              <div
                onClick={() => changeColor(color)}
                key={color}
                className="h-7 w-7 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
        <div>
          <label className="swap swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={handleClick} />

            <FaSun className="swap-on fill-current w-7 h-7" />

            {/* moon icon */}
            <FaMoon className="swap-off fill-current w-7 h-7" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemeContainer;
