import { useSelector } from "react-redux";
import LogoutButton from "../features/logout/LogoutButton";
import Cart from "./cart/Cart";

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      {/* <h1>HOME</h1> */}
      {/* {user && <LogoutButton />} */}
      {/* <ProductList />
      <Filter />
      <Pagination /> */}
      <Cart />
    </>
  );
}
