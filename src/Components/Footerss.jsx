import React from "react";
import { Box } from "@mui/material";
import Homeimg from "./Img/redbus-logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
export const Bottom_two = () => {
  return (
    <>
      <Box
        sx={{
          padding: "4% 10%",
          backgroundColor: " #f7f7f7",
          fontFamily: " Montserrat",
        }}
        className="rfoot_section"
        // sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            borderBottom: "0.5px solid  gray",
            paddingBottom: "35px",
            justifyContent: "space-between",
            borderWidth: "70%",
          }}
        >
          <Box
            width={"23%"}
            display={{ xs: "none", sm: "block", md: "block", xl: "block" }}
          >
            <Box sx={{ display: "inline" }} component="img" src={Homeimg} />
            <p style={{}}>
              redBus is the world's largest online bus ticket booking service
              trusted by over 25 million happy customers globally. redBus offers
              bus ticket booking through its website, iOS and Android mobile
              apps for all major routes.
            </p>
          </Box>
          <Box sx={{ lineHeight: "25px" }} className="rfoot_one">
            <ul>
              <h2>About redbus</h2>
              <li>About us</li>
              <li>Investor Relation</li>
              <li>Contact us</li>
              <li>Mobile Verson</li>
              <li>Redbus on mobile</li>
              <li>Sitemap</li>
              <li>Offers</li>
              <li>Careers</li>
              <li>Values</li>
            </ul>
          </Box>
          <Box sx={{ lineHeight: "25px" }}>
            <ul>
              <h2>Info</h2>
              <li>T&C</li>
              <li>Privacy policy</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Bus operator registration</li>
              <li>Agent registration</li>
              <li>Insurance partner</li>
              <li>User agreement</li>
            </ul>
          </Box>
          <Box sx={{ lineHeight: "25px" }}>
            <ul>
              <h2>Global Sites</h2>
              <li>India</li>
              <li>Singapore</li>
              <li>Malaysia</li>
              <li>Indonesia</li>
              <li>Peru</li>
              <li>Colombia</li>
            </ul>
          </Box>
          <Box sx={{ lineHeight: "25px" }}>
            <ul>
              <h2>Our Partner</h2>
              <li>Goibibo Bus</li>
              <li>Goibibo Hotels</li>
              <li>Makemytrip Hotels</li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "19px",
            }}
          >
            <p> © Created By Aaru Anbu All rights reserved</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "19px",
              }}
            >
              <Box padding={" 0 10px"} sx={{ cursor: "pointer" }}>
                <FaFacebookF fontSize="20px" />
              </Box>
              <Box padding={" 0 10px"} sx={{ cursor: "pointer" }}>
                <FaLinkedinIn fontSize="20px" />
              </Box>
              <Box padding={" 0 10px"} sx={{ cursor: "pointer" }}>
                <TwitterIcon />
              </Box>
              <Box padding={" 0 10px"} sx={{ cursor: "pointer" }}>
                <RiInstagramFill fontSize="24px" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
