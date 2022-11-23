import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/Contactus";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import OurClient from "../components/OurClient";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        img="main_hero.jpg"
        heroTitle={{ heroTitle1: "OUR", heroTitle2: "SERVICES" }}
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
        services={{
          otherServices: false,
          serviceTitle1: "OUR",
          serviceTitle2: "SERVICES",
        }}
      />
      <MainContent />
      <OurClient/>
      <ContactUs />
      <Footer />
    </div>
  );
}
