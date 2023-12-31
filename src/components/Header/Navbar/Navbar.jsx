import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../Theme/Theme";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";



const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { handleTheme, mode, setMode } = useContext(ThemeContext);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-medium text-lg ${
              isActive ? "text-purple-500" : "text-black dark:text-white"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {user?.email == "uchihaitachi01581@gmail.com" &&<li>
        <NavLink
          className={({ isActive }) =>
            `font-medium text-lg ${
              isActive ? "text-purple-500 " : "text-black dark:text-white"
            }`
          }
          to="/addProduct"
        >
          Add Product
        </NavLink>
      </li>}
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-medium text-lg ${
              isActive ? "text-purple-500 " : "text-black dark:text-white"
            }`
          }
          to="/myCart"
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (

    <div>
      <div className="navbar dark:bg-gray-700 dark:text-white shadow-md  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-600 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost font-bold normal-case text-2xl">
            <span>
              <span className="text-3xl text-purple-500">G</span>adget
            </span>{" "}
            Galaxy
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <div
            onClick={() => setMode(!mode)}
            className="flex justify-center items-center"
          >
            <button onClick={handleTheme} className="text-2xl lg:text-3xl pr-4">
              {mode ? <BsFillSunFill /> : <MdDarkMode />}
            </button>
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-600 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="btn btn-sm  btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
