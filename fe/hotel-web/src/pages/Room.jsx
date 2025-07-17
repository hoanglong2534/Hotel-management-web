import Header from "../components/Header"
import Footer from "../components/Footer"
import Welcome from "../components/Room/Welcome"
import RoomList from "../components/Room/RoomList"
function Room() {
  return (
    <>
      <div className="sticky top-0 z-100"><Header /></div>
      <Welcome />
      <RoomList />
      <Footer />
    </>
  )
}
export default Room