import React, { useEffect, useState } from 'react'
import Config from '../../../Config/Config'
const Sidebar = () => {


  const [categories, setCategories] = useState([])

  useEffect(()=>{
    Config.get_enabled_categories().then((res)=> {
      setCategories(res)
    }).catch((err)=>{
      console.log(err)
    })
  },[]);

  return (
    <div className='border-2'>
       <div class="lg:w-[20%] w-full md:px-0 px-6 bg-[#FFFFFF] p-2 ">
            <div class="flex flex-col px-4 gap-2 pt-8">
              <p
                class="font-readex font-semibold lg:text-[38px] md:text-[31px] text-[25px] xl:text-[44px] 2xl:text-[51px]"
              >
                Filter
              </p>
              <p
                class="font-readex xl:text-[24px] 2xl:text-[27px] lg:text-[20px] md:text-[17px] text-[16px]"
              >
                Categories
              </p>
              <div
                class="text-[ 12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"
              >
                <div class="flex flex-col gap-1">
                 {
                  categories.map((category)=> (
                    <label class="flex items-center">
                      <input type="checkbox" class="mr-2" />
                      <a href="Beginner">{category.category_name}</a>
                    </label>
                  ))
                 }
                </div>
              </div>
            </div>
            <div class="flex flex-col px-4 gap-2 pt-8">
              <p
                class="font-readex xl:text-[24px] 2xl:text-[27px] lg:text-[20px] md:text-[17px] text-[16px]"
              >
                Level
              </p>
              <div
                class="text-[ 12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"
              >
                {/* <!-- optoins  --> */}
                <div class="flex flex-col gap-1">
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <a href="Beginner">Beginner</a>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <a href="">Intermidiate</a>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <a href="">Advance</a>
                  </label>
                </div>

                 <details class="flex flex-col gap-2 group">
                  <summary
                    class="flex flex-row items-center gap-1 md:text-[18px] text-[14px] font-extralight cursor-pointer"
                  >
                    <label
                      class="font-semibold text-[ 14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                      ><input type="checkbox" /> courses</label
                    >
                   
                    <span
                      class="ml-2 transform transition-transform duration-200 group-open:rotate-180"
                    >
                      ⌄
                    
                    </span>
                  </summary>
                  <ul class="mt-2 ml-4 space-y-2">
                    <li>
                      <label><input type="checkbox" /> sql course</label>
                    </li>
                    <li>
                      <label><input type="checkbox" /> pyton course</label>
                    </li>
                    <li>
                      <label><input type="checkbox" /> Chemistry course</label>
                    </li>
                    <li>
                      <label><input type="checkbox" /> cyber course</label>
                    </li>
                    <li>
                      <label
                        ><input type="checkbox" /> web development course</label
                      >
                    </li>
                    <li>
                      <label><input type="checkbox" /> gaming course</label>
                    </li>
                  </ul>
                </details>
             
              </div>
            </div>
          </div>
    </div>
  )
}

export default Sidebar
