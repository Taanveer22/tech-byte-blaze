import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
]);
export default MyRouter;
