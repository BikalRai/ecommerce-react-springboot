import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Slider } from '@mui/material';

export default function PriceSlider() {
  const priceMin = useSelector((state) => state.filter.priceMin);
  const priceMax = useSelector((state) => state.filter.priceMax);

  const [val, setVal] = useState([priceMin, priceMax]);
  const handleChange = (event, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setVal([newValue[0], val[1]]);
    } else {
      setVal([val[0], newValue[1]]);
    }
  };

  console.log(val, 'val');
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={val}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        disableSwap
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setVal(priceMin)}
          sx={{ cursor: 'pointer' }}
        >
          {priceMin} min
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(priceMax)}
          sx={{ cursor: 'pointer' }}
        >
          {priceMax} max
        </Typography>
      </Box>
    </Box>
  );
}
