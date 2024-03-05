import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Box } from "@mui/material";

import caro1img from "./Img/caro1img.png";
import caro2img from "./Img/caro2img.png";
import caro3img from "./Img/caro3img.png";
import caro4img from "./Img/caro4img.png";
import caro5img from "./Img/caro5img.png";
import caro6img from "./Img/caro6img.png";
import caro7img from "./Img/caro7img.png";
import sponc from "./Img/sponser.png";

export const Mydummy = () => {
    let carousl = [
        { img: caro1img, nme: "BUS", clsnme: "caro1", contnt: "Save up to 250 on bus tickets", vld: "Valid till 31 Sep", frt: "FIRST" },
        // ... (rest of your data)
    ];

    return (
        <>
            <h2 style={{ padding: "10px" }} key={0}>TRENDING OFFERS</h2>
            <Box className="cartophd">
                <AwesomeSlider>
                    {carousl.map((v, i) => (
                        <div key={i} className="slide">
                            <div className={`caro${i + 1} MuiBox-root css-1xufs2b`}>
                                {/* ... (your existing code for each slide) */}
                            </div>
                        </div>
                    ))}
                </AwesomeSlider>
            </Box>
        </>
    );
};

// export default MyCarousel;
