import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function PaginationSquared({
  filteredItems,
  recordsPerPage,
  currentPage,
  handlePageChange,
}) {
  return (
    <>
      <Stack spacing={2} sx={{ margin: "1rem" }}>
        <Pagination
          count={Math.ceil(filteredItems.length / recordsPerPage)}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
          //   color="dark"
        />
      </Stack>
    </>
  );
}

export default PaginationSquared;
