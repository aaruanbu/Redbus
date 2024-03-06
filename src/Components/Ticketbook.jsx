import { Box, Button, FormLabel, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Naves } from "./Nav";
import { TbArrowsLeftRight } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineSos } from "react-icons/md";
import { FaBottleWater } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiArrowSortedDown, TiStar } from "react-icons/ti";
import { FaTag } from "react-icons/fa6";
import ReactDatePicker from "react-datepicker";
import FormGroup from "@mui/material/FormGroup";
import { booktrue, updates, passengerinfo } from "./Slices";
import { useDispatch, useSelector } from "react-redux";
import { Passengerinf } from "./Passengerinfo";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Business } from "@mui/icons-material";
import { RiListCheck3 } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { RxSun } from "react-icons/rx";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

import { PiPlugCharging } from "react-icons/pi";
import SosIcon from "@mui/icons-material/Sos";
import { BiBlanket } from "react-icons/bi";
import { TbLamp2 } from "react-icons/tb";
import Drops from "./logs";
import FormControlLabel from "@mui/material/FormControlLabel";
import { PiSunHorizon } from "react-icons/pi";
import { BsSunset } from "react-icons/bs";
import { BsSunrise } from "react-icons/bs";
export const Seatbooks = () => {
  const orgnl = useSelector((dus) => dus.datas.Ars);
  const tcbokng = useSelector((dus) => dus.datas.ticketbooking);
  const passenger = useSelector((da) => da.datas.passengers);
  const gobook = useNavigate();
  const dispatch = useDispatch();
  const [dummy, setDummy] = useState([]);
  const [minmem, setMinmem] = useState([]);
  const [bokng, setBokng] = useState(false);
  const [boking, setBoking] = useState(true);
  const [ss, setSs] = useState();
  const [amtes, setAmtes] = useState();
  const [totals, setTotals] = useState();
  const [track, setTrack] = useState(false);
  const [not_found, setNot_found] = useState(true);
  const [tic, setTic] = useState(false);
  let [parms] = useSearchParams();
  let stid = Number(parms.get("stid"));
  let bsid = Number(parms.get("bsid"));
  let busnm = Number(parms.get("busnm"));
  let dtss = parms.get("dates");
  const [day, setDaye] = useState();
  const [gopnt, setGopnt] = useState();
  const [drpnt, setDrpnt] = useState();
  const [monthstr, setMonthstr] = useState();
  const [monthAbbreviation, setMontAbbr] = useState();
  const [year, setYear] = useState();
  const [month, setMont] = useState();
  const [waterbottle, setWaterbottle] = useState(false);
  const [Blankets, setBlankets] = useState(false);
  const [Emergency, setEmergency] = useState(false);
  const [Trackbus, setTrackbus] = useState(false);
  const [Charges, setCharges] = useState(false);
  const [formattedDate, setFormatted] = useState();
  const [dt, setDt] = useState(dtss);
  const orgnlbusses = orgnl?.find((v, i) => v.busno === busnm);
  const bussess = orgnlbusses.busses;
  let pricess = bussess?.map((v) => {
    return v.pricing;
  });
  let sortinged = pricess?.sort((b, a) => a - b);
  let sorting = sortinged?.slice(9);
  let ssks = bussess?.map((v) => {
    return v.traveltime;
  });
  let ssssss = ssks?.filter((a) => {
    return a;
  });
  let ones = ssssss?.sort();
  let sortings = ones[0];
  let bustimess = bussess?.map((v) => {
    return v.bustime;
  });
  let bustimessearly = bussess?.map((v) => {
    return v.bustime;
  });
  let bustim = bustimess?.sort();
  let bustimesss = bustimessearly?.sort();
  let bustlast = bustim[9];
  let bustearly = bustimesss[0];
  useEffect(() => {
    if (typeof dt === "string") {
      const dateComponents = dt?.split(" ");
      setDaye(parseInt(dateComponents[2]));
      setMonthstr(dateComponents[1]);
      setMontAbbr(dateComponents[1]);
      setYear(parseInt(dateComponents[3]));
      const monthMap = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
      };
      setMont(monthMap[monthAbbreviation]);
      setFormatted(new Date(year, month, day));
    }

    const orgnlbus = orgnl.find((v, i) => v.busno === busnm);
    setGopnt(orgnlbus.from);
    setDrpnt(orgnlbus.to);
    let ststr = orgnlbus?.busses?.filter((vlss, idss) => {
      return vlss.busid === bsid
        ? {
            ...vlss,
            seats: vlss.seats?.filter((vl, idx) => {
              return vl.seatshow === true ? vl : "";
            }),
          }
        : "";
    });
    setDummy(ststr);

    srss;
    orgnlbus?.busses?.filter((vlss, idss) => {
      return vlss.busid === bsid ? setSs(vlss.pricing) : "";
    });

    let c = orgnlbus?.busses?.find((v, i) => {
      return v.busid === bsid
        ? v.seats.filter((vl, i) => {
            return vl.seatshow === true;
          })
        : "";
    });

    let d = c?.seats?.filter((v, i) => {
      return v.seatshow === true && v.seatbooking === false;
    });
    let Amount = d?.length;
    let ttlamt = Amount * ss;
    setTotals(ttlamt);
    setMinmem(d);
    let deded = orgnl.map((vals, ids) => {
      return busnm === vals.busno
        ? {
            ...vals,
            busses: vals.busses.map((valuess, indexx) => {
              return valuess.busid === bsid
                ? console.log(valuess.boarding)
                : "";
            }),
          }
        : "";
    });
  }, [orgnl, ss, dt]);
  let srss = () => {};
  if (minmem?.length < 1) {
    gobook(
      `/booking?bsnm=${busnm}&sho=${bsid}gopoint=${gopnt}&&reachpoint=${drpnt}&&dates=${formattedDate}`
    );
  }
  let hdetickts = (ide) => {
    let savs = orgnl.map((vls, i) => {
      return vls.busno === busnm
        ? {
            ...vls,
            busses: vls.busses.map((bs, ix) => {
              return ide === bs.busid
                ? { ...bs, showseats: !bs.showseats }
                : bs;
            }),
          }
        : vls;
    });
    dispatch(updates(savs));
  };
  let shotickts = (ide) => {
    let kks = orgnl.map((vl, i) => {
      return vl.busno === busnm
        ? {
            ...vl,
            busses: vl.busses.map((bs, ix) => {
              return ide === bs.busid
                ? { ...bs, showseats: !bs.showseats }
                : bs;
            }),
          }
        : vl;
    });
    dispatch(updates(kks));
  };
  let bookings = (id, v) => {
    if (minmem?.length > 5) {
      alert("minimum seat selected");
      let seatset = orgnl.map((vls, i) => {
        return vls.busno === busnm
          ? {
              ...vls,
              busses: vls.busses.map((seatval, ix) => {
                return id === seatval.busid
                  ? {
                      ...seatval,
                      seats: seatval.seats.map((va, idss) => {
                        return v === va.seatid
                          ? { ...va, seatshow: false }
                          : va;
                      }),
                    }
                  : seatval;
              }),
            }
          : vls;
      });
      dispatch(updates(seatset));
    } else {
      let seatsset = orgnl.map((vls, i) => {
        return vls.busno === busnm
          ? {
              ...vls,
              busses: vls.busses.map((seatval, ix) => {
                return id === seatval.busid
                  ? {
                      ...seatval,
                      seats: seatval.seats.map((va, idss) => {
                        return v === va.seatid
                          ? { ...va, seatshow: !va.seatshow }
                          : va;
                      }),
                    }
                  : seatval;
              }),
            }
          : vls;
      });
      dispatch(updates(seatsset));
    }
  };
  const ticketbooking = () => {
    setBoking(false);
  };
  let chec = (s) => {
    if (s.target.value === "Boarding") {
      setTic(true);
    }
  };
  let proceed = () => {
    dispatch(passengerinfo(true));
  };
  let incs = <BsSunset />;
  let rised_one = <BsSunrise />;
  let rised_two = <RxSun />;
  let inc = <PiSunHorizon />;
  return (
    <Box>
      <Box className="secnavs">
        <h3 style={{ display: "inline-block", marginLeft: "2%" }}>{gopnt}</h3>
        <FaArrowRightLong style={{ marginLeft: "2%" }} />
        <h3 style={{ display: "inline-block", marginLeft: "2%" }}>{drpnt}</h3>
        <h3 style={{ display: "inline-block", marginLeft: "2%" }}>
          {day} {monthstr}
          <h6>{year}</h6>
        </h3>
      </Box>
      <Box width={"100%"} height={"100%"} sx={{ display: "flex" }}>
        <Box
          display={{ xs: "none", md: "block", sm: "block", xl: "block" }}
          className="sidebox"
        >
          {track ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                borderTop: "1px solid rgba(192, 192, 192, 9.660)",
                borderBottom: "1px solid rgba(192, 192, 192, 9.660)",
                margin: "10px 5px",
                padding: "10px 0px",
              }}
            >
              <FaMapLocationDot color={"rgba(240, 88, 88, 1.999)"} />
              <h4
                style={{
                  color: "rgba(240, 88, 88, 0.644)",
                  textAlign: "center",
                }}
              >
                Live Tracking
              </h4>
              <BiCheck color={"rgba(240, 88, 88, 0.644)"} size={"22px"} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                borderTop: "1px solid rgba(192, 192, 192, 0.960)",
                borderBottom: "1px solid rgba(192, 192, 192, 9.660)",
                margin: "10px 5px",
                padding: "10px 0px",
              }}
            >
              <FaMapLocationDot />
              <h4 style={{}}>Live Tracking</h4>
              <BiCheck size={"22px"} />
            </Box>
          )}
          <Box>
            <Box sx={{ fontWeight: "700", textAlign: "center" }} Component="h3">
              DEPATURE TIME
            </Box>
            <Box>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                        // checked={checked}
                        // onChange={read}
                        label="12 pm to 6 pm"
                        // onClick={read}
                        disabled={not_found === true ? true : false}
                      />
                    }
                    // placeholder={}
                    label={
                      <span>
                        {incs}
                        {"before 6 am"}
                      </span>
                    }
                  />
                </FormGroup>
              </div>
            </Box>
            <Box>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                        // checked={checked}
                        // onChange={read}
                        label="Before 6 am"
                        // onClick={read}
                        disabled={not_found === true ? true : false}
                      />
                    }
                    // placeholder={}
                    label={
                      <span>
                        {incs}
                        {"6am to 12pm"}
                      </span>
                    }
                  />
                </FormGroup>
              </div>
            </Box>
            <Box>
              <div>
                <FormGroup>
                  {/* {<PiSunHorizonThin />} */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                        // checked={checked_two}
                        // onChange={reads}
                        label="12 pm to 6 pm"
                        // onClick={reads}
                        disabled={not_found === true ? true : false}
                      />
                    }
                    label={
                      <span>
                        {inc}
                        {"12 pm to 6 pm"}
                      </span>
                    }
                  />
                </FormGroup>
              </div>
            </Box>
            <Box>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                        // checked={checked_two}
                        // onChange={reads}
                        label="12 pm to 6 pm"
                        // onClick={reads}
                        disabled={not_found === true ? true : false}
                      />
                    }
                    label={
                      <span>
                        {inc}
                        {"After 6 pm"}
                      </span>
                    }
                  />
                </FormGroup>
              </div>
            </Box>
          </Box>
          <Box>
            <Box>
              <h3 style={{ textAlign: "center" }}>Arrival Time</h3>
              <Box>
                <div>
                  <FormGroup>
                    {/* {<PiSunHorizonThin />} */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                          // checked={}
                          // onChange={raise}
                          label="12 pm to 6 pm"
                          // onClick={raise}
                          disabled={not_found === true ? true : false}
                        />
                      }
                      label={
                        <span>
                          {rised_one}
                          {"Before 6 am"}
                        </span>
                      }
                    />
                  </FormGroup>
                </div>
              </Box>
              <Box>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                          // checked={}
                          // onChange={raise}
                          label="12 pm to 6 pm"
                          // onClick={raise}
                          disabled={not_found === true ? true : false}
                        />
                      }
                      label={
                        <span>
                          {rised_one}
                          {" 6 am to 12 pm"}
                        </span>
                      }
                    />
                  </FormGroup>
                </div>
              </Box>
              <Box>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                          // checked={}
                          // onChange={raise}
                          label="12 pm to 6 pm"
                          // onClick={raise}
                          disabled={not_found === true ? true : false}
                        />
                      }
                      label={
                        <span>
                          {rised_one}
                          {"12 pm to 6 pm"}
                        </span>
                      }
                    />
                  </FormGroup>
                </div>
              </Box>
              <Box>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                          // checked={checked_rise}
                          // onChange={raisess}
                          label="12 pm to 6 pm"
                          // onClick={raisess}
                          disabled={not_found === true ? true : false}
                        />
                      }
                      label={
                        <span>
                          {rised_two}
                          {"After 6 pm"}
                        </span>
                      }
                    />
                  </FormGroup>
                </div>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography component="h3">AMENITIES</Typography>
            {waterbottle ? (
              <Box
                sx={{
                  display: "flex",
                  margin: "5% 0%",
                }}
                // onClick={waters}
              >
                <Box
                  sx={{
                    border: "1px  solid #db3737",
                    margin: "2%",
                    color: "#db3737",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaBottleWater aria-valuetext="waterbottle" />
                  Water Bottle
                </Box>
              </Box>
            ) : (
              <Box
                // onClick={waters_one}
                sx={{
                  display: "flex",
                  margin: "5% 0%",
                }}
              >
                <Box
                  sx={{
                    border: "1px  solid gray",
                    margin: "2%",
                    color: "gray",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaBottleWater aria-valuetext="waterbottle" />
                  Water Bottle
                </Box>
              </Box>
            )}
            {Blankets ? (
              <Box
                sx={{
                  display: "flex",

                  margin: "5% 0%",
                }}
                // onClick={blanket}
              >
                <Box
                  sx={{
                    border: "1px  solid #db3737",
                    margin: "2%",
                    color: "#db3737",
                    borderRadius: "5px",
                    padding: "2% 3%",
                  }}
                >
                  <BiBlanket />
                  Blankets
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: "5% 0%",
                }}
              >
                <Box
                  sx={{
                    border: "1px  solid gray",
                    margin: "2%",
                    color: "gray",
                    borderRadius: "5px",
                    padding: "2% 3%",
                  }}
                >
                  <BiBlanket />
                  Blankets
                </Box>
              </Box>
            )}
            {Emergency ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: "5% 0%",
                }}
              >
                <Box
                  sx={{
                    border: "1px  solid #db3737",
                    // margin: "2%",
                    color: "#db3737",
                    borderRadius: "5px",
                    padding: "2% 3%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SosIcon />
                  Emergency Nu...
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: "5% 0%",
                }}
                // onClick={emers}
              >
                <Box
                  sx={{
                    border: "1px  solid gray",
                    margin: "2%",
                    color: "gray",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SosIcon />
                  Emergency Nu...
                </Box>
              </Box>
            )}
            {Trackbus ? (
              <Box
                sx={{
                  display: "flex",

                  margin: "5% 0%",
                }}
                // onClick={tracksmybus}
              >
                <Box
                  sx={{
                    border: "1px  solid#db3737",
                    margin: "2%",
                    color: "#db3737",
                    borderRadius: "5px",
                    padding: "2% 3%",
                  }}
                >
                  <FaMapLocationDot />
                  Track My Bus
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",

                  margin: "5% 0%",
                }}
                // onClick={trackbusses}
              >
                <Box
                  sx={{
                    border: "1px  solid gray",
                    margin: "2%",
                    color: "gray",
                    borderRadius: "5px",
                    padding: "2% 3%",
                  }}
                >
                  <FaMapLocationDot />
                  Track My Bus
                </Box>
              </Box>
            )}
            {Charges ? (
              <Box
                sx={{ display: "flex" }}
                // onClick={chargess}
              >
                <Box
                  sx={{
                    border: "1px  solid #db3737",
                    margin: "2%",
                    color: "#db3737",
                    borderRadius: "5px",
                    padding: "2% 3%",
                  }}
                >
                  <PiPlugCharging />
                  Charging Poin
                </Box>
              </Box>
            ) : (
              <Box
                sx={{ display: "flex" }}
                // onClick={charged}
              >
                <Box
                  sx={{
                    border: "1px  solid gray",
                    margin: "2%",
                    color: "gray",
                    borderRadius: "5px",
                    padding: "2% 3%",
                  }}
                >
                  <PiPlugCharging />
                  Charging Poin
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          maxWidth="xl"
          className="mainbox"
          display={{ xs: "block", sm: "block", md: "block", xl: "block" }}
          width={"100%"}
          key={1}
        >
          {dummy?.map((v, i) => {
            return (
              <>
                <Box sx={{ display: "flex" }} key={i}>
                  <Box
                    className="bxxshadw"
                    sx={{
                      cursor: "pointer",
                      width: "100%",
                      display: "flex",
                      flexWrap: "wrap",
                      padding: "0px",
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "1px solid #0000005c",
                      margin: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: "0px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "10px",
                        width: "100%",
                      }}
                    >
                      <h3>{v.busname}</h3>
                      <h3 style={{ paddingLeft: "10%", textAlign: "end" }}>
                        {v.bustime}
                      </h3>
                      <h5 style={{ paddingLeft: "2%" }}>{v.traveltime}</h5>
                      <h3 style={{ paddingLeft: "2%" }}>{v.reachtime}</h3>

                      {v.ratings >= 4 ? (
                        <span
                          style={{
                            backgroundColor: "rgba(0, 128, 0, 0.493)",
                            borderRadius: "5px",
                            padding: "1px 5px 1px 5px",
                            marginLeft: "2%",
                          }}
                        >
                          <TiStar color="yellow" />
                          {v.ratings}
                        </span>
                      ) : (
                        ""
                      )}
                      {v.ratings < 4 ? (
                        <span
                          style={{
                            backgroundColor: "rgba(238, 235, 74, 0.986)",
                            borderRadius: "5px",
                            padding: "1px 5px 1px 5px",
                            marginLeft: "2%",
                          }}
                        >
                          <TiStar color="green" />
                          {v.ratings}
                        </span>
                      ) : (
                        ""
                      )}
                      {v.ratings <= 3 ? (
                        <span
                          style={{
                            backgroundColor: "rgba(241, 128, 84, 0.986)",
                            borderRadius: "5px",
                            padding: "1px 5px 1px 5px",
                            marginLeft: "2%",
                          }}
                        >
                          <TiStar color="white" />
                          {v.ratings}
                        </span>
                      ) : (
                        ""
                      )}
                      <span>Starts from INR {v.pricing}</span>
                      <h4>{v.avlableseat}</h4>
                      <Box
                        sx={{
                          padding: "2%",
                          display: "flex",
                          flexWrap: "wrap",
                          width: "100%",
                          justifyContent: "space-around",
                        }}
                      >
                        <h5>{v.bustype}</h5>
                        <h4>
                          {day}--{monthstr}
                        </h4>
                        <h4>{v.boarding}</h4>
                        <h4>{v.droping}</h4>
                      </Box>
                      <Box>
                        <FaBusAlt /> <FaBottleWater /> <CiCirclePlus />{" "}
                        <MdOutlineSos />
                        {v.livetracking ? (
                          <span
                            style={{
                              backgroundColor: " #c2c2c2",
                              padding: "5px",
                              margin: "4px",
                              borderRadius: "5px",
                            }}
                          >
                            <FaMapLocationDot style={{ margin: "0px 5px" }} />
                            Live Tracking
                          </span>
                        ) : (
                          ""
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "end",
                        justifyContent: "end",
                      }}
                    >
                      {v.showseats ? (
                        <Button
                          sx={{
                            backgroundColor: "rgb(240, 88, 88)",
                            margin: "3px",
                            padding: "2px",
                            color: "black",
                          }}
                          onClick={() => hdetickts(v.busid)}
                          className="ctnubtn"
                        >
                          hide seats
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            backgroundColor: "rgb(240, 88, 88)",
                            margin: "3px",
                            padding: "2px",
                            color: "black",
                          }}
                          onClick={() => shotickts(v.busid)}
                          className="ctnubtn"
                        >
                          Show Seats
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
                {v.showseats ? (
                  <Box className="seatshow">
                    <Box
                      sx={{
                        width: {
                          xs: "62%",
                          sm: "84%",
                          md: "45%",
                          xl: "38%",
                        },
                      }}
                    >
                      <>
                        <Box>
                          <Box>Lower-Deck</Box>
                          <Box sx={{ display: "flex" }}>
                            <Box
                              sx={{
                                paddingLeft: "5px !important",
                                backgroundColor: "white",
                                borderLeft: "5px solid gray",
                                borderRight: "1px solid black",
                                paddingRight: "5px",
                                paddingTop: "12px",
                              }}
                            >
                              <h1 className="steer1">
                                <h2 className="steercenter"></h2>
                                <h2 className="steercenter2"></h2>
                              </h1>
                            </Box>
                            <Box className="seatss">
                              {v.seats?.map((vl, ind) => {
                                return vl.seatid <= 10 ? (
                                  <Box sx={{ display: "flex" }} key={ind}>
                                    <Box>
                                      {vl.seatshow ? (
                                        vl.seatbooking ? (
                                          <Box
                                            className="seat"
                                            sx={{
                                              backgroundColor:
                                                "rgba(8, 8, 8, 0.137)",
                                              border: " rgba(0, 0, 0, 0.253)",
                                            }}
                                          >
                                            <p>
                                              <p
                                                style={{
                                                  fontSize: "12px",
                                                  textAlign: "center",
                                                  padding: "6px 10px",
                                                }}
                                              >
                                                {/* {vl.seatid} */}
                                              </p>
                                            </p>
                                            <p
                                              style={{
                                                padding: "5px 2px",
                                                border:
                                                  " 1px solid rgba(0, 0, 0, 0.253)",
                                                borderRadius: "3px",
                                              }}
                                            ></p>
                                          </Box>
                                        ) : (
                                          <Box
                                            className="seat2"
                                            onClick={() =>
                                              bookings(v.busid, vl.seatid)
                                            }
                                          >
                                            <p
                                              style={{
                                                fontSize: "12px",
                                                textAlign: "center",
                                                padding: "0px 10px",
                                              }}
                                            >
                                              {vl.seatid}
                                            </p>
                                            <p
                                              style={{
                                                padding: "5px 2px",
                                                border: "1px solid black",
                                                borderRadius: "3px",
                                              }}
                                            ></p>
                                          </Box>
                                        )
                                      ) : (
                                        <Box
                                          className="seat1"
                                          onClick={() =>
                                            bookings(v.busid, vl.seatid)
                                          }
                                        >
                                          <p
                                            style={{
                                              padding: "5px 2px",
                                              border: "1px solid black",
                                              borderRadius: "3px",
                                            }}
                                          ></p>
                                        </Box>
                                      )}
                                    </Box>
                                  </Box>
                                ) : (
                                  ""
                                );
                              })}
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ marginBottom: "2%" }}>
                          <Box> upper - deck</Box>
                          <Box
                            sx={{
                              borderLeft: "5px solid gray",
                              paddingLeft: "8%",
                              backgroundColor: "white",
                            }}
                          >
                            <Box className="seatss">
                              {v.seats?.map((vl, ind) => {
                                return vl.seatid > 10 ? (
                                  <Box sx={{ display: "flex" }} key={ind}>
                                    <Box>
                                      {vl.seatshow ? (
                                        vl.seatbooking ? (
                                          <Box
                                            className="seat"
                                            sx={{
                                              backgroundColor:
                                                "rgba(8, 8, 8, 0.137)",
                                              border: " rgba(0, 0, 0, 0.253)",
                                            }}
                                          >
                                            <p>
                                              <p
                                                style={{
                                                  fontSize: "12px",
                                                  textAlign: "center",
                                                  padding: "6px 10px",
                                                }}
                                              >
                                                {/* {vl.seatid} */}
                                              </p>
                                            </p>
                                            <p
                                              style={{
                                                padding: "5px 2px",
                                                border:
                                                  " 1px solid rgba(0, 0, 0, 0.253)",
                                                borderRadius: "3px",
                                              }}
                                            ></p>
                                          </Box>
                                        ) : (
                                          <Box
                                            className="seat2"
                                            onClick={() =>
                                              bookings(v.busid, vl.seatid)
                                            }
                                          >
                                            <p
                                              style={{
                                                fontSize: "12px",
                                                textAlign: "center",
                                                padding: "0px 10px",
                                              }}
                                            >
                                              {vl.seatid}
                                            </p>
                                            <p
                                              style={{
                                                padding: "5px 2px",
                                                border: "1px solid black",
                                                borderRadius: "3px",
                                              }}
                                            ></p>
                                          </Box>
                                        )
                                      ) : (
                                        <Box
                                          className="seat1"
                                          onClick={() =>
                                            bookings(v.busid, vl.seatid)
                                          }
                                        >
                                          <p
                                            style={{
                                              padding: "5px 2px",
                                              border: "1px solid black",
                                              borderRadius: "3px",
                                            }}
                                          ></p>
                                        </Box>
                                      )}
                                    </Box>
                                  </Box>
                                ) : (
                                  ""
                                );
                              })}
                            </Box>
                          </Box>
                        </Box>
                      </>
                    </Box>

                    {/* next ticket booking true or false adding space */}
                    {passenger ? (
                      <Box>
                        <Box>
                          <Passengerinf
                            seatids={minmem}
                            bsnm={busnm}
                            bsid={bsid}
                            stid={stid}
                          />
                        </Box>
                      </Box>
                    ) : (
                      <>
                        {tic ? (
                          <>
                            <Box
                              sx={{
                                width: {
                                  xs: "100%",
                                  display: "grid",
                                  justifyContent: "center",
                                  padding: "10px",
                                  sm: "48%",
                                  md: "48%",
                                },
                                backgroundColor: "#f8f8f8",
                                border: "1px solid #80808066",
                                boxShadow: "0px 0px 9px dimgray",
                              }}
                            >
                              <h3>Boarding & Droping</h3>
                              <Box>
                                {orgnl.map((vals, ids) => {
                                  return busnm === vals.busno
                                    ? vals.busses.map((valuess, indexx) => {
                                        return valuess.busid === bsid ? (
                                          <Box
                                            key={ids}
                                            sx={{
                                              padding: "10px",
                                              display: "flex",
                                              flexWrap: "wrap",
                                              justifyContent: "space-between",
                                              alignItems: "center",
                                              textAlign: "center",
                                            }}
                                          >
                                            <li>
                                              <span
                                                style={{ fontSize: "19px" }}
                                              >
                                                {valuess.boarding}
                                              </span>
                                            </li>
                                            <h4 style={{ padding: "5px 20px" }}>
                                              {valuess.bustime}
                                            </h4>
                                            <Box></Box>
                                          </Box>
                                        ) : (
                                          ""
                                        );
                                      })
                                    : "";
                                })}
                              </Box>

                              <Box sx={{ marginTop: "10px", padding: "10px" }}>
                                {orgnl.map((vals, ids) => {
                                  return busnm === vals.busno
                                    ? vals.busses.map((valuess, indexx) => {
                                        return valuess.busid === bsid ? (
                                          <Box
                                            key={ids}
                                            sx={{
                                              display: "flex",
                                              flexWrap: "wrap",
                                              justifyContent: "space-between",
                                              alignItems: "center",
                                            }}
                                          >
                                            <li>
                                              <span
                                                style={{ fontSize: "19px" }}
                                              >
                                                {valuess.droping}
                                              </span>
                                            </li>
                                            <h4 style={{ padding: "5px 10px" }}>
                                              {valuess.reachtime}
                                            </h4>
                                            <Box></Box>
                                          </Box>
                                        ) : (
                                          ""
                                        );
                                      })
                                    : "";
                                })}
                              </Box>
                              <Box sx={{ display: "flex", padding: "10px" }}>
                                <span>Seat No:</span>
                                {minmem.map((v, i) => {
                                  return (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginLeft: "10%",
                                      }}
                                    >
                                      <h5>{v.seatid},</h5>
                                    </Box>
                                  );
                                })}
                              </Box>
                              <Box>
                                <h3>Fare Details</h3>
                                <Box
                                  sx={{
                                    display: "flex",
                                    padding: "10px",
                                    justifyContent: "space-around",
                                  }}
                                >
                                  <h6>Amount</h6>
                                  <h5>INR{totals}</h5>
                                </Box>
                                <Box
                                  sx={{
                                    margin: "35px 0px",
                                    textAlign: "center",
                                  }}
                                >
                                  <Button
                                    sx={{
                                      backgroundColor: "red",
                                      color: "black",
                                      fontWeight: "550",
                                    }}
                                    className="btnss"
                                    onClick={proceed}
                                  >
                                    PROCEED TO BOOK
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </>
                        ) : (
                          <>
                            {boking ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  width: "48%",
                                  width: {
                                    xs: "100%",
                                    display: "grid",
                                    justifyContent: "center",
                                    padding: "10px",
                                    sm: "48%",
                                  },
                                  backgroundColor: "#f8f8f8",
                                  border: "1px solid black",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      textAlign: "center",
                                      borderBottom: ".5px solid black",
                                      display: "flex",
                                      justifyContent: "center",
                                      width: "100%",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: "100%",
                                        display: "grid",
                                        justifyItems: "legacy",
                                        alignContent: "space-around",
                                      }}
                                    >
                                      <h3
                                        style={{
                                          padding: "5px",
                                          borderBottom: "2px solid brown",
                                          cursor: "pointer",
                                        }}
                                      >
                                        BOARDING POINT
                                      </h3>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                          padding: "10px",
                                        }}
                                      >
                                        <input
                                          id="bdpnt"
                                          value="Boarding"
                                          className="rdiobtns"
                                          style={{
                                            display: "inline-block",
                                            color: "red",
                                            backgroundColor: "red",
                                            width: "20px",
                                            height: "20px",
                                          }}
                                          defaultChecked
                                          type="radio"
                                        />
                                        <label htmlFor="bdpnt">
                                          {orgnl.map((vals, ids) => {
                                            return busnm === vals.busno
                                              ? vals.busses.map(
                                                  (valuess, indexx) => {
                                                    return valuess.busid ===
                                                      bsid ? (
                                                      <Box
                                                        key={indexx}
                                                        sx={{
                                                          display: "flex",
                                                          flexWrap: "wrap",
                                                          justifyContent:
                                                            "space-between",
                                                          alignItems: "center",
                                                          padding: "10px",
                                                        }}
                                                      >
                                                        <h2
                                                          style={{
                                                            padding: "5px 20px",
                                                          }}
                                                        >
                                                          {valuess.bustime}
                                                        </h2>
                                                        <h2>
                                                          {valuess.boarding}
                                                        </h2>
                                                        <Box></Box>
                                                      </Box>
                                                    ) : (
                                                      ""
                                                    );
                                                  }
                                                )
                                              : "";
                                          })}
                                        </label>
                                      </Box>
                                      <Box
                                        key={v.busid}
                                        sx={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        {orgnl.map((vals, ids) => {
                                          return busnm === vals.busno
                                            ? vals.busses.map(
                                                (valuess, indexx) => {
                                                  return valuess.busid ===
                                                    bsid ? (
                                                    <Box
                                                      sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "center",
                                                        alignItems: "center",
                                                        padding: "10px",
                                                      }}
                                                    >
                                                      <h4
                                                        style={{
                                                          padding: "5px",
                                                        }}
                                                      >
                                                        {valuess.busname}
                                                      </h4>
                                                    </Box>
                                                  ) : (
                                                    ""
                                                  );
                                                }
                                              )
                                            : "";
                                        })}
                                      </Box>
                                      <Box>
                                        <Button
                                          sx={{ color: "black" }}
                                          onClick={ticketbooking}
                                          className="ctnubtn"
                                        >
                                          continue
                                        </Button>
                                        <h4 style={{ padding: "10px" }}>
                                          INR {totals}
                                        </h4>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            ) : (
                              <Box
                                sx={{
                                  width: {
                                    xs: "100%",
                                    sm: "48%",
                                  },
                                  display: "flex",
                                  justifyContent: "center",
                                  backgroundColor: "#f8f8f8",
                                  border: "1px solid black",
                                  padding: " 1% 3%",
                                  boxShadow: "0px 0px 9px rgb(0 0 0 / 47%)",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      textAlign: "center",
                                      borderBottom: ".5px solid black",
                                      display: "grid",
                                      justifyContent: "center",
                                      width: "100%",
                                      padding: "5px",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: "100%",
                                        display: "grid",
                                        justifyItems: "center",
                                        alignContent: "center",
                                      }}
                                    >
                                      <h3
                                        style={{
                                          padding: "10px",
                                          borderBottom: "2px solid brown",
                                          cursor: "pointer",
                                        }}
                                      >
                                        DROPING POINT
                                      </h3>
                                      <label htmlFor="bdpnt">
                                        <Box
                                          sx={{
                                            padding: "10px",
                                            display: "flex",
                                            alignContent: "center",
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <input
                                            id="bdpnt"
                                            type="radio"
                                            onChange={chec}
                                            value="Boarding"
                                            style={{
                                              display: "flex",
                                              color: "red",
                                              backgroundColor: "red",
                                              width: "19px",
                                              height: "19px",
                                              marginTop: "5px",
                                            }}
                                          />
                                          {orgnl.map((vals, ids) => {
                                            return busnm === vals.busno
                                              ? vals.busses.map(
                                                  (valuess, indexx) => {
                                                    return valuess.busid ===
                                                      bsid ? (
                                                      <Box
                                                        key={ids}
                                                        sx={{
                                                          display: "flex",
                                                          flexWrap: "wrap",
                                                          justifyContent:
                                                            "space-between",
                                                          alignItems: "center",
                                                        }}
                                                      >
                                                        <h3
                                                          style={{
                                                            padding: "5px 10px",
                                                          }}
                                                        >
                                                          {valuess.reachtime}
                                                        </h3>
                                                        <h3>
                                                          {valuess.droping}
                                                        </h3>
                                                        <Box></Box>
                                                      </Box>
                                                    ) : (
                                                      ""
                                                    );
                                                  }
                                                )
                                              : "";
                                          })}
                                        </Box>
                                      </label>
                                      <Box sx={{ padding: "10px" }}>
                                        <h4>INR {totals}</h4>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </Box>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </Box>
      </Box>
      {passenger ? (
        ""
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#80808054",
              textAlign: "center",
              padding: "2%",
              lineHeight: "1.5",
              margin: "5% 1%",
            }}
          >
            <h2>
              {orgnlbusses.from} to {orgnlbusses.to} Bus <br></br>Service
            </h2>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <h3>Avg. Bus Duration</h3>
                <h3>:</h3>
                <h4>{sortings}</h4>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Buses depart from</h3>
                <h3 style={{ padding: "0 10%" }}>:</h3>
                <h4>{orgnlbusses.from}</h4>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Bus arrives in</h3>
                <h3 style={{ paddingLeft: "22%" }}>:</h3>
                <h4>{orgnlbusses.to}</h4>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Daily Bus Services</h3>
                <h3>:</h3>
                <h4 style={{ paddingRight: "21%" }}>{bussess?.length}</h4>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Cheapest Bus Ticket</h3>
                <h3>:</h3>
                <h4 style={{ paddingLeft: "13%" }}>INR {sorting}</h4>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#80808054",
              textAlign: "center",
              padding: "2.3%",
              lineHeight: 1.5,
              margin: "5% 1%",
            }}
          >
            <Box>
              <h2>
                {orgnlbusses.from} to {orgnlbusses.to} Bus <br></br>Distance
              </h2>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <h3>Earliest Bus</h3>
                <h3>:</h3>
                <h3 style={{ paddingLeft: "14%" }}>{bustearly}</h3>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <h3>Last Bus</h3>
                  <h3>:</h3>
                  <h4 style={{ paddingLeft: "5%" }}>{bustlast}</h4>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <h3>Distance</h3>
                <h3>:</h3>
                <h4>{orgnlbusses.distance}</h4>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Bus Companies</h3> <h3>:</h3>{" "}
                <h4 style={{ paddingLeft: "31%" }}>
                  {" "}
                  {orgnlbusses.buscompanys}
                </h4>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
