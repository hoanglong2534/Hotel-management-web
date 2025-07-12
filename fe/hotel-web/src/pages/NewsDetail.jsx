import Footer from "../components/Footer"
import Header from "../components/Header"
import Content from "../components/NewsDetail/Content.jsx"
import Welcome from "../components/News/Welcome.jsx"

function NewsDetail() {
  return (
    <>
      <Header />
      <Welcome/>
      <Content/>
      <Footer />
    </>
  )
}
export default NewsDetail