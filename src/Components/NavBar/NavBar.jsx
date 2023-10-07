import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const NavBar = () => {
  let { user, logOut } = useContext(authContext);
  let navigate = useNavigate();

  let handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    toast.success("Successfully Logged Out!");
    navigate("/login");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#ff572280" : "inherit",
              color: isActive ? "#000" : "inherit",
              borderRadius: "10px",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
          to="/"
        >
          <span className="text-[17px]">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#ff572280" : "inherit",
              color: isActive ? "#000" : "inherit",
              borderRadius: "10px",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
          to="/pricing"
        >
          <span className="text-[17px]">Pricing</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#ff572280" : "inherit",
              color: isActive ? "#000" : "inherit",
              borderRadius: "10px",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
          to="/contact"
        >
          <span className="text-[17px]">Contact</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#f3f2f0] px-1 lg:px-7 md:px-7 gap-5 md:gap-0 lg:gap-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            className="w-[70%] lg:w-[40%] md:w-[40%]"
            src="https://i.ibb.co/pQPwRp5/evento-2.png"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-5">
                <h2>{user.displayName}</h2>
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <button
                  onClick={handleLogOut}
                  type="button"
                  className=" px-4  py-3 font-semibold rounded bg-[#ff572280] dark:text-gray-800"
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded bg-[#ff572280] dark:text-gray-800"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
