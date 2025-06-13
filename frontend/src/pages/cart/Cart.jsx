import TableElement from "../../components/table/TableElement";
import CartItem from "./CartItem";
import CartOrderSummary from "./CartOrderSummary";
import Checkout from "./Checkout";

export default function Cart() {
  return (
    <div className='bg-light rounded p-5 flex'>
      {/* <table className='w-full'>
        <tr className='border-b'>
          <TableElement elementType='th' text='Product' />
          <TableElement elementType='th' text='Description' />
          <TableElement elementType='th' text='Unit Price' />
          <TableElement elementType='th' text='Quantity' />
          <TableElement elementType='th' text='Total Price' />
        </tr>
        <tr className="border-b">
          <TableElement/>
        </tr>
      </table> */}
      {/* <CartItem />
      <CartOrderSummary /> */}
      <Checkout />
    </div>
  );
}
