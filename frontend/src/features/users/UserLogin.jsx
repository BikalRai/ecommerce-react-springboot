import { Link } from "react-router-dom";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledPrimaryButton from "../../components/StyledPrimaryButton";

export default function UserLogin() {
  return (
    <div className='p-5 flex flex-col gap-40 w-full h-[100dvh'>
      <Link className='font-medium text-primary'>{`< Back to previous page`}</Link>
      <div className='flex justify-center'>
        <StyledForm
          className='max-w-[900px] shadow rounded-sm'
          formHeader='Login'
        >
          <p className='text-sm'>Make online shopping a breeze.</p>
          <StyledInput type='email' name='email' text='Email Address' />
          <StyledInput type='password' name='password' text='password' />
          <div className='flex items-center justify-between'>
            <StyledPrimaryButton text='Login' />
            <Link className='text-primary text-sm'>Forgot Password?</Link>
          </div>
        </StyledForm>
      </div>
    </div>
  );
}
