import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Slider } from "@mui/material";
import { setPriceRange, resetPriceRange } from "../features/filter/filterSlice";

export default function PriceSlider() {
  const dispatch = useDispatch();
  const priceMin = useSelector((state) => state.filter.priceMin);
  const priceMax = useSelector((state) => state.filter.priceMax);
  const allProducts = useSelector((state) => state.filter.allProducts);

  // Filter valid prices and calculate min/max
  const validPrices = allProducts
    .map((p) => parseInt(p.price))
    .filter((price) => !isNaN(price) && price >= 0);

  console.log(
    "All product prices:",
    allProducts.map((p) => p.price)
  );
  console.log("Valid prices:", validPrices);

  const minPrice = validPrices.length
    ? Math.floor(Math.min(...validPrices))
    : 0;
  const maxPrice = validPrices.length
    ? Math.ceil(Math.max(...validPrices))
    : 100000;

  // Local state for slider
  const [range, setRange] = useState([minPrice, maxPrice]);

  // Sync with Redux and dispatch initial range
  useEffect(() => {
    if (allProducts.length) {
      const newMin = priceMin === 0 ? minPrice : parseInt(priceMin);
      const newMax =
        priceMax === Number.MAX_SAFE_INTEGER ? maxPrice : parseInt(priceMax);
      const newRange = [
        isNaN(newMin) ? minPrice : newMin,
        isNaN(newMax) ? maxPrice : newMax,
      ];
      setRange(newRange);
      // Dispatch initial range to sync Redux store
      dispatch(setPriceRange(newRange));
    }
  }, [allProducts, priceMin, priceMax, minPrice, maxPrice, dispatch]);

  // Handle slider change
  const handleChange = (event, newValue) => {
    const parsedRange = [parseInt(newValue[0]), parseInt(newValue[1])];
    setRange(parsedRange);
    dispatch(setPriceRange(parsedRange));
  };

  // Handle reset
  const handleReset = () => {
    dispatch(resetPriceRange());
    setRange([minPrice, maxPrice]);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant='body2'>Rs. {range[0]}</Typography>
        <Typography variant='body2'>Rs. {range[1]}</Typography>
      </Box>
      <Slider
        value={range}
        onChange={handleChange}
        min={minPrice}
        max={maxPrice}
        step={100}
        valueLabelDisplay='auto'
        sx={{ color: "#3b82f6" }}
      />
    </Box>
  );
}
