import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Cards from '../Main/Cards'
import FindFreeCoursesandDiscountsoffer from '../Main/FindFreeCoursesandDiscountsoffer'
import Subscribe from '../Main/Subscribe'
import Config from '../../../Config/Config'

const CoursesPage = () => {


  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(()=>{
    Config.get_enabled_courses().then((res)=>{
      setCourses(res);
    }).catch((err)=>{
      console.log(err);
    });
  }, []);

  function getCategoryId(cat_id){
    // construct filtered courses
    const filtered = courses.filter((course) => course.category_id._id === cat_id)
    setFilteredCourses(filtered);
     
  }

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
    <div class="h-auto max-w-[1350px] mx-auto">
      <div class="flex lg:flex-row flex-col md:justify-start">
        {/* <!-- sidebar   --> */}
      
      <Sidebar getCategoryId={getCategoryId}/>
      {/* <!-- cards  --> */} 
      <div class="max-w-[400px] md:max-w-[800px] lg:max-w-[1000px] "> 
        {console.log("filtered:",filteredCourses)}
        {
          filteredCourses?.map((course)=>(
            <Cards course={course}/>
          ))
        }
      </div>
      </div>
    </div>
<FindFreeCoursesandDiscountsoffer/>
<Subscribe/>

      </>
  )
}

export default CoursesPage
