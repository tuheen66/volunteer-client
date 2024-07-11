import { Link, useLocation, useNavigate } from "react-router-dom";
// import login from '../assets/images/login.jpg'
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Login = () => {
  const { userSignIn, googleSignIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        const user = { email };

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          title: "Ooops!",
          text: "Please provide valid email and correct password",
          icon: "error",
          confirmButtonText: "Oh no!",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex w-[80%] mx-auto items-center ">
      <Helmet>
        <title>Benevo | Login</title>
      </Helmet>
      <div className=" lg:w-[50%] bg-gray-200 p-8  mx-auto text-gray-700 my-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold">Please Login</h2>

        <form onSubmit={handleSignIn} className="form-action">
          <div className="w-full">
            <label className="pl-4 " htmlFor="email">
              Your email:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="email"
              placeholder="Your email"
              name="email"
              id="email"
            />
          </div>

          <div className="w-full relative">
            <label className="pl-4 " htmlFor="password">
              Password:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <input
            className="btn bg-[#ff5252] w-full border-none text-white text-lg mt-6 hover:bg-[#cc8e35] "
            type="submit"
            value="Login"
          />
        </form>

        <div className="text-center mt-4 space-y-2">
          <p className="flex justify-center items-center">
            Sign In with
            <span
              onClick={handleGoogleSignIn}
              className="text-[#eb4d4b] font-bold mx-2 cursor-pointer hover:underline"
            >
              <FcGoogle />
            </span>
          </p>
          <p>
            New to this site? Please
            <Link to="/register" className="font-bold ml-2 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="w[50%] my-8">
        <img
          className="w-[85%] mx-auto rounded-lg shadow-2xl shadow-gray-900"
          src=""
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
