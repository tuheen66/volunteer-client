import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import register from "../assets/images/register.jpg";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "success!",
          text: "You have been registered successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("Profile updated"))
          .catch((error) => {
            console.error(error);
          });

        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });

    e.target.reset();
  };

  return (
    <div className=" w-[80%] mx-auto items-center justify-center">
      <Helmet>
        <title>Benevo | Register</title>
      </Helmet>
      <div className=" lg:w-[50%] bg-gray-200 p-8  mx-auto text-gray-700 my-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold">Please Register</h2>

        <form onSubmit={handleRegister} className="form-action">
          <div className="w-full">
            <label className="pl-4 " htmlFor="name">
              Your name:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="text"
              placeholder="Your name"
              name="name"
              id="name"
            />
          </div>

          <div className="w-full">
            <label className="pl-4 " htmlFor="photo">
              Photo URL:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="text"
              placeholder="photo url"
              name="photo"
              id="photo"
            />
          </div>

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
              type={showPassword ? "text" : "password"}
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
            className="btn  bg-[#ff5252] w-full border-none text-lg mt-6 text-white rounded-lg hover:bg-[#cc8e35] "
            type="submit"
            value="Register"
          />
        </form>

        <div className="text-center mt-4 space-y-2">
          <p>
            Already have and account? Please
            <Link to="/login" className="font-bold ml-2 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
