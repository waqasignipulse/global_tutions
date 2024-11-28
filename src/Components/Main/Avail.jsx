import React from "react";
import FindFreeCoursesandDiscountsoffer from "./FindFreeCoursesandDiscountsoffer";
import Subscribe from "./Subscribe";

const Avail = () => {
  return (
    <div>
      {/* <!-- img and inquiry form both togahter for xl screens  --> */}
      <div class="w-full h-auto">
        <div class="flex xl:flex-row-reverse flex-col">
          {/* <!-- contact us section  --> */}
          <div class="flex flex-col gap-2 xl:px-16 2xl:px-20 md:px-12 lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14">
            {/* <!-- contact us heading  --> */}
            <div class="flex justify-start">
              <div class="lg:text-[70px] md:text-[60px] text-[40px] xl:text-[80px] 2xl:text-[90px] font-extrabold font-readex leading-tight lg:leading-[90px] tracking-tighter">
                <p>HTML For Beginners</p>
              </div>
            </div>
            <div class="lg:text-[20px] md:text-[18px] text-[17px] xl:text-[23px] 2xl:text-[25px] font-semibold">
              <p>30$ / hour</p>
            </div>
            <div class="lg:text-[20px] md:text-[18px] text-[17px] xl:text-[23px] 2xl:text-[25px] font-semibold">
              <p>Duration: 6 hours</p>
            </div>
            {/* <!-- text   --> */}
            <div class="flex justify-start">
              <p class="text-base">
                <span class="inline leading-loose tracking-widest text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  It is a common markup language used to create web pages. Using
                  HTML elements, which are the fundamental components of a
                  webpage, such as tags and attributes, it enables the
                  construction and organization of sections, paragraphs, and
                  connections.
                </span>
              </p>
            </div>
            {/* <!-- img  --> */}
            <div class="flex justify-center items-center">
              <img src="../images/inquiry page/contactus-img.webp" alt="" />
            </div>
          </div>

          {/* <!-- inquiry section  --> */}
          <div class="bg-[#73a979] xl:px-16 2xl:px-20 md:px-12 lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14 font-readex">
            <div class="flex flex-col gap-5 justify-start">
              {/* <!-- inquiry heading  --> */}
              <div class="  ">
                <div class="2xl:text-[90px] xl:text-[80px] lg:text-[70px] md:text-[60px] text-[50px] font-extrabold text-white">
                  <p>Avail</p>
                </div>
              </div>
              {/* <!-- form  --> */}
              <div class="flex flex-col gap-5 justify-start text-white placeholder-white">
                <div class="">
                  <input
                    type="text"
                    name="Name"
                    class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                    placeholder="Name"
                    autocomplete="off"
                  />
                </div>

                <div class="">
                  <input
                    type="email"
                    name="Name"
                    class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                    placeholder="Email"
                    autocomplete="off"
                  />
                </div>
                <div class="">
                  <input
                    type="number"
                    name="Name"
                    class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                    placeholder="Phone"
                    autocomplete="off"
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    name="Name"
                    class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder:text-white pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                    placeholder="Your Address"
                    autocomplete="off"
                    rows="5"
                  ></textarea>
                </div>
                <div class="">
                  <textarea
                    type="text"
                    name="Name"
                    class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder:text-white pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                    placeholder="Enter Message"
                    autocomplete="off"
                    rows="5"
                  ></textarea>
                </div>
                <div class="">
                  <p>Preferred Date</p>
                  <input
                    type="date"
                    name="Name"
                    class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                    placeholder=""
                    autocomplete="off"
                  />
                </div>
                <div class="">
                  <p>Preferred Time</p>
                  <input
                    type="time"
                    name="Name"
                    class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                    placeholder=""
                    autocomplete="off"
                  />
                </div>
              </div>
              {/* <!-- checkbox  --> */}
              <div class="flex gap-3 lg:text-[15px] md:text-[12px] text-[10px]">
                <span>
                  <input type="checkbox" name="" id="" />
                </span>
                <p>
                  By checking this box, you consent to collecting and storing
                  the data provided in this form for the purpose of responding
                  to your inquiry.
                  <span class="hidden md:inline">
                    We respect your privacy and adhere to all relevant data
                    protection regulations. For more information, please review
                    our Privacy Policy.
                  </span>
                </p>
              </div>
              {/* <!-- button  --> */}
              <div>
                <button class="class=inline-block text-center self-start py-2 px-4 xl:px-5 bg-black border-white border-[2px] hover:shadow-black rounded-lg text-slate-50 shadow-md duration-500 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FindFreeCoursesandDiscountsoffer/>
      <Subscribe/>
    </div>
  );
};

export default Avail;
