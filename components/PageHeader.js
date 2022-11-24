
const PageHeader = (props) => {

    return (
        <div className=" font-bodyCopy mx-[1.50rem] md:mx-[0rem]  md:px-[21.19em]  relative -top-[1rem] md:-top-[10rem]">
            
            <div className="   bg-white  flex  h-[19.31rem]  justify-center items-center shadow-xl rounded-[2rem]">
            <h1 className=" font-[31.25rem] text-[3.5rem] text-center md:text-left font-bodyCopy ">{props.pageTitle}</h1> 
            </div>

          


        </div>
    );
}

export default PageHeader;
