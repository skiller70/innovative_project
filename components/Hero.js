import Image from "next/image";

const Hero = (props) => {
  return (
    <div className=" text-white mx-[4rem]  flex aspect-[2/0.80]  bg-[rgba(0,0,0,0.25)]  rounded-[2rem] object-cover relative">
      {props.service ? (
        <div className=" ml-[4rem]  space-y-[1.5rem]  my-auto">
          <div className="text-[4rem] md:text-[6rem] -space-y-6   list-none font-bodyCopy">
            
            <li className="text-[#5095E5]  md:text-left  font-[44.13rem]"><span className="text-white ">{props.heroTitle.heroTitle1}</span > {props.heroTitle.heroTitle2}</li>
          </div>

         
        </div>
      ) : (
        <div className=" md:ml-[4rem] space-y-[1.5rem]  text-center  md:text-left my-auto">
          <div className="  text-[4rem] md:text-[6rem] -space-y-6  list-none font-bodyCopy">
            <li>Global Solutions For</li>
            <li className="text-[#95BAE5]">Reliable Spaces</li>
          </div>

          <div className=" list-none text-[2rem] md:text-[2.5rem] pb-[1.5rem] md:pb-0">
            <li>At Innovative we outline your world whole new way</li>
            <li>because we are committed to value, committed to you!</li>
          </div>
        </div>
      )}

      <Image
        className="rounded-[2rem] mix-blend-soft-light "
        src={`/${props.img}`}
        fill
        alt="hero"
      />
    </div>
  );
};

export default Hero;
