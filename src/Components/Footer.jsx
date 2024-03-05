import React from "react";
// import './Nav.scss'
// import './Style.scss'
import { Box } from "@mui/material"

export const Footer = () => {
    return (
        <Box style={{ backgroundColor: "#8080801f", padding: '20px' }}>
            <Box className="container" >
                <Box className="list-style" >
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "2%" }} >
                        <h1>3500+ Private Bus Operators</h1>
                        <span className="ftrchs" style={{ padding: "8px", border: ".5px solid gray", borderRadius: "10px" }}>View All</span>
                    </Box>
                    <Box className="row" sx={{ dispaly: "flex", justifyContent: "space-between", flexWrap: "wrap", borderBottom: '0.5px solid gray', paddingBottom: '20px' }}>
                        <Box className=" li">
                            <li>SRS Travels</li>
                            <li>Rajdhani Express</li>
                            <li>Infant Jesus</li>
                            <li>Kanker Roadways</li>
                            <li>Raj Express</li>
                        </Box>
                        <Box className="li">
                            <li>
                                VRL Travels</li>
                            <li>Patel Travels</li>
                            <li>
                                Komitla</li>
                            <li>Sharma Travels</li>
                        </Box>
                        <Box className=" li">
                            <li>KPN Travels</li>
                            <li>Sri Krishna Travels</li>
                            <li>
                                Shrinath Travels</li>
                            <li>Mahasagar Travels</li>
                        </Box>
                        <Box className=" li">
                            <li>Orange Travels</li>
                            <li>Bengal Tiger</li>
                            <li>Shatabdi Travels</li>
                            <li>Humsafar Travels</li>
                        </Box>
                        <Box className="li">
                            <li>Parveen Travels</li>
                            <li>SRM Travels</li>
                            <li>Eagle Travels</li>
                            <li>JBT Travels</li>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

