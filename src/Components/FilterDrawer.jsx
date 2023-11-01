// import React from "react";
// import SideBar from "./SideBar";
// import { Stack } from "@mui/material";

// function FilterDrawer() {
//   return (
//     <>
//       <Stack sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}>
//         <SideBar />
//       </Stack>
//     </>
//   );
// }

// export default FilterDrawer;

import { FaBars } from "react-icons/fa6";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import { AiFillCloseCircle } from "react-icons/ai";
import { Stack } from "@mui/material";
import SideBar from "./SideBar";

export default function FilterDrawer({
  productCategories,
  filterCategory,
  setFilteredItems,
  item,
  minPrice,
  maxPrice,
  filterPrices,
  setCategory,
}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (
    anchor,
    productCategories,
    filterCategory,
    setFilteredItems,
    item,
    minPrice,
    maxPrice,
    filterPrices,
    setCategory
  ) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        sx={{
          display: { md: "none", sm: "flex", xs: "flex" },
          padding: "1rem",
        }}
      >
        <SideBar
          productCategories={productCategories}
          filterCategory={filterCategory}
          setFilteredItems={setFilteredItems}
          item={item}
          minPrice={minPrice}
          maxPrice={maxPrice}
          filterPrices={filterPrices}
          setCategory={setCategory}
        />
        {/* <SideBar /> */}
      </Stack>
    </Box>
  );
  //   console.log(productCategories);
  return (
    <Box sx={{ display: { md: "none", sm: "block", xs: "block" } }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            direction="row"
            onClick={toggleDrawer(anchor, true)}
            sx={{
              //   width: "1rem",
              //   height: "1rem",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              padding: ".5rem",
              fontSize: "1.5rem",
              margin: ".8rem",
              backgroundColor: "black",
              //   borderRadius: "50%",
            }}
          >
            <FaBars />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(
              anchor,
              productCategories,
              filterCategory,
              setFilteredItems,
              item,
              minPrice,
              maxPrice,
              filterPrices,
              setCategory
            )}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
