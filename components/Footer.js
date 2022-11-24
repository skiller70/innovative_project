import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-[#99D4FF] flex flex-col md:flex-row items-center justify-between md:px-[2rem] py-[1rem] ">
      {/* ADDRESS */}
      <div className="flex justify-center items-center md:items-start md:justify-start  flex-col gap-4">
        {/* LOGO */}
        <div className=" mt-[4rem] md:ml-[4.25rem]  relative w-[19.31rem]   aspect-[2/1]">
          <Image src="/logo.png" alt="logo" fill />
        </div>
        {/* ADDRESS */}
        <div className=" mt-[2rem] md:mt-[0rem] text-center md:text-left md:ml-[3.94rem] max-w-[41.76rem] ">
          <div className="font-semibold text-[2rem]">ADDRESS:</div>
          <div>
            {" "}
     <ul className="text-[1.50rem]">
      <li>Lorem ipsum dolor sit amet,</li>
      <li>consectetur adipiscing elit. Ut et </li>
      <li>massa mi. Aliquam in hendrerit urna.</li>
     </ul>
          </div>
        </div>
        {/* CONTACT */}
        <div className=" mt-[2rem] md:mt-[0rem] text-center md:text-left md:ml-[3.94rem] md:mb-[10.375rem]">
          <div className=" text-[2rem]  pb-[1rem] font-semibold">CONTACT</div>
          <div className="text-[1.50rem] pb-[1rem]">
            {" "}
            <span className=" font-semibold">Phone:</span> +91 8659993255
          </div>
          <div className="text-[1.50rem]">
            {" "}
            <span className=" font-semibold"> Email:</span>info@innovative.com
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div  className="text-center md:text-left">
        <div className=" mt-[2rem] md:mt-[0rem]   font-semibold text-[2rem] pb-[1rem]">QUICK LINKS</div>

        <div>
          <ul className="text-[1.50rem]">
            <li className=" pb-[1rem]">
              {" "}
              <button>Home</button>
            </li>
            <li className=" pb-[1rem]">
              {" "}
              <button>About us</button>
            </li>
            <li className=" pb-[1rem]">
              {" "}
              <button>Services</button>
            </li>
            <li className=" pb-[1rem]">
              {" "}
              <button>Contact us</button>
            </li>
          </ul>
        </div>
      </div>

      {/* FOLLOW US */}
      <div  className="text-center md:text-left">
        <div className="font-semibold text-[2rem]">FOLLOW US</div>
        <div className="text-[1.50rem] mt-[1.50rem]">
          <a className=" pr-[2rem] pb-[1rem]">
            {" "}
            <button>Facebook</button>
          </a>
          <a className=" pr-[2rem] pb-[1rem]">
            {" "}
            <button>Instagram</button>
          </a>
          <a className=" pr-[2rem] pb-[1rem]">
            {" "}
            <button>Linkedin</button>
          </a>
          <a className=" pr-[2rem] pb-[1rem]">
            {" "}
            <button>Twitter</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
