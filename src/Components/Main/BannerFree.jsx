import React from 'react'
import findcoursesImg from '../../assets/images/findcourses-img.png'

const BannerFree = () => {
  return (
    <div>
       {/* <!-- banner section avial form wide range--> */}
    <div class="w-full h-auto py-3 md:py-5 lg:py-7 bg-[#A4DCAA]">
      <div class="flex flex-col md:flex-row items-center">
        {/* <!-- Text Section --> */}
        <div class="md:w-1/2 w-full md:px-10 px-6 lg:pl-12 flex">
          {/* <!-- text  and button  --> */}
          <div class="flex flex-col gap-5 text-center md:text-left">
            <h1
              class="font-extrabold leading-[70px] tracking-tighter font-readex lg:text-[50px] md:text-[40px] text-[30px] xl:text-[65px] 2xl:text-[75px] "
            >
              Avail from a wide- range of
              <span class="inline-block flex-col">
                <p>free</p>
                <img
                  src="images/free/bannerlinedesign.svg"
                  alt=""
                  class="hidden md:flex mt-[-9px]"
              /></span>
               training, workshops, and tuitions.
            </h1>

            <div class="flex justify-center md:justify-start">
              <button class="btnbutton">SCROLL DOWN</button>
            </div>
          </div>
        </div>

        {/* <!-- Image Section --> */}
        <div class="md:w-1/2 w-full flex justify-center items-center">
          <img
            src={findcoursesImg}
            alt="Banner Image"
            class="w-[350px] h-[400px] md:w-[430px] lg:w-[450px] xl:w-[570px] 2xl:w-[700px] md:h-[410px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
          />
        </div>
      </div>
    </div>

    </div>
  )
}

export default BannerFree
