import React from 'react'
import Course_detail_banner from '../Main/Course_detail_banner'
import What_you_will_Learn from '../Main/What_you_will_Learn'
import Subscribe from '../Main/Subscribe'
import { useParams } from 'react-router-dom'

const Course_detail = () => {
  const {course} = useParams();
  console.log(course)
  return (
    <div>
      <Course_detail_banner course={course}/>
      <What_you_will_Learn/>
      <Subscribe/>
    </div>
  )
}

export default Course_detail
