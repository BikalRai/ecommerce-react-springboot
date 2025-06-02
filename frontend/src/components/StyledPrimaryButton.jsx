export default function StyledPrimaryButton({
  text = "button",
  icon,
  ...rest
}) {
  return (
    <button
      className='bg-primary max-w-fit text-light py-3 px-6 bg-primary-color rounded-sm cursor-pointer hover:bg-primary-hover transition'
      {...rest}
    >
      {icon || text}
    </button>
  );
}
