import { Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="h-full bg-[#222736] !p-20 ">
        <div>
          <Row gutter={[24,24]}>
            <Col span={24} md={8}>
              <div>
                <NavLink to="/" className="text-3xl font-bold group">
                  <span className="text-white group-hover:!text-[#E7BE95] transition-colors duration-200">HOLO</span>
                  <span className="!text-[#E7BE95] group-hover:!text-white transition-colors duration-200">.</span>
                </NavLink>
              </div>
              <p className='!text-gray-200  text-base'>Chúng tôi truyền cảm hứng và tiếp cận hàng triệu du khách trên thế giới</p>

              <div className='text-3xl flex gap-1   '>
                <FaSquareFacebook className="text-white hover:!text-[#E7BE95] hover:scale-110 transition-all duration-200" />
                <FaSquareTwitter className="text-white hover:!text-[#E7BE95] hover:scale-110  transition-all duration-200" />
                <FaSquareInstagram className="text-white hover:!text-[#E7BE95] hover:scale-110  transition-all duration-200" />
              </div>
            </Col>

            <Col span={24} md={8} className='md:text-center'>
              <b className="text-[#E7BE95] font-semibold uppercase tracking-wide ">Liên hệ</b>
              <p className='!text-gray-200  text-base !m-0'>(+84) 912 345 678</p>
              <p className='!text-gray-200  text-base !m-0'>info@holohotel.vn</p>
              <p className='!text-gray-200  text-base'>68 Tràng Thi, Quận Hoàn Kiếm, Hà Nội</p>
            </Col>

            <Col span={24} md={8} className='md:text-center'>
              <b className="text-[#E7BE95] font-semibold uppercase tracking-wide ">Mới nhất</b>
              <p className='!text-gray-200  text-base !m-0'>Nhận thông tin cập nhật và ưu đãi mới nhất.</p>
              <div>
                <div className='flex lg:!px-10 '>
                  <input placeholder='Nhập email của bạn' className="!border-black !bg-white w-full h-10 !px-2" />
                  <button className='!bg-[#E7BE95] !px-3 hover:scale-105' ><span className="font-bold">Gửi</span></button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className='bg-[#1E2331]  h-full text-gray-200 font-semibold !pt-5 !px-20 transition-all duration-200'> 
        <Row>
          <Col span={24} lg={12}>
            <div className='flex lg:gap-10 md:gap-2 gap-10 w-full md:justify-center'>
              <NavLink to="/contact" className="hover:!text-[#E7BE95]"><p>Liên hệ</p></NavLink>
              <NavLink to="" className="hover:!text-[#E7BE95]"><p>Điều khoản sử dụng</p></NavLink>
              <NavLink to="" className="hover:!text-[#E7BE95]"><p>Chính sách</p></NavLink>
              <NavLink to="" className="hover:!text-[#E7BE95]"><p>Chính sách môi trường</p></NavLink>
            </div>
          </Col>

          <Col span={24} lg={12}>
            <div className="flex lg:!px-35 md:!px-18 !px-30 gap-1 w-full md:justify-center">
              <FaRegCopyright className='text-xl !text-[#E7BE95] hover:!text-white' />
              <p>2025 Bản quyền thuộc về <span className="hover:!text-[#E7BE95] transition-all duration-200">Hoang Long</span></p> 
            </div>
          </Col>
        </Row>
      </div>

    </>
  )
}
export default Footer