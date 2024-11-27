import React from 'react'
import findcoursesImg from '../../assets/images/findcourses-img.png'
const FindFreeCoursesandDiscountsoffer = () => {
  return (
    <div>
       {/* <!-- find courses section  --> */}

<div class="find-main">
  <div class="find-main2">
    <div class="find-img-div">
      <img
        src={findcoursesImg}
        alt="Banner Image"
        class="find-img"
      />
    </div>

    <div class="md:w-1/2 w-full  px-2 flex items-center">
      <div class="find-div-2-main">
        <div
          class="find-div-heading"
        >
          <p
            class="find-div-p"
          >
            Find
            <span class="find-heading-span1">
              Free<img
                src="../images/findfree-linedesign.webp"
                alt=""
                class="find-heading-img1"
              />
            </span>
            <span class="find-heading-span2"
              >Courses and Discounts</span
            >
            <span class="find-heading-span3">
              offer<img
                src="../images/findfree-linedesign.webp"
                alt=""
                class="find-heading-img2"
              />
            </span>
          </p>
        </div>
        <div>
          <p
            class="find-paragraph"
          >
            Explore a world of free and discounted learning opportunities.
            Scroll through our diverse range of free training, courses,
            workshops, and tuition options designed to help you grow your
            skills without breaking the bank. Start your learning voyage
            today!
          </p>
        </div>

        <div class="find-buttons-div">
          {/* <button class="btnbutton">View Offers ></button> */}
          {/* <button class="btnbutton">Free Courses ></button> */}
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default FindFreeCoursesandDiscountsoffer
