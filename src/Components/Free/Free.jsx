import React from 'react'
import BannerFree from '../Main/BannerFree'
import Sidebar from '../Courses/Sidebar'
import Cards from '../Main/Cards'

const Free = () => {
  return (
    <div>
      <BannerFree/>
      {/* <!-- sidebar and cards  --> */}
    <div class="mb-2  py-3 ">
      {/* <!-- Text Paragraph --> */}
      <div class="w-full h-auto">
        <div
          class="flex flex-row flex-wrap gap-2 py-4 xl:text-[70px] 2xl:text-[80px] lg:text-[60px] md:text-[40px] text-[20px] justify-start items-center"
        >
          <p
            class="flex items-center flex-nowrap gap-2 md:gap-1 px-5 font-bold"
          >
            {/* <!-- "Free" Text and Line --> */}
            <span class="inline-flex flex-col items-center lg:mr-2">
              <span class="whitespace-nowrap">Free</span>
              <img
                src="images/free/bannerlinedesign.svg"
                alt=""
                class="lg:w-auto md:w-24 w-16 hidden md:flex lg:mt-[-15px] md:mt-[-10px] ml-[-10px]"
              />
            </span>

            {/* <!-- "Courses and Workshops" Text --> */}
            <span class="inline-block ml-1 whitespace-nowrap">
              Courses and Workshops
            </span>

            {/* <!-- Additional Line Image --> */}
            <span class="inline-flex items-center ml-2">
              <img
                src="images/free/bannerlinedesign2.svg"
                alt=""
                class="h-auto hidden md:flex ml-[-90px] mt-[30px]"
              />
            </span>
          </p>
        </div>
      </div>
      </div>
      {/* <!-- sidebar cards  --> */}
      <div class="w-full h-auto">
        <div class="flex lg:flex-row flex-col md:justify-start">
          {/* <!-- sidebar   --> */}
        
      <Sidebar/>
      {/* <!-- cards  --> */}
        {/* <div class="w-full h-auto flex justify-center items-center ">
          <div class="max-w-[400px] md:max-w-[800px] lg:max-w-[1000px] "> */}
      <Cards/>
      </div>
      </div>

      {/* </div> */}
      {/* </div> */}

    </div>
  )
}

export default Free
