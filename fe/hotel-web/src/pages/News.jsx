import Footer from "../components/Footer"
import Header from "../components/Header"
import NewsSummary from "../components/Home/NewsSummary"
import Welcome from "../components/News/Welcome"
function News() {
  return (
    <>
      <Header/>
      <Welcome/>
      <NewsSummary className="!pb-15:hidden" />
      <Footer/> 
    </>
  )
}
export default News