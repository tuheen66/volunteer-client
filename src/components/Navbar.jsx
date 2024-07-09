import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {
    logOut().then(() => console.log("logged out successfully "));
    navigate(location?.state ? location.state : "/");
  };

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

          {/* small screen */}

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
                Need Volunteers
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
              <ul className="p-2 z-999">
                <li>
                  <NavLink
                    to="/addVolunteers"
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

      {/* large screen */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-[1] ">
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
              Need Volunteers
            </NavLink>
          </li>
          <li>
            <details>
              <summary>My Profile</summary>
              <ul className="p-2 bg-opacity-80 w-36">
                <li>
                  <NavLink
                    to="../addVolunteers"
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
          <div className="flex items-center gap-4">
            <div className=" relative group ">
              <img className="w-14 rounded-full  " src={user.photoURL} />

              <p className="opacity-0 group-hover:opacity-100 absolute w-44 text-center -bottom-4 right-16 text-xl text-gray-700 bg-gray-200 font-semibold">
                {user.displayName}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="btn  bg-[#ff5252] border-none text-white hover:bg-[#f3a683]"
            >
              Logout
            </button>
          </div>
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
