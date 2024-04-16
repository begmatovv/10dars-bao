import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";
const Navbar = () => {
  const { dispatch, navbarBgColor } = useContext(GlobalContext);
  return (
    <div
      onClick={() => dispatch({ type: "CHANGE_COLOR", payload: "red" })}
      className="bg-base-300"
      style={{ backgroundColor: navbarBgColor }}
    >
      <div className="navbar  align-element">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary lg:btn-lg hidden lg:flex">
            MyKitchen
          </Link>
          <div className="dropdown flex lg:hidden">
            <button
              tabIndex="0"
              role="button"
              className="btn dropdown btn-primary lg:btn-lg"
            >
              <span>MK</span>

              <div
                tabIndex="0"
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
              >
                <Navlinks />
              </div>
            </button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Navlinks />
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
