import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/Term/Welcome";
import Content from "../components/Term/Content";
function Term() {
  return (
    <>
      <div className="sticky top-0 z-100"><Header /></div>
      <Welcome/>
      <Content/>
      <Footer/>
    </>
  )
}

export default Term