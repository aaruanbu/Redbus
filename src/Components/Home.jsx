import { Alert, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Naves } from "./Nav";
import { Carousel } from "./Carousel";
import InputLabel from "@mui/material/InputLabel";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Style.scss";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { LuArrowRightLeft } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dublicate, updates } from "./Slices";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaStar } from "react-icons/fa6";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaCalendarAlt } from "react-icons/fa";
import { Mobile } from "./Mobilebox";
import { Footer } from "./Footer";
import { Primo } from "./Primo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdOutlineDirectionsBusFilled } from "react-icons/md";
import back from "./Img/appInstallbg.svg";
import DateRangeIcon from "@mui/icons-material/DateRange";
export const Home = () => {
  const currentDate = new Date();
  const [in1, setIn1] = useState("");
  const [in2, setIn2] = useState("");
  const [in3, setIn3] = useState(new Date());
  const datas = useSelector((dat) => dat.datas.Ars);
  const tdat = new Date();
  const [isRotated, setIsRotated] = useState(false);
  const [ers, setErs] = useState(false);
  const gobook = useNavigate();
  const notfoundbus = useNavigate();
  const dispatch = useDispatch();
  const [chg, setChg] = useState(false);
  const [sets, setSets] = useState(true);
  const [sets1, setSets1] = useState(false);
  const [sets2, setSets2] = useState(false);
  const [sets3, setSets3] = useState(false);
  const [sets4, setSets4] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isRandom_one, setIsRandom_one] = useState(false);
  const [busnm, setBusnm] = useState();

  let sets_zero = () => {
    setSets(true);
    setSets1(false);
    setSets2(false);
    setSets3(false);
    setSets4(false);
  };
  let sets_one = () => {
    setSets1(true);
    setSets(false);
    setSets2(false);
    setSets3(false);
    setSets4(false);
  };
  let sets_two = () => {
    setSets2(true);
    setSets(false);
    setSets1(false);
    setSets3(false);
    setSets4(false);
  };
  let sets_three = () => {
    setSets3(true);
    setSets(false);
    setSets1(false);
    setSets2(false);
    setSets4(false);
  };
  let sets_four = () => {
    setSets4(true);
    setSets(false);
    setSets1(false);
    setSets2(false);
    setSets3(false);
  };

  let froms = ({ target: { name, value } }) => {
    if (name === "nm1") {
      setIn1(value.toLowerCase());
      setIsRandom(isRandomSequence(value));
    }

    if (name === "nm2") {
      setIn2(value.toLowerCase());
      setIsRandom_one(isRandomSequence_one(value));
    }
  };
  console.log(in1, in2);
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
  useEffect(() => {}, [chg, sets, sets1, sets2, sets3, sets4, isRandom, busnm]);
  let searcbus = () => {
    if (in1 === "" || in2 === "" || in3 === "") {
      setErs(true);
    } else if (in1 === in2) {
      alert("dont Enter same Place");
    } else if (isRandom || isRandom_one) {
      alert("Please Enter The valid Route");
    } else {
      let ss = datas?.map((val, i) => {
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
          `/notfound?gopoint=${in1}&&reachpoint=${in2}&&dates=${in3}`
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
      dispatch(updates(ss));
    }
  };

  const countries = [
    {
      imges:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Colombia.svg",
      c_name: "Colombia",
      c_alt: "Colombia",
    },
    {
      imges:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/India.svg",
      c_name: "India",
      c_alt: "India",
    },
    {
      imges:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Indonesia.svg",
      c_name: "Indonesia",
      c_alt: "Indonesia",
    },
    {
      imges:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Malaysia.svg",
      c_name: "Malaysia",
      c_alt: "Malaysia",
    },
    {
      imges:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Peru.svg",
      c_name: "Peru",
      c_alt: "Peru",
    },
    {
      imges:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Singapore.svg",
      c_name: "Singapore",
      c_alt: "Singapore",
    },
  ];
  const states = [
    {
      imgs: "https://st.redbus.in/buslogos/country/ind/logo_group/10283.png",
      s_name: "APSRTC",
    },
    {
      imgs: "https://s3.rdbuz.com/web/images/homeV2/rtc/GSRTC.svg",
      s_name: "GSRTC",
    },
    { imgs: "https://st.redbus.in/Images/carousel/TSRTC.png", s_name: "TSRTC" },
    {
      imgs: "https://st.redbus.in/buslogos/country/ind/logo_group/10823.png",
      s_name: "MSRCT",
    },
    {
      imgs: "https://s3.rdbuz.com/web/images/homeV2/rtc/KERALA-RTC.svg",
      s_name: "KERALA-RTC",
    },
    {
      imgs: "https://st.redbus.in/buslogos/country/ind/logo_group/16426.png",
      s_name: "SPSTC",
    },
    {
      imgs: "https://s3.rdbuz.com/web/images/homeV2/rtc/RSRTC.svg",
      s_name: "RSRCT",
    },
    {
      imgs: "https://s3.rdbuz.com/web/images/homeV2/rtc/UPSRTC.svg",
      s_name: "UPSRTC",
    },
  ];
  const proceddate = (s) => {
    setIn3(s);
  };
  return (
    <>
      <Box display={{ xs: "block", sm: "block", md: "none", xl: "none" }}>
        <Mobile />
      </Box>
      <Box
        display={{ xs: "none", sm: "none", md: "block", xl: "block" }}
        className="Mainimg"
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "30px",
            paddingTop: "7%",
            fontFamily: "sans-serif",
            fontWeight: "900",
          }}
        >
          India's No. 1 Online Bus Ticket Booking Site
        </h1>
        <Box className="mainsbox">
          <Box className="rels">
            <Box
              sx={{ borderRight: "1px solid rgb(143, 141, 141)" }}
              className="inpgroup"
            >
              <Box className="arows" onClick={seted}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "40px",
                  }}
                >
                  <Box>
                    <LuArrowRightLeft
                      style={{
                        fontSize: "21px",
                        transform: isRotated ? "rotate(180deg)" : "none",
                        transition: "transform 0.5s ease",
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                component="input"
                type="text"
                onChange={froms}
                value={in1}
                name="nm1"
                className="inp1 firbox"
              />
              <Box component="label">FROM</Box>
              <MdOutlineDirectionsBusFilled
                style={{
                  position: "absolute",
                  bottom: "40%",
                  left: "5%",
                  fontSize: "20px",
                }}
              />
            </Box>
          </Box>

          <Box className="rels">
            <Box
              sx={{ borderRight: "1px solid rgb(143, 141, 141)" }}
              className="inpgroup"
            >
              <Box
                className="firbox1 inp2"
                type="text"
                onChange={froms}
                value={in2}
                name="nm2"
                component="input"
              />
              <MdOutlineDirectionsBusFilled
                style={{
                  position: "absolute",
                  bottom: "40%",
                  left: "8%",
                  fontSize: "20px",
                }}
              />
              <Box component="label">TO</Box>
            </Box>
          </Box>

          <Box className="rels">
            <Box sx={{ borderRight: "1px solid rgb(143, 141, 141)" }}>
              <Box sx={{ position: "relative" }}>
                <Box
                  component={ReactDatePicker}
                  placeholderText="Date"
                  minDate={currentDate}
                  className="firbox2"
                  onChange={proceddate}
                  selected={in3}
                  name="nm3"
                  dateFormat="d MMM Y"
                  sx={{ fontWeight: "800", fontSize: "13px" }}
                />
                <DateRangeIcon
                  sx={{ position: "absolute", left: "6%", bottom: "40%" }}
                />
                <p style={{ position: "absolute", left: "17%", bottom: "40%" }}>
                  Date
                </p>
              </Box>
            </Box>
          </Box>
          <Box display={{ xs: "none", md: "block", sm: "none", xl: "block" }}>
            <Box onClick={searcbus} className="firbox3" maxWidth="xl">
              <h2 style={{ color: "white" }}>SEARCH BUSES</h2>
            </Box>
          </Box>
        </Box>
      </Box>
      {ers && in1 === "" && in2 === "" && in3 === "" ? (
        <p style={{ color: "red" }}>Enter Your Destination</p>
      ) : (
        ""
      )}
      <Box display={{ xs: "none", sm: "none", md: "block", xl: "block" }}></Box>
      <Box>
        <Box
          width="100%"
          sx={{ borderRadius: "35px", padding: "10px" }}
          component="img"
          src="https://st.redbus.in/Images/99/webreferal.png"
        />
      </Box>
      {/* //⬇⬇⬇⬇⬇download  poster⬇⬇⬇⬇⬇  */}
      <Box display={{ xs: "none", md: "block", sm: "block", xl: "block" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ padding: "0% 5%" }} className="backsimagess_app">
            <Box>
              <h1
                style={{ color: "white", fontWeight: "700", padding: "3% 5%" }}
              >
                ENJOY THE APP!
              </h1>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Box
                  sx={{
                    padding: "2%",
                    backgroundColor: "white",
                    margin: "3%",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <Box sx={{ lineHeight: "45px" }}>
                    <Box>
                      <h2 style={{ fontWeight: "500" }}>
                        {" "}
                        <FaCircleCheck
                          style={{
                            fontSize: "20px",
                            color: "green",
                            margin: "0% 2%",
                          }}
                        />
                        Quick access
                      </h2>
                    </Box>
                    <Box>
                      <h2 style={{ fontWeight: "500" }}>
                        <FaCircleCheck
                          style={{
                            fontSize: "20px",
                            color: "green",
                            margin: "0% 2%",
                          }}
                        />
                        Superior live tracking
                      </h2>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      lineHeight: "25px",
                      margin: "3% 3%",
                    }}
                  >
                    <Box
                      sx={{ borderRight: "1px solid gray", padding: "1% 5%" }}
                    >
                      <h1
                        style={{
                          color: "black",
                          fontWeight: "800",
                          fontSize: "25px",
                        }}
                      >
                        4.5
                        <FaStar style={{ fontSize: "17px" }} />
                      </h1>
                      <h4 style={{ fontWeight: "500" }}>50M+ downloads</h4>
                      <h4>Play Store</h4>
                    </Box>
                    <Box sx={{ padding: "1% 5%" }}>
                      <h1
                        style={{
                          color: "black",
                          fontWeight: "800",
                          fontSize: "25px",
                        }}
                      >
                        4.6
                        <FaStar style={{ fontSize: "17px" }} />
                      </h1>
                      <h4 style={{ fontWeight: "500" }}>50M+ downloads</h4>
                      <h4>App Store</h4>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Box sx={{ display: "flex", width: "100%" }}>
                    <Box sx={{ width: "100%", padding: "4%" }}>
                      <h3 style={{ fontWeight: "900", color: "white" }}>
                        Scan to
                      </h3>
                      <h3
                        style={{
                          fontWeight: "900",
                          color: "white",
                          marginBottom: "10%",
                        }}
                      >
                        download
                      </h3>
                      <Box
                        component="img"
                        src="https://s1.rdbuz.com/web/images/homeV2/qrCode.svg"
                      />
                    </Box>
                    <Box sx={{ width: "100%", margin: "5%" }}>
                      <h3 style={{ fontWeight: "900", color: "white" }}>
                        Download the{" "}
                      </h3>
                      <h3
                        style={{
                          fontWeight: "900",
                          color: "white",
                          marginBottom: "10%",
                        }}
                      >
                        App on
                      </h3>
                      <Box
                        component="img"
                        src="https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg"
                      />
                      <Box
                        component="img"
                        src="https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Primo />
        <Box sx={{ width: "80%", margin: "0 auto" }}>
          <h1>PARTNERED WITH</h1>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "2%",
              }}
            >
              <h1>25 RTCs</h1>
              <span
                className="ftrchs"
                style={{
                  padding: "8px",
                  border: ".5px solid gray",
                  borderRadius: "10px",
                }}
              >
                View All
              </span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {states.map((vl, ind) => {
                return (
                  <>
                    <Box key={ind} className="liststyl_one">
                      <Box
                        component="img"
                        width={vl.s_name === "MSRCT" ? "70px" : "100px"}
                        src={vl.imgs}
                        alt={vl.s_name}
                        title={vl.s_name}
                        data-retry="0"
                      />
                      <h5 className="liststyl" style={{ textAlign: "center" }}>
                        {vl.s_name}
                      </h5>
                    </Box>
                  </>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Footer />
        <Box sx={{ margin: "0 auto" }} width={"80%"}>
          <h1>GLOBAL PRESENCE</h1>
          <Box
            key={1}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {countries.map((val, indx) => {
              return (
                <>
                  <Box key={indx} className="liststyl_one">
                    <Box
                      component="img"
                      loading="lazy"
                      width="100px"
                      key={indx}
                      src={val.imges}
                      alt={val.c_alt}
                      title={val.c_name}
                      data-retry="0"
                    />
                    <h3 className="liststyl">{val.c_name}</h3>
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* online book tickets */}
      <Box className="container">
        <h1
          style={{
            margin: "5% 2%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          BOOK BUS TICKETS ONLINE
        </h1>
        <Box
          component="p"
          sx={{
            fontSize: "18px",
            lineHeight: "35px",
            fontWeight: "500",
            marginBottom: "4%",
          }}
        >
          redBus is India's largest brand for online bus ticket booking and
          offers an easy-to-use online bus ticket and train ticket booking
          service, With over 36 million satisfied customers, 3500+ bus operators
          to choose from, and plenty of offers on bus ticket booking, redBus
          makes road journeys super convenient for travelers. A leading platform
          for booking bus tickets, redBus has been the leader in online bus
          booking over the past 17 years across thousands of cities and lakhs of
          routes in India.
        </Box>
        <Box
          component="p"
          sx={{ fontSize: "18px", lineHeight: "35px", fontWeight: "500" }}
        >
          Booking a bus ticket online on redBus app or website is very simple.
          You can download the redBus app or visit redbus.in and enter your
          source, destination & travel date to check the top-rated bus services
          available. You can then compare prices, ratings & amenities, select
          your preferred seat, boarding & dropping points and make the payment
          using multiple payment options like UPI, debit or credit card, net
          banking and more. With redBus you can be assured of safe & secure
          payment methods and guaranteed travel with the best seat and bus
          operator{" "}
        </Box>
      </Box>
      <Box sx={{ width: "80%", margin: "0 auto", padding: "5% 0" }}>
        <Box component="h2" sx={{ textAlign: "center" }}>
          FAQs related to Bus Tickets Booking
        </Box>
        <Box display={{ xs: "none", sm: "block", md: "block", xl: "block" }}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            {sets ? (
              <Box
                component="h4"
                sx={{
                  padding: "5px",
                  borderBottom: "3px solid red",
                  transition: "border-bottom 0.2s",
                }}
                className="liss"
                onClick={() => sets_zero()}
              >
                General
              </Box>
            ) : (
              <Box
                component="h4"
                sx={{ padding: "5px" }}
                onClick={() => sets_zero()}
                className="liss_one"
              >
                General
              </Box>
            )}
            {sets1 ? (
              <Box
                component="h4"
                sx={{
                  padding: "5px",
                  borderBottom: "3px solid red",
                  transition: "border-bottom 0.2s",
                }}
                className="liss"
                onClick={() => sets_one()}
              >
                Ticket-related
              </Box>
            ) : (
              <Box
                component="h4"
                sx={{ padding: "5px" }}
                onClick={() => sets_one()}
                className="liss_one"
              >
                Ticket-related
              </Box>
            )}
            {sets2 ? (
              <Box
                component="h4"
                sx={{
                  padding: "5px",
                  borderBottom: "3px solid red",
                  transition: "border-bottom 0.2s",
                }}
                className="liss"
                onClick={() => sets_two()}
              >
                Payment
              </Box>
            ) : (
              <Box
                component="h4"
                sx={{ padding: "5px" }}
                onClick={() => sets_two()}
                className="liss_one"
              >
                Payment
              </Box>
            )}
            {sets3 ? (
              <Box
                component="h4"
                sx={{ borderBottom: "3px solid red", padding: "5px" }}
                onClick={() => sets_three()}
                className="liss"
              >
                {" "}
                Cancellation & Refund
              </Box>
            ) : (
              <Box
                component="h4"
                sx={{ padding: "5px" }}
                onClick={() => sets_three()}
                className="liss_one"
              >
                {" "}
                Cancellation & Refund
              </Box>
            )}
            {sets4 ? (
              <Box
                component="h4"
                sx={{
                  borderBottom: "3px solid red",
                  padding: "5px",
                  transition: "border 0.2s",
                }}
                className="liss"
                onClick={() => sets_four()}
              >
                Insurance
              </Box>
            ) : (
              <Box
                component="h4"
                sx={{ padding: "5px" }}
                onClick={() => sets_four()}
                className="liss_one"
              >
                Insurance
              </Box>
            )}
          </Box>
        </Box>

        {sets ? (
          <div style={{}}>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>
                  Can I track the location of my booked bus online?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Yes, you can track your bus online by using our bus tracking
                  app feature called “Track My Bus”. This feature allows
                  passengers and their families to track the live bus tracking
                  location. You may follow your bus on a map and use the
                  information to plan your trip to the boarding point and to get
                  off at the correct stop. Family and friends may also check the
                  bus position to plan pick-ups and ensure your safety.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>
                  What are the advantages of purchasing a bus ticket with
                  redBus?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  There are many advantages to purchasing online bus tickets
                  with redBus. redBus is India’s most trusted bus ticket
                  company, where you can book any type of private or Government
                  owned buses. redBus allows you to find the different types of
                  buses, choose the preferred bus seats, and your nearest
                  boarding and dropping points. You can also filter the buses
                  based on timings like morning, evening bus etc.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Why book bus tickets online on redBus?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Booking bus tickets online on redBus is increasingly becoming
                  the preferred choice for travelers due to its numerous
                  advantages over traditional methods.With redBus, customers can
                  book their bus tickets effortlessly from the comfort of their
                  homes, avoiding the inconvenience of standing in long lines at
                  bus stations or travel agencies. Online bus booking not only
                  offers the luxury of comparing different bus schedules and
                  operators but also presents various discount offers and
                  exclusive deals, resulting in significant savings.Payment
                  security is another notable feature of online booking, which
                  ensures that your financial information is well-protected
                  against fraud. Additionally, customers get the privilege to
                  pick their seats, providing a customized travel experience.
                  Online bus booking platforms give real-time updates about any
                  changes in the bus timetable, including delays or
                  cancellations, enabling better planning.The convenience
                  doesn't stop here; travelers can even compare onboard
                  amenities like charging points or snacks, further enhancing
                  the travel experience.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Does bus booking online cost me more?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Not at all! The price of the bus ticket is the same as you
                  would get from the bus operator/ counter of any bus ticket
                  agency. Redbus reduces the travel budget by comparing the bus
                  ticket prices among various operators, making it a more
                  cost-effective choice. Therefore, online bus booking is
                  increasingly being recognized as a more convenient, efficient,
                  and economical mode of securing travel arrangements.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>
                  How can I get the discounts on the bus booking?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  To get the discount on bus booking please visit:
                  https://www.redbus.in/info/OfferTerms and check the available
                  offers. Copy the coupon code and paste it during checkout to
                  avail the discount.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>What's New in Bus Booking on redBus?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Primo Bus Ticket: redBus has launched Primo bus services,
                  where passengers can enjoy traveling in high-rated buses with
                  best-in-class services. While looking for bus tickets on the
                  desired route, customers can check the Primo tag to choose
                  this excellent service. From hygiene standards to on-time
                  service and comfort, passengers can benefit from online bus
                  booking experience from Primo buses.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>
                  Can I book a Government bus ticket on redBus?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "8px 16px 16px",
                  backgroundColor: "rgb(243, 244, 249)",
                  lineHeight: "1.5",
                }}
              >
                Yes, you can book government bus tickets on redBus. redBus has
                extended its bus booking services to many RTCs in India. Some of
                these RTCs are Andhra Pradesh State Road Transport Corporation
                (APSRTC), Assam State Transport Corporation (ASTC),Bihar State
                Tourism Development Corporation (BSTDC), Himachal Road Transport
                Corporation (HRTC), Jammu and Kashmir State Road Transport
                Corporation (JKSRTC),Kerala RTC, Kadamba Transport Corporation
                (KTCL), Maharashtra State Road Transport Corporation
                (MSRTC),Patiala and the East Punjab States Union (PEPSU),
                Puducherry Road Transport Corporation (PRTC), Rajasthan State
                Road Transport Corporation (RSRTC), South Bengal State Transport
                Corporation (SBSTC), Uttarakhand Transport Corporation
                (UTC),West Bengal Transport Corporation [WBTC (CTC), North
                Bengal State Transport Corporation (NBSTC).
              </AccordionDetails>
            </Accordion>
          </div>
        ) : (
          ""
        )}
        {sets1 ? (
          <>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>How can I book bus tickets on redBus?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Bus ticket Booking is very easy on redBus. To book the bus
                  tickets go to the main page, enter your source city and
                  destination city, in the “From” and “To” fields respectively.
                  Enter travel date and hit the search button. Now you will see
                  the list of buses that are available on the given bus route.
                  You can use the filter option , such as duration, fare, bus
                  type, etc to rearrange the list accordingly. This makes it
                  easier for the customer to book their bus ticket online with
                  redBus.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  Can I change the date of my journey after I have booked my bus
                  ticket?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Yes. You can change the date of journey after booking bus
                  ticket on redBus by clicking the “Reschedule” icon if you
                  think your travel plan might get interrupted while booking .
                  Bus operators with the “Reschedule icon” next to it offer
                  rescheduling of the bus ticket in case your initially selected
                  date is not viable to travel on.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  Is it mandatory to take a printout of the ticket?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  It depends on the bus operator you have booked your online bus
                  tickets with. Even mTickets are available on redBus. For
                  operators that support mTickets, the SMS that is sent to your
                  mobile can be produced at the time of boarding and you will be
                  allowed to travel.For operators that do not support mTickets
                  it is a must to take a printout of the e-ticket and produce it
                  at the time of boarding. The e-ticket is sent to the e-mail ID
                  provided at the time of boarding.To know which operators are
                  mTicket enabled, look for the mTicket icon under the mTicket
                  column while searching for buses.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  I've lost my ticket. What should I do now?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  A copy of the bus ticket would have been sent to you by email
                  when you booked bus ticket online. Please take a printout of
                  that mail and produce it at the time of boarding. If you have
                  not received the ticket e-mail, please call any of our call
                  centers and our executive will resend you a copy by mail.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>What is an mTicket?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  An mTicket is an SMS that is sent to your mobile on booking
                  bus tickets with select private bus operators. This SMS has
                  the TIN number and the PNR number along with other ticket
                  related information. It can be used to board the bus. Please
                  note that not all operators accept mTickets. To know which
                  operators are mTicket enabled, look for the mTicket icon under
                  the mTicket column while searching for buses.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  I didn’t receive my mTicket. Can you resend it?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  You can generate your mTicket online. To generate m-Ticket
                  online click on the Print/SMS ticket link on the redbus home
                  page on www.redBus.in. Enter your TIN number mentioned on the
                  e-ticket we emailed you. Choose the SMS option and click on
                  Submit. In case you don’t have a copy of the e-ticket either,
                  contact our call center and our executive will assist you.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  I entered the wrong mobile number while booking. Can I get my
                  mTicket on a different number?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Yes, you can get the m-Ticket on the different numbers.To get
                  the M-Ticket on the different number please contact redBus
                  call center and our customer executive will send you the
                  mTicket on your desired number.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ) : (
          ""
        )}
        {sets2 ? (
          <>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  Is it safe to use my credit or debit card to buy bus tickets
                  on redBus?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Transactions on redBus are very safe. We employ the
                  best-in-class security and the transactions done are secure.
                  Apart from being certified by Verisign, redBus uses Secure
                  Socket Layers (SSL) data encryption. Using SSL ensures that
                  the information exchanged with us is never transmitted
                  unencrypted, thus protecting the information from being viewed
                  by unauthorized individuals.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  Does the owner of the credit card/debit card with which the
                  bus ticket is purchased need to be one of the passengers?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Not at all! A passenger can use any debit or credit card to
                  pay for the bus ticket, not necessarily their own. However,
                  please note that the passenger in whose name the ticket is
                  booked should carry a proof of his identity (along with the
                  ticket) at the time of boarding the bus.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  What are the different payment options available on Bus Ticket
                  booking?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  What are the different payment options available on Bus Ticket
                  booking? There are many payment modes available to book buses
                  on the redBus website and app. Some of these payment modes
                  that are available for the bus ticket booking process are:
                  Debit Card/Credit Card/ATM Cards (Visa, MasterCard, Maestro &
                  Rupay) Net Banking (HDFC Bank, ICICI Bank, Indian Bank, Axis
                  Bank, SBI and all major banks) UPI (Google Pay, Amazon Pay,
                  PhonePe) Book Now, Pay Later (Simpl) Wallets (Paytm) Make sure
                  to check the coupon code to get the discounts on bus booking
                  online, redBus offers a lot of redDeals to book the bus ticket
                  on budget.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  How does the transaction appear on my card / account
                  statement?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Transactions on redBus will appear as REDBUS.IN, www.redbus.in
                  in your bank statement.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ) : (
          ""
        )}
        {sets3 ? (
          <>
            {" "}
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>Can I cancel my bus ticket online?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  Yes you can cancel bus tickets online, Most of the tickets can
                  be canceled online. However, there are some bus tickets that
                  can only be canceled through our call center.However please
                  note that the cancellation fee and cancellation period may
                  differ for specific bus services. Please contact any of our
                  executives for cancellation details on any specific service.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>How can I cancel my bus ticket online?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  To cancel the bus ticket online, you need to click on the
                  cancellation link provided on our home page. Enter your ticket
                  number and the e-mail ID that was provided at the time of bus
                  booking and click on cancel ticket.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>I missed the bus. Do I get a refund?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  redBus provides a 100% refund if the bus is missed due to
                  either redBus or its partner company's fault. However, if the
                  bus is missed due to any other reason not directly related to
                  redBus no refund is provided.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  How can I get a refund in case I cancel my ticket?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  The refund is provided as per cancellation policy of the
                  operator. The refund can be credited to the source of payment
                  (Example: debit card, credit card, net banking) or credited to
                  redBus wallet. Wallet credit can be used for bus booking in
                  future (within 6 months of cancellation).
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>
                  What happens if the bus does not leave on time or is canceled?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  If your bus does not leave on time or is canceled, in such
                  situations, you will need to consult the counter of the
                  respective bus operators. You can also call the redBus
                  customer care to discuss the appropriate actions.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>How can I reschedule my bus tickets?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  To reschedule your bus ticket on redBus, follow these steps:
                  Visit https://www.redbus.in/reschedule Search for your bus
                  ticket by entering your ticket number and registered email ID.
                  Verify your online bus tickets details and select the date to
                  reschedule your journey. Select a bus operator, verify every
                  detail, and make your payment if any difference in bus ticket
                  prices needs to be cleared.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ) : (
          ""
        )}
        {sets4 ? (
          <>
            <Accordion className="acrdins">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>Details on Insurance</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ padding: "5px" }}>
                  For details on Insurance of your journey after bus ticket
                  booking, please refer to the Insurance Terms
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ) : (
          ""
        )}
      </Box>
      <Box sx={{ padding: "2px 0px", backgroundColor: " #f7f7f7" }}>
        <Box
          sx={{
            width: "85%",
            margin: "0 auto",
            fontFamily: "monospace",
            backgroundColor: " #f7f7f7",
          }}
        >
          <Accordion
            sx={{
              boxShadow: "none",
              borderBottom: "1px solid gba(243, 244, 249)",
              paddingBottom: "10px",
              paddingTop: "30px",
              backgroundColor: " #f7f7f7",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography sx={{ fontWeight: "800" }}>
                Popular Bus Routes
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ margin: "0", padding: "0" }}>
              <Typography sx={{ fontSize: "15px", lineHeight: "2" }}>
                Delhi To Manali Bus | Delhi To Rishikesh Bus | Delhi To Shimla
                Bus | Delhi To Nainital Bus | Delhi To Katra Bus | Bangalore To
                Goa Bus | Bangalore To Hyderabad Bus | Bangalore To Tirupathi
                Bus | Bangalore To Chennai Bus | Bangalore To Pondicherry Bus |
                Hyderabad To Bangalore Bus | Hyderabad To Goa Bus | Hyderabad To
                Srisailam Bus | Hyderabad To Vijayawada Bus | Hyderabad To
                Tirupathi Bus | Pune To Goa Bus | Pune To Mumbai Bus | Pune To
                Nagpur Bus | Pune To Kolhapur Bus | Pune To Nashik Bus | Mumbai
                To Goa Bus | Mumbai To Pune Bus | Mumbai To Shirdi Bus | Mumbai
                To Mahabaleshwar Bus | Mumbai To Kolhapur Bus | Kolkata To Digha
                Bus | Kolkata To Siliguri Bus | Kolkata To Puri Bus | Kolkata To
                Bakkhali Bus | Kolkata To Mandarmani Bus | Chennai To Bangalore
                Bus | Chennai To Pondicherry Bus | Chennai To Coimbatore Bus |
                Chennai To Madurai Bus | Chennai To Tirupathi Bus | Chandigarh
                To Manali Bus | Chandigarh To Shimla Bus | Chandigarh To Delhi
                Bus | Chandigarh To Dehradun Bus | Chandigarh To Amritsar Bus |
                Coimbatore To Chennai Bus | Coimbatore To Bangalore Bus |
                Coimbatore To Ooty Bus | Coimbatore To Tiruchendur Bus |
                Coimbatore To Madurai Bus | Agra to Bareilly Bus | Hisar to
                Chandigarh Bus | Hisar to Delhi Bus | Lucknow to Ballia Bus |
                Lucknow to Moradabad Bus | Rajkot to Dwarka Bus | Siliguri to
                Gangtok Bus | Ahmedabad to Goa Bus | Ahmedabad to Kanpur Bus |
                Akola to Pune Bus
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: "none",
              backgroundColor: " #f7f7f7",
              paddingBottom: "10px",
              paddingTop: "30px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography sx={{ fontWeight: "900" }}>Popular Cities</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ margin: "0", padding: "0" }}>
              <Typography sx={{ lineHeight: "2" }}>
                Hyderabad Bus Tickets | Bangalore Bus Tickets | Chennai Bus
                Tickets | Pune Bus Tickets | Delhi Bus Tickets | Mumbai Bus
                Tickets| Kolkata Bus Tickets | Ernakulam Bus Tickets | Ahmedabad
                Bus Tickets | Vijayawada Bus Tickets
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: "none",
              backgroundColor: " #f7f7f7",
              paddingBottom: "10px",
              paddingTop: "30px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography sx={{ fontWeight: "900" }}>
                Popular Operators
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ margin: "0", padding: "0" }}>
              <Typography sx={{ lineHeight: "2" }}>
                No 1 Air Travels | YBM Travels | Sri SMS Travels | Svkdt Travels
                | RKT Tours and Travels | Royal CarsRahul Travels | JBT
                TravelsRaj Express | Vaishali ExpressRahul Travels | IndoreDelhi
                Tours And Travels | Ashok Travels | Greenline Travels | Pawan
                Travels | Ravi Travels | VRL Travels | Dolphin Travels | Ganesh
                Travels | Kaveri Travels | National Travels | Bharathi Travels |
                City Land Travels | Citylink Travels | KKaveri Travels | KK
                Travels | Mahadev Travels | Maharaja Travels | M R Travels | New
                Payal Travels | Paras Travels | Shree Parshwanath Travels |
                Payal Travels | R K Travels | Shivam Travels | Shree Mahaveer
                Travels | SRS Travels | Tulsi Travels | Vaibhav Travels | Vikas
                Travels | Amarnath Travels | Anand Travels | Ashapura Travels |
                Ashok Bus Service | Ashoka Travels
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};
