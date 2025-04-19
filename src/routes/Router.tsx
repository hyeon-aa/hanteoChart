import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/ErrorPage";
import { Chart } from "../pages/Chart/Chart";
import { Whook } from "../pages/Whook/Whook";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/chart" replace />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
      {
        path: "/whook",
        element: <Whook />,
      },
    ],
  },
]);

export default router;
