import { Route, Routes } from "react-router-dom";

import UserAuth from "./features/users/UserAuth";
import UserLogin from "./features/users/UserLogin";
import UserRegister from "./features/users/UserRegister";

export default function App() {
  return (
    <Routes>
      <Route path='userAuth' element={<UserAuth />}>
        <Route index element={<UserLogin />} />
        <Route path='login' element={<UserLogin />} />
        <Route path='register' element={<UserRegister />} />
      </Route>
    </Routes>
  );
}
