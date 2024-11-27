import React from 'react'
import Sidebar from './Sidebar'
import Cards from '../Main/Cards'
import FindFreeCoursesandDiscountsoffer from '../Main/FindFreeCoursesandDiscountsoffer'
import Subscribe from '../Main/Subscribe'
const CoursesPage = () => {
  return (
    <>
    <div>
       <div
      class="w-auto h-auto bg-[#A4DCAA] mb-2 mt-12 lg:mx-12 mx-6 py-3 px-5 rounded-lg shadow-lg border"
    >
      <div
        class="flex justify-start items-center 2xl:text-[27px] xl:text-[24px] lg:text-[20px] md:text-[16px] text-[11px] font-readex"
      >
        <p class="xl:tracking-[1px]">
          <span class="font-bold"> Explore Our Course:</span> Elevate Your IT
          Skills - Building Tomorrow‘s Tech Innovators 
        </p>
      </div>
    </div>
    </div>

{/* // <!-- sidebar and cards  --> */}
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
<FindFreeCoursesandDiscountsoffer/>
<Subscribe/>

      </>
  )
}

export default CoursesPage
