import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-regular-svg-icons"
const MainContent = () => {
  return (
   <div className="mb-[4rem]">
     <div className="  mx-[7.94rem] grid  grid-cols-1 md:grid-cols-12  gap-x-2">
      {/* *****************------------------------------------************************* */}
      <div className="my-[0.5rem] md:row-span-2 md:col-span-3">
        <div className="relative  aspect-[1/1.3] object-cover">
          <Image alt="main1"  src="/Main1.jpg" fill />  
        </div>

        <div className="relative md:mt-[0.5rem] aspect-[1/1.3] object-cover">
          <Image alt="main2" src="/Main2.jpg" fill />
        </div>
      </div>
      {/* *****************------------------------------------************************* */}
      <div className=" text-white  rounded-[0.75rem]  bg-[#132939] md:row-span-2 md:col-span-4">
        {" "}
     <div className=" mx-[3rem] my-[4rem]">
        {/* ************************ */}
        <div className="text-[1.50rem] font-medium"> ABOUT US</div>
      {/* ************************ */}
      <div className="text-[2.50rem]  mt-[1.5rem] font-semibold leading-tight"> Creating Reliable spaces for companies to prosper</div>
     {/* ************************ */}
     <div className="text-[1.50rem] mt-[1.5rem]">Innovative established in XXXX is one of the fastest-growing and advanced Industrial Development Organizations.</div>
    {/* ************************ */}
    <div className="text-[1.50rem] mt-[1.5rem]">Innovative works on understanding the needs of global businesses and translating them into productive and effective work spaces. We customize spaces into well designed industrial structures. To us, infrastructure is not only about providing the necessities of various sectors of the industry,it is much more.</div>
    {/* ************************ */}
    <button className="text-[1.50rem] px-[3rem] py-[1.50rem] bg-[#FFFFFF] text-black  rounded-[0.25rem] mt-[4rem]">
        Know more
    </button>


     </div>
      </div>
      {/* *****************------------------------------------************************* */}
      <div className=" flex flex-col   md:col-span-5"> 
      
      <div className="relative flex aspect-[2/2] object-cover items-center justify-center">
          <Image  alt="main4" src="/mainVideo.jpg" fill />
          
          <button className="relative z-20     " ><FontAwesomeIcon className="w-[5rem] h-[5rem] z-10 text-white "  icon={faCirclePlay}/></button>
          
        </div>

  {/* *****************------------------------------------************************* */}
      <div className=" ml-[2.313rem] mt-[2rem]">
        <div className=" uppercase text-[2rem]  font-semibold">  What makes us <span className=" text-[#5095E5]">stand out</span> </div>
        <div className="  ml-[2.313rem] flex text-[1.25rem] font-medium">  
            <ul className=""><li className="p-[1rem] list-disc">Quality Infrastructure</li>
            <li  className="p-[1rem] list-disc">Financial Strength</li>
            <li  className="p-[1rem] list-disc">Security</li>
            </ul>

            <ul className=" ml-[2rem]"><li className="p-[1rem] list-disc">Operational Efficiency</li>
            <li  className="p-[1rem] list-disc">Local Expertise</li>
            <li  className="p-[1rem] list-disc">Established Land Connectivity</li>
            </ul>
        </div>
      </div>
      
      </div>
    

    </div>
{/* ****************-------------------------------------------**********************************************----------------------------------- */}
    <div className=" mt-[4rem] mx-[4rem] grid md:grid-cols-3 grid-cols-1 md:gap-x-[1.625rem] text-center">
        {/* **************************************************** */}
        <div className=" py-[2.875rem] bg-[#F4F4F4] rounded-[2rem] shadow-xl">
        {/* ***********  */}
        <div  className=" text-[#5095E5] text-[4.50rem]  font-bold">10+</div>
        {/* ***********  */}
        <div className=" text-[2rem] font-semibold mt-[0.5rem]">Million Sq. ft Developed</div>
        {/* ***********  */}
        <div className=" mt-[2.5rem] list-none text-[1.50rem] font-semibold"><li>More than 10 millions sq. ft of </li> <li>developed and underdeveloped </li> <li>projects.</li></div>
        </div>

        {/* ***************************************************** */}
        <div className=" py-[2.875rem] bg-[#F4F4F4] rounded-[2rem] shadow-xl">
        {/* ***********  */}
        <div  className=" text-[#5095E5] text-[4.50rem]  font-bold">200+</div>
        {/* ***********  */}
        <div className=" text-[2rem] font-semibold mt-[0.5rem]">Industries</div>
        {/* ***********  */}
        <div className=" mt-[2.5rem] list-none text-[1.50rem] font-semibold"><li>Partner to industry leaders across </li> <li>various categories.</li> <li>projects.</li></div>
        </div>
   {/* ***************************************************** */}

           <div className=" py-[2.875rem] bg-[#F4F4F4] rounded-[2rem] shadow-xl">
        {/* ***********  */}
        <div  className=" text-[#5095E5] text-[4.50rem]  font-bold">10+</div>
        {/* ***********  */}
        <div className=" text-[2rem] font-semibold mt-[0.5rem]">Projects</div>
        {/* ***********  */}
        <div className=" mt-[2.5rem] list-none text-[1.50rem] font-semibold"><li>Business Commercial, Industrial and </li> <li>Logistics Parks across Mumbai- </li> <li>Palghar region.</li></div>
        </div>
    </div>
   </div>
  );
};

export default MainContent;
