import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import UserLogin from "../features/users/UserLogin";
import UserRegister from "../features/users/UserRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/userAuth/login", element: <UserLogin /> },
  { path: "/userAuth/register", element: <UserRegister /> },
  { path: "*", element: <div>Page not found</div> },
]);

export default function MyRouter() {
  return <RouterProvider router={router} />;
}
