import { Stack, Typography } from "@mui/material";
import Button from "./Button";
import DiscreteSlider from "./Slider";
import React from "react";
// import React from "react";

function SideBar({
  productCategories,
  filterCategory,
  setFilteredItems,
  item,
  minPrice,
  maxPrice,
  filterPrices,
  setCategory,
}) {
  return (
    <>
      <Stack
        sx={
          {
            // width: { md: "23%" },
            // padding: { md: "4rem 1rem" },
          }
        }
      >
        <Typography
          variant="h3"
          component={"div"}
          sx={{ textAlign: "center", marginBlock: "2rem" }}
        >
          <strong> Filters</strong>
        </Typography>
        {/* {console.log(productCategories)} */}
        <Typography variant="h5" component={"div"}>
          <strong>Categories</strong>
        </Typography>

        {/* Categories  */}
        <Stack
          direction={{ md: "row" }}
          sx={{ flexWrap: "wrap", marginBottom: { md: 4 } }}
        >
          {/* {console.log(productCategories)} */}
          {Array.isArray(productCategories) ? (
            productCategories.map((items, index) => {
              return (
                <button
                  key={index}
                  className="buttonAll bg-black text-white font-bold text-sm rounded-lg p-2 m-1   align-middle text-center"
                  onClick={() => {
                    filterCategory(items);
                    setCategory(items);
                  }}
                >
                  {/* {console.log(items)} */}
                  {items}
                </button>
              );
            })
          ) : (
            <Typography variant="h6" component={"div"}>
              <strong>No data available of Categories</strong>
            </Typography>
          )}
          {/* {productCategories &&
            productCategories.map((items, index) => {
              {
                // console.log(typeof items);
                // console.log(productCategories);
              }
              return (
                <button
                  key={index}
                  className="buttonAll bg-black text-white font-bold text-sm rounded-lg p-2 m-1   align-middle text-center"
                  onClick={() => {
                    filterCategory(items);
                    setCategory(items);
                  }}
                >
                  {items}
                </button>
              );
            })} */}
          {/* <Button title={"All"} setItem={setItem} item={item} /> */}
          <button
            className="buttonAll bg-black text-white font-bold text-sm rounded-lg p-2 m-1   align-middle text-center"
            onClick={() => {
              setFilteredItems(item);
            }}
          >
            All
          </button>
        </Stack>

        {/* Prices  */}
        <Typography variant="h5" component={"div"}>
          <strong>Price</strong>
        </Typography>
        <Stack direction={{ md: "column" }}>
          <DiscreteSlider
            minPrice={minPrice}
            maxPrice={maxPrice}
            filterPrices={filterPrices}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default SideBar;
