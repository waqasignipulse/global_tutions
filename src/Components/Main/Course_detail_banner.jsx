import React from 'react'
import { Link } from 'react-router-dom'
const Course_detail_banner = ({course}) => {
  
  return (
    <div>
       {/* <!-- Banner Section - Course Detail --> */}
  <div class="bg-[#a4dcaa] py-8 font-readex">
    <div class="px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-28">
      {/* <!-- Main Container --> */}
      <div class="flex flex-col lg:flex-row gap-8 lg:justify-between justify-center items-center">
        {/* <!-- HTML for Beginners Section --> */}
        <div class="lg:w-[45%] md:w-[80%] w-[90%] flex flex-col gap-6">
          {/* <!-- Title --> */}
          <div
            class="font-readex font-extrabold text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] tracking-tighter leading-tight w-full">
            <p>
              {course?.course_name}
              <span class="inline-block">
                {course?.course_level}
                <img src="images/courses-detail-images/linedesign.svg" alt=""
                  class="mt-[px] md:mt-[px] lg:mt-[-20px] xl:mt-[px] 2xl:mt-[px] w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px]" />
              </span>
            </p>
          </div>
          {/* <!-- Description --> */}
          <div
            class="tracking-tighter leading-tight text-[px] md:text-[px] lg:text-[20px] xl:text-[px] 2xl:text-[px] font-light">
            <p>
              {course?.course_description}
            </p>
          </div>
        </div>

        {/* <!-- Course Detail Card --> */}
        <div class="lg:w-[55%] w-full flex justify-center lg:justify-end">
          <div
            class="max-w-[470px] w-full bg-[#90c896] p-6 border-[2px] border-black border-b-4 border-r-4 shadow-lg rounded-lg">
            <div class="flex flex-col gap-5">
              {/* <!-- Course Title --> */}
              <div class="flex flex-col gap-2">
                <p class="text-[30px] md:text-[33px] lg:text-[35px] xl:text-[37px] 2xl:text-[42px] font-bold">
                  {course?.category_id?.category_name}
                </p>
                <div class="w-full h-[2px] bg-slate-100 opacity-50"></div>
              </div>
              {/* <!-- Course Details --> */}
              <div class="flex flex-col gap-3 text-[20px] md:text-[23px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px]">
                <div>{course?.course_level}</div>
                <div> {course?.price}$ per hour</div>
                {/* -------------------------------------------------------- todo: course_duration */}
                <div> {course?.course_duration} hour (approximately)</div>
                <div>Flexible Schedule</div>
              </div>

              {/* <!-- Action Buttons --> */}
              <div class="flex flex-row gap-2 justify-between mt-4">
                <a href="user-page/avail.html">
                  <Link to='/avail' class="btnbutton">
                    Avail
                  </Link>
                </a>
                <Link to='/inquiry' state={{course}} class="btnbutton ">
                  Inquiry
                </Link>
                <button class="btnbutton">
                  PDF
                </button>
                <button class="btnbutton">
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Course_detail_banner
 