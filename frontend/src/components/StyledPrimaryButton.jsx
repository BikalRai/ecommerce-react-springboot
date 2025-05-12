export default function StyledPrimaryButton({ text = "button" }) {
  return (
    <button className='bg-primary text-light py-3 px-6 bg-primary-color rounded-sm cursor-pointer w-fit hover:bg-primary-hover transition'>
      {text}
    </button>
  );
}
