import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Naves } from "./Nav";
import { Home } from "./Home";
import { Booking } from "./Booking";
import { Seatbooks } from "./Ticketbook";
import { Bottom } from "./Bottom";
import { Notfound } from "./Busnotfound";
import { Bottom_two } from "./Footerss";
import { useSelector } from "react-redux";

export const Routss = () => {
  let pass = useSelector((pas) => pas.datas.passengers);
  return (
    <>
      <BrowserRouter>
        <Naves />
        <Routes>
          <Route path="/Redbus" element={<Home />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/seatbooks" element={<Seatbooks />}></Route>
          <Route path="/notfound" element={<Notfound />}></Route>
        </Routes>
        {pass ? "" : <Bottom_two />}

        <Bottom />
      </BrowserRouter>
    </>
  );
};
