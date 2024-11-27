import React from 'react'
import whatweofferImg from '../../assets/images/whatweoffer-img.png'
const whatweoffers = () => {
  return (
    <div>
       {/* <!-- what we offer section  --> */}
    <div class="w-full h-auto py-5">
      <div class="flex lg:flex-row flex-col-reverse">
        <div
          class="lg:w-[40%] w-full flex justify-center lg:pl-5  md:py-0 py-10"
        >
          <img
            src={whatweofferImg}
            alt="Banner Image"
            class="w-full max-w-[400px]  object-cover"
          />
        </div>

        <div
          class="lg:w-[60%] w-full lg:px-20 md:px-15 px-9 md:py-0 py-10 flex text-justify lg:text-start items-center"
        >
          <div class="flex flex-col gap-5 justify-center items-center">
            <div
              class="font-bold font-readex 2xl:text-[65px] xl:text-[55px] lg:text-[50px] md:text-[38px] text-[25px]"
            >
              <p>What can we offer?</p>
            </div>
            <div class="">
              <p
                class="lg:w-full leading-loose font-poppins md:text-[17px] xl:text-[19px] 2xl:text-[22px]"
              >
                At Global Tuitions, we offer comprehensive IT tuition services
                tailored to your needs. Our expert instructors provide courses
                in programming languages, software development, database
                management, web development, and more. Whether you're a beginner
                looking to kickstart your IT journey or a seasoned professional
                seeking to enhance your skills, we have the resources and
                expertise to help you succeed. With hands-on training,
                personalized attention, and flexible scheduling options, we’re
                committed to empowering you to excel in the ever-evolving world
                of technology. Explore our range of courses and start your
                journey towards tech mastery today!
              </p>
            </div>

            <button
              class="btnbutton"
            >
              Courses 
              {/* > */}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default whatweoffers
