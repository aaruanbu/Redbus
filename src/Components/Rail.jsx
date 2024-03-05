import React from "react"
// import "./Ridenav.scss"
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsHeadset } from "react-icons/bs";
import { Box } from "@mui/material"
export const Ridenav = () => {

    return (
        <Box><header className="shadow positio">
            <Box className="container">
                <Box className="row backfixed ">
                    <Box className="col-2 colsd-nonetop">
                        <Box className=" border-end" style={{ padding: "20px" }}><a href="#">
                            <Box>
                                {/* <img width={"40%"}src={Rb}/> */}
                            </Box>
                            {/* <Box className="col-12"> */}
                        </a>
                        </Box>
                    </Box>
                    <Box className="col-4 alicolm colsd-10">
                        <Box>
                            <ul className=" d-flexul ">
                                <li className="hovers "><a href="#" className="text-decoration-none">
                                    {/* <img src={Verti} className="ms-4 gradient"  width={"30%"}/> */}
                                    <p className="d-block">Bus Tickets</p></a></li>
                                <li className="hovers rounded"><a href="#" className="text-decoration-none">
                                    {/* <img className="ms-4 gradient" src={Ryde} width={"40%"}/> */}
                                    <p className="d-block">Cab Rental</p></a></li>
                                <li className="hovers"><a href="#" className="text-decoration-none">
                                    {/* <img className=" gradient" src={Rail} width={"40%"}/> */}
                                    <p className="">Train Ticket</p></a></li>
                            </ul>
                        </Box>
                    </Box>


                    <Box className="col-3 colsd-nonetop colmdmidnone"></Box>
                    <Box className="d-flexinuse" style={{ paddingTop: "20px;" }}>
                        <Box className="col-3 colsd-nonetop">
                            <Box className="tcent">
                                <Box className="hovers d-flexes2  userspa">
                                    <a href="#">
                                        <BsHeadset className="fauserhea" />
                                        <span>Help</span></a>
                                </Box>
                                <Box className="hovers   d-flexes2 userspa" id="toggleButton" onclick="click">
                                    <a href="#">
                                        <HiOutlineUserCircle className="fauserhea" />
                                        <span> Account</span><BsChevronDown />

                                        <ul id="content" style={{ display: "none" }} className="slidedowninnavbar list-unstyled contents">
                                            <li className="paddindropbox"><a href="#" className="text-decoration-none">Cancel Ticket </a></li>
                                            <li className="paddindropbox"><a href="#" className="text-decoration-none ">Change Travel Date </a></li>
                                            <li className="paddindropbox"><a href="#" className="text-decoration-none">Show My Ticket</a></li>
                                            <li className="paddindropbox border-bottom"><a href="#" className="text-decoration-none">Email/SMS </a></li>
                                            <li className="paddindropbox"><a href="#" className="text-decoration-none">Login/Sign Up</a></li>
                                        </ul></a>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box className="colsd-2 colmdnavba" style={{ display: "none" }}>
                        <Box><HiOutlineBars3 className="navba" /></Box>
                    </Box>
                </Box>
            </Box>
        </header>
        </Box>
    )
}