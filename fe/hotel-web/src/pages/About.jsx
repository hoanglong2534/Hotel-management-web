import Welcome from "../components/About/Welcome"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Service from "../components/About/Service"
import Discover from "../components/About/Discover"

function About() {
  return (
    <>
      <Header/>
      <Welcome/>
      <Service/>
      <Discover/>
      <Footer/>
    </>
  )
}
export default About