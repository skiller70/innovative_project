
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero";
import AboutHeader from "../../components/AboutHeader";
import AboutContent from "../../components/AboutContent";
import AboutTeam from "../../components/AboutTeam";
const Index = () => {
    return (
        <div>
            <Navbar/>
            <Hero
        service={true}
        img="main_hero.jpg"
        heroTitle={{ heroTitle1: "ABOUT", heroTitle2: "US" }}
      />

      <AboutHeader/>
      <AboutContent/>
      <AboutTeam/>
        </div>
    );
}

export default Index;
