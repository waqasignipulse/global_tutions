import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import APIS from '../../../Config/Config'

const Courses = () => {

  const [courses, setCourses] = useState([])

  const getCourses = async ()=>{
    try {
      const res = await axios.get(APIS.get_enabled_courses, {params : {order: 1}});
      if(res.statusText === "OK"){
        console.log(res.data)
        setCourses(res.data);
      }else{
        // Render a dummy jsx to show message that says 'no categories available'
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getCourses();
  },[])

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
          {
            courses.map((course)=> (
              <Cards course={course}/>
            ))
          }
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
