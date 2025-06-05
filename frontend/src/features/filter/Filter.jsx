import CheckBox from "../../components/CheckBox";
import PriceSlider from "../../components/PriceSlider";
import SearchBar from "../../components/SearchBar";

export default function Filter() {
  return (
    <div>
      <h1>Filter by price</h1>
      <PriceSlider />
      {/* <div className='grid gap-5'>
        <h1>Brands</h1>
        <SearchBar text='Enter brand name' />
        <div>
          <CheckBox priceRange={[0, 1000]} />
          <CheckBox priceRange={[1000, 10000]} />
          <CheckBox priceRange={[10000, 50000]} />
          <CheckBox priceRange={[50000, `${100000} above`]} />
        </div>
      </div> */}
    </div>
  );
}
