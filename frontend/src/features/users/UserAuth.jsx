import { Outlet } from "react-router-dom";

export default function UserAuth() {
  return (
    <div className='flex'>
      <Outlet />
    </div>
  );
}
