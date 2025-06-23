import Navbar from "../components/Navbar/Navbar.component";
import Footer from "../components/Footer/Footer.component";
import Hero from "../sections/Hero/Hero.section";
import Features from "../sections/Features/Features.section";
import UseCases from "../sections/UseCases/UseCases.section";
import Pricing from "../sections/Pricing/Pricing.component";
import Stories from "../sections/Stories/Stories.section";
import Blogs from "../sections/Blogs/Blogs.section";
import Contact from "../sections/Contact/Contact.section";
import AnimatedLogo from "../sections/Hero/AnimatedLogo.section";
import Process from "../sections/Hero/Process.section";
import WorkFlow from "../sections/WorkFlow/WorkFlow.section";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-22 md:mt-26 p-5 md:p-0">
        <Hero />
        <AnimatedLogo />
        <Process />
        <Features />
        <UseCases />
        <Pricing />
        <WorkFlow />
        <Stories />
        <Blogs />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
