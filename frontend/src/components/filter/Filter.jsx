import SearchBar from "../SearchBar";
import CheckBox from "./CheckBox";
import PriceSlider from "./PriceSlider";

export default function Filter() {
  return (
    <form action='' className='grid gap-5'>
      <PriceSlider />
      <div className='grid gap-5'>
        <h1>Brands</h1>
        <SearchBar text='Enter brand name' />
        <div>
          <CheckBox brandName='brand one' />
          <CheckBox brandName='brand two' />
          <CheckBox brandName='brand three' />
          <CheckBox brandName='brand four' />
          <CheckBox brandName='brand five' />
        </div>
      </div>
    </form>
  );
}
