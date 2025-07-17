import Footer from "../components/Footer"
import Header from "../components/Header"
import NewsSummary from "../components/Home/NewsSummary"
import Welcome from "../components/News/Welcome"
function News() {
  return (
    <>
      <div className="sticky top-0 z-100"><Header /></div>
      <Welcome />
      <NewsSummary className="!pb-15:hidden" />
      <Footer />
    </>
  )
}
export default News