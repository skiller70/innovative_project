import Image from "next/image";
import Footer from "./Footer";

const AboutTeam = () => {
    return (
        <div className=" absolute sm:top-[240rem] md:top-[132rem]  top-[215rem] xl:top-[140rem] w-[100%] font-bodyCopy ">
            <div>
    {/* ******** */}
<div className="text-center text-[3rem]"> MEET OUR <span  className=" text-[#5095E5] font-bold"> TEAM</span> </div>
{/* *******image */}
<div className=" mx-[6.25rem] grid grid-cols-1 gap-y-[2rem] md:gap-y-[0rem] md:grid-cols-4 gap-x-[2.5rem] mt-[4rem]">

<div className=" relative object-cover aspect-[2/2.1]"> <Image src="/team1.png" alt="team1" fill /> </div>
{/* *********************************** */}

<div className=" relative object-cover aspect-[2/2.1]"> <Image src="/team2.png" alt="team1" fill /> </div>
{/* *********************************** */}

<div className=" relative object-cover aspect-[2/2.1]"> <Image src="/team3.png" alt="team1" fill /> </div>
{/* *********************************** */}
<div className=" relative object-cover aspect-[2/2.1]"> <Image src="/team4.png" alt="team1" fill /> </div>
{/* *********************************** */}


</div>



</div>

<div className=" mt-[8.75rem] md:mt-[8.75rem]">

<Footer/>
</div>
       
            
        </div>
    );
}

export default AboutTeam;
