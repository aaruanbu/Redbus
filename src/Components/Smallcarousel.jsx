import React from "react";
import Carousel from "react-multi-carousel";
import WithStyles from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import redeal1 from "./Img/reddeal-1.png";
import redeal2 from "./Img/redeal-2.png";
import redeal3 from "./Img/redeal-3.png";
import redeal4 from "./Img/redeal-4.png";
import redeal01 from "./Img/redeal01.png";
import redeal02 from "./Img/redeal02.png";
import redeal03 from "./Img/redeal03.png";
import redeal04 from "./Img/redeal04.png";
import redeal05 from "./Img/redeal05.png";
export const Smallcrousel = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={90}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 5,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={6}
        swipeable={true}
      >
        <img
          src={redeal1}
          alt="item1"
          width={"80%"}
          style={{ marginLeft: "3%", cursor: "pointer" }}
        />
        <img src={redeal01} alt="item3" style={{ cursor: "pointer" }} />
        <img src={redeal02} alt="item3" style={{ cursor: "pointer" }} />

        <img
          src={redeal2}
          alt="item2"
          style={{ cursor: "pointer" }}
          width={"80%"}
        />
        <img src={redeal3} alt="item3" style={{ cursor: "pointer" }} />

        <img
          src={redeal4}
          alt="item3"
          style={{ cursor: "pointer" }}
          width={"80%"}
        />
      </Carousel>
    </>
  );
};
