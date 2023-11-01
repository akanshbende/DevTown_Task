// import React from 'react'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function DiscreteSlider({ minPrice, maxPrice, filterPrices }) {
  // console.log(minPrice);
  // console.log(maxPrice);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Slider
          aria-label="Temperature"
          defaultValue={500}
          valueLabelDisplay="auto"
          step={50}
          marks
          min={minPrice}
          max={maxPrice}
          onChange={(e) => filterPrices(e.target.value)} //set changed slider value
        />
      </Box>
    </>
  );
}

export default DiscreteSlider;
