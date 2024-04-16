import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";
const Navbar = () => {
  const data = useContext(GlobalContext);
  console.log(data);
  return (
    <div>
      <div className="navbar bg-base-300 align-element">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary lg:btn-lg hidden lg:flex">
            MyKitchen
          </Link>
          <div className="dropdown flex lg:hidden">
            <button
              tabIndex="0"
              role="button"
              class="btn m-1"
              className="btn dropdown btn-primary lg:btn-lg"
            >
              <span>MK</span>

              <div
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
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
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
