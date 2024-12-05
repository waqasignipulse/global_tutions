import React, { useState, useEffect } from 'react'
import FindFreeCoursesandDiscountsoffer from '../Main/FindFreeCoursesandDiscountsoffer'
import Subscribe from  '../Main/Subscribe'
import Config from '../../../Config/Config'
import { useLocation } from 'react-router-dom'
import ContactusImg from '../../assets/images/contactus-img.png'
const Inquiry = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")
    const [isCourse, setIsCourse] = useState(false);

    const location = useLocation();
    const course = location.state?.course

    const postInq = (e)=>{
        e.preventDefault();
        // gather up data
        const data = {
            inquiry_by: name,
            email: email,
            phone: phone,
            inquiry: msg,
            for_course: course?._id || null
        }

        Config.postInq(data).then((res)=>{
            // show successfull popup
            console.log("inq sent")
        }).catch((err)=>{
            console.log(err)
        })
        
    }
    useEffect(() => {
        setIsCourse(!!course); // Set isCourse to true if course exists
      }, [course]);
    
    return (
        <>
        <div>
            <div class="w-full h-auto">
                <div class="flex xl:flex-row-reverse flex-col">
                    {/* <!-- contact us section  --> */}
                    {isCourse ? (
                    <div
                        class="flex flex-col gap-5 xl:px-16 2xl:px-20 md:px-12 lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14 w-1/2"
                    >
                        {/* <!-- contact us heading  --> */}
                        <div class="flex justify-start">
                            <div
                                class="lg:text-[70px] md:text-[60px] text-[40px] xl:text-[80px] 2xl:text-[90px] font-extrabold font-readex"
                            >
                                <p>{course?.course_name}</p>
                            </div>
                        </div>
                        {/* <!-- text   --> */}
                        <div
                            class="flex justify-start text-[12px] md:text-[15px] lg:text-[18px]"
                        >
                            <p class="text-base leading-loose">
                                <span class="inline">
                                    {course?.course_description}
                                </span>
                                {/* <span class="inline">
                                    We're here to assist you every step of the way on your learning
                                    expedition. Whether you have questions about our courses , need
                                    guidance on selecting the right program, or simply want to learn
                                    more about how we can help you grow your skills
                                </span>
                                <span class="hidden md:inline">
                                    , our dedicated team is ready to provide personalized support
                                    and expert advice.
                                </span>
                                <span class="hidden lg:inline">
                                    Feel free to reach out to us – we‘re committed to helping you
                                    achieve your goals.
                                </span> */}
                            </p>
                        </div>
                        {/* <!-- img  --> */}
                        <div class="flex justify-center items-center">
                            <img src={ContactusImg} alt="" />
                        </div>
                    </div>
                    ) : (
<div
                        class=" xl:px-16 2xl:px-20 md:px-12 lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14 w-1/2"
                    >
                        {/* <!-- contact us heading  --> */}
                        <div class="flex justify-start">
                            <div
                                class="lg:text-[70px] md:text-[60px] text-[40px] xl:text-[80px] 2xl:text-[90px] font-extrabold font-readex"
                            >
                                <p>Contect US</p>
                            </div>
                        </div>
                        {/* <!-- text   --> */}
                        <div
                            class="flex justify-start text-[12px] md:text-[15px] lg:text-[18px]"
                        >
                            <p class="text-base leading-loose">
                                <span class="inline">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolores inventore, amet eius blanditiis quia totam modi delectus quo! Quae?
                                </span>
                                {/* <span class="inline">
                                    We're here to assist you every step of the way on your learning
                                    expedition. Whether you have questions about our courses , need
                                    guidance on selecting the right program, or simply want to learn
                                    more about how we can help you grow your skills
                                </span>
                                <span class="hidden md:inline">
                                    , our dedicated team is ready to provide personalized support
                                    and expert advice.
                                </span>
                                <span class="hidden lg:inline">
                                    Feel free to reach out to us – we‘re committed to helping you
                                    achieve your goals.
                                </span> */}
                            </p>
                        </div>
                        {/* <!-- img  --> */}
                        <div class="flex justify-center items-center">
                            <img src={ContactusImg} alt="" />
                        </div>
                    </div>
                    )}
                    {/* <!-- inquiry section  --> */}
                    <div
                        class="bg-[#73a979] xl:px-16 2xl:px-20 md:px-12 lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14 font-readex w-1/2"
                    >
                        <form onSubmit={postInq} class="flex flex-col gap-5 justify-start">
                            {/* <!-- inquiry heading  --> */}
                            <div class="  ">
                                <div
                                    class="lg:text-[65px] md:text-[55px] text-[30px] font-extrabold text-white"
                                >
                                    <p>Inquiry</p>
                                </div>
                            </div>
                            {/* <!-- form  --> */}
                            <div
                                class="flex flex-col gap-5 justify-start text-white placeholder-white"
                            >
                                <div class="">
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={(e)=> setName(e.target.value)}
                                        class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                                        placeholder="Name"
                                        autocomplete="off"
                                    />
                                </div>

                                <div class="">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={(e)=> setEmail(e.target.value)}
                                        class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                                        placeholder="Email"
                                        autocomplete="off"
                                    />
                                </div>
                                <div class="">
                                    <input
                                        type="number"
                                        name="phone"
                                        onChange={(e)=> setPhone(e.target.value)}
                                        class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                                        placeholder="Phone"
                                        autocomplete="off"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        type="text"
                                        name="msg"
                                        onChange={(e)=> setMsg(e.target.value)}
                                        class="bg-transparent appearance-none w-full py-2 border-white border-[2px] rounded-lg shadow-lg placeholder-white placeholder:px- pl-5 hover:border-green-300 focus:border-green-300 focus:outline-none"
                                        placeholder="Your Message"
                                        autocomplete="off"
                                        rows="5"
                                    >
                                    </textarea>
                                </div>
                            </div>
                            {/* <!-- checkbox  --> */}
                            <div class="flex gap-3 lg:text-[15px] md:text-[12px] text-[10px]">
                                <span><input type="checkbox" name="" id="" /></span>
                                <p>
                                    By checking this box, you consent to collecting and storing the
                                    data provided in this form for the purpose of responding to your
                                    inquiry.
                                    <span class="hidden md:inline">
                                        By checking this box, you consent to collecting and storing
                                        the data provided in this form for the purpose of responding
                                        to your inquiry. We respect your privacy and adhere to all
                                        relevant data protection regulations. For more information,
                                        please review our Privacy Policy.
                                    </span>
                                </p>
                            </div>
                            {/* <!-- button  --> */}
                            <div>
                                <button type='submit' class="btnbutton">Inquire</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <FindFreeCoursesandDiscountsoffer/>
        <Subscribe/>
        </>
    )
}

export default Inquiry
