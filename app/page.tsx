import Image from "next/image";
 import Header from "./components/header";
import Feature from "./components/Feature";
import CTA from "./components/CTA";
import Bento from "./components/Bento";
import Pricing from "./components/Pricing";
import Header1 from "./components/Header1";
import Newsletter from "./components/Newsletter";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Content from "./components/Content";
import Logo from "./components/Logo";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex bg flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Header/>
        <Feature/> 
        <CTA/>
        <Bento/>
        <Pricing/>
        <Header1/>
        <Newsletter/>
        <Stats/>
        <Testimonials/>
        <Blog/>
        <Contact/>
        <Team/>
        <Content/>
        <Logo/>
       </main>
      
    </div>
  );
}
