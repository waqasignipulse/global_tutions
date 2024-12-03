import React, { useEffect, useState } from 'react'
import Config from '../../../Config/Config'

const What_you_will_Learn = ({id, skills}) => {

  const [contents, setContents] = useState([]);

  useEffect(()=>{

    Config.get_enabled_contents(id).then((res)=>{
      setContents(res)
    }).catch((err)=>{
      console.log(err)
    })
    

  }, []);




  return (
    <div>
        {/* <!-- what you will learn section detail  --> */}
  <div class="w-full h-auto">
    <div
      class="lg:py-[40px] lg:px-[30px] ">
      <div class="flex flex-col gap-10 lg:px-3 px-7">
        <div>
          <p
            class="font-readex text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] tracking-tighter leading-tight w-full">
            What you will Learn?
          </p>
        </div>
        {
          contents?.map((content, index)=>(
            <div key={index} class="flex flex-col shadow-lg rounded-md p-5">
              <div
                class="font-readex text-[30px] md:text-[40px] lg:text-[50px] xl:text-[50px] 2xl:text-[70px] tracking-tighter leading-tight">
                <p>{index+1}. {content.topic}</p>
              </div>
              <div class="w-full h-auto">
                <div class="p-3 bg-[#d3d9ef] rounded-2xl">
                  <p
                    class="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] tracking-wide leading-loose">
                    {content.content_description}
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>

  {/* <!-- skill you will learn section short   --> */}
  <div class="w-full h-auto">
    <div class="lg:py-8 py-5 md:px-8 px-5 flex flex-col gap-3">
      <div>
        <p
          class="font-readex text-[34px] md:text-[45px] lg:text-[55px] xl:text-[65px] 2xl:text-[80px] tracking-tighter leading-tight w-full ">
          Skills you get
        </p>
      </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {
            skills?.map((skill, index)=> (  
              <div key={index} class="bg-[#72c47b] border-[2px] border-black shadow-2xl rounded-lg">
                <p
                  class="text-white text-[14px] md:text-[16px] lg:text-[18px] xl:text-[16px] 2xl:text-[18px] py-2 lg:py-4 px-5   tracking-widest">
                  {skill}
                </p>
              </div>
            ))
          }
        </div>
    </div>
  </div>
    </div>
  )
}

export default What_you_will_Learn
