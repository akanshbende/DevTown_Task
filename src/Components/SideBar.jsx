import { Stack, Typography } from "@mui/material";
import Button from "./Button";
// import React from "react";

function SideBar({
  productCategories,
  filterCategory,
  setFilteredItems,
  item,
}) {
  return (
    <>
      <Stack sx={{ width: { md: "23%" }, padding: { md: "4rem 1rem" } }}>
        <Typography
          variant="h3"
          component={"div"}
          sx={{ textAlign: "center", marginBlock: "2rem" }}
        >
          <strong> Filters</strong>
        </Typography>

        <Typography variant="h5" component={"div"}>
          <strong>Categories</strong>
        </Typography>

        {/* Categories  */}
        <Stack
          direction={{ md: "row" }}
          sx={{ flexWrap: "wrap", marginBottom: { md: 4 } }}
        >
          {productCategories &&
            productCategories?.map((items, index) => {
              {
                // console.log(typeof items);
                // console.log(productCategories);
              }
              return (
                <button
                  key={index}
                  className="buttonAll bg-black text-white font-bold text-sm rounded-lg p-2 m-1   align-middle text-center"
                  onClick={() => filterCategory(items)}
                >
                  {items}
                </button>
              );
            })}
          {/* <Button title={"All"} setItem={setItem} item={item} /> */}
          <button
            className="buttonAll bg-black text-white font-bold text-sm rounded-lg p-2 m-1   align-middle text-center"
            onClick={() => {
              setFilteredItems(item);
              {
                console.log("Allll");
              }
            }}
          >
            All
          </button>
        </Stack>

        {/* Prices  */}
        <Typography variant="h5" component={"div"}>
          <strong>Price</strong>
        </Typography>
        <Stack direction={{ md: "column" }}></Stack>
      </Stack>
    </>
  );
}

export default SideBar;
