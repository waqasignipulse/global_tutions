import React, { useEffect, useState } from 'react'
import Config from '../../../Config/Config'
const Sidebar = (props) => {


  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    Config.get_enabled_categories().then((res)=> {
      setCategories(res);
      // console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },[]);

  return (
    <div className='border-2 w-96'>
       <div class=" w-full md:px-0 px-6 bg-[#FFFFFF] p-2 ">
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
                    <label onClick={()=> props.getCategoryId(category._id)} class="flex items-center">
                      <input type="checkbox" class="mr-2" />
                      <a>{category.category_name}</a>
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
                class="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"
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
             
              </div>
            </div>
          </div>
    </div>
  )
}

export default Sidebar
