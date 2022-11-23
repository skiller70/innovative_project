import Image from "next/image";

const OurClient = () => {
  return (
    <div className="mb-[6.375rem]">
      <div className=" text-[2rem] font-semibold ml-[4rem] ">Our Clients</div>
      <div className=" grid grid-cols-12 gap-y-[4rem] mt-[3rem]">
        <div className=" flex  justify-center  col-span-6  ">
          <div className="relative aspect-[2/1] w-[19.81rem] h-[7.38rem]">
            <Image alt="estate" src="/estate.png" fill />
          </div>
        </div>

        <div className=" flex  justify-center  col-span-6  ">
          <div className="relative aspect-[2/1] w-[19.81rem] h-[7.38rem]">
            <Image alt="estate" src="/estate.png" fill />
          </div>
        </div>

{/* ******************************************************* */}

        <div className=" flex  justify-center  col-span-4  ">

<div className="relative aspect-[2/1] w-[19.81rem] h-[7.38rem]">
<Image alt="estate" src="/estate.png" fill />
</div>

</div>

<div className=" flex  justify-center  col-span-4  ">

<div className="relative aspect-[2/1] w-[19.81rem] h-[7.38rem]">
<Image alt="estate" src="/estate.png" fill />
</div>

</div>


<div className=" flex  justify-center  col-span-4  ">

<div className="relative aspect-[2/1] w-[19.81rem] h-[7.38rem]">
<Image alt="estate" src="/estate.png" fill />
</div>

</div>
{/* ************************************************************ */}


<div className=" flex  justify-center  col-span-6  ">
          <div className="relative aspect-[2/1] w-[19.81rem] h-[7.38rem]">
            <Image alt="estate" src="/estate.png" fill />
          </div>
        </div>

        <div className=" flex  justify-center  col-span-6  ">
          <div className="relative aspect-[2/1] w-[19.81rem] h-[7.38rem]">
            <Image alt="estate" src="/estate.png" fill />
          </div>
        </div>





      </div>







        {/* **************** */}
    </div>
  );
};

export default OurClient;
