import React from "react";
import SignIMG from "../../assets/images/signin.png";
import FindFreeCoursesandDiscountsoffer from "../Main/FindFreeCoursesandDiscountsoffer";
import Subscribe from "../Main/Subscribe";

const Signup = () => {
  return (
    <div>
      {/* <!-- form section  --> */}
      <div class="w-full h-auto">
        <div class="flex flex-row lg:justify-between justify-center">
          {/* <!-- form  --> */}

          {/* <!-- Form div --> */}
          <div class="w-full md:w-[80%] lg:w-[48%] p-4 lg:p-6">
            <div class="relative w-full lg:w-[90%] mx-auto shadow-lg rounded-lg border p-8">
              <form
                class="flex flex-col gap-5 justify-start items-center text-[12px] md:text-[15px]"
                id="signupForm"
              >
                {/* <!-- Welcome Text --> */}
                <div class="text-center">
                  <p class="text-[32px] md:text- [40px] lg:text-[50px] font-bold z-10">
                    Welcome Back!
                  </p>
                  <p class="text-gray-500 z-10">Create Your New Account</p>
                </div>

                {/* <!-- Form Fields Container --> */}
                <div class="w-full opacity-100 text-black font-poppins">
                  <div class="w-full mb-4 z-10">
                    <div>
                      <p>Name</p>
                    </div>
                    <input
                      type="text"
                      name=""
                      placeholder="Enter Your Email Name"
                      class="w-full z-10 p-3 bg-transparent border-collapse border-[2px] focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div class="w-full mb-4 z-10">
                    <div>
                      <p>Email</p>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      class="w-full z-10 p-3 bg-transparent border-collapse border-[2px] focus:outline-none focus:ring-2"
                    />
                  </div>

                  <div class="w-full mb-4 z-10"></div>
                  <div class="w-full mb-4 z-10">
                    <div>
                      <p>Password</p>
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      class="w-full z-10 p-3 bg-transparent border-collapse border-[2px] focus:outline-none focus:ring-2"
                    />
                  </div>
                </div>

                {/* <!-- Checkbox and Submit Buttons --> */}
                <div class="flex flex-col w-full gap-4">
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="remember"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span>Remember Me For 30 Days</span>
                  </label>

                  {/* <!-- Submit Button --> */}
                  <div class="flex justify-center items-center w-full">
                    <button type="submit" class="btnbutton lg:w-full w-[80%] ">
                      Sign Up
                    </button>
                  </div>

                  {/* <!-- Google Signup Button --> */}
                  <button type="button" class="font-bold  ">
                    <span class="fab fa-google bg-gradient-to-r from-blue-500 via-red-500 to-green-500 text-transparent bg-clip-text"></span>
                    Sign Up With Google
                  </button>
                </div>

                {/* <!-- Already Have Account -->/ */}
                <div>
                  <p class="font-poppins z-10">
                    Already have an account?
                    <a
                      href="signin.html"
                      class="text-black font-semibold hover:text-blue-500 duration-500"
                    >
                      Sign in for free
                    </a>
                  </p>
                  <div class="flex flex-row justify-between items-center">
                    {/* <img src="" alt="" /> */}
                    {/* <!-- <img src="corse_des_images/signin-linedesign.png" class="w-40 h-4" dir="" alt=""> --> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- img  --> */}
          <div class="w-[40%] hidden lg:flex">
            <img src={SignIMG} alt="" />
          </div>
        </div>
      </div>
      <FindFreeCoursesandDiscountsoffer/>
      <Subscribe/>
    </div>
  );
};

export default Signup;
