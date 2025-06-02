export default function ProductColor({ color }) {
  return (
    <div className='p-2 border border-gray-300 rounded cursor-pointer'>
      <div className={`w-5 h-5`} style={{ backgroundColor: color }}></div>
    </div>
  );
}
