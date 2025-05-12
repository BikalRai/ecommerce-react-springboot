import { Link } from "react-router-dom";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledPrimaryButton from "../../components/StyledPrimaryButton";
import StyledSecondaryButton from "../../components/StyledSecondaryButton";

export default function UserRegister() {
  return (
    <div className='p-5 flex flex-col gap-10 w-full h-[100dvh'>
      <Link className='font-medium text-primary'>{`< Back to previous page`}</Link>
      <div className='flex justify-center'>
        <StyledForm
          formHeader='Create an Account'
          className='shadow rounded-sm'
        >
          <p className='text-sm'>
            Connect. Sell. Succeed.{" "}
            <Link className='text-primary'>
              Register to create a business account
            </Link>
          </p>
          <StyledInput name='firstame' text='First Name' />
          <StyledInput name='lastame' text='Last Name' />
          <StyledInput name='email' text='Email Address' />
          <StyledInput type='password' name='password' text='Password' />
          <StyledInput
            type='password'
            name='cPassword'
            text='Confirm Password'
          />
          <StyledPrimaryButton text='Create an Account' />
          <div className=' flex justify-between items-center'>
            <hr className='w-40 bg-zinc-400 rounded-sm border-0 h-[1px]' />
            <p>or</p>
            <hr className='w-40 bg-zinc-400 rounded-sm border-0 h-[1px]' />
          </div>
          <StyledSecondaryButton text='Sign up with Google' />
          <hr className='bg-zinc-400 rounded-sm border-0 h-[1px]' />
          <div className='flex gap-1 text-sm'>
            <p className='font-medium'>Already have an account? </p>{" "}
            <Link className='text-primary'>Sign in</Link>
          </div>
        </StyledForm>
      </div>
    </div>
  );
}
