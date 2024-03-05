import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Box } from "@mui/material";
import caro1img from "./Img/caro1img.png"
import caro2img from "./Img/caro2img.png"
import caro3img from "./Img/caro3img.png"
import caro4img from "./Img/caro4img.png"
import caro5img from "./Img/caro5img.png"
import caro6img from "./Img/caro6img.png"
import caro7img from "./Img/caro7img.png"
import sponc from "./Img/sponser.png"
import { useState, useEffect } from 'react';
import { Box } from "@mui/material"
import styled from 'styled-components';

export const MyCarousel = () => {
    let carousl = [{ img: caro1img, nme: "BUS", clsnme: "caro1", contnt: "Save upto on 250 on bus tickets", vld: "Valid till 31 Sep", frt: "FIRST" },
    { img: caro2img, nme: "BUS", clsnme: "caro2", contnt: "Save upto on 250 on bus tickets", vld: "Valid till 31 Sep", frt: "FREEDOM" },
    { img: caro3img, nme: "BUS", clsnme: "caro3", contnt: "Save upto on 250 on bus tickets", vld: "Valid till 31 Sep", frt: "RB200" },
    { img: caro4img, nme: "BUS", clsnme: "caro4", contnt: "Save upto on 250 on bus tickets", vld: "Valid till 31 Sep", frt: "SUPERHIT" },
    { img: caro5img, nme: "BUS", clsnme: "caro5", contnt: "Save upto on 250 on bus tickets", vld: "Valid till 31 Sep", frt: "BUS200" },
    { img: caro6img, nme: "BUS", clsnme: "caro6", contnt: "Save upto on 250 on bus tickets", vld: "Valid till 31 Sep", frt: "ABSTRCNEW" },
    { img: caro7img, nme: "BUS", clsnme: "caro7", contnt: "Save upto on 250 on bus tickets", vld: "Valid till 31 Sep", frt: "FIRST" }]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <h2 style={{ padding: "10px" }} key={0} > TRENDING OFFERS</h2>
            <Box
                className="cartophd" >
                <Slider {...settings} key={settings.slidesToShow} >
                    {
                        carousl.map((v, i) => {
                            return (
                                // <StyledSlide className="slide">
                                <React.Fragment>
                                    <Box key={i} className={v.clsnme} sx={{ display: "inline-block", width: "310px", padding: "10px", textAlign: "center", cursor: "pointer" }} >
                                        <span className="rborders">{v.nme}</span>
                                        <Box className="slideflex">
                                            <Box>
                                                <img src={v.img} className="roundimgs" />
                                            </Box>
                                            <Box sx={{ padding: "7px" }}>
                                                <span className="conte">{v.contnt}</span>
                                                <p className="valid">{v.vld}</p>
                                            </Box>
                                        </Box>
                                        <span className="dotchbord">{v.frt}</span>
                                    </Box>
                                </React.Fragment>
                                // </StyledSlide >
                            )
                        })
                    }
                </Slider >
                {/* // </Carousel> */}
            </Box>            {/* </Box > */}
        </>
    );
};

// export default MyCarousel;
