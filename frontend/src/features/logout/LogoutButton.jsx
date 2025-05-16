import { useDispatch } from "react-redux";
import StyledPrimaryButton from "../../components/StyledPrimaryButton";
import { useNavigate } from "react-router-dom";
import { logout } from "../users/authSlice";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/userAuth/login");
  };

  return <StyledPrimaryButton text='Logout' onClick={handleLogout} />;
}
