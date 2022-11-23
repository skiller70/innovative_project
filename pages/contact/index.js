
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
const Index = () => {
    return (
        <div>
                      <Navbar />
      <Hero
        service={true}
        img="main_hero.jpg"
        heroTitle={{ heroTitle1: "CONTACT", heroTitle2: "US" }}
      />
        <ContactForm/>
    <Footer/>
    
        </div>
    );
}

export default Index;
