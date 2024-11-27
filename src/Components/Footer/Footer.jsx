import React from 'react'

const Footer = () => {
  return (
    <div>
         {/* <!-- footer  --> */}
    <div class="w-full h-auto mx-auto">
      <div
        class="flex py-5 md:flex-row flex-col justify-center items-center gap-8"
      >
        <div class="">
          <p
            class="font-poppins font-semibold text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px]"
          >
            Global Tuitions
          </p>
        </div>
        {/* <!-- Desktop links --> */}
        <div class="">
          <div
            class="flex flex-row gap-3 uppercase font-mono text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]"
          >
            <a href=" home.html" class="hover:text-[#A4DCAA] duration-300"
              >Home</a
            >
            <a href="" class="hover:text-[#A4DCAA] duration-300">Course</a>
            <a href=" inquiry.html" class="hover:text-[#A4DCAA] duration-300"
              >Inquiry</a
            >
            <a href=" free.html" class="hover:text-[#A4DCAA] duration-300"
              >Free</a
            >
          </div>
        </div>
      </div>
    </div>

    {/* <!-- email  --> */}
    <div
      class="w-full h-auto flex justify-center items-center mx-auto container border-t-black border-[1px]"
    >
      <div class="md:py-7 py-4 font-semibold">
        <a href="">Copyright@globaltuitions.co.uk</a>
      </div>
    </div>
    </div>
  )
}

export default Footer
