import Image from "next/image";

const Hero = (props) => {
  return (
    <div className=" text-white mx-[4rem]  flex aspect-[2/0.80]  bg-[rgba(0,0,0,0.25)]  rounded-[2rem] object-cover relative">
      {props.service ? (
        <div className=" ml-[4rem] space-y-[1.5rem]  my-auto">
          <div className="text-[6rem] -space-y-6  list-none font-bodyCopy">
            
            <li className="text-[#5095E5] text  font-[44.13rem]"><span className="text-white">{props.heroTitle.heroTitle1}</span> {props.heroTitle.heroTitle2}</li>
          </div>

         
        </div>
      ) : (
        <div className=" ml-[4rem] space-y-[1.5rem]  my-auto">
          <div className="text-[6rem] -space-y-6  list-none font-bodyCopy">
            <li>Global Solutions For</li>
            <li className="text-[#95BAE5]">Reliable Spaces</li>
          </div>

          <div className=" list-none text-[2rem]">
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
