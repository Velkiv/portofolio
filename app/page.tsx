import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="overscroll-contain">
      <Navbar/>
      <div className="overscroll-hidden">
        <Hero/>
        <About/>
        <Footer/>
      </div>
      
      
    </main>
    
    
    
  );
}
