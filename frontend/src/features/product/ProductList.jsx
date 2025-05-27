import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className='productList flex flex-wrap justify-start lg:justify-between gap-5'>
      {[...Array(10)].map((_, i) => (
        <div key={i} className='w-full sm:w-[48%] lg:w-[18%]'>
          <ProductCard />
        </div>
      ))}
      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}
    </div>
  );
}
