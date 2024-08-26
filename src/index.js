import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import LotLabel from "./components/LotLabel";
import KitLabel from "./components/KitLabel";
import DeviceLabel from "./components/DeviceLabel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lotLabel",
    element: <LotLabel />,
  },
  {
    path: "/kitLabel",
    element: <KitLabel />,
  },
  {
    path: "/deviceLabel",
    element: <DeviceLabel />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
