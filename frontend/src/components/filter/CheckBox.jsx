export default function CheckBox({ brandName = "brandName" }) {
  return (
    <div className='flex align-middle gap-2'>
      <input type='checkbox' value={brandName.toLowerCase()} />{" "}
      <span>{brandName}</span>
    </div>
  );
}
