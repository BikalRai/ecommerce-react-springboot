import StyledPrimaryButton from "../../components/StyledPrimaryButton";

export default function CartOrderSummary() {
  return (
    <section>
      <h1 className='text-2xl font-medium'>Order Summary</h1>
      <div>
        <div>
          <img src='' alt='' />
          <div>
            <p>Order item name</p>
            <p>Price</p>
          </div>
          <div>
            <button>+</button>
            <button>-</button>
            <button>delete</button>
          </div>
        </div>
      </div>
      <div>
        <p>subtotal</p>
        <p>shipping fee</p>
      </div>
      <p>total</p>
      <StyledPrimaryButton text='Place Order' />
    </section>
  );
}
