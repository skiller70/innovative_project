
import Image from "next/image";
import Link from "next/link"

import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className=" px-[4rem] bg-white  justify-between flex  items-center py-[1rem]  sticky top-0 z-50 ">
      {/* NAV LOGO */}
      <div className=" w-[10.81rem]    aspect-[2/1] relative ">
        <Image src="/logo.png" alt="logo" fill/>
      </div>

      {/* NAV LINKS */}
      <div className=" lg:p[0.5rem]   flex gap-[2rem] ">
        <Link
        href="/"
          className={` ${
            router.pathname == "/" ? " bg-[#5095E5] text-white " : ""
          } px-[2rem] py-[1rem] hover:bg-[#5095E5] hover:text-white rounded-[1rem] font-semibold  `}
        >
          HOME
        </Link>

        <Link
          href="/about"
          className={` ${
            router.pathname == "/about" ? " bg-[#5095E5] text-white " : ""
          } px-[2rem] py-[1rem] hover:bg-[#5095E5] hover:text-white rounded-[1rem] font-semibold  `}
        >
          ABOUT US
        </Link>
        <Link
        href="/services"
          className={` ${
            router.pathname == "/services" ? " bg-[#5095E5] text-white " : ""
          } px-[2rem] py-[1rem] hover:bg-[#5095E5] hover:text-white rounded-[1rem] font-semibold  `}
        >
          SERVICES 
        </Link>
        <Link
          href="/contact"
          className={` ${
            router.pathname == "/contact" ? " bg-[#5095E5] text-white " : ""
          } px-[2rem] py-[1rem] hover:bg-[#5095E5] hover:text-white rounded-[1rem] font-semibold  `}
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
