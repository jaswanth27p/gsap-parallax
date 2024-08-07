"use client"
import About from "./_components/About";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Process from "./_components/Process";
import Projects from "./_components/Projects";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main >
      <Hero/> 
      <About/> 
      <Projects/>
      <Process/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
