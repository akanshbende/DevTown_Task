// import React from 'react'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function DiscreteSlider({ minPrice, maxPrice, filterPrices, category }) {
  // console.log(minPrice);
  // console.log(maxPrice);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Slider
          valueLabelDisplay="on"
          aria-label="Temperature"
          defaultValue={500}
          step={150}
          marks
          min={0}
          max={maxPrice}
          onChange={(e) => filterPrices(e.target.value, category)} //set changed slider value
        />
      </Box>
    </>
  );
}

export default DiscreteSlider;
