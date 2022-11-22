import Image from "next/image";

const ServiceContent = (props) => {
  const { content1, content2, content3, content4, content5, contentHead } =
    props.content;
  return (
    <div className=" mt-[-4.5rem] mx-[4rem] grid grid-cols-3 ">
      {/* CONTENT  */}
      <div className=" col-span-2 pr-[10.938rem] text-[1.40rem] font-medium  ">
        <div>
          {content1}
          <br />
          <br />
        </div>

        <div>
          {content2}
          <br />
          <br />
        </div>

        <div>
          {content3}
      
        </div>

        {/* CONTENT SECTION */}

        <div className=" text-[3.50rem] font-semibold mb-[2rem] mt-[5rem]">
       
          
          {contentHead}
       
        </div>
        <div>
          {content4}
          <br />
          <br />
        </div>

        <div>
          {content5}
          <br />
          <br />
        </div>
      </div>

      {/* IMAGE */}
      <div>
        <div className=" relative aspect-square  object-cover ">
          <Image className=" rounded-[2rem]" fill src={`/${props.img}`} />
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
