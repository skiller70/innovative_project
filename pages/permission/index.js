import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import Services from "../../components/Services";
import Contactus from "../../components/Contactus";
import Footer from "../../components/Footer";
import ServiceContent from "../../components/ServiceContent";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero
        service={true}
        img="main_hero.jpg"
        title={{ title1: "OUR", title2: "SERVICES" }}
      />
      <PageHeader title={{title1:"Permissions"}} />

      <ServiceContent
        content={{
          content1:
            "People bring the energy that drives every operation. Our workforce and supervised services ensure you have access to the right people, with the right competencies, precisely when you need them.",

          content2:
            "Our global pool of high quality, ready-to-mobilise  experts includes professionals from all major disciplines: electrical, mechanical, rotating equipment, control and instrumentation, process, operations and maintenance, reliability, verification and marine.",

          content3:
            "Enhance the performance of your assets, improve productivity, and reduce costs with the skilled labour, experience supervision and direct management we can provide.",
          contentHead: "Right place right time",
          content4:
            "All of our personnel are deployed through our 24/7 Delivery and Technical Hub. The hub enables us to manage fluctuating requirements in a flexible, cost effective way.",
          content5:
            "For you, it means that as well as having a dedicated capability, you can tap into logistics, recruitment and competence management resources on an as-needed basis, keeping your overheads low.",
        }}
        img="labour.jpg"
      />

      <Services
        img={{
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
        services={{ otherServices: true, title1: "OTHER", title2: "SERVICES" }}
      />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Index;
