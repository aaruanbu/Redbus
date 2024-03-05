import React from "react";
import { Alert, Box, Button } from "@mui/material";

import Drops from "./logs";
import { MdLiveHelp } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { RiListCheck3 } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export const Bottom = () => {
  let hme = useNavigate();
  return (
    <>
      <Box
        display={{ xs: "block", sm: "none", md: "none", xl: "none" }}
        sx={{
          position: "sticky",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "1000",
        }}
      >
        <Box
          sx={{
            fontSize: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
            backgroundColor: "ThreeDFace",
          }}
        >
          <Box sx={{ cursor: "pointer" }} onClick={() => hme("/")}>
            <IoHomeSharp />
          </Box>
          <Box>
            <RiListCheck3 />
          </Box>
          <Box>
            <MdLiveHelp />
          </Box>
          <Box>
            {/* <MdAccountCircle /> */}
            <Drops />
          </Box>
        </Box>
      </Box>
    </>
  );
};
