import { Box, Stack, Typography } from "@mui/material";
import "./App.css";
import SideBar from "./Components/SideBar";
import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
import PaginationSquared from "./Pagination";

// import { Typography } from "antd";

function App() {
  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = (currentPage - 1) * recordsPerPage;

  const paginatedItems = filteredItems.slice(firstIndex, lastIndex);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      // console.log(data);
      setItem(data.products);
      setFilteredItems(data.products);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const productCategories = [...new Set(item?.map((val) => val.category))];
  console.log(productCategories);

  const filterCategory = (cat) => {
    {
      console.log("catttt :", cat);
    }
    const newItems = item?.filter((newval) => newval.category === cat);
    console.log("newItems :", newItems);
    setFilteredItems(newItems);
    setCurrentPage(1);
  };
  console.log("item : ", item);
  console.log("filterItems : ", filteredItems);

  return (
    <>
      <Stack direction={{ md: "row" }}>
        <SideBar
          productCategories={productCategories}
          filterCategory={filterCategory}
          setFilteredItems={setFilteredItems}
          item={item}
        />
        <Stack direction={{ md: "column" }} sx={{ alignItems: "center" }}>
          <Box
            // direction={{ md: "row" }}

            sx={{
              display: "flex",
              width: { md: "80%" },
              // backgroundColor: "#16171d",
              padding: { md: "2rem" },
              flexWrap: "wrap",
              alignItems: "center",
              gap: 4,
              height: { md: "90vh" },
              overflow: "hidden",
            }}
          >
            {Array.isArray(paginatedItems) ? (
              paginatedItems?.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    img={product?.images[0]}
                    title={product?.title}
                    desc={product?.description}
                    price={product?.price}
                  />
                );
              })
            ) : (
              <Typography variant="h5" component={"div"}>
                <strong>No data available</strong>
              </Typography>
            )}
          </Box>
          <PaginationSquared
            handlePageChange={handlePageChange}
            filteredItems={filteredItems}
            recordsPerPage={recordsPerPage}
            currentPage={currentPage}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default App;
