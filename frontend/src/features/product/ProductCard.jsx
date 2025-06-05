import StyledPrimaryButton from "../../components/StyledPrimaryButton";
import { useNavigate } from "react-router-dom";
// import iphone16 from "../../assets/images/iphone16.jpg";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/:${product.id}`);
  };
  console.log(product, "product");
  return (
    <div
      className='productCard bg-light px-7 py-6 overflow-hidden rounded grid gap-4 hover:-translate-y-2 transition cursor-pointer'
      onClick={handleProductClick}
    >
      <div className='productCard--img'>
        <img src={product.imageUrl} alt='' />
      </div>
      <div className='productCard--details grid gap-5'>
        <p className='productCard--details-name'>{product.name}</p>
        <p className='productCard--details-price text-primary text-xl'>
          Rs. {product.price}
        </p>
        <StyledPrimaryButton text='Add to Cart' />
      </div>
    </div>
  );
}
