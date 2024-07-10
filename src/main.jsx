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
import UpdateVolunteerPost from "./Pages/UpdateVolunteerPost";
import BeAVolunteer from "./Pages/BeAVolunteer";
import MyVolunteerPosts from "./Pages/MyVolunteerPosts";
import MyRequestedPosts from "./Pages/MyRequestedPosts";
import GridLayout from "./components/GridLayout";
import TableLayout from "./components/TableLayout";

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
        element: <ManageMyPost></ManageMyPost>,
        children: [
          {
            index: true,
            element: <MyVolunteerPosts></MyVolunteerPosts>,
          },
          {
            path: "requestedPost",
            element: <MyRequestedPosts></MyRequestedPosts>,
          },
        ],
      },
      {
        path: "/beAVolunteer/:id",
        element: <BeAVolunteer></BeAVolunteer>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteers/${params.id}`),
      },
      {
        path: "/needVolunteer",
        element: <NeedVolunteer></NeedVolunteer>,
        children: [
          {
            index: true,
            element: <GridLayout></GridLayout>,
            loader: () => fetch("http://localhost:5000/volunteers"),
          },
          {
            path: "tableLayout",
            element: <TableLayout></TableLayout>,
            loader: () => fetch("http://localhost:5000/volunteers"),
          },
        ],
      },

      {
        path: "/viewDetails/:id",
        element: <VolunteerPostDetails></VolunteerPostDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteers/${params.id}`),
      },
      {
        path: "/updatePost/:id",
        element: <UpdateVolunteerPost></UpdateVolunteerPost>,
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
