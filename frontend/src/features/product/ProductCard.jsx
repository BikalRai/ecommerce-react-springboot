import StyledPrimaryButton from "../../components/StyledPrimaryButton";
import iphone16 from "../../assets/images/iphone16.jpg";

export default function ProductCard() {
  return (
    <div className='productCard bg-light px-7 py-6 overflow-hidden rounded grid gap-4 hover:-translate-y-2 transition cursor-pointer'>
      <div className='productCard--img'>
        <img src={iphone16} alt='' />
      </div>
      <div className='productCard--details grid gap-5'>
        <p className='productCard--details-desc'>
          Apple IPhone 16 pro - Store1
        </p>
        <p className='productCard--details-price text-primary text-xl'>
          Rs. 298999
        </p>
        <StyledPrimaryButton text='Add to Cart' />
      </div>
    </div>
  );
}
