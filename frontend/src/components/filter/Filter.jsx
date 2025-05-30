import SearchBar from '../SearchBar';
import PriceSlider from './PriceSlider';

export default function Filter() {
  return (
    <form action="">
      <PriceSlider />
      <div>
        <h1>Brands</h1>
        <SearchBar />
        <input type="checkbox" /> <span></span>
      </div>
    </form>
  );
}
