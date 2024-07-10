/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import errorImage from "./../assets/404_error.jpg";

const ErrorPage = () => {
    return (
        <section className="h-screen flex items-center  p-16 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        {/* <Helmet>
            <title>Sweet Abode | Error</title>
          </Helmet> */}
        <div className="container flex flex-col items-center justify-center px-5 mx-auto ">
          <div className=" text-center">
            <div className="mb-8 w-3/4 mx-auto">
              {/* <span className="sr-only">Error</span>404 */}
              <img className="w-3/4 mx-auto" src={errorImage} alt="" />
            </div>
            <p className="text-2xl font-bold md:text-4xl text-red-600">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-400 font-bold"></p>
            <Link
              to={"/"}
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold  bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    
    );
};

export default ErrorPage;