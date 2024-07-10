import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const ManageMyPost = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Helmet>
        <title>Benevo | Manage My Post</title>
      </Helmet>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>My Volunteer Posts</span>
        </Link>

        <Link
          onClick={() => setTabIndex(1)}
          to={"requestedPost"}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>My Requested Posts</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ManageMyPost;
