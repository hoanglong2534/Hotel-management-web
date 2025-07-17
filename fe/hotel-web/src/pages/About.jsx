import Welcome from "../components/About/Welcome"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Service from "../components/About/Service"
import Discover from "../components/About/Discover"
import Gallery from "../components/About/Gallery"

function About() {
  return (
    <>
      <div className="sticky top-0 z-100"><Header/></div>
      <Welcome/>
      <Service/>
      <Discover/>
      <Gallery/>
      <Footer/>
    </>
  )
}
export default About