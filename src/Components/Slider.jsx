// import React from 'react'
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function DiscreteSlider({ minPrice, maxPrice, filterPrices, category }) {
  // console.log(minPrice);
  // console.log(maxPrice);
  return (
    <>
      <Stack spacing={1} direction={"row"} pt={2} sx={{ width: "100%" }}>
        <h3>
          <strong>Min</strong>
        </h3>
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
        <h3>
          <strong>Max</strong>
        </h3>
      </Stack>
    </>
  );
}

export default DiscreteSlider;
