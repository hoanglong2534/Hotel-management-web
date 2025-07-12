import Welcome from "../components/About/Welcome"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Service from "../components/About/Service"
import Discover from "../components/About/Discover"
import Gallery from "../components/About/Gallery"

function About() {
  return (
    <>
      <Header/>
      <Welcome/>
      <Service/>
      <Discover/>
      <Gallery/>
      <Footer/>
    </>
  )
}
export default About