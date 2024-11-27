import React from 'react'
import BannerImages from '../../assets/images/banner-img.png'
const Banner = () => {
  return (
    <div>
      {/* <!-- banner section  --> */}
    <div
      class="bg-[#A4DCAA] w-full h-auto lg:rounded-bl-[300px] md:rounded-bl-[200px]"
    >
      <div class="flex md:flex-row flex-col-reverse py-5 h-auto">
        <div class="md:w-[60%] w-full flex items-center">
          <div
            class="flex flex-col gap-5 md:justify-center justify-center px-5 md:px-[100px] lg:px-[120px] xl:px-[140px] 2xl:px-[170px]"
          >
            <div
              class="font-bold font-readex 2xl:text-[90px] xl:text-[80px] lg:text-[70px] md:text-[55px] text-[50px]"
            >
              <p
                class="w-[] md:w-[px] lg:w-[80px] xl:w-[px] 2xl:w-[px] leading-[70px] tracking-tighter"
              >
                Empowering IT skills, Transforming Futures.
              </p>
            </div>
            <div>
              <p
                class="font-poppins text-[12px] md:text-[13px] xl:text-[17px] 2xl:text-[23px] font-bold"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>
          </div>
        </div>

        <div class="md:w-[40%] w-full flex justify-center md:justify-end">
          <img
            src={BannerImages}
            alt="Banner Image"
            class="w-full max-w-[400px] lg:max-w-none object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner
