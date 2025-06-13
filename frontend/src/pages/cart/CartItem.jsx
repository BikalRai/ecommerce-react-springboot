export default function CartItem() {
  return (
    <div className='grow p-5'>
      <section className='flex bg-red-500'>
        <section className='grow'>prroduct Image</section>
        <section className='grow-2'>
          <p>Product name</p>
          <p>Quantity</p>
        </section>
        <section className='grow'>
          <p>price</p>
          <p>remove button</p>
        </section>
      </section>
      <section>total price</section>
    </div>
  );
}
