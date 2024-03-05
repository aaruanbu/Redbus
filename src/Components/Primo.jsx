import React from "react";
import { Box } from "@mui/material";
import img1 from "./Img/secimg1.svg";
import img2 from "./Img/secimg2.svg";
import img3 from "./Img/secimg3.svg";
import img4 from "./Img/secimg4.svg";
import img5 from "./Img/secimg5.svg";
// import './Accrodian.scss'

export const Primo = () => {
  let b = [
    {
      img: img3,
      one: "1 of 5 Buses qualify",
      two: "Primo’s strict safety qualification ensures a safer travel for you",
    },
    {
      img: img4,
      one: "We Preferred by 90%",
      two: "90% of travellers re-book Primo buses for its punctuality and comfort",
    },
    {
      img: img5,
      one: "9 Lac+ Monthly travellers",
      two: "In 2022,9 Lac+ people traveled with Primo every month",
    },
  ];
  return (
    <Box>
      <Box className="container">
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            sx={{
              width: {
                xs: "70%",
                sm: "75%",
                md: "50%",
                xl: "100%",
              },
            }}
            src={img1}
          />
        </Box>
        <Box key={"one"} className="row">
          {b.map((v, i) => {
            return (
              // <Box>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "33%",
                    md: "33%",
                    xl: "33%",
                  },
                  padding: "0 auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="col-4"
                // id={i}
                key={i}
                style={{ marginTop: "4%" }}
              >
                <Box className="row backcolor" style={{ padding: "0px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px",
                    }}
                    className=" imgcenter"
                  >
                    <Box>
                      <Box
                        component="img"
                        sx={{ padding: "0px" }}
                        src={v.img}
                        width="100%"
                      />
                    </Box>
                    <Box className="" sx={{ margin: "5px" }}>
                      <h5
                        style={{
                          fontWeight: "900",
                          fontSize: "23px",
                          marginBottom: "5px",
                        }}
                      >
                        {v.one}
                      </h5>
                      <h6
                        style={{ fontWeight: "700" }}
                        // style={{ paddingTop: "8px", paddingBottom: '24px' }}
                      >
                        {v.two}
                      </h6>
                    </Box>
                  </Box>
                </Box>
                {/* </Box> */}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
