import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function DualSlider(
  minSelectedPrice,
  maxSelectedPrice,
  minPrice,
  maxPrice,
  filterPrices,
  category,
  value,
  handleChange
) {
  //   const [value, setValue] = React.useState([20, 37]);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        // getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
}
