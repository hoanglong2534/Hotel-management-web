import Header from "../components/Header"
import Footer from "../components/Footer"
import Content from "../components/NewsDetail/Content"
import Welcome from "../components/Service/Welcome"
function ServiceDetail(){
    return (
        <>
        <div className="sticky top-0 z-100"><Header/></div>
        <Welcome/>
        <Content/>
        <Footer/>
        </>
    )
}
export default ServiceDetail