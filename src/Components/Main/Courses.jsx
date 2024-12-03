import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Config from '../../../Config/Config'

const Courses = () => {

  const [courses, setCourses] = useState([])

  useEffect(()=>{
    Config.get_enabled_courses().then((res)=>{
      setCourses(res)
    }).catch((err)=>{
      console.log(err)
    })
    
  },[])

  return (
<div>
  {/* Home page courses cards section */}
  <div>
    {/* Courses heading */}
    <div class="w-full h-auto flex justify-center items-center md:py-7 py-5">
      <div class="lg:text-[55px] md:text-[45px] text-[35px] font-extrabold font-readex uppercase">
        <p>Courses</p>
      </div>
    </div>

    {/* Cards */}
    <div class="card-grid">
      {courses.map((course) => (
        <Cards course={course} />
      ))}
    </div>

    {/* Courses "More" button */}
    <div class="w-full h-auto md:pt-3 md:pb-8 pt-2 pb-6 px-5 flex justify-end">
      <a
        href="/courses"
        class="flex items-center gap-2 text-[20px] md:text-[25px] font-readex text-blue-600 hover:text-blue-800 transition"
      >
        <span>More</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </div>
</div>

  )
}

export default Courses
