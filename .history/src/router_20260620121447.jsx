import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./MainLayout";


const router = createBrowserRouter([
  {
    element: <MainLayout>,
    path: '/'
  }
])

export default router