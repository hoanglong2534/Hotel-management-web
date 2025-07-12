import Header from "../components/Header"
import Footer from "../components/Footer"
import Welcome from "../components/Room/Welcome"
import { RoomInfo } from "../components/RoomDetail/RoomInfo"
import BookingForm from "../components/Home/BookingForm"
import { Row, Col } from 'antd'
export function RoomDetail() {
    return (
        <>
            <Header />
            <Welcome />
            <div className="!px-20">
                <Row gutter={[24, 24]} >
                    <Col span={24} lg={18}> <RoomInfo /></Col>
                    <Col span={24} lg={6}><BookingForm className="w-full"/></Col>
                </Row>
            </div>
            <Footer />
        </>
    )
}
