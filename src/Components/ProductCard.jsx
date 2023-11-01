import { Stack, Typography } from "@mui/material";
// import React from "react";

function ProductCard({ img, title, desc, price }) {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          alignItems: "center",
          width: 200,
          height: 300,
          border: "2px solid black",
          borderRadius: "15px",
          justifyContent: "space-between",
          marginBottom: 0.3,
          padding: ".5rem",
          boxShadow: "5px 8px 0px #000000",
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            borderRadius: "10px",
            height: 130,
          }}
          className="object-contain"
        />
        <Stack
          spacing={1}
          direction={{ md: "column" }}
          sx={{ padding: ".5rem", width: "100%" }}
        >
          <Typography
            variant="h6"
            component={"div"}
            sx={{
              fontSize: "1rem",
              // wordBreak: "break-all",
              lineBreak: "loose",
              lineClamp: 2,

              // whiteSpace: "nowrap",
              overflow: "hidden",
              // textOverflow: "",
              // width: "180px",
            }}
          >
            <strong>{title}</strong>
          </Typography>
          <Typography
            variant="h6"
            component={"div"}
            sx={{
              //   minWidth: 200,
              //   minHeight: 50,
              wordBreak: "break-all",
              lineClamp: 2,

              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "180px",
              fontSize: "1rem",
              //   whiteSpace: "nowrap",
            }}
          >
            {desc}
          </Typography>
          <Typography variant="h5" component={"div"}>
            <strong>$ {price}</strong>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default ProductCard;
