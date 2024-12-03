import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = (props) => {
  const [showDescription, setShowDescription] = useState(false); // State to manage description visibility
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index
  const sliderRef = useRef(null); // Reference to the slider instance
  const descriptionRef = useRef(null); // Reference to the description section

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index); // Update the current slide index
      setShowDescription(index === 1); // Show description only on the second slide
    },
  };

  // Handle the arrow click to move to the next or previous slide
  const handleArrowClick = (direction) => {
    if (sliderRef.current) {
      if (direction === "next") {
        sliderRef.current.slickNext(); // Move to the next slide
      } else if (direction === "prev") {
        sliderRef.current.slickPrev(); // Move to the previous slide
      }
    }
  };

  return (
    <div className="cards relative">
      <Slider ref={sliderRef} {...settings}>
        {/* Slide 1: Show Course Name */}
        <div className="cards-color-header">
          <div className="card-body">
            <div className="card-body-text">
              <p className="card-p">
                <span className="card-span">Duration:</span> 6hr
              </p>
            </div>
            <div>
              <IoBookmark className="text-2xl align-middle" />
            </div>
          </div>
          <div className="html-div">
            <p className="html-p">{props.course?.course_name}</p>
            <p
         onClick={() => handleArrowClick("next")}
         className="cursor-pointer text-2xl text-gray-800"
         aria-label="Next slide"
       >
         <MdArrowRight />
       </p>
          </div>
        </div>

        {/* Slide 2: Show Course Description */}
        <div className="cards-color-header-desc">
          <div className="card-body">
            <div className="card-body-text">
              <p className="card-p">
                <span className="card-span">Charges:</span>
                <span>{props.course?.price}£/hr</span>
              </p>
            </div>
            <div>
              <IoBookmark className="text-2xl align-middle" />
            </div>
          </div>
          {showDescription && (
            <div ref={descriptionRef} className="grid grid-cols-12 items-center">
              {/* Back Arrow taking 20% of the space */}
              <p className="col-span-1 text-2xl">←</p>
              {/* Description taking 80% of the space */}
              <p className="text-lg col-span-10">{props.course?.course_description}</p>
            </div>
          )}
        </div>
      </Slider>

      <div className="footer-div">
        <div>
          <p className="web-development-bold">
            {props.course?.category_id?.category_name}
          </p>
        </div>
        <div>
          <Link to="/Course_detail" state={props.course}>
            <button className="btnbutton">View</button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute flex my-32 justify-center items-center">
        {currentSlide > 0 && (
          <p
            onClick={() => handleArrowClick("prev")}
            className="cursor-pointer col-span-1 flex justify-center"
            aria-label="Previous slide"
          >
            <IoMdArrowDropleft />
          </p>
        )}
      
      </div>
    </div>
  );
};

export default Cards;
