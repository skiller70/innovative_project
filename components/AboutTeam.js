import Image from "next/image";
import Footer from "./Footer";

const AboutTeam = () => {
    return (
        <div className=" absolute top-[140rem] xl:top-[140rem] w-[100%]">
            <div>
    {/* ******** */}
<div className="text-center text-[3rem]"> MEET OUR <span  className=" text-[#5095E5] font-bold"> TEAM</span> </div>
{/* *******image */}
<div className=" mx-[6.25rem] grid grid-cols-4 gap-x-[2.5rem] mt-[4rem]">

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

<div className="mt-[8.75rem]">

<Footer/>
</div>
       
            
        </div>
    );
}

export default AboutTeam;
