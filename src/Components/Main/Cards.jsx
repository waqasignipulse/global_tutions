import React from 'react'
import { Link } from 'react-router-dom'
import { IoBookmark } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Cards = (props) => {
  return (
    <div>
         {/* <div class="md:px-14 lg:px- xl:px-24 2xl:px-32 w-full"> */}
        {/* <!-- course cards  --> */}
        {/* <div class="w-full h-auto"> */}
          {/* <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 md:gap-12 lg:gap-7 xl:gap-12 2xl:gap-16  px-10"> */}
            {/* <!-- first --> */}
            <div class="cards">
              <div class="cards-color-header">
                <div class="card-body">
                  <div class="card-body-text">
                    <p class="card-p">
                      <span class="card-span">Duration :</span> 6hr
                    </p>
                  </div>
                  <div>
                    <IoBookmark
                      class=" text-2xl align-middle"
                    ></IoBookmark>
                  </div>
                </div>
                <div class="html-div">
                  <p class="html-p">{props.course?.course_name} </p>
                  <p>
                    <FaArrowRightToBracket class=""></FaArrowRightToBracket>
                  </p>
                </div>
              </div>
              <div class="footer-div">
                <div>
                  <p class="web-development-bold">{props.course?.category_id?.category_name}</p>
                </div>
                <div >
                  <Link to="/Course_detail" state={props.course}>
                    <button class="btnbutton">View</button>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        // </div>
      // {/* </div> */}

    // </div>
  )
}

export default Cards
