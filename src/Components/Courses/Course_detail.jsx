import React from 'react'
import Course_detail_banner from '../Main/Course_detail_banner'
import What_you_will_Learn from '../Main/What_you_will_Learn'
import Subscribe from '../Main/Subscribe'
import { useLocation } from 'react-router-dom'

const Course_detail = () => {
  const location = useLocation();
  const course = location.state;
  return (
    <div>
      <Course_detail_banner course={course}/>
      <What_you_will_Learn id={course?._id} skills={course.skills}/>
      <Subscribe/>
    </div>
  )
}

export default Course_detail
