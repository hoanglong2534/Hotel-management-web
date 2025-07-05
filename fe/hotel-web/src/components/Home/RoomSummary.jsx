import { Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'

const imgLink1 = "bg-[url('/room-summary/double-room.jpg')]"
const imgLink2 = "bg-[url('/room-summary/deluxe-room.jpg')]"
const imgLink3 = "bg-[url('/room-summary/king-room.jpg')]"
const imgLink4 = "bg-[url('/room-summary/family-room.jpg')]"
const imgClass = "bg-cover bg-center w-full h-[450px] relative overflow-hidden"
const divImgClass = "!px-10 !my-5 sm:!px-2 group"
const overlayBG = <div className='absolute inset-0 group-hover:!bg-black/40 !bg-black/20 transition-all duration-200'></div>

const titleClass = 'text-3xl !px-4 text-white absolute bottom-20 group-hover:bottom-60 transition-all duration-200'
const priceClass = 'text-3xl !px-4 text-white absolute bottom-10 group-hover:bottom-50 transition-all duration-200'

const descriptionClass = "absolute top-120 font-semibold text-[14px] !px-4 text-white group-hover:top-65 transition-all duration-200"
const buttonClass = "absolute top-120 font-semibold text-[14px] !px-4 !text-white group-hover:top-95 hover:!text-[#E7BE95] transition-all duration-200"

const desc = (roomType,roomPrice, area, capacity, service)=> (<div>
  <h1 className={titleClass}>{roomType}</h1>
  <h1 className={priceClass}><span className='!text-[#E7BE95] text-4xl'>{roomPrice}M</span>/Đêm</h1>

  <div className={`flex gap-5 ${descriptionClass}`}>
    <div>
      <p>Diện tích:</p>
      <p>Sức chứa tối đa:</p>
      <p>Dịch vụ:</p>
    </div>

    <div>
      <p>{area}m²</p>
      <p>{capacity} người</p>
      <p>{service}</p>
    </div>


  </div>

  <NavLink to="/room" className={buttonClass}>Xem chi tiết</NavLink>

</div>)

function RoomSummary() {
  return (
    <>
      <div>
        <Row>
          <Col span={24} sm={12} md={6} className={divImgClass}>
            <div className={`${imgLink1} ${imgClass}`}>
              {overlayBG}
              {desc("Phòng Đôi", 2, 40, 2, "Wifi, TV, Nóng lạnh")}

            </div>


          </Col>

          <Col span={24} sm={12} md={6} className={divImgClass}>
            <div className={`${imgLink2} ${imgClass}`}>
              {overlayBG}
              {desc("Phòng Cao cấp", 3, 55 , 4, "Wifi, TV, Nóng lạnh, Giặt ủi")}
            </div>
          </Col>

          <Col span={24} sm={12} md={6} className={divImgClass}>
            <div className={`${imgLink3} ${imgClass}`}>
              {overlayBG}
              {desc("Phòng Giường King", 3.5, 55, 3, "Wifi, TV, Nóng lạnh, Giặt ủi")}
            </div>
          </Col>
          <Col span={24} sm={12} md={6} className={divImgClass}>
            <div className={`${imgLink4} ${imgClass}`}>
              {overlayBG}
              {desc("Phòng Gia đình", 4, 65, 5, "Wifi, TV, Nóng lạnh, Giặt ủi")}
            </div>
          </Col>

        </Row>
      </div>
    </>
  )
}
export default RoomSummary