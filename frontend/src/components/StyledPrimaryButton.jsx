export default function StyledPrimaryButton({ text = "button" }) {
  return (
    <button className='bg-primary text-light py-3 px-6 bg-primary-color rounded-sm cursor-pointer w-fit'>
      {text}
    </button>
  );
}
