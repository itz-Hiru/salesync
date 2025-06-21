import Navbar from '../components/Navbar/Navbar.component'
import Footer from '../components/Footer/Footer.component'
import Hero from '../sections/Hero/Hero.section'
import Features from '../sections/Features/Features.section'
import UseCases from '../sections/UseCases/UseCases.section'
import Pricing from '../sections/Pricing/Pricing.component'
import Stories from '../sections/Stories/Stories.section'
import Blogs from '../sections/Blogs/Blogs.section'
import Contact from '../sections/Contact/Contact.section'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-24">
        <Hero />
        <Features />
        <UseCases />
        <Pricing />
        <Stories />
        <Blogs />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Landing