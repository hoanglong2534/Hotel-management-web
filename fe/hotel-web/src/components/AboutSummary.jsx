import { Row, Col, Button } from 'antd'
import { NavLink } from 'react-router-dom'


function AboutSummary() {
    return (
        <>
            <Row className='items-center !py-10' >
                <Col md={14} xs={24} className='text-center'>
                    <b className='!text-[#E7BE95] font-semibold '>VỀ CHÚNG TÔI</b>
                    <h1 className="text-2xl md:text-5xl !my-1 font-serif font-bold leading-tight text-black">HOLO Hotel</h1>
                    <p>Tọa lạc giữa lòng thành phố, HOLO mang đến không gian lưu trú hiện đại, tiện nghi và ấm cúng.</p>
                    <p>Dù là chuyến đi nghỉ dưỡng hay công tác, HOLO luôn là nơi bạn muốn trở về.</p>
                    <NavLink to="/about">
                        <Button variant="filled" className='!bg-[#E7BE95] scale-110 hover:!bg-[#d6a96c] hover:!text-white hover:!border-white transition-all duration-300'>
                            Đọc thêm
                        </Button>
                    </NavLink>
                </Col>

                <Col xs={24} md={10}>
                    <div className='flex justify-center md:justify-end gap-6 !my-5 lg:!pr-15'>
                        <div className="bg-[url('/about-summary/img1.png')] bg-cover w-[200px] h-[250px] hover:scale-95 transition-all duration-300 "></div>
                        <div className="bg-[url('/about-summary/img2.png')] bg-cover w-[200px] h-[250px] hover:scale-95 transition-all duration-300 "></div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default AboutSummary