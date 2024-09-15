import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, styled, FormLabel, Input } from "@mui/material";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Input as BaseInput, inputClasses } from "@mui/base/Input";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { passengerinfo, updates } from "./Slices";

export const Passengerinf = (mins) => {
  let [parms] = useSearchParams();
  let dtss = parms.get("dates");
  const datess = new Date(dtss);

  const stat = useSelector((dat) => dat.datas.Ars);
  //console(mins);
  const [selectedOption, setSelectedOption] = useState("");
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");
  const [inp4, setInp4] = useState("");
  const [inp5, setInp5] = useState("");
  const [inp6, setInp6] = useState("");
  const [open, setOpen] = useState(false);
  const [erors, setErors] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  let gotohome = useNavigate();
  let backs = () => {
    dispatch(passengerinfo(false));
    // setPasseenger(false)
  };
  let chcks = ({ target: { name, value } }) => {
    if (name === "names") {
      setInp1(value);
    }
    if (name === "age") {
      setInp2(value);
    }
    if (name === "residence") {
      setInp3(value);
    }
    if (name === "states") {
      setInp4(value);
    }
    if (name === "emails") {
      setInp6(value);
    }
    if (name === "passwords") {
      setInp5(value);
    }
  };

  let rdio = (s) => {
    setSelectedOption(s.target.value);
  };
  const orgnlbus = stat.find((v, i) => v.busno === mins.bsnm);

  const handleClose = () => {
    const book = stat.map((val, idx) => {
      return val.busno === mins.bsnm
        ? {
            ...val,
            busses: val.busses.map((v, i) => {
              return mins.bsid === v.busid
                ? {
                    ...v,
                    showseats: false,
                    seats: v.seats.map((vl, i) => {
                      return vl.seatshow === true
                        ? { ...vl, seatbooking: true }
                        : vl;
                    }),
                  }
                : v;
            }),
          }
        : val;
    });
    // //console(book);
    dispatch(updates(book));
    dispatch(passengerinfo(false));
    setOpen(false);
    gotohome(
      `/booking?bsnm=${mins.bsnm}&&sho=${mins.bsid}&&gopoint=${orgnlbus.from}&&reachpoint=${orgnlbus.to}&&dates=${datess}`
    );
  };
 

  let proceedaa = () => {
    if (
      inp1 === "" ||
      inp2 === "" ||
      inp3 === "" ||
      inp4 === "" ||
      inp4 === "" ||
      inp5 === "" ||
      selectedOption === ""
    ) {
      setErors(true);
    } else {
      const objs = {
        name: inp1,
        gender: selectedOption,
        age: inp2,
        residence: inp3,
        city: inp4,
      };
      setOpen(true);
    }
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            position: "fixed",
            zIndex: "1000",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              /* right: 0; */
              left: {
                xs: "50%",
                sm: "50%",
                md: "75%",
                xl: "75%",
              },
              /* bottom: 0%; */
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                xl: "50%",
              },
              height: "100%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              dispaly: "flex",
              justifyContent: "space-between",
              padding: "3.5%",
              borderRadius: "5px",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px",
                borderBottom: "1px solid black",
              }}
            >
              <FaChevronRight onClick={backs} />
              <h2 style={{ marginLeft: "50px" }}>Passenger Details</h2>
            </Box>
            <Box sx={{ padding: "5px" }}>
              <span>
                <FaUserCircle style={{ color: "green" }} />{" "}
                <span style={{ fontWeight: "600" }}>Passenger Information</span>{" "}
              </span>
            </Box>
            <Box className="thumbs">
              <form>
                <Box sx={{ padding: "5px" }}>
                  <span key={"20"} style={{ fontSize: "20px" }}>
                    Passenger Seat No:{" "}
                    {mins.seatids.map((v, i) => {
                      return (
                        <span style={{ padding: "2px" }}>{v.seatid},</span>
                      );
                    })}
                  </span>
                </Box>
                <Box sx={{ padding: "5px" }}>
                  <h3 style={{ padding: "5px" }}>Name</h3>
                  <input
                    style={{
                      display: "block",
                      height: "30px",
                      padding: "0px 7px",
                    }}
                    type="text"
                    placeholder="Name"
                    onChange={chcks}
                    name="names"
                  />
                  {erors && inp1 === "" ? (
                    <p style={{ color: "red" }}>Please Enter The Name</p>
                  ) : (
                    ""
                  )}
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "space-around" }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    padding: "2px",
                  }}
                  key={"one"}
                >
                  <Box
                    sx={{
                      padding: "5px",
                    }}
                  >
                    <Box sx={{ padding: "5px" }}>
                      <h3>Gender</h3>
                    </Box>
                    <label style={{ padding: "5px" }}>
                      <input
                        type="radio"
                        name="male"
                        onChange={rdio}
                        checked={selectedOption === "male"}
                        value="male"
                      />
                      <span style={{ margin: "0px 7px" }}>Male</span>
                    </label>
                    <label style={{ padding: "5px" }}>
                      <input
                        checked={selectedOption === "female"}
                        onChange={rdio}
                        value="female"
                        type="radio"
                        name="female"
                      />
                      <span style={{ margin: "0px 7px" }}>Female</span>
                    </label>
                  </Box>
                  {erors && selectedOption === "" ? (
                    <p style={{ color: "red" }}>Please Select The Gender</p>
                  ) : (
                    ""
                  )}
                  <Box>
                    <Box>
                      <h4 style={{ padding: "8px" }}>Age</h4>
                    </Box>
                    <input
                      type="number"
                      style={{ height: "30px", padding: "0px 7px" }}
                      placeholder="Age"
                      name="age"
                      onChange={chcks}
                    />
                    {erors && inp2 === "" ? (
                      <p style={{ color: "red" }}>Please Enter The Age</p>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
                <Box sx={{ marginTop: "12%" }}>
                  <Box>
                    <h3>City of Resisdence*</h3>
                    <input
                      type="text"
                      value={inp3}
                      style={{
                        width: "80%",
                        height: "30px",
                        padding: "0px 7px",
                        border: "1.5px solid black",
                      }}
                      onChange={chcks}
                      name="residence"
                    />
                    {erors && inp3 === "" ? (
                      <p style={{ color: "red" }}>Please Enter The Residence</p>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box sx={{ marginTop: "10px" }}>
                    <h3>State of Residence</h3>
                    <input
                      type="text"
                      name="states"
                      style={{
                        width: "80%",
                        height: "30px",
                        padding: "0px 7px",
                      }}
                      onChange={chcks}
                    />
                    {erors && inp4 === "" ? (
                      <p style={{ color: "red" }}>
                        Please Enter The Your State
                      </p>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    sx={{
                      padding: "7px",
                      marginTop: "12%",
                      border: "1px solid #b1b1b9",
                      boxShadow: "0px 0px 5px",
                      borderRadius: "24px",
                    }}
                  >
                    <Box style={{ padding: "2%" }}>
                      <Box sx={{ borderBottom: "3px solid gray" }}>
                        <FaUserCircle style={{ color: "green" }} />
                        <span style={{ fontWeight: "600", margin: "0% 7%" }}>
                          Contact Details
                        </span>
                      </Box>
                    </Box>
                    <Box>
                      <p>Email ID</p>
                      <Box
                        sx={{
                          gap: 0,
                          marginTop: "1%",
                        }}
                      >
                        <>
                          <Input
                            sx={{ display: "block" }}
                            id="outlined-start-adornment"
                            type="email"
                            name="emails"
                            value={inp6}
                            onChange={chcks}
                            placeholder="Enter Your Email "
                          />
                          {erors && inp6 === "" ? (
                            <p style={{ color: "red" }}>Enter Your Email</p>
                          ) : (
                            ""
                          )}
                          {/* <Input
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            value={inp5}
                            onChange={chcks}
                            name="passwords"
                            placeholder="Enter Your Password "
                            endAdornment={
                              <InputAdornment>
                                <IconButton
                                  size="small"
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? (
                                    <FaRegEyeSlash />
                                  ) : (
                                    <MdOutlineRemoveRedEye />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          {erors && inp5 === "" ? (
                            <p style={{ color: "red" }}>Enter Your Email</p>
                          ) : (
                            ""
                          )} */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginTop: "5%",
                            }}
                          >
                            <Button
                              sx={{
                                width: "80%",
                                backgroundColor: "red",
                                textAlign: "center",
                                color: "black",
                                fontWeight: "700",
                              }}
                              autoFocus
                              onClick={proceedaa}
                              className="btnss"
                            >
                              PROCDDE TO PAY
                            </Button>
                          </Box>
                        </>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "10%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Dialog
                      fullScreen={fullScreen}
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="responsive-dialog-title"
                    >
                      <DialogTitle id="responsive-dialog-title">
                        {"Your Seats are success fully Booked"}
                      </DialogTitle>
                      <DialogContent>
                        <Box className="sa">
                          <Box className="sa-success">
                            <Box className="sa-success-tip"></Box>
                            <Box className="sa-success-long"></Box>
                            <Box className="sa-success-placeholder"></Box>
                            <Box className="sa-success-fix"></Box>
                          </Box>
                        </Box>
                      </DialogContent>

                      <DialogActions>
                        <Button
                          sx={{
                            backgroundColor: "red",
                            color: "rgba(0, 0, 0, 0.600)",
                            fontWeight: "600",
                          }}
                          autoFocus
                          onClick={handleClose}
                        >
                          OK
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>{" "}
        </Box>{" "}
      </Box>
    </>
  );
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const IconButton = styled(Button)(
  ({ theme }) => `
display: inline-flex;
align-items: center;
justify-content: center;
border: none;
background: inherit;
cursor: pointer;
color: ${theme.palette.mode === "dark" ? grey[300] : grey[700]};
`
);

const InputAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
