import Header from "../components/Header"
import Footer from "../components/Footer"
import FaqContent from "../components/FAQ/faqContent"
import Welcome from "../components/FAQ/Welcome"

function FAQ() {
    return (
        <>
            <div className="sticky top-0 z-100"><Header /></div>
            <Welcome/>
            <FaqContent/>
            <Footer />
        </>

    )
}
export default FAQ