
const PageHeader = (props) => {

    return (
        <div className=" px-[21.19em] w-[100%] relative -top-[10rem]">
            
            <div className="   bg-white  flex  h-[19.31rem]  justify-center items-center shadow-xl rounded-[2rem]">
            <h1 className=" font-[31.25rem] text-[4.50rem]  font-bodyCopy ">{props.pageTitle}</h1> 
            </div>

          


        </div>
    );
}

export default PageHeader;
