import { Box, Container } from "@mui/material";
import React from "react";
import { RiCustomerServiceLine } from "react-icons/ri";
import { PiUserCircle } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Drops from "./logs";
import { BsHeadset } from "react-icons/bs";
import "./Style.scss";
import { useNavigate } from "react-router-dom";
export const Naves = () => {
  const home = useNavigate();
  let ar = [
    {
      im1: "https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg",
      im2: "https://st.redbus.in/web/images/layout/rb_vertical.svg",
      im3: "https://st.redbus.in/web/images/layout/ryde_vertical.svg",
      im4: "https://st.redbus.in/web/images/layout/rail_vertical.svg",
      icn1: <RiCustomerServiceLine />,
      icn2: <PiUserCircle />,
    },
  ];
  let go = () => {
    home("/");
  };
  let as = { id: 1 };
  return (
    <Box
      key={-1}
      sx={{
        position: "sticky",
        left: "0",
        top: "0",
        right: "0",
        zIndex: "999",
      }}
      // sx={{ position: "sticky", top: "0", left: "0", right: "0" }}
    >
      {ar.map((v, i) => {
        return (
          <>
            <Box
              key={i}
              // maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                backgroundColor: "white",
                // border: "1px solid black",
                boxShadow: "0px 0px 2px",
                padding: "10px",
              }}
            >
              <Box
                display={{
                  xs: "none",
                  md: "block",
                  sm: "block",
                  xl: "block",
                }}
                width={1 / 3}
              >
                <Box
                  onClick={go}
                  sx={{ borderRight: "1px solid black", margin: "1% 18%" }}
                >
                  <img src={v.im1} style={{ cursor: "pointer" }} />
                </Box>
              </Box>
              <Box
                width={4 / 4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ margin: "2px 10px" }}>
                    <Box className="imgs">
                      <img src={v.im2} />
                      <h6>Bus Tickets</h6>
                    </Box>
                  </span>
                  <span style={{ margin: "2px 10px" }}>
                    <Box className="imgs">
                      <img src={v.im3} />
                      <h6>Cab Rental</h6>
                    </Box>
                  </span>
                  <span style={{ margin: "2px 10px" }} key={3}>
                    <Box className="imgs">
                      <img src={v.im4} />
                      <h6>Train Tickets</h6>
                    </Box>
                  </span>
                </Box>
              </Box>
              <Box
                display={{
                  xs: "none",
                  sm: "block",
                  md: "block",
                  xl: "block",
                }}
              >
                <Box
                  display={{ xs: "none" }}
                  width={1 / 4}
                  sx={{ display: "flex" }}
                >
                  <>
                    <span className="icns">
                      {" "}
                      <BsHeadset
                        style={{ fontSize: "25px", margin: "3px 5px" }}
                      />
                      Help{" "}
                    </span>{" "}
                  </>
                  <>
                    {" "}
                    <span className="icns">
                      {" "}
                      <Drops />
                    </span>
                  </>
                </Box>
                <Box
                  sx={{ fontSize: "25px" }}
                  display={{
                    xs: "block",
                    sm: "none",
                    md: "none",
                    xl: "none",
                  }}
                >
                  <FaBars />
                </Box>
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
};
