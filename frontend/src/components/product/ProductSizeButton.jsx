export default function ProductSizeButton({ size = "Size" }) {
  return (
    <button className='border border-gray-300 flex align-middle justify-center w-10 h-10 p-2 cursor-pointer hover:border-primary focus:border-primary transition'>
      {size}
    </button>
  );
}
