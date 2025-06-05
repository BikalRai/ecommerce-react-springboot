import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../features/filter/filterSlice";

export default function CheckBox({ priceRange }) {
  const dispatch = useDispatch();
  const selectedPriceRange = useSelector(
    (state) => state.filter.selectedPriceRange
  );

  console.log(selectedPriceRange, "selected");

  const checkSelectedPriceRange = selectedPriceRange.some(
    ([min, max]) =>
      min === priceRange[0] &&
      (max === priceRange[1] ||
        (max === "100000 above" && priceRange[1] === "100000 above"))
  );

  const handleChange = () => {
    const newRange = checkSelectedPriceRange
      ? selectedPriceRange.filter(
          (min, max) => min !== priceRange(0) || max !== priceRange[1]
        )
      : [...selectedPriceRange, priceRange];

    console.log(newRange, "new Range");
    dispatch(setPriceRange(priceRange));
  };

  const label = `${priceRange[0]} - ${
    priceRange[1] === "100000 above" ? "100000 above" : priceRange[1]
  }`;

  return (
    <div className='flex align-middle gap-2'>
      <input
        type='checkbox'
        value={priceRange}
        checked={selectedPriceRange}
        onChange={handleChange}
      />{" "}
      {/* <span>
        Rs {priceRange[0]} - Rs {priceRange[1]}
      </span> */}
      <span>{label}</span>
    </div>
  );
}
