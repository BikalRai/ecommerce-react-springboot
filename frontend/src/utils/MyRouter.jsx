import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import UserLogin from "../features/users/UserLogin";
import UserRegister from "../features/users/UserRegister";
import ProductDetail from "../features/product/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/userAuth/login", element: <UserLogin /> },
  { path: "/userAuth/register", element: <UserRegister /> },
  { path: "/products/productId", element: <ProductDetail /> },
  { path: "*", element: <div>Page not found</div> },
]);

export default function MyRouter() {
  return <RouterProvider router={router} />;
}
