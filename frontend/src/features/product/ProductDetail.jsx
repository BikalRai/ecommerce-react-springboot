import ProductColor from "../../components/product/ProductColor";
import ProductImage from "../../components/product/ProductImage";
import ProductSizeButton from "../../components/product/ProductSizeButton";
import StyledPrimaryButton from "../../components/StyledPrimaryButton";
import StyledSecondaryButton from "../../components/StyledSecondaryButton";

export default function ProductDetail() {
  return (
    <div className='grid gap-5 md:grid-cols-2 p-5 xl:p-0'>
      <div className='product__banner grid gap-5'>
        <ProductImage />
        <div className='grid grid-cols-5 gap-5'>
          <div className='border border-zinc-400 rounded p-2 cursor-pointer hover:border-primary transition'>
            <ProductImage />
          </div>
          <div className='border border-zinc-400 rounded p-2 cursor-pointer'>
            <ProductImage />
          </div>
          <div className='border border-zinc-400 rounded p-2 cursor-pointer'>
            <ProductImage />
          </div>
          <div className='border border-zinc-400 rounded p-2 cursor-pointer'>
            <ProductImage />
          </div>
          <div className='border border-zinc-400 rounded p-2 cursor-pointer'>
            <ProductImage />
          </div>
        </div>
      </div>
      <div className='product__details flex flex-col gap-5'>
        <div className='product__details--header'>
          <h1>Product Name</h1>
          <h1>Rs Product Price</h1>
        </div>
        <div className='product__details--color flex gap-5'>
          <ProductColor color='blue' />
          <ProductColor color='red' />
          <ProductColor color='yellow' />
        </div>
        <div className='product__details--size flex gap-5 align-middle'>
          <ProductSizeButton size='S' />
          <ProductSizeButton size='M' />
          <ProductSizeButton size='L' />
          <ProductSizeButton size='XL' />
        </div>
        <div className='product__details--desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          adipisci quam cumque harum rem temporibus quo corporis saepe expedita,
          voluptatibus dolores ab dolorum, qui voluptatem reiciendis animi neque
          quidem quos. Mollitia maiores, inventore vel fugiat error tempore
          accusantium repellat quo id, eum optio cumque ducimus, molestias ipsa
          natus libero. Veniam repudiandae itaque harum iusto, voluptatum
          repellat? Repellendus qui aperiam obcaecati voluptatum consequuntur
          ratione eaque odit inventore tempora a officia neque omnis voluptas
        </div>
        <div className='product__details--spec grid gap-5'>
          <h1>Specifitaions of "Product name goes here"</h1>
          <div className='product__details--spec-brand'>
            <h3 className='font-medium'>Brand</h3>
            <p className='font-bold'>Brand Name</p>
          </div>
          <div className='product__details--spec-sku'>
            <h3 className='font-medium'>SKU</h3>
            <p className='font-bold'>SKU number</p>
          </div>
          <div className='product__details--spec-seller'>
            <h3 className='font-medium'>Seller</h3>
            <p className='font-bold'>Seller name</p>
          </div>
        </div>
        <StyledPrimaryButton text='Add to cart' />
      </div>
    </div>
  );
}
