import Image from "next/image";

const ContactUs = () => {
  return (
    <div className=" font-bodyCopy  grid grid-cols-1  relative   place-items-center  bg-[rgba(0,0,0,0.35)]  aspect-auto  w-[100vw] object-cover ">



      <div className="  my-[5.66rem]       z-10 space-[2.50rem]">
        {/* TITLE */}
        <div className="text-[3rem] text-white font-[700] pb-[1rem] ">Contact Us </div>
        {/* FORM */}
        <div className=" bg-[#A1A9B3] mt-[2.50rem] rounded-[1.02rem] w-[38.94rem] ">
          <form className="mx-[2.50rem] py-[2.50rem]  space-y-[1.50rem]">
            <div className="space-y-[0.75rem] " >
              <p className="font-[700]" >Your Name</p>
              <input className=" pl-[2rem] w-[100%] h-[4rem] rounded-[0.6rem]" type="text" />
            </div>

            <div className="space-y-[0.75rem]">
              <p className="font-[700]">Email</p>
              <input className=" pl-[2rem] w-[100%] h-[4rem] rounded-[0.6rem]"  type="text" />
            </div>

            <div className="space-y-[0.75rem] ">
              <p className="font-[700]">Your Query</p>
              <input className=" pl-[2rem] w-[100%] h-[4rem] rounded-[0.6rem]"  type="text" />
            </div>

            <div className="mt-[2.50]  flex justify-end">
              <button className=" py-[1rem] px-[2rem] bg-[#132939]  rounded-[0.73rem] text-white  ">Submit</button>
            </div>

          </form>
        </div>
      </div>

      <Image className=" mix-blend-soft-light" src="/contact_background.jpg" alt="contact image" fill />
    </div>
  );
};

export default ContactUs;
