
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"
const AllServices = (props) => {

    const { service1,iTitle1, service2,iTitle2, service3,iTitle3, service4,iTitle4, service5,iTitle5, service6,iTitle6, service7,iTitle7} = props.img;
    const { otherServices,serviceTitle1,serviceTitle2} = props.services
    
    
  return (
    <div>
      <div className=" mx-[1.50rem] md:mx-[4rem]  space-y-[2.50rem] mb-[8.75rem]">
        {/* {otherServices ? (
          <div className=" font-bodyCopy text-[2rem]  font-semibold">
            {serviceTitle1}{" "}
            <span className="text-[#5095E5]">{serviceTitle2}</span>{" "}
          </div>
        ) : (
          <div className=" font-bodyCopy text-[2rem]  font-semibold">
            {" "}
            {serviceTitle1} <span>{serviceTitle2}</span>
          </div>
        )} */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[2rem] gap-y-[2rem] ">
          {/* ----------------------------------- */}
          <div>
            <Link href="/plots">
            <div  className=" rounded-[2rem] relative aspect-square  object-cover bg-[rgba(0,0,0,0.20)] ">
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
            <div className="mt-[1rem] md:text-[1.50rem] font-medium ">
              {iTitle1}
            </div>
          </div>
          {/* ----------*******************----------------- */}
          <div>
            <Link href="/construction">
            <div  className=" rounded-[2rem] relative aspect-square  object-cover bg-[rgba(0,0,0,0.20)] ">
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
            </div>
            </Link>
            <div className="mt-[1rem] text-[1.50rem] font-medium ">
              {iTitle2}
            </div>
          </div>
          {/* ----------*******************----------------- */}
          <Link href="/permission">
          <div className="  ">
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
            <div className="mt-[1rem] text-[1.50rem] font-medium ">
              {iTitle3}
            </div>
          </div>
          </Link>
          {/* ----------*******************----------------- */}
         
          <div>
          <Link href="/liaising">
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
          <div>
            <Link href="/security">
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
                src={`/${service5}`}
                fill
                alt="service4"
              />
            </div>
            </Link>
            <div className="mt-[1rem] text-[1.50rem] font-medium ">
              {iTitle5}
            </div>
          </div>
          {/* ----------*******************----------------- */}
          <div>
            <Link href="/legal">
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
                src={`/${service6}`}
                fill
                alt="service5"
              />
            </div>
            </Link>
            <div className="mt-[1rem] text-[1.50rem] font-medium ">
              {iTitle6}
            </div>
          </div>
          {/* ----------*******************----------------- */}
          <div>
          <Link href="/labour">
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
                src={`/${service7}`}
                fill
                alt="service6"
              />
            </div>
            </Link>
            <div className="mt-[1rem] text-[1.50rem] font-medium ">
              {iTitle7}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
