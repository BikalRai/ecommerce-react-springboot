export default function TableElement({ elementType = "td", text }) {
  return (
    <>
      {elementType === "th" ? (
        <th className='pb-5'>{text}</th>
      ) : (
        <td className='pb-5'>{text}</td>
      )}
    </>
  );
}
