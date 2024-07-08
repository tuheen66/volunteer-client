import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 w-[80%] mx-auto shadow-xl shadow-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "#ff5252" : "",
                    color: isActive ? "white" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/needVolunteer"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "#ff5252" : "",
                    color: isActive ? "white" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                Need Volunteer
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myProfile"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "#ff5252" : "",
                    color: isActive ? "white" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                My Profile
              </NavLink>
              <ul className="p-2">
                <li>
                  <NavLink
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#ff5252" : "",
                        color: isActive ? "white" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    Add Volunteer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/managePost"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#ff5252" : "",
                        color: isActive ? "white" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    Manage My Post
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-[64px]">
          <img src={logo} alt="" />
        </div>
        <a className=" ml-2 text-2xl font-extrabold">BENEVO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#ff5252" : "",
                  color: isActive ? "white" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/needVolunteer"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#ff5252" : "",
                  color: isActive ? "white" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Need Volunteer
            </NavLink>
          </li>
          <li>
            <details>
              <summary>My Profile</summary>
              <ul className="p-2">
                <li>
                  <NavLink
                    to="/addVolunteer"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#ff5252" : "",
                        color: isActive ? "white" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    Add Volunteer
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/managePost"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#ff5252" : "",
                        color: isActive ? "white" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    Manage Post
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn  bg-[#ff5252] border-none text-white hover:bg-[#f3a683]">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn  bg-[#ff5252] border-none text-white hover:bg-[#f3a683]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
