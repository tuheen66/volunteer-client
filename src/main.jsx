import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import AuthProvider from "./providers/AuthProvider";
import AddVolunteers from "./Pages/AddVolunteers";
import NeedVolunteer from "./Pages/NeedVolunteer";
import VolunteerPostDetails from "./Pages/VolunteerPostDetails";
import ManageMyPost from "./Pages/ManageMyPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/volunteers"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addVolunteers",
        element: <AddVolunteers></AddVolunteers>,
      },
      {
        path: "/managePost",
        element: <ManageMyPost></ManageMyPost>
      },
      {
        path: "/needVolunteer",
        element: <NeedVolunteer></NeedVolunteer>,
        loader: () => fetch("http://localhost:5000/volunteers"),
      },
      {
        path: "/viewDetails/:id",
        element: <VolunteerPostDetails></VolunteerPostDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteers/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
