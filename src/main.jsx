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
import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "./Routes/PrivateRoute";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://volunteer-management-server-eight.vercel.app/volunteers"
          ),
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
        element: (
          <PrivateRoute>
            <AddVolunteers></AddVolunteers>
          </PrivateRoute>
        ),
      },
      {
        path: "/managePost",
        element: (
          <PrivateRoute>
            <ManageMyPost></ManageMyPost>
          </PrivateRoute>
        ),
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
          fetch(
            `https://volunteer-management-server-eight.vercel.app/volunteers/${params.id}`
          ),
      },
      {
        path: "/needVolunteer",
        element: <NeedVolunteer></NeedVolunteer>,
        children: [
          {
            index: true,
            element: <GridLayout></GridLayout>,
            loader: () =>
              fetch(
                "https://volunteer-management-server-eight.vercel.app/volunteers"
              ),
          },
          {
            path: "tableLayout",
            element: <TableLayout></TableLayout>,
            loader: () =>
              fetch(
                "https://volunteer-management-server-eight.vercel.app/volunteers"
              ),
          },
        ],
      },

      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails></VolunteerPostDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunteer-management-server-eight.vercel.app/volunteers/${params.id}`
          ),
      },
      {
        path: "/updatePost/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteerPost></UpdateVolunteerPost>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunteer-management-server-eight.vercel.app/volunteers/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
