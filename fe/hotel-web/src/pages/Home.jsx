import AboutSummary from "../components/AboutSummary";
import BookingForm from "../components/BookingForm";
import CustomerReview from "../components/CustomerReview";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewsSummary from "../components/NewsSummary";
import RoomSummary from "../components/RoomSummary";
import ServiceSummary from "../components/ServiceSummary";
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
        </>
    )
}
export default Home;