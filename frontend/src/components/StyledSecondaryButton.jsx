import googleIcon from "../assets/images/googleIcon.png";

export default function StyledSecondaryButton({ text = "Secondary Button" }) {
  return (
    <button className='bg-transparent border rounded-sm text-dark font-medium py-3 px-6 cursor-pointer hover:bg-light transition-all flex justify-center items-center gap-5'>
      <div className='w-6 h-6'>
        <img src={googleIcon} className='h-auto w-full' />
      </div>
      <p>{text}</p>
    </button>
  );
}
