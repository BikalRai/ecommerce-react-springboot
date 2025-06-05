import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { filterProducts } from "../filter/filterSlice";
import Filter from "../filter/Filter";

export default function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.filter.products);
  const status = useSelector((state) => state.filter.status);

  useEffect(() => {
    dispatch(filterProducts());
  }, [dispatch]);
  console.log(status);
  console.log(productList, "pstate");
  return (
    <div className='flex gap-5 p-5 lg:p-0'>
      <div className='filters w-80 lg:w-96'>
        <Filter />
      </div>
      <div className='products'>
        <div className='productList grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
          {/* {[...Array(10)].map((_, i) => (
        <div key={i} className='w-full sm:w-[48%] lg:w-[18%]'>
          <ProductCard />
        </div>
      ))} */}
          {productList?.map((product) => (
            <div key={product?.id}>
              <ProductCard product={product} />
            </div>
          ))}
          {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}
        </div>
      </div>
    </div>
  );
}
