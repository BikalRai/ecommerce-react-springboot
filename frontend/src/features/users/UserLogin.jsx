import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledPrimaryButton from "../../components/StyledPrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";

export default function UserLogin() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authStates = useSelector((state) => state.auth);
  console.log(authStates);

  const handleInputs = ({ target }) => {
    const { name, value } = target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      console.error("Email and password are required");
      //  You should also display an error message to the user in the UI
      return;
    }
    console.log("Dispatching loginUser with:", loginDetails); // Debugging
    dispatch(login(loginDetails));
    setLoginDetails({
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className='p-5 flex flex-col gap-40 w-full h-[100dvh'>
      <Link className='font-medium text-primary'>{`< Back to previous page`}</Link>
      <div className='flex justify-center'>
        <StyledForm
          className='max-w-[900px] shadow rounded-sm'
          formHeader='Login'
          onSubmit={handleLogin}
        >
          <p className='text-sm'>Make online shopping a breeze.</p>
          <StyledInput
            type='email'
            name='email'
            text='Email Address'
            handleInputs={handleInputs}
            value={loginDetails.email}
          />
          <StyledInput
            type='password'
            name='password'
            text='password'
            handleInputs={handleInputs}
            value={loginDetails.password}
          />
          <div className='flex items-center justify-between'>
            <StyledPrimaryButton text='Login' />
            <Link className='text-primary text-sm'>Forgot Password?</Link>
          </div>
        </StyledForm>
      </div>
    </div>
  );
}
