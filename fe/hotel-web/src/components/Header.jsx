import { Col, Row, Dropdown, Drawer } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserLarge } from "react-icons/fa6";




function Header() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const linkClass = "font-semibold no-underline !text-black border-b-2 border-transparent hover:border-[#E7BE95] transition-colors duration-200";
  const liClass = "h-full flex items-center";
  const activeClass = "!border-[#E7BE95]";
  const isLoggedIn = true;
  const username = "Hoàng Long";


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: '1',
      label: (
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? `${linkClass} ${activeClass}` : linkClass
          }
          }
        >Trang chủ
        </NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink to="/about"
          className={({ isActive }) => {
            return isActive ? `${linkClass} ${activeClass}` : linkClass
          }}>Về chúng tôi
        </NavLink>
      ),
    },
    {
      key: '3',
      label: (
        <NavLink to="/room" className={({ isActive }) => {
          return isActive ? `${linkClass} ${activeClass}` : linkClass
        }}>Phòng</NavLink>
      ),
    },
    {
      key: '4',
      label: (
        <NavLink to="service" className={({ isActive }) => {
          return isActive ? `${linkClass} ${activeClass}` : linkClass
        }}>Dịch vụ</NavLink>
      ),
    },
    {
      key: '5',
      label: (
        <NavLink to="/news" className={({ isActive }) => {
          return isActive ? `${linkClass} ${activeClass}` : linkClass
        }}>Tin tức</NavLink>
      ),
    },
    {
      key: '6',
      label: (
        <NavLink to="/contact" className={({ isActive }) => {
          return isActive ? `${linkClass} ${activeClass}` : linkClass
        }}  >Liên hệ</NavLink>
      ),
    },

  ]
  return (
    <>
      <Row className="bg-white h-16 items-center !pl-10 border-b border-gray-300">
        <Col className="flex items-center hover:!text-[#E7BE95]" span={10}>
          <NavLink to="/" className="text-3xl font-bold group">
            <span className="text-black group-hover:!text-[#E7BE95] transition-colors duration-200">HOLO</span>
            <span className="!text-[#E7BE95] group-hover:!text-black transition-colors duration-200">.</span>
          </NavLink>
        </Col>

        <Col span={12} md={10} sm={5} xs={3} className="h-full flex">

          <ul className="hidden lg:flex gap-7 m-0 p-0 list-none h-full items-center">
            <li className={liClass}>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? `${linkClass} ${activeClass}` : linkClass
                }
                }
              >Trang chủ
              </NavLink>
            </li>

            <li className={liClass}>
              <NavLink to="/about"
                className={({ isActive }) => {
                  return isActive ? `${linkClass} ${activeClass}` : linkClass
                }}>Về chúng tôi
              </NavLink>
            </li>

            <li className={liClass}>
              <NavLink to="/room" className={({ isActive }) => {
                return isActive ? `${linkClass} ${activeClass}` : linkClass
              }}>Phòng</NavLink>
            </li>

            <li className={liClass}>
              <NavLink to="service" className={({ isActive }) => {
                return isActive ? `${linkClass} ${activeClass}` : linkClass
              }}>Dịch vụ</NavLink>
            </li>

            <li className={liClass}>
              <NavLink to="/news" className={({ isActive }) => {
                return isActive ? `${linkClass} ${activeClass}` : linkClass
              }}>Tin tức</NavLink>
            </li>

            <li className={liClass}>
              <NavLink to="/contact" className={({ isActive }) => {
                return isActive ? `${linkClass} ${activeClass}` : linkClass
              }}  >Liên hệ</NavLink>
            </li>
          </ul>
        </Col>

        <Col span={2} md={4} sm={9} xs={11}>
          <div className='flex gap-4 text-2xl justify-center '>

            <Dropdown menu={{ items }} arrow>
              <button className="lg:hidden cursor-pointer hover:!text-[#E7BE95]">
                <GiHamburgerMenu />
              </button>
            </Dropdown>

            <button className="lg:hidden cursor-pointer hover:!text-[#E7BE95]" onClick={showDrawer}>
              <FaUserLarge />
            </button>

          </div>

          <NavLink to="/login" className={({ isActive }) => {
            return isActive ? `${linkClass} ${activeClass} hidden lg:inline-block` : `hidden lg:inline-block ${linkClass}`
          }}>

            Đăng nhập
          </NavLink>
        </Col>
      </Row>

      <Drawer
        title={`Xin chào, ${isLoggedIn ? username : "Khách"}`}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {isLoggedIn ? (
          <>
            <div className='flex gap-10'>
              <NavLink to="/profile" onClick={onClose} className={({ isActive }) => {
                return isActive ? `${linkClass} ${activeClass}` : linkClass
              }}>Hồ sơ của bạn</NavLink>
              <NavLink to="/bookings" onClick={onClose} className={({ isActive }) => {
                return isActive ? `${linkClass} ${activeClass}` : linkClass
              }}>Đặt phòng</NavLink>
              <button onClick={() => { }} className="mt-2 text-red-500">Đăng xuất</button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-2">Bạn chưa đăng nhập. Đăng ký nếu chưa có tài khoản nhé!</p>
            <div className='flex gap-10'>
              <NavLink to="/login" onClick={onClose} className={({ isActive }) => {
                return isActive ? `${linkClass} ${activeClass}` : linkClass
              }}>Đăng nhập</NavLink>

              <NavLink to="/register" onClick={onClose} className={({ isActive }) => {
                return isActive ? `${linkClass} ${activeClass}` : linkClass
              }}>Đăng ký</NavLink>
            </div>
          </>
        )}
      </Drawer>
    </>
  )
}

export default Header