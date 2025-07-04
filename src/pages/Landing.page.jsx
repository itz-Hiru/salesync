import Footer from "../components/Footer/Footer.component";
import Navbar from "../components/Navbar/Navbar.component";
import Benefits from "../sections/Benefits/Benefits.section";
import Blogs from "../sections/Blogs/Blogs.section";
import Features from "../sections/Features/Features.section";
import AnimatedLogo from "../sections/Hero/AnimatedLogo.section";
import Hero from "../sections/Hero/Hero.section";
import Process from "../sections/Hero/Process.section";
import Interfaces from "../sections/Interfaces/Interfaces.section";
import Pricing from "../sections/Pricing/Pricing.component";
import Stories from "../sections/Stories/Stories.section";
import Testimonials from "../sections/Testimonials/Testimonials.section";
import UseCases from "../sections/UseCases/UseCases.section";
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
        <Interfaces />
        <Testimonials />
        <Benefits />
        <Stories />
        <Blogs />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
