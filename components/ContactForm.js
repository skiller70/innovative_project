
const ContactForm = () => {
    return (
        <div className=" mx-[4rem] pt-[4.5rem] mb-[8.75rem]">
                {/* ***************************************** */}

                <div className=" text-[3.00rem]"> Write to us! </div>
                {/* ****************************************** */}
                <div className=" mt-[4.063rem] grid  grid-cols-1 md:grid-cols-12">
            {/* ******************************* input */}
            <div className=" md:col-span-5">
                <div className=" space-y-[1.5rem]">
                <div> 
                <div  className="text-[1.25rem]">Your Name</div>
                <input className=" w-[42.63em] h-[4.00em] bg-[#D9D9D9] pl-[2rem] " type="text" />
                </div>  
        {/* *********************************** */}
        <div> 
                <div  className="text-[1.25rem]">Email</div>
                <input className=" w-[42.63em] h-[4.00em] bg-[#D9D9D9] pl-[2rem] " type="email" />
                </div> 
                {/* **************************************** */}
                <div> 
                <div  className="text-[1.25rem]">Your Query</div>
                <textarea className=" w-[42.63em] h-[13.75em] bg-[#D9D9D9] pl-[2rem] pt-[2rem] " type="text" />
                </div> 
                </div>

                <div><button className="px-[3.00rem] py-[1.50rem] bg-[#132939] text-white rounded-[0.25rem] mt-[2.938rem] text-[1.50rem]">Submit </button></div>



            </div>
            {/* ******************************* */}
            <div  className=" md:col-span-7 items-center">
                {/* ******************* */}
            <div className="md:pl-[5.063rem] flex  flex-col md:flex-row justify-between mt-[3rem] md:mt-0 ">
                <div className=" p-[2rem] bg-[#F4F4F4] shadow-xl  rounded-[0.75rem]"> 
            <div className=" text-[2.5rem] font-medium">Office Address</div>
            <div className=" text-[1.20rem] mt-[2rem] list-none">
                <li>Lorem ipsum dolor sit amet, </li>
                <li > consectetur adipiscing elit. Ut et </li>
                <li> massa mi. Aliquam in hendrerit .</li>
            </div>
            </div>
                {/* *********************** */}
                <div className=" mt-[3rem] md:mt-0 rounded-[0.75rem] p-[2rem] bg-[#F4F4F4] shadow-xl  md:ml-[4.688rem]"> 
            <div className=" text-[2.5rem] font-medium">Reach Us at</div>
            <div className=" text-[1.20rem] mt-[2rem] list-none">
                <li>Lorem ipsum dolor sit amet, </li>
                <li > consectetur adipiscing elit. Ut et </li>
                <li> massa mi. Aliquam in hendrerit urna.</li>
            </div>
            </div>

            </div>

            </div>

                </div>

        </div>
    );
}

export default ContactForm;
