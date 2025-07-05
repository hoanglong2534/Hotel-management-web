import { Row, Col, Button } from 'antd'
import { IoMdTime } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function NewsSummary() {

  const img1 = "bg-[url('/news-summary/1.jpg')]"
  const img2 = "bg-[url('/news-summary/2.jpg')]"
  const img3 = "bg-[url('/news-summary/3.jpg')]"
  const img4 = "bg-[url('/news-summary/4.avif')]"
  const img5 = "bg-[url('/news-summary/5.jpg')]"
  const imgClass = "w-full h-[450px] bg-center bg-cover relative"
  const overlayBG = <div className='absolute inset-0 group-hover:!bg-black/40 !bg-black/20 transition-all duration-200'></div>
  const type = "bg-[#E7BE95] absolute !text-white !p-2 text-base top-60 left-5 font-semibold"
  const title = "absolute !text-white lg:text-5xl top-72 left-5 text-4xl"
  const icon = "absolute top-88 !text-white text-xl left-5"
  const time = "absolute top-87 !text-white text-xl left-12"
  const navLink = "absolute text-base font-bold left-5 top-100 !text-white hidden group-hover:inline hover:!text-[#E7BE95] transition-all duration-200"

  return <>
    <div className='!pb-15'>
      <div className="text-center !my-10">
        <b className="text-[#E7BE95] font-semibold uppercase tracking-wide">CÓ GÌ MỚI?</b>
        <h1 className="text-2xl md:text-3xl my-1 font-serif font-bold leading-tight text-black">
          TIN TỨC NỔI BẬT
        </h1>
      </div>

      <div className='!px-40 w-full'>
        <Row gutter={[24, 24]} className='!pb-2'>
          <Col span={24} lg={8} >
            <div className={`${img1} ${imgClass} relative group `}>
              {overlayBG}
              <p className={type}>Du lịch</p>
              <p className={title}>Phú Quốc</p>
              <IoMdTime className={icon} />
              <p className={time}>10 - 07 - 2025</p>
              <NavLink to="/news" className={navLink}>Xem ngay</NavLink>
            </div>


          </Col>
          <Col span={24} lg={8} >
            <div className={`${img2} ${imgClass} relative group `}>
              {overlayBG}
              <p className={type}>Sự kiện</p>
              <p className={title}>Tam Đảo</p>
              <IoMdTime className={icon} />
              <p className={time}>12 - 07 - 2025</p>
              <NavLink to="/news" className={navLink}>Xem ngay</NavLink>
            </div>
          </Col>
          <Col span={24} lg={8} >
            <div className={`${img3} ${imgClass} relative group `}>
              {overlayBG}
              <p className={type}>Cắm trại</p>
              <p className={title}>Mộc Châu</p>
              <IoMdTime className={icon} />
              <p className={time}>13 - 07 - 2025</p>
              <NavLink to="/news" className={navLink}>Xem ngay</NavLink>
            </div>
          </Col>

        </Row>

        <Row gutter={[24, 24]} className='!pt-2'>
          <Col span={24} lg={16} >
            <div className={`${img4} ${imgClass} relative group `}>
              {overlayBG}
              <p className={type}>Sự kiện</p>
              <p className={title}>Hải Phòng</p>
              <IoMdTime className={icon} />
              <p className={time}>20 - 07 - 2025</p>
              <NavLink to="/news" className={navLink}>Xem ngay</NavLink>
            </div>
          </Col>
          <Col span={24} lg={8} >
            <div className={`${img5} ${imgClass} relative group `}>
              {overlayBG}
              <p className={type}>Du lịch</p>
              <p className={title}>Sầm Sơn</p>
              <IoMdTime className={icon} />
              <p className={time}>25 - 07 - 2025</p>
              <NavLink to="/news" className={navLink}>Xem ngay</NavLink>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </>
}

export default NewsSummary