import { Alert, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import { Naves } from "./Nav";
import { Carousel } from "./Carousel";
import "./Style.scss";
import { MyCarousel } from "./carsl";
import { IoHomeSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDirectionsBusFilled } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { updates } from "./Slices";
import ReactDatePicker from "react-datepicker";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Drops from "./logs";
import { MdLiveHelp } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { RiListCheck3 } from "react-icons/ri";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
export const Mobile = () => {
  const [in1, setIn1] = useState("");
  const [in2, setIn2] = useState("");
  const [in3, setIn3] = useState(new Date());
  const [isRotated, setIsRotated] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isRandom_one, setIsRandom_one] = useState(false);
  const datas = useSelector((dat) => dat.datas.Ars);
  const [ers, setErs] = useState(false);
  const gobook = useNavigate();
  const notfoundbus = useNavigate();
  const dispatch = useDispatch();
  const [chg, setChg] = useState(false);

  let froms = ({ target: { name, value } }) => {
    const pattern = /^[a-zA-Z0-9]+$/;

    if (name === "nm1") {
      setIn1(value);
      setIsRandom(isRandomSequence(value));
    }

    if (name === "nm2") {
      setIn2(value);
      setIsRandom_one(isRandomSequence_one(value));
    }
  };

  const isRandomSequence = (value) => {
    const randomnessThreshold = 0.6;
    const uniqueCharacters = new Set(value.split(""));
    const uniquenessRatio = uniqueCharacters.size / value.length;
    return uniquenessRatio < randomnessThreshold;
  };
  const isRandomSequence_one = (value) => {
    const randomratio = 0.6;
    const uniqueCharacters = new Set(value.split(""));
    const uniqueletter = uniqueCharacters.size / value.length;
    return uniqueletter < randomratio;
  };

  let seted = () => {
    setChg(!chg);
    setIsRotated(!isRotated);
    setIn1(in2);
    setIn2(in1);
  };
  useEffect(() => {}, [chg]);
  let searcbus = () => {
    if (in1 === "" || in2 === "" || in3 === "") {
      setErs(true);
    } else if (in1 === in2) {
      alert("Dont Enter Same Place");
    } else if (isRandom || isRandom_one) {
      alert("Please Enter The valid Route");
    } else {
      let ars = datas?.map((val, i) => {
        return val.from === in1 && val.to === in2
          ? {
              ...val,
              date: in3,
              busses: val.busses.map((vls, ins) => {
                return { ...vls, date: in3, boarding: in1, droping: in2 };
              }),
            }
          : val;
      });
      let sss = datas?.map((v, i) => {
        return v.from !== in1 || v.to !== in2 ? false : true;
      });
      let ddd = sss?.some((v) => v);
      if (ddd === false) {
        notfoundbus(
          `/notfound?gopoint=${in1}&&reachpoint=${in2}&&dates=${in3}&&bsnm=${0}`
        );
      }
      if (ddd === true) {
        let sssss = datas?.find((v, i) =>
          v.from === in1 && v.to === in2 ? v : ""
        );
        gobook(
          `/booking?gopoint=${in1}&&reachpoint=${in2}&&bsnm=${sssss?.busno}&&dates=${in3}`
        );
      }
      dispatch(updates(ars));
    }
  };

  return (
    <>
      <Box className="Mainimg" maxHeight="auto" maxWidth="xs">
        <h5
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "25px",
            paddingTop: "7%",
            fontFamily: "sans-serif",
            fontWeight: "900",
          }}
        >
          India's No. 1 Online Bus Ticket Booking Site
        </h5>
        <Box
          display={{ xs: "block", sm: "block", md: "none", xl: "none" }}
          className="mobilebox"
        >
          <Box>
            <Box
              display={{ xs: "block", sm: "block", md: "none", xl: "none" }}
              className="rels"
            >
              <Box
                display={{ xs: "block", sm: "block", md: "none", xl: "none" }}
                className="inpgroup"
              >
                <Box
                  component="input"
                  type="text"
                  onChange={froms}
                  value={in1}
                  name="nm1"
                  className="inp1 firboxmbl"
                />
                <MdOutlineDirectionsBusFilled
                  style={{
                    position: "absolute",
                    bottom: "35%",
                    left: "1.5%",
                    fontSize: "20px",
                  }}
                />
                <Box component="label">FROM</Box>
              </Box>
            </Box>

            <Box className="inpgroup">
              <Box
                className="firboxmbl1 inp2"
                type="text"
                onChange={froms}
                value={in2}
                name="nm2"
                component="input"
              />
              <MdOutlineDirectionsBusFilled
                style={{
                  position: "absolute",
                  bottom: "60%",
                  left: "6%",
                  fontSize: "20px",
                }}
              />
              <Box
                component="label"
                sx={{ position: "absolute", bottom: "60%", left: "15%" }}
              >
                TO
              </Box>
            </Box>
          </Box>

          <Box
            display={{ xs: "block", sm: "block", md: "none", xl: "none" }}
            className="rels"
          >
            <Box
              display={{ xs: "block", sm: "block", md: "none", xl: "none" }}
              className="rels"
            >
              <Box
                display={{ xs: "block", sm: "block", md: "none", xl: "none" }}
                className="arows"
                onClick={seted}
              >
                <Box className="ars1">
                  <Box
                    display={{
                      xs: "block",
                      sm: "block",
                      md: "none",
                      xl: "none",
                    }}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0px",
                    }}
                  >
                    <Box
                      display={{
                        xs: "block",
                        sm: "block",
                        md: "none",
                        xl: "none",
                      }}
                    >
                      <RiArrowUpDownFill
                        style={{
                          fontSize: "21px",
                          color: "white",
                          transform: isRotated ? "rotate(180deg)" : "none",
                          transition: "transform 0.5s ease",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ borderTop: "1px solid rgb(143, 141, 141)", width: "91%" }}
              >
                <Box className="inpgroup">
                  <Box className="firboxmbl2">
                    <Box
                      component={ReactDatePicker}
                      width={"100px"}
                      placeholderText="Date"
                      minDate={new Date()}
                      className=" inp3"
                      onChange={(s) => {
                        setIn3(s);
                      }}
                      selected={in3}
                      name="nm3"
                    />
                    <Box component="label" className="labe3">
                      <DateRangeIcon sx={{ paddingTop: "7px" }} /> Date Of
                      Jurney
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "6%" }}
              display={{ xs: "block", sm: "block", md: "none", xl: "none" }}
            >
              <Button
                sx={{ color: "white", fontWeight: "600" }}
                className="btens"
                onClick={searcbus}
              >
                SEAECH BUSES
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
