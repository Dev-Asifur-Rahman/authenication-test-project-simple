import { createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Root from "./components/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: "/",
            element:<Nav></Nav>
        }
      ]
    },
  ])
export default router;