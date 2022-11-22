import Head from 'next/head'
import Image from 'next/image'
import ContactUs from '../components/Contactus'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  

  return (
    <div >
      <Navbar/>
      <Hero img="main_hero.jpg"/>
      <Services img={{service1:"service1.jpg",service2:"service2.jpg",service3:"service3.jpg",service4:"service4.jpg"}}  services={{ otherServices: true, serviceTitle1: "OTHER", serviceTitle1: "SERVICES" }} />
      
      <ContactUs/>
      <Footer/>
    </div>
  )
}
