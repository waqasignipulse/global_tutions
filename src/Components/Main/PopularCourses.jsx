import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Config from '../../../Config/Config'

const PopularCourses = () => {

  const [courses, setCourses] = useState([])

  useEffect(()=>{
    Config.get_enabled_popular_courses().then((res)=>{
      console.log(res)
      setCourses(res)
    }).catch((err)=>{
      console.log(err)
    })
    
  },[])

  return (
    <div>
       {/* <!-- our popular courses secction  --> */}
    <div class="bg-[#A4DCAA]  pb-9">
      {/* <!-- popular courses heading  --> */}
      <div
        class="w-full h-auto flex justify-center items-center md:py-7 py-5 bg-[#A4DCAA]"
      >
        <div
          class="lg:text-[55px] md:text-[45px] text-[35px] font-extrabold font-readex uppercase text-center"
        >
          <p>our popular courses</p>
        </div>
      </div>

      {/* <!-- popular courses  cards  --> */}
      {/* <!-- cards  --> */}
       <div class="card-grid">
          {
            courses.map((course)=> (
              <Cards course={course}/>
            ))
          }
          {/* <!-- courses more div  --> */}
        </div>


    </div>
    </div>
  )
}

export default PopularCourses
