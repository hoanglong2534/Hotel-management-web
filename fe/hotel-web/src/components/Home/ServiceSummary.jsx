import { Row, Col } from 'antd'
import { PiMapPinAreaBold, PiBabyCarriageFill, PiWineFill } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { FaCarRear } from "react-icons/fa6";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const iconClass = "text-[#E7BE95] text-4xl group-hover:text-white";
const divIconClass = "flex justify-center";
const titleClass = "text-2xl !my-1 text-black";
const navLinkClass = 'group hover:!text-black hover:!bg-[#E7BE95] inline-block !px-4 !m-3'

function ServiceSummary() {
  return (
    <>
      <div className='text-center !my-10 border-t-1 !mt-5 !pt-10 border-gray-200'>
        <b className='!text-[#E7BE95] font-semibold'>CHÚNG TÔI CÓ GÌ?</b>
        <h1 className="text-2xl md:text-3xl !my-1 font-serif font-bold leading-tight text-black">KHÁM PHÁ CÁC DỊCH VỤ CỦA CHÚNG TÔI</h1>
      </div>

      <div>
        <Row className='text-center md:!px-40 !mb-10' >
          <Col span={24} md={12} lg={8}>
            <NavLink to="/service" className={navLinkClass}>
              <div className={divIconClass}><PiMapPinAreaBold className={iconClass} /></div>
              <h3 className={titleClass}>Lên kế hoạch du lịch</h3>
              <p>Chúng tôi giúp bạn lên lịch trình và địa điểm du lịch phù hợp với sở thích và ngân sách của bạn.</p>
            </NavLink>
          </Col>

          <Col span={24} md={12}  lg={8}>
            <NavLink to="/service" className={navLinkClass}>
              <div className={divIconClass}><GiHotMeal className={iconClass} /></div>
              <h3 className={titleClass}> Dịch vụ ăn uống tại phòng</h3>
              <p>Thưởng thức các bữa ăn ngon miệng được phục vụ tận phòng – tiện lợi, chất lượng và phong cách.</p>
            </NavLink>
          </Col >

          <Col span={24} md={12}  lg={8}>
            <NavLink to="/service" className={navLinkClass}>
              <div className={divIconClass}><FaCarRear className={iconClass} /></div>
              <h3 className={titleClass}>Thuê tài xế riêng</h3>
              <p>Dễ dàng di chuyển với tài xế riêng – chuyên nghiệp, đúng giờ và linh hoạt theo nhu cầu.</p>
            </NavLink>
          </Col>

          <Col span={24} md={12}  lg={8}>
            <NavLink to="/service" className={navLinkClass}>
              <div className={divIconClass}><PiBabyCarriageFill className={iconClass} /></div>
              <h3 className={titleClass}>Giữ trẻ</h3>
              <p>Đội ngũ chăm sóc trẻ nhỏ thân thiện và giàu kinh nghiệm, đảm bảo an toàn tuyệt đối cho bé.</p>
            </NavLink>
          </Col>

          <Col span={24} md={12}  lg={8}>
            <NavLink to="/service" className={navLinkClass}>
              <div className={divIconClass}><PiWineFill className={iconClass} /></div>
              <h3 className={titleClass}>Quầy bar & Đồ uống</h3>
              <p>Thư giãn với các loại cocktail đặc biệt và đồ uống cao cấp tại quầy bar hoặc ngay tại phòng.</p>
            </NavLink>
          </Col >

          <Col span={24} md={12}  lg={8}>
            <NavLink to="/service" className={navLinkClass}>
              <div className={divIconClass}><MdOutlineLocalLaundryService className={iconClass} /></div>
              <h3 className={titleClass}  >Giặt ủi</h3>
              <p>Dịch vụ giặt ủi nhanh chóng, sạch sẽ – trả lại cho bạn quần áo thơm tho và chỉn chu mỗi ngày.</p>
            </NavLink>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default ServiceSummary