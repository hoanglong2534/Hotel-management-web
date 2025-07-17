import Header from "../components/Header"
import Footer from "../components/Footer"
import Welcome from "../components/Service/Welcome"
import ServiceSummary from "../components/Home/ServiceSummary"
function Service(){
    return (
        <>
        <div className="sticky top-0 z-100"><Header/></div>
        <Welcome/>
        <ServiceSummary/>
        <Footer/>
        </>
    )
}
export default Service