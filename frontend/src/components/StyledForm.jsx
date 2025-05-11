export default function StyledForm({
  children,
  formHeader = "",
  className = "",
  ...rest
}) {
  const baseStyles = "p-5 grid gap-5";

  return (
    <form className={`${baseStyles} ${className}`} {...rest}>
      <h1 className='text-5xl'>{formHeader}</h1>
      {children}
    </form>
  );
}
