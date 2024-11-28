import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Index from '../Index';
import CoursesPage from '../../Components/Courses/CoursesPage'
import Inquiry from '../Inquiry/Inquiry';
import Free from '../Free/Free';
import Course_detail from '../Courses/Course_detail';
import { useNavigate } from 'react-router-dom';
import Signin from '../Authentication/Signin';
import Signup from '../Authentication/Signup';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="w-full h-auto py-3 lg:px-8 xl:px-12 px-6 shadow-lg bg-[#a4dcaa]">
        <div className="flex flex-row items-center justify-between">

          {/* Logo */}
          <div className="w-1/2 lg:w-[25%]">
            <NavLink to="/">
              <p className="font-urbanist font-bold text-[20px] md:text-[33px] xl:text-[40px] 2xl:text-[48px]">
                Global Tuitions
              </p>
            </NavLink>
          </div>

          {/* Desktop links */}
          <div className="lg:w-[30%] hidden lg:flex">
            <div className="flex flex-row gap-5 uppercase font-mono text-[14px] md:text-[15px] lg:text-[17px] xl:text-[22px] 2xl:text-[28px]">
              <NavLink to="/courses" className="hover:text-white duration-300">Course</NavLink>
              <NavLink to="/inquiry" className="hover:text-white duration-300">Inquiry</NavLink>
              <NavLink to="/free" className="hover:text-white duration-300">Free</NavLink>
            </div>
          </div>

          {/* Search bar for large screens */}
    
        <div
          class="w-[18%] h-auto items-center lg:justify-start justify-end hidden lg:flex"
        >
          <div class="relative w-full items-center">
            <span class="absolute left-2 flex z-20 py-3 text-sm">
               <FaSearch
                class=" text-black cursor-pointer"
              ></FaSearch>
            </span>
            <input
              type="search"
              placeholder="Search For Courses"
              class="inline-block border-[1px] border-b-4 drop-shadow-lg border-b-black border-black rounded-lg py-2 hover:bg-slate-100 duration-500 border-collapse hover:border-collapse pl-8"
            />
          </div>
        </div>

          {/* Buttons and bars for large screens */}
          <div className="lg:w-[27%] hidden lg:flex justify-end gap-3 text-[17px] lg:text-[20px] xl:text-[24px]">
            <NavLink to="/signin">
              <button className="btnbutton">Sign in</button>
            </NavLink>
            <div className="w-1 h-auto border-r-4 border-black"></div>
            <NavLink to="/signup">
              <button className="btnbutton">Sign up</button>
            </NavLink>
          </div>

          {/* Mobile menu icon */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile menu bar/cross icon */}
            <div className="cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoMdClose className="text-black w-7 h-7" />
              ) : (
                <RiMenu3Fill className="text-black w-7 h-7" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu content */}
        {isMenuOpen && (
          <div className="lg:hidden flex-col bg-[#A4DCAA] p-4 rounded-md shadow-lg">
            <div className="flex flex-col uppercase font-mono gap-5 text-[14px] md:text-[15px] lg:text-[17px] xl:text-[22px] 2xl:text-[28px]">
              <NavLink to="/courses" className="hover:text-white duration-300">Course</NavLink>
              <NavLink to="/inquiry" className="hover:text-white duration-300">Inquiry</NavLink>
              <NavLink to="/free" className="hover:text-white duration-300">Free</NavLink>
            </div>

            {/* Mobile search bar */}
            <div className="mt-4">
              <input
                type="search"
                placeholder="Search For Courses"
                className="border-[1px] border-b-4 drop-shadow-lg border-black rounded-lg py-2 px-8 w-full"
              />
            </div>

            {/* Mobile buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="btnbutton">Sign in</button>
              <button className="btnbutton">Sign up</button>
            </div>
          </div>
        )}
      </nav>

      {/* Routes for the pages */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/Course_detail" element={<Course_detail />} />
        <Route path='/inquiry' element={<Inquiry/>}/>
        <Route path='/free' element={<Free/>}/>
        <Route path='/signin' element={<Signin/>}/> 
        <Route path='/signup' element={<Signup/>}/> 

        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
