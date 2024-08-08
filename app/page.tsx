"use client"
import About from "./_components/About";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import HorizontalScroll from "./_components/HorizontalScroll";
import Process from "./_components/Process";
import Projects from "./_components/Projects";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main >
      <Hero/> 
      <About/> 
      <Projects/>
      <HorizontalScroll/>
      <Process/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
