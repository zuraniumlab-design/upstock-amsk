import { createBrowserRouter } from "react-router-dom";
import App from "./Stock";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      // {
      //   path: "about",
      //   element: <About />
      // }
    ]
  }
]);

export default router;
