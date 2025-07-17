import Footer from "../components/Footer"
import Header from "../components/Header"
import Content from "../components/NewsDetail/Content.jsx"
import Welcome from "../components/News/Welcome.jsx"

function NewsDetail() {
  return (
    <>
      <div className="sticky top-0 z-100"><Header /></div>
      <Welcome />
      <Content />
      <Footer />
    </>
  )
}
export default NewsDetail