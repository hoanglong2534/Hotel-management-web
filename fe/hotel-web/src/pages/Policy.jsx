import Footer from "../components/Footer"
import Header from "../components/Header"
import Welcome from "../components/Policy/Welcome"
import Content from "../components/Policy/Content"

function Policy() {
  return (

    <>
      <div className="sticky top-0 z-100"><Header /></div>
      <Welcome/>
      <Content/>
      <Footer />
    </>
  )
}

export default Policy