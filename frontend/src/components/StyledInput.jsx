import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

export default function StyledInput({
  type = "text",
  name = "",
  text = "Add label Text",
}) {
  const [visibility, setVisibility] = useState(false);

  const handlePasswordVisibility = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <div className='grid gap-2'>
      <label htmlFor={name} className='text-sm'>
        {text}
      </label>
      <div className='border rounded-sm flex items-center pr-4 peer-focus:border-blue-700'>
        <input
          type={visibility ? "text" : type}
          id={name}
          name={name}
          className='py-1 px-4 w-full'
        />
        {type === "password" &&
          (visibility ? (
            <MdOutlineVisibilityOff
              className='cursor-pointer hover:opacity-80 text-lg'
              onClick={handlePasswordVisibility}
            />
          ) : (
            <MdOutlineVisibility
              className='cursor-pointer hover:opacity-80 text-lg'
              onClick={handlePasswordVisibility}
            />
          ))}
      </div>
    </div>
  );
}
