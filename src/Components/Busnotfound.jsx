import React, { useEffect, useState } from "react";
import { Box, Button, FormLabel, Input } from "@mui/material";
import { FaArrowRightLong, FaLess } from "react-icons/fa6";
import { TbArrowsLeftRight } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import { booktrue, dublicate, updates } from "./Slices";
import { useSearchParams, useNavigate } from "react-router-dom";
import oops from "./Img/Oops.svg";
export const Notfound = () => {
  const gobook = useNavigate();
  const dubl = useSelector((dats) => dats.datas.Ars);
  const dispatch = useDispatch();
  const [parm] = useSearchParams();
  let goingpnt = parm.get("gopoint");
  let recpnt = parm.get("reachpoint");
  let busnumber = Number(parm.get("bsnm"));
  let dtss = parm.get("dates");
  ////console(dtss)

  const [dt, setDt] = useState(dtss);
  const [isRotated, setIsRotated] = useState(false);
  const tdaydate = new Date();
  const [mdfys, setMdfys] = useState(false);
  const [bokng, setBokng] = useState(false);
  const [chg, setChg] = useState(false);
  const [gopnt, setGopnt] = useState(goingpnt);
  const [drpnt, setDrpnt] = useState(recpnt);
  const [goingpnts, setGoingpnt] = useState(goingpnt);
  const [recpnts, setRecpnt] = useState(recpnt);
  const [isRandom, setIsRandom] = useState(false);
  const [isRandom_one, setIsRandom_one] = useState(false);
  const [busnumbers, setBusnumbers] = useState(busnumber);
  const [day, setDaye] = useState();
  const [monthstr, setMonthstr] = useState();
  const [monthAbbreviation, setMontAbbr] = useState();
  const [year, setYear] = useState();
  const [month, setMont] = useState();
  const [formattedDate, setFormatted] = useState();
  useEffect(() => {
    // //////console(typeof dt)
    if (typeof dt === "object" && dt !== null) {
      const dates_1 = dt.getDate();
      const monttr = dt.getMonth();
      const yers = dt.getFullYear();
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthName = months[monttr];
      ////console(dates_1, monthName, yers)
      setDaye(dates_1);
      setMonthstr(monthName);
      ////console(monthstr)
      setYear(yers);
      setFormatted(new Date(yers, monttr, dates_1));
    }
    if (typeof dt === "string") {
      const dateComponents = dt?.split(" ");
      ////console(dateComponents);
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
      ////console(monthstr)
      ////console(monthMap[monthAbbreviation])
      setMont(monthMap[monthAbbreviation]);
      setFormatted(new Date(year, month, day));
    }
    // const dateComponents = dt?.split(" ");
  }, [dubl, gopnt, drpnt, day, month, year, dt, monthstr, monthAbbreviation]);
  let inptss = ({ target: { name, value } }) => {
    if (mdfys === true) {
      if (name === "inpt1") {
        setGopnt(value.toLowerCase());
        setGoingpnt(value.toLowerCase());
        setIsRandom(isRandomSequence(value));
      }
      if (name === "inpt2") {
        setDrpnt(value.toLowerCase());
        setRecpnt(value.toLowerCase());
        setIsRandom_one(isRandomSequence_one(value));
      }
      inpslct();
    }
  };
  let inpslct = (s) => {
    setDt(s);
  };
  const modify = () => {
    setMdfys(!mdfys);
  };

  let twist = () => {
    setIsRotated(!isRotated);
    setChg(!chg);
    setGopnt(drpnt);
    setDrpnt(gopnt);
    setGoingpnt(drpnt);
    setRecpnt(gopnt);
  };
  let flmdfy = () => {
    setMdfys(false);
  };

  //////console(gopnt, drpnt, "&&", goingpnts, recpnts)
  const isRandomSequence = (value) => {
    const randomnessThreshold = 0.6;
    const uniqueCharacters = new Set(value.split(""));
    const uniquenessRatio = uniqueCharacters.size / value.length;
    //////////console(uniquenessRatio)
    return uniquenessRatio < randomnessThreshold;
  };
  const isRandomSequence_one = (value) => {
    const randomratio = 0.6;
    const uniqueCharacters = new Set(value.split(""));
    const uniqueletter = uniqueCharacters.size / value.length;
    // //////////console(uniquenessRatio)
    return uniqueletter < randomratio;
  };
  let chngbus = () => {
    //////console(gopnt, drpnt)
    if (gopnt === drpnt) {
      alert("dont Enter same Place");
    } else if (isRandom || isRandom_one) {
      alert("Please Enter The valid Route");
    } else {
      let ars = dubl?.map((val, i) => {
        return val.from === gopnt && val.to === drpnt
          ? {
              ...val,
              date: dt,
              from: gopnt,
              to: drpnt,
              busses: val.busses.map((vls, ins) => {
                return { ...vls, date: dt, boarding: gopnt, droping: drpnt };
              }),
            }
          : val;
      });

      // var lll = 0;
      // let sss = dubl?.map((v, i) => {
      //   return v.from !== gopnt || v.to !== drpnt ? false : true;
      // });
      // //////////console(sss)
      // let ddd = sss?.some();
      // console(ddd);

      // if (ddd === true) {
      //   let sssss = dubl?.find((v, i) =>
      //     v.from === goingpnts && v.to === drpnt ? v : ""
      //   );
      //   //////////console(sssss)
      //   setBusnumbers(sssss?.busno);
      //   gobook(
      //     `/booking?gopoint=${goingpnts}&&reachpoint=${drpnt}&&bsnm=${sssss?.busno}&&dates=${formattedDate}`
      //   );
      // }
      // if (ddd === false) {
      //   ("");
      // }
      const foundData = dubl?.find(
        (val) => val.from === goingpnts && val.to === recpnts
      );
      if (foundData) {
        const { busno } = foundData;
        gobook(
          `/booking?gopoint=${goingpnts}&&reachpoint=${recpnts}&&bsnm=${busno}&&dates=${formattedDate}`
        );
      } else {
        // notfoundbus(
        //   `/notfound?gopoint=${in1}&&reachpoint=${in2}&&dates=${in3}`
        // );
      }
      // dispatch(updates(ss));

      dispatch(updates(ars));
      dispatch(dublicate(ars));
      setMdfys(false);
    }
  };

  return (
    <>
      <>
        {mdfys ? (
          <Box
            maxWidth="xl"
            display={{ xs: "grid", sm: "flex", md: "flex", xl: "flex" }}
            sx={{ alignItems: "center" }}
            className="secnavs"
          >
            <Box component={FormLabel} sx={{ fontSize: "15px" }}>
              FROM
            </Box>
            <Box
              component={Input}
              onChange={inptss}
              value={gopnt}
              name="inpt1"
              sx={{ textAlign: "center" }}
              width={{ xs: "100%", sm: "20%", md: "20%", xl: "20%" }}
              display={"inline-block"}
              fontSize={"15px"}
              fontWeight={"700"}
              padding={"2px"}
              marginLeft={"5px"}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <TbArrowsLeftRight
                onClick={twist}
                style={{
                  margin: "0% 1% 0% 1%",
                  transform: isRotated ? "rotate(180deg)" : "none",
                  transition: "transform 0.5s ease",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Box component={FormLabel} sx={{ fontSize: "15px" }}>
              TO
            </Box>
            <Box
              component={Input}
              value={drpnt}
              onChange={inptss}
              name="inpt2"
              style={{ textAlign: "center" }}
              width={{ xs: "100%", sm: "20%", md: "20%", xl: "20%" }}
              //onChange={(se)=>(setDrpnt(se.target.value))}
              fontWeight={"700"}
              fontSize={"15px"}
              padding={"2px"}
              margin={"0% 1% 0% 1%"}
            />
            <Box component={FormLabel} sx={{ fontSize: "15px" }}>
              DATE
            </Box>
            <Box
              component={ReactDatePicker}
              selected={formattedDate}
              minDate={tdaydate}
              onSelect={inpslct}
              dateFormat="d MMM y"
              name="dtinp3"
              // onChange={(d)=>(setDpinp(d))}
              width={{ xs: "100px", sm: "90%", md: "90%", xl: "90%" }}
              className="dtpickr"
              padding={"2px"}
              margin={"0% 1% 0% 1%"}
            />
            <Button
              onClick={chngbus}
              style={{
                display: "inline-block",
                backgroundColor: "ButtonFace",
                margin: "0% 1% 0% 1%",
              }}
            >
              Search Bus
            </Button>
            <Box>
              <IoCloseSharp
                onClick={flmdfy}
                style={{ display: "inline-block", fontSize: "20px" }}
              />
            </Box>
          </Box>
        ) : (
          <Box
            // sx={{}}

            className="secnavs"
          >
            <h3 style={{ display: "inline-block", marginLeft: "2%" }}>
              {gopnt}
            </h3>
            <FaArrowRightLong style={{ marginLeft: "2%" }} />
            <h3 style={{ display: "inline-block", marginLeft: "2%" }}>
              {drpnt}
            </h3>
            <h3 style={{ display: "inline-block", marginLeft: "2%" }}>
              {day} {monthstr}
              <h6>{year}</h6>
            </h3>
            {/* <h3 style={{ display: "inline-block", marginLeft: "2%" }}>{tme} {kk} {yer}</h3> */}

            <Button
              onClick={modify}
              style={{
                backgroundColor: "ButtonFace",
                marginLeft: "2%",
                padding: "0.2%",
              }}
              className="mdfybtn"
            >
              Modify
            </Button>
          </Box>
        )}
      </>
      <Box
        sx={{
          textalign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: {
            xs: "70vh",
            md: "90vh",
            sm: "90vh",
            xl: "100vh",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box component="img" src={oops} />
          <Box component="h3">Oops! No Busses Found</Box>
          <p>Oops! No Busses Found</p>
        </Box>
      </Box>
    </>
  );
};
