import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Services = (props) => {
  const { service1,iTitle1, service2,iTitle2, service3,iTitle3, service4,iTitle4} = props.img;
  const { otherServices,serviceTitle1,serviceTitle2} = props.services
  

  return (
    <div className="mt-[8.75rem] mx-[1.50rem] md:mx-[4rem] font-bodyCopy  space-y-[2.50rem] mb-[8.75rem]">
      {otherServices ? (
        <div className=" font-bodyCopy text-[2rem]  font-semibold">
          {serviceTitle1} <span className="text-[#5095E5]">{serviceTitle2}</span>{" "}
        </div>
      ) : (
        <div className=" font-bodyCopy text-[2rem]  font-semibold">
          {" "}
      {serviceTitle1} <span>{serviceTitle2}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-[2rem] gap-y-[2rem] md:gap-y-[0rem]  ">
        {/* ----------------------------------- */}
        <div >
        <Link href="/plots">
          <div className=" rounded-[2rem] relative aspect-square  object-cover bg-[rgba(0,0,0,0.20)] ">
          <div className="w-[3rem] bg-[#5095E5]  h-[3rem]  flex justify-center z-10 absolute  rounded-[32px] right-[1.50rem] top-[1.50rem]">
            <button>
              {" "}
              <FontAwesomeIcon
                className="w-8 h-8 text-white rotate-45"
                icon={faArrowUp}
              />
            </button>
          </div>
          <Image
            className="  mix-blend-soft-light rounded-[2rem]"
            src={`/${service1}`}
            fill
            alt="service1"
          />

          </div>
        </Link>
            <div className="mt-[1rem] text-[1.50rem] font-medium ">
          {iTitle1}
          </div>
        </div>
        {/* ----------*******************----------------- */}
        <div>
      
          <div className=" rounded-[2rem] relative aspect-square  object-cover bg-[rgba(0,0,0,0.20)] ">
          <Link href="/construction">
            <div className="w-[3rem] bg-[#5095E5]  h-[3rem]  flex justify-center z-10 absolute  rounded-[32px] right-[1.50rem] top-[1.50rem]">
              <button>
                {" "}
                <FontAwesomeIcon
                  className="w-8 h-8 text-white rotate-45"
                  icon={faArrowUp}
                />
              </button>
            </div>
            <Image
              className="  mix-blend-soft-light rounded-[2rem]"
              src={`/${service2}`}
              fill
              alt="service2"
            />
          </Link>
          </div>
          <div className="mt-[1rem] text-[1.50rem] font-medium ">
          {iTitle2}
          </div>
        </div>
        {/* ----------*******************----------------- */}
        <div className="  ">
        <Link href="/permission">
          <div className="rounded-[2rem] relative aspect-square  object-cover bg-[rgba(0,0,0,0.20)]">
          <div className="w-[3rem] bg-[#5095E5]  h-[3rem]  flex justify-center z-10 absolute  rounded-[32px] right-[1.50rem] top-[1.50rem]">
            <button>
              {" "}
              <FontAwesomeIcon
                className="w-8 h-8 text-white rotate-45"
                icon={faArrowUp}
              />
            </button>
          </div>
          <Image
            className="  mix-blend-soft-light rounded-[2rem]"
            src={`/${service3}`}
            fill
            alt="service3"
          />
             
          </div>
          </Link>
        <div className="mt-[1rem] text-[1.50rem] font-medium ">
        {iTitle3}
          </div>
        </div>
        {/* ----------*******************----------------- */}
        <div >
        <Link href="/Liaising">
          <div className=" rounded-[2rem] relative aspect-square  object-cover bg-[rgba(0,0,0,0.20)] " >
          <div className="w-[3rem] bg-[#5095E5]  h-[3rem]  flex justify-center z-10 absolute  rounded-[32px] right-[1.50rem] top-[1.50rem]">
            <button>
              {" "}
              <FontAwesomeIcon
                className="w-8 h-8 text-white rotate-45"
                icon={faArrowUp}
              />
            </button>
          </div>
          <Image
            className="  mix-blend-soft-light rounded-[2rem]"
            src={`/${service4}`}
            fill
            alt="service4"
          />

          </div>
          </Link>
             <div className="mt-[1rem] text-[1.50rem] font-medium ">
             {iTitle4}
          </div>
        </div>
        {/* ----------*******************----------------- */}
        <Link href="/services"> 
        <div className="flex justify-center aspect-square ">
      
          <div className=" w-[85%]  font-semibold font-bodyCopy bg-[#E1DAD8] rounded-[2rem] flex justify-center">
            <div className=" flex flex-col items-center space-y-[0.75rem]  my-auto  ">
              <div>Explore All Services</div>

              <div className="w-[3rem] bg-[#132939]  h-[3rem]  flex justify-center z-10  rounded-[32px]   ">
                <button>
                  {" "}
                  <FontAwesomeIcon
                    className="w-8 h-8 text-white rotate-45"
                    icon={faArrowUp}
                  />
                </button>
              </div>
            </div>
          </div>
          
        </div>
        </Link>
       
      </div>
    </div>
  );
};

export default Services;
