import AllServices from "../../components/AllServices";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import Services from "../../components/Services";

const Index = () => {
    return (
        <div>
           <Navbar/>
           <Hero
        service={true}
        img="main_hero.jpg"
        heroTitle={{ heroTitle1: "OUR", heroTitle2: "SERVICES" }}
      />
      <PageHeader pageTitle={<div className=" list-none "> <li className="text-[3.50rem] ml-[4rem]  "> Comfort is our <span className=" text-[#5095E5]">Top Priority  </span> for you</li> <li className=" text-[1.50rem] mx-[4rem]  font-medium">We provide services for industries to buy / rent land or plots across Maharashtra & Gujarat not only land but other services as well.</li></div>} />

     
        <AllServices img={{
          service1: "service1.jpg",
          iTitle1: "Plots / Land for Industries",
          service2: "service2.jpg",
          iTitle2: (
            <div className=" list-none">
              <li>Construction</li>{" "}
              <li className="text-[1.07rem]">
                (Industrial Setup / Infrastructure Setup)
              </li>
            </div>
          ),
          service3: "service3.jpg",
          iTitle3: "Permissions",
          service4: "service4.jpg",
          iTitle4: "Liaising",
        }}
        services={{ otherServices: true, serviceTitle1: "OTHER", serviceTitle1: "SERVICES" }}    />
           <Footer/> 
        </div>
    );
}

export default Index;
