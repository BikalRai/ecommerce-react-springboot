export default function StyledPrimaryButton({ text = "button", ...rest }) {
  return (
    <button
      className='bg-primary text-light py-3 px-6 bg-primary-color rounded-sm cursor-pointer hover:bg-primary-hover transition'
      {...rest}
    >
      {text}
    </button>
  );
}
