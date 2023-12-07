/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../medias/TopSlider/slide1.jpg";
import slide2 from "../../medias/TopSlider/slide2.jpg";
import slide3 from "../../medias/TopSlider/slide3.jpg";
import slide4 from "../../medias/TopSlider/slide4.jpg";
import slide5 from "../../medias/TopSlider/slide5.jpg";
import slide6 from "../../medias/TopSlider/slide6.jpg";
import slide7 from "../../medias/TopSlider/slide7.png";
import slide8 from "../../medias/TopSlider/slide8.jpg";
import QuickBusinessWizardForm from "./QuickBusinessWizardForm";

const sliderImages = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
];

const TopSlider = () => {
    const settings: Settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
    };

    return (
        <div className="h-[calc(100vh-100px)] overflow-hidden relative">
            <Slider {...settings} className="p-0 m-0">
                {sliderImages.map((img, i) => {
                    return (
                        <div key={i} className="h-[calc(100vh-100px)]">
                            <img
                                src={img.src}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                    );
                })}
            </Slider>

            <section className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 flex items-end justify-center sm:justify-end px-3 sm:p-10">
                <QuickBusinessWizardForm />
            </section>
        </div>
    );
};

export default TopSlider;
