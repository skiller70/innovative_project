import Image from "next/image";


const AboutContent = () => {
    return (
        <div className="  ">

            <div className="grid grid-cols-1 md:grid-cols-2 relative -top-[13rem]  ">
        {/* -------------------------------------------------------- */}
            <div className="relative aspect-[2/1.8] object-cover shadow-xl">

            <Image fill src="/aboutBack.png"/>


            </div>
            {/* -----------------*********************-------------------------- */}
            <div className=" pl-[6.688rem] pt-[5rem] bg-[#F2F2F2] shadow-xl">
            {/* ********* ***********************************/}
            <div>
                {/* ******* */}
                <div className=" text-[3.00rem] font-semibold">WHY CHOOSE <span className=" text-[#5095E5]">US</span> </div>
                {/* ------*************- */}
                <div className=" text-[1.50rem] list-none font-medium mt-[2rem] "><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et</li>
                    <li>massa mi. Aliquam in hendrerit urna. Pellentesque sit amet </li>
                    <li>sapien fringilla, mattis ligula consectetur, ultrices mauris.</li>
                </div>
                {/* ********************** */}
                <div className=" grid grid-cols-2">
                    {/* ****** */}
                    <div className="flex  mt-[4.313rem]">
                        {/* ** image */}
                        <div className=" bg-[#5095E5] w-[5.00rem] h-[5rem] rounded-full flex justify-center items-center  ">
                        <div className=" relative  w-[2.50rem] aspect-square  object-cover">
                                <Image src="/twentyFour.png" alt="twentyFour" fill />
                            </div> 

                            </div> 
                      
                           {/* ------ 24  */}
                           <div className="pl-[0.75rem]">
                            <div className=" text-[1.50rem]  text-[#5095E5] font-semibold  uppercase">24/7 Support</div>
                            <div className=" text-[1.25rem] font-normal">Lorem ipsum dolor sit amet</div>
                           </div>
                    </div>
                    {/* **************************************************************************** */}
                    <div className="flex  mt-[4.313rem]">
                        {/* ** image */}
                        <div className=" bg-[#5095E5] w-[5.00rem] h-[5rem] rounded-full flex justify-center items-center  ">
                        <div className=" relative  w-[2.50rem] aspect-square  object-cover">
                                <Image src="/twentyFour.png" alt="twentyFour" fill />
                            </div> 

                            </div> 
                      
                           {/* ------ 24  */}
                           <div className="pl-[0.75rem]">
                            <div className=" text-[1.50rem]  text-[#5095E5] font-semibold uppercase ">optimization</div>
                            <div className=" text-[1.25rem]  ">Lorem ipsum dolor sit amet</div>
                           </div>
                    </div>
                       {/* **************************************************************************** */}
                       <div className="flex  mt-[4.313rem]">
                        {/* ** image */}
                        <div className=" bg-[#5095E5] w-[5.00rem] h-[5rem] rounded-full flex justify-center items-center  ">
                        <div className=" relative  w-[2.50rem] aspect-square  object-cover">
                                <Image src="/twentyFour.png" alt="twentyFour" fill />
                            </div> 

                            </div> 
                      
                           {/* ------ 24  */}
                           <div className="pl-[0.75rem]">
                            <div className=" text-[1.50rem]  text-[#5095E5] font-semibold  uppercase">Reliable</div>
                            <div className=" text-[1.25rem]">Lorem ipsum dolor sit amet</div>
                           </div>
                    </div>
                       {/* **************************************************************************** */}
                       <div className="flex  mt-[4.313rem]">
                        {/* ** image */}
                        <div className=" bg-[#5095E5] w-[5.00rem] h-[5rem] rounded-full flex justify-center items-center  ">
                        <div className=" relative  w-[2.50rem] aspect-square  object-cover">
                                <Image src="/twentyFour.png" alt="twentyFour" fill />
                            </div> 

                            </div> 
                      
                           {/* ------ 24  */}
                           <div className="pl-[0.75rem]">
                            <div className=" text-[1.50rem]  text-[#5095E5] font-semibold  uppercase">Legal advisors</div>
                            <div className=" text-[1.25rem]">Lorem ipsum dolor sit amet</div>
                           </div>
                    </div>

                       {/* **************************************************************************** */}
                       <div className="flex  mt-[4.313rem]">
                        {/* ** image */}
                        <div className=" bg-[#5095E5] w-[5.00rem] h-[5rem] rounded-full flex justify-center items-center  ">
                        <div className=" relative  w-[2.50rem] aspect-square  object-cover">
                                <Image src="/twentyFour.png" alt="twentyFour" fill />
                            </div> 

                            </div> 
                      
                           {/* ------ 24  */}
                           <div className="pl-[0.75rem]">
                            <div className=" text-[1.50rem]  text-[#5095E5] font-semibold uppercase ">Secured Services</div>
                            <div className=" text-[1.25rem]">Lorem ipsum dolor sit amet</div>
                           </div>
                    </div>

                       {/* **************************************************************************** */}
                       <div className="flex  mt-[4.313rem]">
                        {/* ** image */}
                        <div className=" bg-[#5095E5] w-[5.00rem] h-[5rem] rounded-full flex justify-center items-center  ">
                        <div className=" relative  w-[2.50rem] aspect-square  object-cover">
                                <Image src="/twentyFour.png" alt="twentyFour" fill />
                            </div> 

                            </div> 
                      
                           {/* ------ 24  */}
                           <div className="pl-[0.75rem]">
                            <div className=" text-[1.50rem]  text-[#5095E5] font-semibold uppercase ">All in one solution</div>
                            <div className=" text-[1.25rem]">Lorem ipsum dolor sit amet</div>
                           </div>
                    </div>
                    
                    
                     </div>
            </div>


            </div>
{/* 
        *-----------------******************************************--------------------------------- */}
            <div className="relative aspect-[2/1.5] -top-[85rem]  md:-top-[45rem] md:left-[4rem] object-cover"> 
                <Image src="/aboutFront.png" alt=" about front" fill />
            </div>



            </div>

{/* 
            *******************************------------------------------------------------************************************************ */}

{/* ************************** */}



        </div>
    );
}

export default AboutContent;
