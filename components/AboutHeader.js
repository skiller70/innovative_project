import Image from "next/image";

const AboutHeader = () => {
    return (
        <div className=" mx-[19.50rem] rounded-t-[2rem] shadow-2xl relative -top-[13rem] bg-white">
{/* ************************************************************************ */}
            <div className="grid  grid-cols-1 md:grid-cols-2">
                {/* ******************************************** */}
            <div className="pl-[4rem] pt-[4rem] pr-[3.188rem] text-[3rem]  font-semibold list-none">
                <li>We are</li>
                <li className=" uppercase text-[#5095E5] ">Innovative</li>
                    {/* ---------------------------- */}
                <div className="mt-[2.1rem] text-[1.35rem]"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                
                
                 </div>
            </div>
            {/* ********************************************** */}
            <div className=" relative object-cover  aspect-[1/1.3]">


            <Image className="rounded-tr-[2rem]" src="/aboutHeader.png" alt="about header" fill/>

            </div>
                
            </div>
            
        </div>
    );
}

export default AboutHeader;
