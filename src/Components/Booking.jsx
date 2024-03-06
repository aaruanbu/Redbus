import { Box, Button, FormLabel, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaLess } from "react-icons/fa6";
import { TbArrowsLeftRight } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsSunset } from "react-icons/bs";
import { TiArrowSortedDown, TiStar } from "react-icons/ti";
import { BiBlanket } from "react-icons/bi";
import { TbLamp2 } from "react-icons/tb";
import { Typography } from "@mui/material";
import { FaTag } from "react-icons/fa6";
import { FaBottleWater } from "react-icons/fa6";
import SosIcon from "@mui/icons-material/Sos";
import ReactDatePicker from "react-datepicker";
import { PiSunHorizon } from "react-icons/pi";
import { BiCheck } from "react-icons/bi";
import { RxSun } from "react-icons/rx";
import { CiHeadphones } from "react-icons/ci";
import { dublicate, updates } from "./Slices";
import { BsSunrise } from "react-icons/bs";
import { useSearchParams, useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { FaBus } from "react-icons/fa6";
import { PiPlugCharging } from "react-icons/pi";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Smallcrousel } from "./Smallcarousel";
export const Booking = () => {
  let kkk = useSelector((dats) => dats.datas);
  const dubl = useSelector((dats) => dats.datas.Ars);
  const mfys = useSelector((dats) => dats.datas.dub);
  const booktru = useSelector((dats) => dats.datas.ticketbooking);
  const [mfy, setMfy] = useState([]);
  const [sorts, setSorts] = useState([]);
  const [buscunt, setBuscunt] = useState();
  const [gopnt, setGopnt] = useState("");
  const [drpnt, setDrpnt] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  const [dubli, setDubli] = useState([]);
  const [mdfys, setMdfys] = useState(false);
  const dispatch = useDispatch();
  const [ss, setSs] = useState();
  const [booked, setBooked] = useState([]);
  const [bokng, setBokng] = useState(false);
  const [chg, setChg] = useState(false);
  const [shotcks, setShotcks] = useState();
  const [track, setTrack] = useState(false);
  const [find_busid, setFind_busid] = useState();
  const [not_found, setNot_found] = useState(false);
  const [depaturebefore6am, setDepature6am] = useState(false);
  const [reachAfter6am, setAfrter6am] = useState(false);
  const [depatureAfter6amto12pm, setAfrter6am12pm] = useState(false);
  const [depaturebefore6pm, setDepature6pm] = useState(false);
  const [depatureafore6pm, setDepatureafter6pm] = useState(false);
  const [busnom, setBusnom] = useState();
  const [parm] = useSearchParams();
  let goingpnt = parm.get("gopoint");
  let recpnt = parm.get("reachpoint");
  let busnumber = Number(parm.get("bsnm"));
  let shos = Number(parm.get("sho"));
  let dtss = parm.get("dates");
  const [checked, setChecked] = useState(false);
  const [dt, setDt] = useState(dtss);
  const [checked_two, setChecked_two] = useState(false);
  const [sho, setSho] = useState(shos);
  const [checked_rise, setChecked_rise] = useState(false);
  const [checkedreach12pmto6pm, setCheckedreach12pmto6pm] = useState(false);
  const [checkedreach6pm, setCheckedreach6pm] = useState(false);
  const [checkedrise, setCheckedRise] = useState(false);
  const [checkeBefore6, setCheckedBefore6] = useState(false);
  const [checke6amto12pm, setChecked6amto12pm] = useState(false);
  const [checkereach6amto12pm, setCheckedreachpmto12pm] = useState(false);
  const [reach12pmto6pm, setreach12pmto6pm] = useState(false);
  const [reached6pm, setreached6pm] = useState(false);
  const [day, setDaye] = useState();
  const [monthstr, setMonthstr] = useState();
  const [monthAbbreviation, setMontAbbr] = useState();
  const [year, setYear] = useState();
  const [month, setMont] = useState();
  const [formattedDate, setFormatted] = useState();
  let Nav = useNavigate();
  let notfoundbus = useNavigate();
  const [goingpnts, setGoingpnt] = useState(goingpnt);
  const [recpnts, setRecpnt] = useState(recpnt);
  const [isRandom, setIsRandom] = useState(false);
  const [isRandom_one, setIsRandom_one] = useState(false);
  const [busnumbers, setBusnumbers] = useState(busnumber);
  const [after_10seat, setAfter_10seat] = useState();
  const [before_10seat, setBefore_10seat] = useState();
  const [waterbottle, setWaterbottle] = useState(false);
  const [Blankets, setBlankets] = useState(false);
  const [Emergency, setEmergency] = useState(false);
  const [Trackbus, setTrackbus] = useState(false);
  const [Charges, setCharges] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const tdaydate = new Date();
  let rised_one = <BsSunrise />;
  let rised_two = <RxSun />;
  const orgnlbusses = dubl?.find((v, i) => v.busno === busnumbers);
  const bussess = orgnlbusses.busses;

  let pricess = bussess?.map((v) => {
    return v.pricing;
  });
  let sortinged = pricess?.sort((b, a) => a - b);
  let sorting = sortinged?.slice(9);

  let ssks = bussess?.map((v) => {
    return v.traveltimes;
  });
  let ssks2 = bussess?.map((v) => {
    return v.traveltime;
  });

  let ssssss = ssks2?.filter((a) => {
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
      setDaye(dates_1);
      setMonthstr(monthName);
      setYear(yers);
      setFormatted(new Date(yers, monttr, dates_1));
    }
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

    const orgnlbus = dubl?.find((v, i) => v.busno === busnumbers);

    const busses = orgnlbus?.busses;
    if (orgnlbus) {
      setMfy(busses);
      if (booktru === true) {
        setMdfys(false);
      }
      setBuscunt(busses.length);
      if (chg === false && orgnlbus) {
        busses?.forEach((bus) => {
          setDrpnt(bus.droping);
          setGopnt(bus.boarding);
        });
      }
    }
    const c = busses?.flatMap((bus) =>
      bus.busid === find_busid
        ? bus.seats.filter((seat) => seat.seatshow === true)
        : []
    );
    const dubs = c?.find(
      (seat) => seat.seatshow === true && seat.seatbooking === false
    );
    setDubli([dubs, before_10seat, after_10seat]);

    // Find booked seats
    const bookedSeats = busses?.flatMap((bus) =>
      bus.busid === find_busid
        ? bus.seats.filter((seat) => seat.seatbooking === true)
        : []
    );
    setBooked(bookedSeats);
    let rest = dubl?.filter((vls, i) => {
      return vls.from === gopnt && vls.to === drpnt ? vls : "";
    });
    let beforess = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.bustimes < 6 ? v : "";
      });
    });
    if (beforess?.length === 0) {
      setDepature6am(true);
    } else {
      setDepature6am(false);
    }
    let after6ams = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.reachtimes < 6 ? v : "";
      });
    });
    if (after6ams?.length === 0) {
      setAfrter6am(true);
    } else {
      setAfrter6am(false);
    }
    let after6amto12pm = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.bustimes > 6 && v.bustimes <= 12 ? v : "";
      });
    });
    if (after6amto12pm?.length === 0) {
      setAfrter6am12pm(true);
    } else {
      setAfrter6am12pm(false);
    }
    let pmto6pm = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.bustimes < 18 ? v : "";
      });
    });
    if (pmto6pm?.length === 0) {
      setDepature6pm(true);
    } else {
      setDepature6pm(false);
    }
    let after6pm = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.bustimes >= 18 ? v : "";
      });
    });
    if (after6pm?.length === 0) {
      setDepatureafter6pm(true);
    } else {
      setDepatureafter6pm(false);
    }
    let reach6amto12pm = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.reachtimes > 6 && v.reachtimes <= 12 ? v : "";
      });
    });
    if (reach6amto12pm?.length === 0) {
      setCheckedreachpmto12pm(true);
    } else {
      setCheckedreachpmto12pm(false);
    }
    let beforesreach = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.bustimes < 6 ? v : "";
      });
    });
    if (beforesreach?.length === 0) {
      setDepature6am(true);
    } else {
      setDepature6am(false);
    }
    let reach12pmto6pm = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.reachtimes > 12 && v.reachtimes <= 18 ? v : "";
      });
    });
    if (reach12pmto6pm?.length === 0) {
      setreach12pmto6pm(true);
    } else {
      setreach12pmto6pm(false);
    }
    let reachs6pm = rest?.filter((a, b) => {
      return a.busses.find((v, i) => {
        return v.reachtimes > 18 ? v : "";
      });
    });
    if (reachs6pm?.length === 0) {
      setreached6pm(true);
    } else {
      setreached6pm(false);
    }
    if (showModal === true) {
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
  }, [dubl, monthAbbreviation, day, month, year, dt, showModal]);
  if (dubli?.length > 0) {
    mfy?.filter((vlss, idss) => {
      return vlss.busid === find_busid
        ? vlss.seats?.find((vl, i) => {
            return vl.seatshow === true &&
              vl.seatid === ss &&
              vl.seatbooking === false
              ? setBokng(true)
              : "";
          })
        : vlss;
    });
  }

  if (bokng === true) {
    Nav(
      `/seatbooks?stid=${shotcks}&bsid=${find_busid}&busnm=${busnumbers}&&dates=${formattedDate}`
    );
  }

  const modify = () => {
    setMdfys(!mdfys);
  };

  let shotickts = (ids) => {
    setSho(ids);
    let kks = dubl.map((vl, i) => {
      return vl.busno === busnumbers
        ? {
            ...vl,
            busses: vl.busses.map((bs, ix) => {
              return ids === bs.busid
                ? { ...bs, showseats: !bs.showseats }
                : bs;
            }),
          }
        : vl;
    });
    dispatch(updates(kks));
  };

  let twist = () => {
    setChg(true);
    setIsRotated(!isRotated);

    setGopnt(drpnt);
    setDrpnt(gopnt);
  };

  let flmdfy = () => {
    setMdfys(false);
  };
  let inptss = ({ target: { name, value } }) => {
    if (mdfys == true) {
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
      inpslct;
    }
  };
  let inpslct = (s) => {
    setDt(s);
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
  let chngbus = () => {
    setChg(false);
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
      // let ddd = sss?.some((v, i) => v);

      // if (ddd === true) {
      //   let sssss = dubl?.find((v, i) =>
      //     v.from === gopnt && v.to === drpnt ? v : ""
      //   );
      //   setBusnumbers(sssss?.busno);
      //   setNot_found(false);
      // }
      // if (ddd === false) {
      //   notfoundbus(
      //     `/notfound?gopoint=${gopnt}&&reachpoint=${drpnt}&&dates=${formattedDate}`
      //   );
      // }
      const foundData = dubl?.find(
        (val) => val.from === gopnt && val.to === drpnt
      );
      if (foundData) {
        const { busno } = foundData;
        setBusnumbers(busno);
        // gobook(
        //   `/booking?gopoint=${in1}&&reachpoint=${in2}&&bsnm=${busno}&&dates=${in3}`
        // );
      } else {
        notfoundbus(
          `/notfound?gopoint=${gopnt}&&reachpoint=${drpnt}&&dates=${formattedDate}`
        );
      }

      // }
      dispatch(updates(ars));
      dispatch(dublicate(ars));
      setMdfys(false);
    }
  };
  let hdetickts = (ide) => {
    let savs = dubl.map((vls, i) => {
      return vls.from === gopnt && vls.to === drpnt
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
  const bookings = (id, v) => {
    setSs(v);

    let seatsset = dubl.map((vls, i) => {
      return vls.from === gopnt && vls.to === drpnt
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

    setFind_busid(id);
    dispatch(updates(seatsset));

    ass(v);
  };

  let ass = (stid) => {
    setShotcks(stid);
  };

  const depature = () => {
    // Assuming mfys is a state variable
    let modifiedMfys = mfys?.map((vls, i) => {
      if (vls.from === gopnt && vls.to === drpnt) {
        return {
          ...vls,
          busses: vls.busses.slice().sort((a, b) => a.bustimes - b.bustimes),
        };
      } else {
        return vls;
      }
    });
    dispatch(updates(modifiedMfys));
  };
  const duration = () => {
    let dura = mfys?.map((vls, i) => {
      if (vls.from === gopnt && vls.to === drpnt) {
        return {
          ...vls,
          busses: vls.busses
            .slice()
            .sort((a, b) => a.traveltimes - b.traveltimes),
        };
      } else {
        return vls;
      }
    });
    dispatch(updates(dura));
  };
  const arrival = () => {
    let arriv = mfys?.map((vls, i) => {
      if (vls.from === gopnt && vls.to === drpnt) {
        return {
          ...vls,
          busses: vls.busses
            .slice()
            .sort((a, b) => a.reachtimes - b.reachtimes),
        };
      } else {
        return vls;
      }
    });
    dispatch(updates(arriv));
  };
  const rating = () => {
    let ratin = mfys?.map((vls, i) => {
      if (vls.from === gopnt && vls.to === drpnt) {
        return {
          ...vls,
          busses: vls.busses.slice().sort((a, b) => b.ratings - a.ratings),
        };
      } else {
        return vls;
      }
    });
    dispatch(updates(ratin));
  };
  const livetrack = () => {
    setTrack(false);
    let els = mfys?.map((vls, i) => {
      return vls;
    });
    dispatch(updates(els));
  };
  const livetrack_two = () => {
    if (not_found) {
    } else {
      setTrack(true);
      let trak = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) =>
              a.livetracking === true ? a : ""
            ),
          };
        } else {
          return vls;
        }
      });

      dispatch(updates(trak));
    }
  };

  const livetrac = () => {
    if (not_found) {
    } else {
      setTrack(false);
      let els = mfys?.map((vls, i) => {
        return vls;
      });
      dispatch(updates(els));
    }
  };
  const read = (f) => {
    setChecked(!checked);
    if (f.target.checked === true) {
      let re = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses.filter((a, b) => (a.bustimes <= 18 ? a : "")),
          };
        } else {
          return vls;
        }
      });
      dispatch(updates(re));
    } else if (f.target.checked === false) {
      let se = mfys?.map((a, v) => {
        return a.from === gopnt && a.to === drpnt ? a : a;
      });
      dispatch(updates(se));
    }
  };
  let incs = <BsSunset />;
  const readss = () => {
    setChecked(false);
    let set = mfys?.map((a, v) => {
      return a;
    });
    dispatch(updates(set));
  };
  const readss_two = () => {
    setChecked_two(false);
    let set = mfys?.map((a, v) => {
      return a.from === gopnt && a.to === drpnt ? a : a;
    });
    dispatch(updates(set));
  };
  const reads = (f) => {
    setChecked_two(!checked_two);
    if (f.target.checked === true) {
      let re = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses.filter((a, b) => (a.bustimes >= 18 ? a : "")),
          };
        } else {
          return vls;
        }
      });
      dispatch(updates(re));
    } else if (f.target.checked === false) {
      let se = mfys?.map((a, v) => {
        return a.from === gopnt && a.to === drpnt ? a : a;
      });
      dispatch(updates(se));
    }
  };
  const raisedbefore = (f) => {
    setCheckedBefore6(!checkeBefore6);
    if (f.target.checked === true) {
      let re = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses.filter((a, b) => (a.bustimes < 6 ? a : "")),
          };
        } else {
          return vls;
        }
      });
      dispatch(updates(re));
    } else if (f.target.checked === false) {
      let se = mfys?.map((a, v) => {
        return a.from === gopnt && a.to === drpnt ? a : a;
      });
      dispatch(updates(se));
    }
  };
  const after6amto12pms = (f) => {
    setChecked6amto12pm(!checke6amto12pm);
    if (f.target.checked === true) {
      let re = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses.filter((a, b) =>
              a.bustimes > 6 && a.bustimes <= 12 ? a : ""
            ),
          };
        } else {
          return vls;
        }
      });
      dispatch(updates(re));
    } else if (f.target.checked === false) {
      let se = mfys?.map((a, v) => {
        return a.from === gopnt && a.to === drpnt ? a : a;
      });
      dispatch(updates(se));
    }
  };
  const raise = (f) => {
    setCheckedRise(!checkedrise);
    if (f.target.checked === true) {
      let re = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses.filter((a, b) => (a.reachtimes < 6 ? a : "")),
          };
        } else {
          return vls;
        }
      });
      dispatch(updates(re));
    } else if (f.target.checked === false) {
      let se = mfys?.map((a, v) => {
        return a.from === gopnt && a.to === drpnt ? a : a;
      });
      dispatch(updates(se));
    }
  };
  const raise_two = () => {
    setCheckedRise(false);
    let set = mfys?.map((a, v) => {
      return a.from === gopnt && a.to === drpnt ? a : a;
    });
    dispatch(updates(set));
  };
  const raise_twossss = () => {
    setChecked6amto12pm(false);
    let set = mfys?.map((a, v) => {
      return a.from === gopnt && a.to === drpnt ? a : a;
    });
    dispatch(updates(set));
  };
  const raisess = (f) => {
    setChecked_rise(!checked_rise);
    if (f.target.checked === true) {
      let re = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) =>
              a.reachtimes > 6 && a.reachtimes <= 12 ? a : ""
            ),
          };
        } else {
          return vls;
        }
      });

      dispatch(updates(re));
    } else if (f.target.checked === false) {
      let se = mfys?.map((a, v) => {
        return a.from === gopnt && a.to === drpnt ? a : a;
      });
      dispatch(updates(se));
    }
  };
  const reach12to6pm = (f) => {
    setCheckedreach12pmto6pm(!checkedreach12pmto6pm);
    if (f.target.checked === true) {
      let re = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) =>
              a.reachtimes > 12 && v.reachtimes <= 18 ? a : ""
            ),
          };
        } else {
          return vls;
        }
      });

      dispatch(updates(re));
    } else if (f.target.checked === false) {
      let se = mfys?.map((a, v) => {
        return a.from === gopnt && a.to === drpnt ? a : a;
      });
      dispatch(updates(se));
    }
  };
  const reach6pm = (f) => {
    setCheckedreach6pm(!checkedreach6pm);
    if (f.target.checked === true) {
      let re = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) =>
              a.reachtimes > 12 && v.reachtimes <= 18 ? a : ""
            ),
          };
        } else {
          return vls;
        }
      });

      dispatch(updates(re));
    } else if (f.target.checked === false) {
      let se = mfys?.map((a, v) => {
        return a.from === gopnt && a.to === drpnt ? a : a;
      });
      dispatch(updates(se));
    }
  };

  const raise_one = () => {
    setChecked_rise(false);
    let set = dubl?.map((a, v) => {
      return a.from === gopnt && a.to === drpnt ? a : a;
    });
    dispatch(updates(set));
  };
  let inc = <PiSunHorizon />;
  const waters_one = () => {
    if (not_found) {
    } else {
      let trak = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) =>
              a.waterbottle === true ? a : ""
            ),
          };
        } else {
          return vls;
        }
      });

      let sds = trak.map((vals, i) => {
        if (vals.from === gopnt && vals.to === drpnt) {
          if (vals.busses.length === 0) {
            setShowModal(true);
          } else {
            setWaterbottle(true);
            dispatch(updates(trak));
          }
        }
        return "";
      });
    }
  };

  const waters = () => {
    if (not_found) {
    } else {
      setWaterbottle(false);
      let els = mfys?.map((vls, i) => {
        return vls;
      });
      dispatch(updates(els));
    }
  };

  const blanketes = () => {
    if (not_found) {
      // Handle the case where 'not_found' is true
    } else {
      let trak = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) => (a.Blanket === true ? a : "")),
          };
        } else {
          return vls;
        }
      });

      let ooo = trak.map((vals, i) => {
        if (vals.from === gopnt && vals.to === drpnt) {
          if (vals.busses.length === 0) {
            setShowModal(true);
          } else {
            setBlankets(true);
            dispatch(updates(trak));
          }
        }
        return "";
      });
    }
  };

  const blanket = () => {
    if (not_found) {
    } else {
      setBlankets(false);
      let els = mfys?.map((vls, i) => {
        return vls;
      });
      dispatch(updates(els));
    }
  };
  const emergencys = () => {
    if (not_found) {
    } else {
      setEmergency(false);
      let els = mfys?.map((vls, i) => {
        return vls;
      });
      dispatch(updates(els));
    }
  };
  const emers = () => {
    if (not_found) {
    } else {
      let trak = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) =>
              a.emergencycontact === true ? a : ""
            ),
          };
        } else {
          return vls;
        }
      });

      let ooo = trak.map((vals, i) => {
        if (vals.from === gopnt && vals.to === drpnt) {
          if (vals?.busses?.length === 0) {
            setShowModal(true);
          } else {
            setEmergency(true);
            dispatch(updates(trak));
          }
        }
        return "";
      });
    }
  };

  const tracksmybus = () => {
    if (not_found) {
    } else {
      setTrackbus(false);
      let els = mfys?.map((vls, i) => {
        return vls;
      });
      dispatch(updates(els));
    }
  };
  const trackbusses = () => {
    if (not_found) {
    } else {
      let trak = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) =>
              a.livetracking === true ? a : ""
            ),
          };
        } else {
          return vls;
        }
      });

      let oo = trak.map((vals, i) => {
        if (vals.from === gopnt && vals.to === drpnt) {
          if (vals.busses.length === 0) {
            setShowModal(true);
          } else {
            setTrackbus(true);
            dispatch(updates(trak));
          }
        }
        return "";
      });
    }
  };

  const chargess = () => {
    if (not_found) {
    } else {
      setCharges(false);
      let els = mfys?.map((vls, i) => {
        return vls;
      });
      dispatch(updates(els));
    }
  };
  const charged = () => {
    if (not_found) {
    } else {
      let trak = mfys?.map((vls, i) => {
        if (vls.from === gopnt && vls.to === drpnt) {
          return {
            ...vls,
            busses: vls.busses?.filter((a, b) => (a.charger === true ? a : "")),
          };
        } else {
          return vls;
        }
      });

      let o_ = trak?.map((vals, i) => {
        if (vals?.from === gopnt && vals?.to === drpnt) {
          if (vals?.busses?.length === 0) {
            setShowModal(true);
          } else {
            setCharges(true);
            dispatch(updates(trak));
          }
        }
        return "";
      });
    }
  };

  return (
    <>
      <div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              {/* <span className="close">&times;</span> */}
              <p>Oops No Busses Found</p>
            </div>
          </div>
        )}
      </div>
      <Box className="booking-page">
        {booktru ? (
          ""
        ) : (
          <>
            {mdfys ? (
              <Box
                maxWidth="xl"
                display={{ xs: "grid", sm: "flex", md: "flex", xl: "flex" }}
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
              <Box className="secnavs">
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
        )}

        {booktru ? (
          ""
        ) : (
          <Box display={{ xs: "none", sm: "none", md: "block", xl: "block" }}>
            <Box
              display={{ xs: "none", sm: "none", md: "block", xl: "block" }}
              width={"100%"}
              sx={{ display: "flex" }}
            >
              <Box className="sidebox1">
                <h3>FILTERS</h3>
              </Box>
              <Box padding={"10px"} className="sidebox2">
                <h4>{buscunt} BUSES FOUND</h4>
                <h4>SORT BY:</h4>
                <h6 onClick={depature} className="bakclr">
                  Depature
                </h6>
                <h6 onClick={duration} className="bakclr">
                  Duration
                </h6>
                <h6 onClick={arrival} className="bakclr">
                  Arrival
                </h6>
                <h6 onClick={rating} className="bakclr">
                  Ratings
                </h6>
                <h6 className="bakclr">Fare</h6>
                <h6 className="bakclr">Seats Available</h6>
              </Box>
            </Box>
          </Box>
        )}

        <Box width={"100%"} sx={{ display: "flex" }}>
          <Box
            display={{ xs: "none", md: "block", sm: "block", xl: "block" }}
            className="sidebox"
          >
            {track ? (
              <Box
                onClick={livetrack}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderTop: "1px solid rgba(192, 192, 192, 9.660)",
                  borderBottom: "1px solid rgba(192, 192, 192, 9.660)",
                  margin: "10px 5px",
                  padding: "10px 0px",
                  cursor: "pointer",
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
                onClick={livetrack_two}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderTop: "1px solid rgba(192, 192, 192, 0.960)",
                  borderBottom: "1px solid rgba(192, 192, 192, 9.660)",
                  margin: "10px 5px",
                  cursor: "pointer",
                  padding: "10px 0px",
                }}
              >
                <FaMapLocationDot />
                <h4 style={{}}>Live Tracking</h4>
                <BiCheck size={"22px"} />
              </Box>
            )}
            <Box>
              <Box
                sx={{ fontWeight: "700", textAlign: "center" }}
                component="h4"
              >
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
                              cursor: "pointer",
                            },
                          }}
                          checked={checkeBefore6}
                          onChange={raisedbefore}
                          // label="12 pm to 6 pm"
                          onClick={raisedbefore}
                          disabled={depaturebefore6am === true ? true : false}
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
                              cursor: "pointer",
                            },
                          }}
                          checked={checke6amto12pm}
                          onChange={after6amto12pms}
                          onClick={after6amto12pms}
                          disabled={
                            depatureAfter6amto12pm === true ? true : false
                          }
                        />
                      }
                      label={
                        <span>
                          {rised_one}
                          {" 6am to 12pm"}
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
                              cursor: "pointer",
                            },
                          }}
                          checked={checked}
                          onChange={read}
                          // label="12 pm to 6 pm"
                          onClick={read}
                          disabled={depaturebefore6pm === true ? true : false}
                        />
                      }
                      // placeholder={}
                      label={
                        <span>
                          {incs}
                          {" 12pm to 6pm"}
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
                              cursor: "pointer",
                            },
                          }}
                          checked={checked_two}
                          onChange={reads}
                          label="12 pm to 6 pm"
                          onClick={reads}
                          disabled={depatureafore6pm === true ? true : false}
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
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                                cursor: "pointer",
                              },
                            }}
                            checked={checkedrise}
                            onChange={raise}
                            onClick={raise}
                            disabled={reachAfter6am === true ? true : false}
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
                      {/* {<PiSunHorizonThin />} */}
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                                cursor: "pointer",
                              },
                            }}
                            checked={checked_rise}
                            onChange={raisess}
                            // label="12 pm to 6 pm"
                            onClick={raisess}
                            disabled={
                              checkereach6amto12pm === true ? true : false
                            }
                          />
                        }
                        label={
                          <span>
                            {rised_two}
                            {"6 am to 12pm"}
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
                                cursor: "pointer",
                              },
                            }}
                            checked={checkedreach12pmto6pm}
                            onChange={reach12to6pm}
                            onClick={reach12to6pm}
                            disabled={reach12pmto6pm === true ? true : false}
                          />
                        }
                        label={
                          <span>
                            {incs}
                            {"12pm to 6pm"}
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
                                cursor: "pointer",
                              },
                            }}
                            checked={checkedreach6pm}
                            onChange={reach6pm}
                            onClick={reach6pm}
                            disabled={reached6pm === true ? true : false}
                          />
                        }
                        label={
                          <span>
                            {inc}
                            {"After 6pm"}
                          </span>
                        }
                      />
                    </FormGroup>
                  </div>
                </Box>
              </Box>
              <Box>
                <Typography component="h3">AMENITIES</Typography>
                {waterbottle ? (
                  <Box
                    sx={{
                      display: "flex",
                      margin: "5% 0%",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                    onClick={waters}
                  >
                    <Box
                      sx={{
                        border: "1px  solid #db3737",
                        margin: "2%",
                        color: "#db3737",
                        borderRadius: "5px",
                        padding: "2% 3%",
                        display: "flex",
                      }}
                    >
                      <FaBottleWater aria-valuetext="waterbottle" />
                      Water Bottle
                    </Box>
                  </Box>
                ) : (
                  <Box
                    onClick={waters_one}
                    sx={{
                      display: "flex",
                      margin: "5% 0%",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px  solid gray",
                        margin: "2%",
                        color: "gray",
                        borderRadius: "5px",
                        padding: "2% 3%",
                        display: "flex",
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
                      cursor: "pointer",
                      margin: "5% 0%",
                      alignItems: "center",
                    }}
                    onClick={blanket}
                  >
                    <Box
                      sx={{
                        border: "1px  solid #db3737",
                        margin: "2%",
                        color: "#db3737",
                        borderRadius: "5px",
                        padding: "2% 3%",
                        display: "flex",
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
                      cursor: "pointer",
                      margin: "5% 0%",
                      alignItems: "center",
                    }}
                    onClick={blanketes}
                  >
                    <Box
                      sx={{
                        border: "1px  solid gray",
                        margin: "2%",
                        color: "gray",
                        borderRadius: "5px",
                        padding: "2% 3%",
                        display: "flex",
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
                      cursor: "pointer",
                    }}
                    onClick={emergencys}
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
                      cursor: "pointer",
                    }}
                    onClick={emers}
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
                      cursor: "pointer",
                      margin: "5% 0%",
                      alignItems: "center",
                    }}
                    onClick={tracksmybus}
                  >
                    <Box
                      sx={{
                        border: "1px  solid#db3737",
                        margin: "2%",
                        color: "#db3737",
                        borderRadius: "5px",
                        padding: "2% 3%",
                        display: "flex",
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
                      cursor: "pointer",
                      margin: "5% 0%",
                      alignItems: "center",
                    }}
                    onClick={trackbusses}
                  >
                    <Box
                      sx={{
                        border: "1px  solid gray",
                        margin: "2%",
                        color: "gray",
                        borderRadius: "5px",
                        padding: "2% 3%",
                        display: "flex",
                      }}
                    >
                      <FaMapLocationDot />
                      Track My Bus
                    </Box>
                  </Box>
                )}
                {Charges ? (
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                    onClick={chargess}
                  >
                    <Box
                      sx={{
                        border: "1px  solid #db3737",
                        margin: "2%",
                        color: "#db3737",
                        borderRadius: "5px",
                        padding: "2% 3%",
                        display: "flex",
                      }}
                    >
                      <PiPlugCharging />
                      Charging Poin
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                    onClick={charged}
                  >
                    <Box
                      sx={{
                        border: "1px  solid gray",
                        margin: "2%",
                        color: "gray",
                        borderRadius: "5px",
                        padding: "2% 3%",
                        display: "flex",
                      }}
                    >
                      <PiPlugCharging />
                      Charging Poin
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box
            className="mainbox"
            display={{ xs: "block", sm: "block", md: "block", xl: "block" }}
            width={{
              xs: "100%",
              sm: "85%",
              md: "85%",
              xl: "85%",
            }}
            key={1}
          >
            <Box className="mnb2">
              <React.Fragment key={2}>
                <Box>
                  <Box onClick={livetrac} sx={{ display: "inline-block" }}>
                    {track ? (
                      <Box
                        sx={{
                          display: "inline-block",
                          margin: "5px",
                          padding: "5px",
                          backgroundColor: " #c2c2c2",
                          borderRadius: "4px",
                        }}
                      >
                        <FaMapLocationDot style={{ margin: "0px 5px" }} />
                        Live Tracking
                        <IoCloseSharp
                          style={{ fontSize: "15px", marginLeft: "10px" }}
                        />
                      </Box>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    onClick={readss}
                    sx={{ display: "inline-block", margin: "9px 0px" }}
                  >
                    {checked ? (
                      <span
                        style={{
                          backgroundColor: " #c2c2c2",
                          padding: "5px",
                          margin: "4px",
                          borderRadius: "5px",
                        }}
                      >
                        <span>{incs}12pm to 6pm</span>
                        <IoCloseSharp
                          style={{ fontSize: "15px", marginLeft: "5px" }}
                        />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    onClick={readss_two}
                    sx={{ display: "inline-block", margin: "9px 0px" }}
                  >
                    {checked_two ? (
                      <span
                        style={{
                          backgroundColor: " #c2c2c2",
                          padding: "5px",
                          margin: "4px",
                          borderRadius: "5px",
                        }}
                      >
                        <span>{inc}After 6 pm</span>
                        <IoCloseSharp
                          style={{ fontSize: "15px", marginLeft: "5px" }}
                        />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    onClick={raise_two}
                    sx={{ display: "inline-block", margin: "9px 0px" }}
                  >
                    {checkedrise ? (
                      <span
                        style={{
                          backgroundColor: " #c2c2c2",
                          padding: "5px",
                          margin: "4px",
                          borderRadius: "5px",
                        }}
                      >
                        <span>{rised_one}Before 6 am</span>
                        <IoCloseSharp
                          style={{ fontSize: "15px", marginLeft: "5px" }}
                        />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    onClick={raise_twossss}
                    sx={{ display: "inline-block", margin: "9px 0px" }}
                  >
                    {checke6amto12pm ? (
                      <span
                        style={{
                          backgroundColor: " #c2c2c2",
                          padding: "5px",
                          margin: "4px",
                          borderRadius: "5px",
                        }}
                      >
                        <span>{rised_one}Before 6am to 12pm</span>
                        <IoCloseSharp
                          style={{ fontSize: "15px", marginLeft: "5px" }}
                        />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    onClick={raise_one}
                    sx={{ display: "inline-block", margin: "9px 0px" }}
                  >
                    {checked_rise ? (
                      <span
                        style={{
                          backgroundColor: " #c2c2c2",
                          padding: "5px",
                          margin: "4px",
                          borderRadius: "5px",
                        }}
                      >
                        <span>{rised_two} 6am to 12pm</span>
                        <IoCloseSharp
                          style={{ fontSize: "15px", marginLeft: "5px" }}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
                {not_found ? (
                  <>
                    <Box>
                      <Box
                        component="img"
                        src="/html/body/section/div[2]/div[3]/div/div[2]/div/img"
                      />
                    </Box>
                  </>
                ) : (
                  <React.Fragment>
                    <Box
                      display={{
                        xs: "none",
                        sm: "none",
                        md: "block",
                        xl: "block",
                      }}
                      key="smallcarousel"
                    >
                      <Smallcrousel />
                    </Box>
                    {mfy.map((v, i) => {
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
                                <Box>
                                  <h3 style={{ paddingRight: "0%" }}>
                                    {v.busname}
                                  </h3>
                                </Box>
                                <h3
                                  style={{
                                    paddingLeft: "17%",
                                    textAlign: "end",
                                  }}
                                >
                                  {v.bustime}
                                </h3>
                                <h5 style={{ paddingLeft: "2%" }}>
                                  {v.traveltime}
                                </h5>
                                <h3 style={{ paddingLeft: "2%" }}>
                                  {v.reachtime}
                                </h3>

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
                                      backgroundColor:
                                        "rgba(238, 235, 74, 0.986)",
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
                                      backgroundColor:
                                        "rgba(241, 128, 84, 0.986)",
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
                                  <h4 style={{ color: "red" }}>
                                    {day}-{monthstr}
                                  </h4>
                                  <h4>{v.boarding}</h4>
                                  <h4>{v.droping}</h4>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                  }}
                                >
                                  {v.livetracking ? (
                                    <span
                                      style={{
                                        backgroundColor: " #c2c2c2",
                                        padding: "5px",
                                        margin: "4px",
                                        borderRadius: "5px",
                                      }}
                                    >
                                      <FaMapLocationDot
                                        style={{ margin: "0px 5px" }}
                                      />
                                      Live Tracking
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                  <ul
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-around",
                                      gap: "10%",
                                    }}
                                  >
                                    <li title="Deep Cleaned Buses">
                                      {" "}
                                      {v.cleanbus ? <FaBus /> : ""}
                                    </li>
                                    <li title="Charging Point">
                                      {v.charger ? <PiPlugCharging /> : ""}
                                    </li>
                                    <li title="Emergency Contact Number">
                                      {v.emergencycontact ? <SosIcon /> : ""}
                                    </li>
                                    <li title="Reading Light">
                                      {v.readinglight ? <TbLamp2 /> : ""}
                                    </li>

                                    <li title="Bed Sheet">
                                      {v.Blanket ? <BiBlanket /> : ""}
                                    </li>
                                    <li title="Headsets">
                                      {v.headset ? <CiHeadphones /> : ""}
                                    </li>
                                    <li title="Water Bottle">
                                      {v.waterbottle ? (
                                        <FaBottleWater aria-valuetext="waterbottle" />
                                      ) : (
                                        ""
                                      )}
                                    </li>
                                  </ul>
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
                                    onClick={() => hdetickts(v.busid)}
                                    className="btnss"
                                  >
                                    hide seats
                                  </Button>
                                ) : (
                                  <Button
                                    onClick={() => shotickts(v.busid)}
                                    className="btnss"
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
                                    xs: "65%",
                                    sm: "80%",
                                    md: "45%",
                                    xl: "35%",
                                  },
                                }}
                              >
                                <Box sx={{ display: "block" }}>
                                  <Box> upper - deck</Box>
                                  <Box sx={{ display: "flex" }}>
                                    <Box
                                      sx={{
                                        paddingLeft: "5px !important",
                                        backgroundColor: "white",
                                        borderLeft: " 5px solid gray",
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
                                          <>
                                            <Box
                                              sx={{ display: "flex" }}
                                              key={ind}
                                            >
                                              <Box>
                                                {vl.seatshow ? (
                                                  vl.seatbooking ? (
                                                    <Box
                                                      sx={{
                                                        backgroundColor:
                                                          "rgba(8, 8, 8, 0.137)",
                                                        border:
                                                          " rgba(0, 0, 0, 0.226)",
                                                      }}
                                                      className="seat"
                                                    >
                                                      <p
                                                        style={{
                                                          fontSize: "12px",
                                                          textAlign: "center",
                                                          padding: "6px 10px",
                                                          border:
                                                            " rgba(0, 0, 0, 0.226)",
                                                        }}
                                                      ></p>
                                                      <p
                                                        style={{
                                                          padding: "5px 2px",
                                                          border:
                                                            "1px solid rgba(0, 0, 0, 0.253)",
                                                          borderRadius: "3px",
                                                        }}
                                                      ></p>
                                                    </Box>
                                                  ) : (
                                                    <Box
                                                      className="seat2"
                                                      onClick={() =>
                                                        bookings(
                                                          v.busid,
                                                          vl.seatid
                                                        )
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
                                                          border:
                                                            "1px solid black",
                                                          borderRadius: "3px",
                                                        }}
                                                      ></p>
                                                    </Box>
                                                  )
                                                ) : (
                                                  <Box
                                                    className={
                                                      vl.seatid > 10
                                                        ? "innermargin"
                                                        : "seat1"
                                                    }
                                                    onClick={() =>
                                                      bookings(
                                                        v.busid,
                                                        vl.seatid
                                                      )
                                                    }
                                                  >
                                                    <p
                                                      style={{
                                                        padding: "5px 2px",
                                                        border:
                                                          "1px solid black",
                                                        borderRadius: "3px",
                                                      }}
                                                    ></p>
                                                  </Box>
                                                )}
                                              </Box>
                                            </Box>
                                          </>
                                        ) : (
                                          ""
                                        );
                                      })}
                                    </Box>
                                  </Box>
                                </Box>

                                {/* after seats */}

                                <Box
                                  // display={{
                                  //   xs: "block",
                                  //   sm: "flex",
                                  //   xl: "flex",
                                  //   md: "flex",
                                  // }
                                  // }
                                  sx={{ display: "block" }}
                                >
                                  <Box>lower-deck</Box>
                                  <Box sx={{ display: "flex" }}>
                                    <Box
                                      className="seatss"
                                      sx={{
                                        borderLeft: "5px solid gray !important",
                                        paddingLeft: "50px !important",
                                      }}
                                    >
                                      {v.seats?.map((vl, ind) => {
                                        return vl.seatid > 10 ? (
                                          <>
                                            <Box
                                              sx={{ display: "flex" }}
                                              key={ind}
                                            >
                                              <Box>
                                                {vl.seatshow ? (
                                                  vl.seatbooking ? (
                                                    <Box
                                                      sx={{
                                                        backgroundColor:
                                                          "rgba(8, 8, 8, 0.137)",
                                                        border:
                                                          " rgba(0, 0, 0, 0.226)",
                                                      }}
                                                      className="seat"
                                                    >
                                                      <p
                                                        style={{
                                                          fontSize: "12px",
                                                          textAlign: "center",
                                                          padding: "6px 10px",
                                                          border:
                                                            " rgba(0, 0, 0, 0.226)",
                                                        }}
                                                      ></p>
                                                      <p
                                                        style={{
                                                          padding: "5px 2px",
                                                          border:
                                                            "1px solid rgba(0, 0, 0, 0.253)",
                                                          borderRadius: "3px",
                                                        }}
                                                      ></p>
                                                    </Box>
                                                  ) : (
                                                    <Box
                                                      className="seat2"
                                                      onClick={() =>
                                                        bookings(
                                                          v.busid,
                                                          vl.seatid
                                                        )
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
                                                          border:
                                                            "1px solid black",
                                                          borderRadius: "3px",
                                                        }}
                                                      ></p>
                                                    </Box>
                                                  )
                                                ) : (
                                                  <Box
                                                    className="seat1"
                                                    onClick={() =>
                                                      bookings(
                                                        v.busid,
                                                        vl.seatid
                                                      )
                                                    }
                                                  >
                                                    <p
                                                      style={{
                                                        padding: "5px 2px",
                                                        border:
                                                          "1px solid black",
                                                        borderRadius: "3px",
                                                      }}
                                                    ></p>
                                                  </Box>
                                                )}
                                              </Box>
                                            </Box>
                                          </>
                                        ) : (
                                          ""
                                        );
                                      })}
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                              {/* {beforeseats} */}

                              <Box>
                                <Box
                                  sx={{
                                    width: {
                                      xs: "100%",
                                      sm: "100%",
                                      md: "100%",
                                      xl: "50%",
                                    },

                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "10px",
                                  }}
                                >
                                  <Box>
                                    <p>available</p>
                                    <Box className="dumyseat1">
                                      <p
                                        style={{
                                          padding: "5px 2px",
                                          border: "1px solid black",
                                          borderRadius: "3px",
                                        }}
                                      ></p>
                                    </Box>
                                    <p>unavailable</p>
                                    <Box key={3} className="dumyseat">
                                      <p
                                        style={{
                                          padding: "5px 2px",
                                          border:
                                            "1px solid rgba(0, 0, 0, 0.251)",
                                          borderRadius: "3px",
                                        }}
                                      ></p>{" "}
                                    </Box>
                                  </Box>

                                  {/* <Tckts vlds={ss} sh={shotcks} /> */}
                                </Box>
                              </Box>
                            </Box>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </React.Fragment>
                )}
              </React.Fragment>
              {/* )} */}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            border: "1px solid black ",
            flexWrap: {
              xs: "wrap",
              sm: "wrap",
              md: "nowrap",
              xl: "nowrap",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#80808054",
              textAlign: "center",
              padding: "2%",
              lineHeight: "1.5",
              margin: "3% 0",
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
                <h4>{sortings} </h4>
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
        {/* bus information */}
        <Box sx={{ padding: "2% 6%" }}>
          <Box>
            <h1>
              Useful Information on Bus from {orgnlbusses.from} to{" "}
              {orgnlbusses.to}
            </h1>
            <p
              style={{
                color: "rgb(126, 126, 140)",
                fontSize: "14px",
                lineHeight: "1.5",
                fontWeight: "400",
                margin: "3% 0%",
              }}
            >
              The journey from Chennai to Pavoorchatram is very smoothly covered
              by a bus in {sortings} . For bus booking on Chennai to
              Pavoorchatram route, customers can check the buses based on travel
              time and sort the buses based on less duration. There are
              operators running their buses between Chennai to Pavoorchatram
              bringing necessary travel convenience for several people in India.
              All buses are driven by proficient drivers ensuring safety during
              the journey.
            </p>
          </Box>
        </Box>
        {/* top bus routes */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2% 6%",
            flexWrap: "wrap",
            backgroundColor: "#ededed",
            borderTop: "1px solid black",
          }}
        >
          <ul style={{ textDecoration: "none" }}>
            <h2>Top Bus Routes</h2>
            <li>Bangalore to Chennai Bus</li>
            <li>Hyderabad to Bangalore Bus</li>
            <li>Pune to Bangalore Bus</li>
            <li>Mumbai to Bangalore Bus</li>
            <li>More {">>"}</li>
          </ul>
          <ul style={{ textDecoration: "none" }}>
            <h2>Top Cities</h2>
            <li>Hyderabad Bus Tickets</li>
            <li>Bangalore Bus Tickets</li>
            <li>Chennai Bus Tickets</li>
            <li>Pune Bus Tickets</li>
            <li>More {">>"}</li>
          </ul>
          <ul style={{ textDecoration: "none" }}>
            <h2>Top RTC's</h2>
            <li>APSRTC</li>
            <li>KSRTC</li>
            <li>MSRTC</li>
            <li>TNSTC</li>
            <li>More {">>"}</li>
          </ul>
          <ul style={{ textDecoration: "none" }}>
            <h2>Other</h2>
            <li>TSRTC</li>
            <li>SBSTC</li>
            <li>RSRTC</li>
            <li>KeralaRTC</li>
            <li>More {">>"}</li>
          </ul>
          <ul style={{ textDecoration: "none", color: " #4a4a4a" }}>
            <h2>Top RTC Bus Types</h2>
            <li>Shivshahi Bus</li>
            <li>Shivneri Bus</li>
            <li>Amaravathi Bus</li>
            <li>Indra Bus</li>
            <li>More {">>"}</li>
          </ul>
        </Box>
        <Box sx={{ padding: "2% 6%", backgroundColor: "#ededed" }}>
          <Typography sx={{ fontWeight: "900" }}>Popular Operators</Typography>
          {/* </AccordionSummary> */}
          <Box sx={{ margin: "0", padding: "0" }}>
            <Typography
              sx={{
                color: " #4a4a4a;",
                fontSize: "14px",
                lineHeight: "2",
                lineBreak: "20",
                fontWeight: "400",
              }}
            >
              No 1 Air Travels | YBM Travels | Sri SMS Travels | Svkdt Travels |
              RKT Tours and Travels | Royal CarsRahul Travels | JBT TravelsRaj
              Express | Vaishali ExpressRahul Travels | IndoreDelhi Tours And
              Travels | Ashok Travels | Greenline Travels | Pawan Travels | Ravi
              Travels | VRL Travels | Dolphin Travels | Ganesh Travels | Kaveri
              Travels | National Travels | Bharathi Travels | City Land Travels
              | Citylink Travels | KKaveri Travels | KK Travels | Mahadev
              Travels | Maharaja Travels | M R Travels | New Payal Travels |
              Paras Travels | Shree Parshwanath Travels | Payal Travels | R K
              Travels | Shivam Travels | Shree Mahaveer Travels | SRS Travels |
              Tulsi Travels | Vaibhav Travels | Vikas Travels | Amarnath Travels
              | Anand Travels | Ashapura Travels | Ashok Bus Service | Ashoka
              Travels
            </Typography>
          </Box>
        </Box>
        {/* top bus routes */}
      </Box>
    </>
  );
};
