import { Stack, Typography } from "@mui/material";
import Button from "./Button";
import DiscreteSlider from "./Slider";
import React from "react";
import DualSlider from "./DualSlider";
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
  category,
  minSelectedPrice,
  maxSelectedPrice,
  value,
  handleChange,
}) {
  return (
    <>
      <Stack
        sx={{
          // width: { md: "23%" },
          padding: { md: "1rem .5rem" },
          height: "90vh",
          backgroundColor: "#DFCCFB",
          borderRadius: "10px",
        }}
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
          pt={2}
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
          {item.length > 0 && (
            <button
              className="buttonAll bg-black text-white font-bold text-sm rounded-lg p-2 m-1   align-middle text-center"
              onClick={() => {
                setFilteredItems(item);
              }}
            >
              All
            </button>
          )}
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
            category={category}
          />

          {/* <DualSlider
            minPrice={minPrice}
            maxPrice={maxPrice}
            minSelectedPrice={minSelectedPrice}
            maxSelectedPrice={maxSelectedPrice}
            filterPrices={filterPrices}
            category={category}
            value={value}
            handleChange={handleChange}
          /> */}
        </Stack>
      </Stack>
    </>
  );
}

export default SideBar;
