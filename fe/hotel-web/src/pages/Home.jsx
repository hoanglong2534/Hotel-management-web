import AboutSummary from "../components/Home/AboutSummary";
import BookingForm from "../components/Home/BookingForm";
import CustomerReview from "../components/Home/CustomerReview";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import NewsSummary from "../components/Home/NewsSummary";
import RoomSummary from "../components/Home/RoomSummary";
import ServiceSummary from "../components/Home/ServiceSummary";
import Footer from "../components/Footer";
function Home(){
    return (
        <>
        <div className="sticky top-0 z-100"><Header/></div>
        <Hero/>
        <div className="lg:hidden w-full flex justify-center !my-10  md:scale-110 "><BookingForm/></div>
        <AboutSummary/>
        <ServiceSummary/>
        <RoomSummary/>
        <CustomerReview/>
        <NewsSummary/>  
        <Footer/>
        </>
    )
}
export default Home;