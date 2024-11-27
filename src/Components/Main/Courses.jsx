import React from 'react'
import Cards from './Cards'

const Courses = () => {
  return (
    <div>
      {/* <!-- home page courses cards section  --> */}
      <div>
        {/* <!-- courses heading  --> */}
        <div class="w-full h-auto flex justify-center items-center md:py-7 py-5">
          <div
            class="lg:text-[55px] md:text-[45px] text-[35px] font-extrabold font-readex uppercase"
          >
            <p>Courses</p>
          </div>
        </div>
        {/* <!-- cards  --> */}

        <div class="md:px-14 lg:px- xl:px-24 2xl:px-32 w-full">
          <Cards />
          {/* <!-- courses more div  --> */}
        </div>
        <div
          class="w-full h-auto flex justify-end items-center md:pt-3 md:pb-8 pt-2 pb-6 px-5"
        >
          <div class="lg:text-[25px] md:text-[25px] text-[20px] font-readex">
            <a href="" class="flex flex-row gap-2 items-center justify-end">
              <p>More</p>
              <i class="fa-solid fa-arrow-right"></i
              ></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
